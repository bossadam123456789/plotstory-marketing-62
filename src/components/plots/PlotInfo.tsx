
import { Plot } from "./types";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { Check, ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { useState } from "react";

interface PlotInfoProps {
  selectedPlot: Plot | null;
}

export const PlotInfo = ({ selectedPlot }: PlotInfoProps) => {
  const [checkoutInProgress, setCheckoutInProgress] = useState(false);

  const handleInquire = () => {
    const contactForm = document.querySelector('form');
    if (contactForm) {
      const messageTextarea = contactForm.querySelector('textarea');
      if (messageTextarea) {
        messageTextarea.value = `Hi, I wanted to buy plot number ${selectedPlot?.id}`;
      }
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    if (!selectedPlot) return;

    setCheckoutInProgress(true);
    // Simulate checkout process
    setTimeout(() => {
      toast({
        title: "Plot Reserved!",
        description: `Plot ${selectedPlot.id} has been reserved for you. Our team will contact you shortly.`,
      });
      setCheckoutInProgress(false);
    }, 1500);
  };

  // Calculate available plots (excluding sold ones)
  const availablePlots = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 31].length;

  return (
    <Card className="h-fit shadow-lg border-2 border-forest/10" id="plot-info">
      <CardHeader className="bg-gradient-to-r from-forest/5 to-forest/10">
        <CardTitle className="text-forest">Plot Information</CardTitle>
        <CardDescription>
          {availablePlots} plots still available
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {selectedPlot ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-xl">Plot {selectedPlot.id}</h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedPlot.status === "available" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}>
                {selectedPlot.status.charAt(0).toUpperCase() + selectedPlot.status.slice(1)}
              </span>
            </div>
            <div className="border-b pb-2">
              <p className="text-muted-foreground">
                Size: {selectedPlot.size}
              </p>
              <p className="text-2xl font-bold mt-2 text-forest">
                {selectedPlot.price}
              </p>
              {selectedPlot.isPrime && (
                <p className="text-forest text-sm mt-1 flex items-center">
                  <Check className="h-4 w-4 mr-1" />
                  Premium location along 32m wide road
                </p>
              )}
            </div>
            <div className="bg-sand/30 p-4 rounded-lg space-y-2">
              <h4 className="font-medium text-forest">Why Act Now?</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Prime locations are selling fast</li>
                <li>• Flexible payment plans available</li>
                <li>• Property values increasing in this area</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Click on a plot to view its details
            </p>
            <div className="bg-sand/30 p-4 rounded-lg space-y-2">
              <h4 className="font-medium text-forest">Limited Time Opportunity</h4>
              <p className="text-sm text-muted-foreground">
                Only {availablePlots} plots remaining! Don't miss out on this prime investment opportunity. Select a plot to get started.
              </p>
            </div>
          </div>
        )}
      </CardContent>
      {selectedPlot && selectedPlot.status === "available" && (
        <CardFooter className="flex flex-col space-y-2 pt-0">
          <Button 
            className="w-full bg-forest hover:bg-forest-light text-white"
            onClick={handleCheckout}
            disabled={checkoutInProgress}
          >
            {checkoutInProgress ? (
              <>Processing...</>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-1" />
                Reserve This Plot
              </>
            )}
          </Button>
          <Button 
            variant="outline"
            className="w-full border-forest text-forest hover:bg-forest/5"
            onClick={handleInquire}
          >
            Request More Information
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
