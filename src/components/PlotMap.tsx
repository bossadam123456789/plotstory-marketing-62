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
    <div id="plots" className="bg-gradient-primary py-16 md:py-24">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-forest">Plot Layout</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Plot Map Section - 8 columns on large screens */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <svg
                viewBox="0 0 1200 1400"
                className="w-full h-auto"
                style={{ maxHeight: "85vh" }}
              >
                {/* Background with enhanced grid pattern */}
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#2F5233" strokeWidth="0.5" opacity="0.15"/>
                  </pattern>
                </defs>
                <rect x="0" y="0" width="1200" height="1400" fill="url(#grid)" />
                
                {/* Main 32M Road */}
                <path 
                  d="M1050,0 L1150,0 L1100,1400 L1000,1400 Z" 
                  fill="#787878" 
                  className="opacity-80"
                />
                <path 
                  d="M1095,0 L1105,0 L1055,1400 L1045,1400 Z" 
                  fill="white" 
                  className="opacity-90"
                />

                {/* Plot Rows */}
                <g transform="translate(100, 50) skewY(-3)">
                  <PlotRow
                    plots={[1, 2, 3, 4, 5, 6]}
                    transform="translate(250, 0)"
                    onPlotSelect={setSelectedPlot}
                    allPlots={plots}
                    getPlotColor={getPlotColor}
                  />
                  
                  {/* 9M Road */}
                  <path 
                    d="M200,140 L1000,140 L1000,180 L200,180 Z" 
                    fill="#787878" 
                  />
                  <path 
                    d="M200,155 L1000,155 L1000,165 L200,165 Z" 
                    fill="white" 
                    opacity="0.8" 
                  />
                  
                  <PlotRow
                    plots={[11, 10, 9, 8, 7]}
                    transform="translate(250, 180)"
                    onPlotSelect={setSelectedPlot}
                    allPlots={plots}
                    getPlotColor={getPlotColor}
                  />
                  
                  {/* 9M Road */}
                  <path 
                    d="M200,320 L1000,320 L1000,360 L200,360 Z" 
                    fill="#787878" 
                  />
                  <path 
                    d="M200,335 L1000,335 L1000,345 L200,345 Z" 
                    fill="white" 
                    opacity="0.8" 
                  />
                  
                  <PlotRow
                    plots={[16, 15, 14, 13, 12]}
                    transform="translate(250, 360)"
                    onPlotSelect={setSelectedPlot}
                    allPlots={plots}
                    getPlotColor={getPlotColor}
                  />
                  
                  <PlotRow
                    plots={[21, 20, 19, 18, 17]}
                    transform="translate(250, 500)"
                    onPlotSelect={setSelectedPlot}
                    allPlots={plots}
                    getPlotColor={getPlotColor}
                  />
                  
                  {/* 9M Road */}
                  <path 
                    d="M200,640 L1000,640 L1000,680 L200,680 Z" 
                    fill="#787878" 
                  />
                  <path 
                    d="M200,655 L1000,655 L1000,665 L200,665 Z" 
                    fill="white" 
                    opacity="0.8" 
                  />
                  
                  <PlotRow
                    plots={[26, 25, 24, 23, 22]}
                    transform="translate(250, 680)"
                    onPlotSelect={setSelectedPlot}
                    allPlots={plots}
                    getPlotColor={getPlotColor}
                  />
                  
                  <PlotRow
                    plots={[31, 30, 29, 28, 27]}
                    transform="translate(250, 820)"
                    onPlotSelect={setSelectedPlot}
                    allPlots={plots}
                    getPlotColor={getPlotColor}
                  />
                </g>

                {/* Corner Points Labels */}
                <g className="corner-points-labels" fill="#2F5233" fontSize="18" fontWeight="bold">
                  <text x="230" y="70" className="drop-shadow-sm">AA1</text>
                  <text x="1120" y="70" className="drop-shadow-sm">AA2</text>
                  <text x="1070" y="1380" className="drop-shadow-sm">AA3</text>
                  <text x="230" y="1380" className="drop-shadow-sm">AA4</text>
                  <text x="230" y="700" className="drop-shadow-sm">AA5</text>
                </g>

                {/* Road Labels */}
                <g className="road-labels">
                  <text x="575" y="165" fontSize="16" fontWeight="600" fill="#333" textAnchor="middle" className="drop-shadow-sm">9M WIDE ROAD</text>
                  <text x="575" y="345" fontSize="16" fontWeight="600" fill="#333" textAnchor="middle" className="drop-shadow-sm">9M WIDE ROAD</text>
                  <text x="575" y="665" fontSize="16" fontWeight="600" fill="#333" textAnchor="middle" className="drop-shadow-sm">9M WIDE ROAD</text>
                  <text x="1100" y="700" fontSize="16" fontWeight="600" fill="white" textAnchor="middle" transform="rotate(90,1100,700)" className="drop-shadow-sm">32M WIDE ROAD</text>
                </g>

                {/* Enhanced Compass Rose */}
                <g transform="translate(150,150) scale(0.5)">
                  <circle cx="0" cy="0" r="40" fill="#2F5233" opacity="0.1"/>
                  <path d="M0,-50 L15,-15 L-15,-15 Z" fill="#2F5233"/>
                  <text x="0" y="-60" textAnchor="middle" fontSize="24" fill="#2F5233" fontWeight="bold">N</text>
                </g>
              </svg>

              {/* Enhanced Legend */}
              <div className="mt-6 flex flex-wrap justify-center gap-6 bg-sand/50 p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-forest rounded-md shadow-sm"></div>
                  <span className="text-base font-medium">Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#FEF7CD] border border-black/10 rounded-md shadow-sm"></div>
                  <span className="text-base font-medium">Premium</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#ea384c] rounded-md shadow-sm"></div>
                  <span className="text-base font-medium">Sold</span>
                </div>
              </div>
            </div>
          </div>

          {/* Plot Info Section - 4 columns on large screens */}
          <div className="lg:col-span-4">
            <PlotInfo selectedPlot={selectedPlot} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotMap;