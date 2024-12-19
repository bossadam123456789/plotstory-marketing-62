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

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Plot Information</CardTitle>
        <CardDescription>
          Select a plot to view details
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
            <Button 
              className="w-full bg-forest hover:bg-forest-light"
              onClick={handleInquire}
            >
              Inquire About This Plot
            </Button>
          </div>
        ) : (
          <p className="text-muted-foreground">
            Click on a plot to view its details
          </p>
        )}
      </CardContent>
    </Card>
  );
};