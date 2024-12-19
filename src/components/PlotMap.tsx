import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Plot {
  id: number;
  status: "available" | "reserved" | "sold";
  size: string;
  price: string;
}

const plots: Plot[] = Array.from({ length: 31 }, (_, i) => ({
  id: i + 1,
  status: "available",
  size: "5400 sq ft",
  price: "$150,000",
}));

const PlotMap = () => {
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);

  const getPlotColor = (status: Plot["status"]) => {
    switch (status) {
      case "available":
        return "#2F5233";
      case "reserved":
        return "#FFA500";
      case "sold":
        return "#FF0000";
      default:
        return "#2F5233";
    }
  };

  return (
    <div id="plots" className="container py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Plot Layout</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <svg
            viewBox="0 0 800 1000"
            className="w-full h-auto"
            style={{ maxHeight: "80vh" }}
          >
            {/* Roads */}
            <text x="350" y="150" className="text-sm">9M WIDE ROAD</text>
            <text x="350" y="400" className="text-sm">9M WIDE ROAD</text>
            <text x="350" y="650" className="text-sm">9M WIDE ROAD</text>
            <text x="350" y="900" className="text-sm">9M WIDE ROAD</text>
            <text x="700" y="500" className="text-sm rotate-90">32M WIDE ROAD</text>

            {/* Plot groups */}
            {[0, 1, 2, 3].map((row) => (
              <g key={row} transform={`translate(0, ${row * 250})`}>
                {[...Array(row === 3 ? 5 : 6)].map((_, col) => {
                  const plotId = row * 6 + col + 1;
                  if (plotId <= 31) {
                    return (
                      <g
                        key={col}
                        className="plot-hover cursor-pointer"
                        onClick={() => setSelectedPlot(plots[plotId - 1])}
                      >
                        <rect
                          x={100 + col * 100}
                          y={50}
                          width="80"
                          height="120"
                          fill={getPlotColor(plots[plotId - 1].status)}
                          stroke="#000"
                          strokeWidth="1"
                        />
                        <text
                          x={140 + col * 100}
                          y={120}
                          fill="white"
                          textAnchor="middle"
                        >
                          {plotId}
                        </text>
                      </g>
                    );
                  }
                  return null;
                })}
              </g>
            ))}
          </svg>
        </div>

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
                </div>
                <Button className="w-full bg-forest hover:bg-forest-light">
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
      </div>
    </div>
  );
};

export default PlotMap;