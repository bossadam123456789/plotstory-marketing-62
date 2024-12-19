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
    <div id="plots" className="container py-4 md:py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">Plot Layout</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="relative bg-sand/50 p-2 md:p-4 rounded-lg shadow-lg">
          <svg
            viewBox="0 0 1000 1200"
            className="w-full h-auto"
            style={{ maxHeight: "85vh" }}
          >
            {/* Background */}
            <rect x="0" y="0" width="1000" height="1200" fill="#f5f5dc" opacity="0.3" />
            
            {/* Main 32M Road */}
            <path 
              d="M850,0 L950,0 L950,1200 L850,1200 Z" 
              fill="#787878" 
            />
            <path 
              d="M895,0 L905,0 L905,1200 L895,1200 Z" 
              fill="white" 
              opacity="0.8" 
            />

            {/* Plot Rows */}
            <PlotRow
              plots={[6, 5, 4, 3, 2, 1]}
              transform="translate(0, 0)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            
            {/* 9M Road */}
            <path 
              d="M0,120 L850,120 L850,160 L0,160 Z" 
              fill="#787878" 
            />
            <path 
              d="M0,135 L850,135 L850,145 L0,145 Z" 
              fill="white" 
              opacity="0.8" 
            />
            
            <PlotRow
              plots={[11, 10, 9, 8, 7]}
              transform="translate(0, 160)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            
            {/* 9M Road */}
            <path 
              d="M0,280 L850,280 L850,320 L0,320 Z" 
              fill="#787878" 
            />
            <path 
              d="M0,295 L850,295 L850,305 L0,305 Z" 
              fill="white" 
              opacity="0.8" 
            />
            
            <PlotRow
              plots={[16, 15, 14, 13, 12]}
              transform="translate(0, 320)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            
            <PlotRow
              plots={[21, 20, 19, 18, 17]}
              transform="translate(0, 440)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            
            {/* 9M Road */}
            <path 
              d="M0,560 L850,560 L850,600 L0,600 Z" 
              fill="#787878" 
            />
            <path 
              d="M0,575 L850,575 L850,585 L0,585 Z" 
              fill="white" 
              opacity="0.8" 
            />
            
            <PlotRow
              plots={[26, 25, 24, 23, 22]}
              transform="translate(0, 600)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            
            <PlotRow
              plots={[31, 30, 29, 28, 27]}
              transform="translate(0, 720)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />

            {/* Road Labels */}
            <g className="road-labels">
              <text x="425" y="145" fontSize="14" fontWeight="600" fill="#333" textAnchor="middle">9M WIDE ROAD</text>
              <text x="425" y="305" fontSize="14" fontWeight="600" fill="#333" textAnchor="middle">9M WIDE ROAD</text>
              <text x="425" y="585" fontSize="14" fontWeight="600" fill="#333" textAnchor="middle">9M WIDE ROAD</text>
              <text x="900" y="600" fontSize="14" fontWeight="600" fill="white" textAnchor="middle" transform="rotate(90,900,600)">32M WIDE ROAD</text>
            </g>

            {/* Corner Points */}
            <g className="corner-points">
              <circle cx="0" cy="0" r="3" fill="#2F5233" />
              <circle cx="950" cy="0" r="3" fill="#2F5233" />
              <circle cx="850" cy="1200" r="3" fill="#2F5233" />
              <circle cx="950" cy="1200" r="3" fill="#2F5233" />
            </g>
          </svg>

          {/* Legend */}
          <div className="mt-2 flex flex-wrap justify-center gap-2 md:gap-4 bg-white/90 p-2 rounded-lg shadow-sm">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-forest rounded"></div>
              <span className="text-xs md:text-sm">Available</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-[#FEF7CD] border border-black/10 rounded"></div>
              <span className="text-xs md:text-sm">Premium (35k USD)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-[#ea384c] rounded"></div>
              <span className="text-xs md:text-sm">Sold</span>
            </div>
          </div>
        </div>

        <PlotInfo selectedPlot={selectedPlot} />
      </div>
    </div>
  );
};

export default PlotMap;