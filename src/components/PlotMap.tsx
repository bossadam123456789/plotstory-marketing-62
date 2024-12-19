import { useState } from "react";
import { Plot, getPlotColor, getPlotPrice } from "./plots/types";
import { PlotRow } from "./plots/PlotRow";
import { PlotInfo } from "./plots/PlotInfo";

const plots: Plot[] = Array.from({ length: 31 }, (_, i) => {
  const id = i + 1;
  const isPrime = [6, 7, 11, 12, 16, 17, 21, 22, 26, 27, 31].includes(id);
  const isSold = [1, 2, 3, 4, 5, 29, 30].includes(id);
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
            
            {/* Main 32M Road - Adjusted to be straighter */}
            <path 
              d="M850,0 L950,0 L950,1400 L850,1400 Z" 
              fill="#787878" 
            />
            <path 
              d="M895,0 L905,0 L905,1400 L895,1400 Z" 
              fill="white" 
              opacity="0.8" 
            />

            {/* Plot Rows - Adjusted to be more aligned */}
            <PlotRow
              plots={[6, 5, 4, 3, 2, 1]}
              transform="translate(0, 0)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            
            {/* Horizontal 9M Road after first row */}
            <path 
              d="M0,140 L850,140 L850,200 L0,200 Z" 
              fill="#787878" 
            />
            <path 
              d="M0,165 L850,165 L850,175 L0,175 Z" 
              fill="white" 
              opacity="0.8" 
            />
            
            <PlotRow
              plots={[11, 10, 9, 8, 7]}
              transform="translate(0, 200)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            
            {/* Horizontal 9M Road after second row */}
            <path 
              d="M0,340 L850,340 L850,400 L0,400 Z" 
              fill="#787878" 
            />
            <path 
              d="M0,365 L850,365 L850,375 L0,375 Z" 
              fill="white" 
              opacity="0.8" 
            />
            
            <PlotRow
              plots={[16, 15, 14, 13, 12]}
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
            <path 
              d="M0,680 L850,680 L850,740 L0,740 Z" 
              fill="#787878" 
            />
            <path 
              d="M0,705 L850,705 L850,715 L0,715 Z" 
              fill="white" 
              opacity="0.8" 
            />
            
            <PlotRow
              plots={[26, 25, 24, 23, 22]}
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
              <circle cx="850" cy="1400" r="4" fill="#2F5233" />
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
              <span className="text-sm">Premium (35k USD)</span>
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