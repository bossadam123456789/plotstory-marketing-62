import { useState } from "react";
import { Plot, getPlotColor, getPlotPrice } from "./plots/types";
import { PlotRow } from "./plots/PlotRow";
import { PlotInfo } from "./plots/PlotInfo";

const plots: Plot[] = Array.from({ length: 31 }, (_, i) => {
  const id = i + 1;
  const isPrime = [6, 11, 16, 21, 26, 31].includes(id);
  return {
    id,
    status: "available",
    size: "5400 sq ft",
    price: getPlotPrice(id),
    isPrime,
  };
});

const PlotMap = () => {
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);

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

            {/* Plot Rows */}
            <PlotRow
              plots={[1, 2, 3, 4, 5, 6]}
              transform="translate(0, 0)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            <PlotRow
              plots={[11, 10, 9, 8, 7]}
              transform="translate(0, 250)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            <PlotRow
              plots={[12, 13, 14, 15, 16]}
              transform="translate(0, 400)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            <PlotRow
              plots={[21, 20, 19, 18, 17]}
              transform="translate(0, 550)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            <PlotRow
              plots={[22, 23, 24, 25, 26]}
              transform="translate(0, 700)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            <PlotRow
              plots={[31, 30, 29, 28, 27]}
              transform="translate(0, 850)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
          </svg>
        </div>

        <PlotInfo selectedPlot={selectedPlot} />
      </div>
    </div>
  );
};

export default PlotMap;