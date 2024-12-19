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
            
            {/* Main 32M Road - Angled */}
            <path 
              d="M800,0 L900,0 L850,1200 L750,1200 Z" 
              fill="#787878" 
            />
            <path 
              d="M845,0 L855,0 L805,1200 L795,1200 Z" 
              fill="white" 
              opacity="0.8" 
            />

            {/* Plot Rows - Each transformed to create the angled layout */}
            <g transform="skewY(-5)">
              <PlotRow
                plots={[6, 5, 4, 3, 2, 1]}
                transform="translate(150, 0)"
                onPlotSelect={setSelectedPlot}
                allPlots={plots}
                getPlotColor={getPlotColor}
              />
              
              {/* 9M Road */}
              <path 
                d="M100,120 L800,120 L800,160 L100,160 Z" 
                fill="#787878" 
              />
              <path 
                d="M100,135 L800,135 L800,145 L100,145 Z" 
                fill="white" 
                opacity="0.8" 
              />
              
              <PlotRow
                plots={[11, 10, 9, 8, 7]}
                transform="translate(150, 160)"
                onPlotSelect={setSelectedPlot}
                allPlots={plots}
                getPlotColor={getPlotColor}
              />
              
              {/* 9M Road */}
              <path 
                d="M100,280 L800,280 L800,320 L100,320 Z" 
                fill="#787878" 
              />
              <path 
                d="M100,295 L800,295 L800,305 L100,305 Z" 
                fill="white" 
                opacity="0.8" 
              />
              
              <PlotRow
                plots={[16, 15, 14, 13, 12]}
                transform="translate(150, 320)"
                onPlotSelect={setSelectedPlot}
                allPlots={plots}
                getPlotColor={getPlotColor}
              />
              
              <PlotRow
                plots={[21, 20, 19, 18, 17]}
                transform="translate(150, 440)"
                onPlotSelect={setSelectedPlot}
                allPlots={plots}
                getPlotColor={getPlotColor}
              />
              
              {/* 9M Road */}
              <path 
                d="M100,560 L800,560 L800,600 L100,600 Z" 
                fill="#787878" 
              />
              <path 
                d="M100,575 L800,575 L800,585 L100,585 Z" 
                fill="white" 
                opacity="0.8" 
              />
              
              <PlotRow
                plots={[26, 25, 24, 23, 22]}
                transform="translate(150, 600)"
                onPlotSelect={setSelectedPlot}
                allPlots={plots}
                getPlotColor={getPlotColor}
              />
              
              <PlotRow
                plots={[31, 30, 29, 28, 27]}
                transform="translate(150, 720)"
                onPlotSelect={setSelectedPlot}
                allPlots={plots}
                getPlotColor={getPlotColor}
              />

            </g>

            {/* Corner Points Labels */}
            <g className="corner-points-labels" fill="#2F5233" fontSize="16" fontWeight="bold">
              <text x="130" y="20">AA1</text>
              <text x="870" y="20">AA2</text>
              <text x="820" y="1180">AA3</text>
              <text x="130" y="1180">AA4</text>
              <text x="130" y="600">AA5</text>
            </g>

            {/* Road Labels */}
            <g className="road-labels">
              <text x="425" y="145" fontSize="14" fontWeight="600" fill="#333" textAnchor="middle">9M WIDE ROAD</text>
              <text x="425" y="305" fontSize="14" fontWeight="600" fill="#333" textAnchor="middle">9M WIDE ROAD</text>
              <text x="425" y="585" fontSize="14" fontWeight="600" fill="#333" textAnchor="middle">9M WIDE ROAD</text>
              <text x="850" y="600" fontSize="14" fontWeight="600" fill="white" textAnchor="middle" transform="rotate(90,850,600)">32M WIDE ROAD</text>
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
