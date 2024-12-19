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
            <text x="700" y="500" className="text-sm" transform="rotate(90,700,500)">32M WIDE ROAD</text>

            {/* Corner Points */}
            <text x="50" y="50" className="text-sm">AA1</text>
            <text x="750" y="50" className="text-sm">AA2</text>
            <text x="50" y="750" className="text-sm">AA5</text>
            <text x="50" y="950" className="text-sm">AA4</text>
            <text x="750" y="950" className="text-sm">AA3</text>

            {/* Plot Row 1 (1-6) */}
            <g transform="translate(0, 0)">
              {[1, 2, 3, 4, 5, 6].map((num, col) => (
                <g
                  key={num}
                  className="plot-hover cursor-pointer"
                  onClick={() => setSelectedPlot(plots[num - 1])}
                >
                  <rect
                    x={100 + col * 100}
                    y={50}
                    width="80"
                    height="120"
                    fill={getPlotColor(plots[num - 1].status)}
                    stroke="#000"
                    strokeWidth="1"
                  />
                  <text
                    x={140 + col * 100}
                    y={120}
                    fill="white"
                    textAnchor="middle"
                  >
                    {num}
                  </text>
                </g>
              ))}
            </g>

            {/* Plot Row 2 (11-7) */}
            <g transform="translate(0, 250)">
              {[11, 10, 9, 8, 7].map((num, col) => (
                <g
                  key={num}
                  className="plot-hover cursor-pointer"
                  onClick={() => setSelectedPlot(plots[num - 1])}
                >
                  <rect
                    x={100 + col * 100}
                    y={50}
                    width="80"
                    height="120"
                    fill={getPlotColor(plots[num - 1].status)}
                    stroke="#000"
                    strokeWidth="1"
                  />
                  <text
                    x={140 + col * 100}
                    y={120}
                    fill="white"
                    textAnchor="middle"
                  >
                    {num}
                  </text>
                </g>
              ))}
            </g>

            {/* Plot Row 3 (12-16) */}
            <g transform="translate(0, 400)">
              {[12, 13, 14, 15, 16].map((num, col) => (
                <g
                  key={num}
                  className="plot-hover cursor-pointer"
                  onClick={() => setSelectedPlot(plots[num - 1])}
                >
                  <rect
                    x={100 + col * 100}
                    y={50}
                    width="80"
                    height="120"
                    fill={getPlotColor(plots[num - 1].status)}
                    stroke="#000"
                    strokeWidth="1"
                  />
                  <text
                    x={140 + col * 100}
                    y={120}
                    fill="white"
                    textAnchor="middle"
                  >
                    {num}
                  </text>
                </g>
              ))}
            </g>

            {/* Plot Row 4 (21-17) */}
            <g transform="translate(0, 550)">
              {[21, 20, 19, 18, 17].map((num, col) => (
                <g
                  key={num}
                  className="plot-hover cursor-pointer"
                  onClick={() => setSelectedPlot(plots[num - 1])}
                >
                  <rect
                    x={100 + col * 100}
                    y={50}
                    width="80"
                    height="120"
                    fill={getPlotColor(plots[num - 1].status)}
                    stroke="#000"
                    strokeWidth="1"
                  />
                  <text
                    x={140 + col * 100}
                    y={120}
                    fill="white"
                    textAnchor="middle"
                  >
                    {num}
                  </text>
                </g>
              ))}
            </g>

            {/* Plot Row 5 (22-26) */}
            <g transform="translate(0, 700)">
              {[22, 23, 24, 25, 26].map((num, col) => (
                <g
                  key={num}
                  className="plot-hover cursor-pointer"
                  onClick={() => setSelectedPlot(plots[num - 1])}
                >
                  <rect
                    x={100 + col * 100}
                    y={50}
                    width="80"
                    height="120"
                    fill={getPlotColor(plots[num - 1].status)}
                    stroke="#000"
                    strokeWidth="1"
                  />
                  <text
                    x={140 + col * 100}
                    y={120}
                    fill="white"
                    textAnchor="middle"
                  >
                    {num}
                  </text>
                </g>
              ))}
            </g>

            {/* Plot Row 6 (31-27) */}
            <g transform="translate(0, 850)">
              {[31, 30, 29, 28, 27].map((num, col) => (
                <g
                  key={num}
                  className="plot-hover cursor-pointer"
                  onClick={() => setSelectedPlot(plots[num - 1])}
                >
                  <rect
                    x={100 + col * 100}
                    y={50}
                    width="80"
                    height="120"
                    fill={getPlotColor(plots[num - 1].status)}
                    stroke="#000"
                    strokeWidth="1"
                  />
                  <text
                    x={140 + col * 100}
                    y={120}
                    fill="white"
                    textAnchor="middle"
                  >
                    {num}
                  </text>
                </g>
              ))}
            </g>
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