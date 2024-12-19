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
    size: "5000 sq ft",
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
        <div className="relative bg-sand/50 p-6 rounded-lg shadow-lg">
          <div className="absolute top-4 right-4 flex flex-col gap-2 bg-white/90 p-3 rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-forest rounded"></div>
              <span className="text-sm">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#FEF7CD] border border-black/10 rounded"></div>
              <span className="text-sm">Premium (25k USD)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#ea384c] rounded"></div>
              <span className="text-sm">Sold</span>
            </div>
          </div>
          
          <svg
            viewBox="0 0 800 1000"
            className="w-full h-auto"
            style={{ maxHeight: "80vh" }}
          >
            {/* Background styling */}
            <rect x="0" y="0" width="800" height="1000" fill="#f5f5dc" opacity="0.3" />
            
            {/* Roads with improved styling */}
            <g className="roads">
              {/* 32M Wide Road - Tarmac style */}
              <rect x="650" y="50" width="100" height="900" fill="#333333" />
              {/* Tarmac texture */}
              <pattern id="tarmacPattern" patternUnits="userSpaceOnUse" width="10" height="10">
                <rect width="10" height="10" fill="#333333" />
                <circle cx="5" cy="5" r="0.5" fill="#444444" />
              </pattern>
              <rect x="650" y="50" width="100" height="900" fill="url(#tarmacPattern)" />
              {/* Road markings */}
              <rect x="695" y="50" width="4" height="900" fill="white" opacity="0.8" />
              
              {/* 9M Wide Roads - Laminated style */}
              {[120, 370, 620, 870].map((y) => (
                <>
                  {/* Base road */}
                  <rect x="50" y={y} width="700" height="60" fill="#787878" />
                  {/* Laminated texture */}
                  <rect x="50" y={y} width="700" height="60" fill="#787878" opacity="0.7" />
                  {/* Center line */}
                  <rect x="50" y={y + 28} width="600" height="4" fill="white" opacity="0.8" />
                  {/* Dashed lines */}
                  {Array.from({ length: 20 }).map((_, i) => (
                    <rect
                      key={i}
                      x={70 + i * 30}
                      y={y + 28}
                      width="15"
                      height="4"
                      fill="white"
                      opacity="0.8"
                    />
                  ))}
                </>
              ))}
              
              {/* Road labels with measurements */}
              <g className="road-labels">
                <text x="350" y="155" className="text-sm font-semibold" fill="#666">9M WIDE ROAD (29.5 ft)</text>
                <text x="350" y="405" className="text-sm font-semibold" fill="#666">9M WIDE ROAD (29.5 ft)</text>
                <text x="350" y="655" className="text-sm font-semibold" fill="#666">9M WIDE ROAD (29.5 ft)</text>
                <text x="350" y="905" className="text-sm font-semibold" fill="#666">9M WIDE ROAD (29.5 ft)</text>
                <text x="720" y="500" className="text-sm font-semibold" fill="white" transform="rotate(90,700,500)">32M WIDE ROAD (105 ft)</text>
              </g>

              {/* Plot measurements */}
              <g className="measurements" fill="#666" fontSize="10">
                <text x="100" y="100">50 ft</text>
                <line x1="80" y1="90" x2="130" y2="90" stroke="#666" strokeWidth="1" />
                <text x="60" y="200" transform="rotate(-90,60,200)">100 ft</text>
                <line x1="70" y1="180" x2="70" y2="280" stroke="#666" strokeWidth="1" />
              </g>
            </g>

            {/* Corner Points with improved styling */}
            <g className="corner-points">
              <circle cx="50" cy="50" r="4" fill="#2F5233" />
              <circle cx="750" cy="50" r="4" fill="#2F5233" />
              <circle cx="50" cy="750" r="4" fill="#2F5233" />
              <circle cx="50" cy="950" r="4" fill="#2F5233" />
              <circle cx="750" cy="950" r="4" fill="#2F5233" />
              
              <text x="60" y="40" className="text-xs font-medium" fill="#2F5233">AA1</text>
              <text x="760" y="40" className="text-xs font-medium" fill="#2F5233">AA2</text>
              <text x="60" y="740" className="text-xs font-medium" fill="#2F5233">AA5</text>
              <text x="60" y="940" className="text-xs font-medium" fill="#2F5233">AA4</text>
              <text x="760" y="940" className="text-xs font-medium" fill="#2F5233">AA3</text>
            </g>

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