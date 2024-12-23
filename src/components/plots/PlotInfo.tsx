import { Plot } from "./types";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface PlotInfoProps {
  selectedPlot: Plot | null;
}

export const PlotInfo = ({ selectedPlot }: PlotInfoProps) => {
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

  // Calculate available plots (excluding sold ones)
  const availablePlots = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 31].length;

  return (
    <Card className="h-fit" id="plot-info">
      <CardHeader>
        <CardTitle>Plot Information</CardTitle>
        <CardDescription>
          {availablePlots} plots still available
        </CardDescription>
      </CardHeader>
      <CardContent>
        {selectedPlot ? (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Plot {selectedPlot.id}</h3>
              <p className="text-muted-foreground">
                Status: {selectedPlot.status}
              </p>
              <p className="text-muted-foreground">
                Size: {selectedPlot.size}
              </p>
              <p className="text-2xl font-bold mt-2">
                {selectedPlot.price}
              </p>
              {selectedPlot.isPrime && (
                <p className="text-forest text-sm mt-1">
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
            <Button 
              className="w-full bg-forest hover:bg-forest-light"
              onClick={handleInquire}
            >
              Inquire About This Plot
            </Button>
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
    </Card>
  );
};