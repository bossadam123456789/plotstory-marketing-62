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
    <div id="plots" className="container py-8 md:py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-forest">Plot Layout</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative bg-sand/50 p-4 md:p-6 rounded-xl shadow-xl">
          <svg
            viewBox="0 0 1000 1200"
            className="w-full h-auto"
            style={{ maxHeight: "85vh" }}
          >
            {/* Background with grid pattern */}
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#2F5233" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="1000" height="1200" fill="url(#grid)" />
            
            {/* Main 32M Road - Angled with better styling */}
            <path 
              d="M800,0 L900,0 L850,1200 L750,1200 Z" 
              fill="#787878" 
              className="opacity-80"
            />
            <path 
              d="M845,0 L855,0 L805,1200 L795,1200 Z" 
              fill="white" 
              className="opacity-90"
            />

            {/* Plot Rows with enhanced styling */}
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

            {/* Enhanced Corner Points Labels */}
            <g className="corner-points-labels" fill="#2F5233" fontSize="18" fontWeight="bold">
              <text x="130" y="20" className="drop-shadow-sm">AA1</text>
              <text x="870" y="20" className="drop-shadow-sm">AA2</text>
              <text x="820" y="1180" className="drop-shadow-sm">AA3</text>
              <text x="130" y="1180" className="drop-shadow-sm">AA4</text>
              <text x="130" y="600" className="drop-shadow-sm">AA5</text>
            </g>

            {/* Enhanced Road Labels */}
            <g className="road-labels">
              <text x="425" y="145" fontSize="16" fontWeight="600" fill="#333" textAnchor="middle" className="drop-shadow-sm">9M WIDE ROAD</text>
              <text x="425" y="305" fontSize="16" fontWeight="600" fill="#333" textAnchor="middle" className="drop-shadow-sm">9M WIDE ROAD</text>
              <text x="425" y="585" fontSize="16" fontWeight="600" fill="#333" textAnchor="middle" className="drop-shadow-sm">9M WIDE ROAD</text>
              <text x="850" y="600" fontSize="16" fontWeight="600" fill="white" textAnchor="middle" transform="rotate(90,850,600)" className="drop-shadow-sm">32M WIDE ROAD</text>
            </g>

            {/* Compass Rose */}
            <g transform="translate(100,100) scale(0.5)">
              <circle cx="0" cy="0" r="30" fill="#2F5233" opacity="0.1"/>
              <path d="M0,-40 L10,-10 L-10,-10 Z" fill="#2F5233"/>
              <text x="0" y="-45" textAnchor="middle" fontSize="16" fill="#2F5233" fontWeight="bold">N</text>
            </g>
          </svg>

          {/* Enhanced Legend */}
          <div className="mt-4 flex flex-wrap justify-center gap-4 bg-white/95 p-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-forest rounded-sm"></div>
              <span className="text-sm md:text-base font-medium">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#FEF7CD] border border-black/10 rounded-sm"></div>
              <span className="text-sm md:text-base font-medium">Premium (35k USD)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#ea384c] rounded-sm"></div>
              <span className="text-sm md:text-base font-medium">Sold</span>
            </div>
          </div>
        </div>

        <PlotInfo selectedPlot={selectedPlot} />
      </div>
    </div>
  );
};

export default PlotMap;
