import { useState } from "react";
import { Plot, getPlotColor, getPlotPrice } from "./plots/types";
import { PlotRow } from "./plots/PlotRow";
import { PlotInfo } from "./plots/PlotInfo";

const plots: Plot[] = Array.from({ length: 31 }, (_, i) => {
  const id = i + 1;
  const isPrime = [6, 11, 16, 21, 26, 31].includes(id);
  const isSold = [1, 2, 3, 4, 5, 29, 30].includes(id); // Red plots are now sold
  return {
    id,
    status: isSold ? "sold" : "available",
    size: "464.5 sq m (5000 sq ft)",
    price: getPlotPrice(id),
    isPrime,
  };
});

const PlotMap = () => {
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);

  return (
    <div id="plots" className="container py-8 md:py-16 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Plot Layout</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="relative bg-sand/50 p-4 md:p-6 rounded-lg shadow-lg">
          <svg
            viewBox="0 0 1000 1400"
            className="w-full h-auto"
            style={{ maxHeight: "90vh" }}
          >
            {/* Background */}
            <rect x="0" y="0" width="1000" height="1400" fill="#f5f5dc" opacity="0.3" />
            
            {/* Main 32M Road */}
            <rect x="850" y="0" width="100" height="1400" fill="#787878" />
            <rect x="895" y="0" width="4" height="1400" fill="white" opacity="0.8" />

            {/* Plot Rows */}
            <PlotRow
              plots={[1, 2, 3, 4, 5, 6]}
              transform="translate(0, 0)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            
            {/* Horizontal 9M Road after first row */}
            <rect x="0" y="140" width="850" height="60" fill="#787878" />
            <rect x="0" y="168" width="850" height="4" fill="white" opacity="0.8" />
            
            <PlotRow
              plots={[11, 10, 9, 8, 7]}
              transform="translate(0, 200)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            
            {/* Horizontal 9M Road after second row */}
            <rect x="0" y="340" width="850" height="60" fill="#787878" />
            <rect x="0" y="368" width="850" height="4" fill="white" opacity="0.8" />
            
            <PlotRow
              plots={[12, 13, 14, 15, 16]}
              transform="translate(0, 400)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            
            <PlotRow
              plots={[21, 20, 19, 18, 17]}
              transform="translate(0, 540)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            
            {/* Horizontal 9M Road after fourth row */}
            <rect x="0" y="680" width="850" height="60" fill="#787878" />
            <rect x="0" y="708" width="850" height="4" fill="white" opacity="0.8" />
            
            <PlotRow
              plots={[22, 23, 24, 25, 26]}
              transform="translate(0, 740)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            
            <PlotRow
              plots={[31, 30, 29, 28, 27]}
              transform="translate(0, 880)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />

            {/* Road Labels */}
            <g className="road-labels">
              <text x="425" y="180" fontSize="16" fontWeight="600" fill="#333" textAnchor="middle">9M WIDE ROAD</text>
              <text x="425" y="380" fontSize="16" fontWeight="600" fill="#333" textAnchor="middle">9M WIDE ROAD</text>
              <text x="425" y="720" fontSize="16" fontWeight="600" fill="#333" textAnchor="middle">9M WIDE ROAD</text>
              <text x="900" y="700" fontSize="16" fontWeight="600" fill="white" textAnchor="middle" transform="rotate(90,900,700)">32M WIDE ROAD</text>
            </g>

            {/* Corner Points */}
            <g className="corner-points">
              <circle cx="0" cy="0" r="4" fill="#2F5233" />
              <circle cx="950" cy="0" r="4" fill="#2F5233" />
              <circle cx="0" cy="1400" r="4" fill="#2F5233" />
              <circle cx="950" cy="1400" r="4" fill="#2F5233" />
            </g>
          </svg>

          {/* Legend */}
          <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-4 md:gap-8 bg-white/90 p-3 md:p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-forest rounded"></div>
              <span className="text-sm">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-[#FEF7CD] border border-black/10 rounded"></div>
              <span className="text-sm">Premium (25k USD)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-[#ea384c] rounded"></div>
              <span className="text-sm">Sold</span>
            </div>
          </div>
        </div>

        <PlotInfo selectedPlot={selectedPlot} />
      </div>
    </div>
  );
};

export default PlotMap;