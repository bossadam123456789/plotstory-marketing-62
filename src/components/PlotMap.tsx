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
    size: "464.5 sq m (5000 sq ft)",
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
          <svg
            viewBox="0 0 1000 1400"
            className="w-full h-auto"
            style={{ maxHeight: "90vh" }}
          >
            {/* Background styling */}
            <rect x="0" y="0" width="1000" height="1400" fill="#f5f5dc" opacity="0.3" />
            
            {/* Roads with improved styling */}
            <g className="roads">
              {/* 32M Wide Road - Tarmac style */}
              <rect x="850" y="50" width="100" height="1300" fill="#333333" />
              {/* Tarmac texture */}
              <pattern id="tarmacPattern" patternUnits="userSpaceOnUse" width="10" height="10">
                <rect width="10" height="10" fill="#333333" />
                <circle cx="5" cy="5" r="0.5" fill="#444444" />
              </pattern>
              <rect x="850" y="50" width="100" height="1300" fill="url(#tarmacPattern)" />
              {/* Road markings */}
              <rect x="895" y="50" width="4" height="1300" fill="white" opacity="0.8" />
              
              {/* 9M Wide Roads - Laminated style - Only where specified */}
              {[150, 650, 1150].map((y) => (
                <>
                  {/* Base road */}
                  <rect x="50" y={y} width="900" height="60" fill="#787878" />
                  {/* Laminated texture */}
                  <rect x="50" y={y} width="900" height="60" fill="#787878" opacity="0.7" />
                  {/* Center line */}
                  <rect x="50" y={y + 28} width="800" height="4" fill="white" opacity="0.8" />
                  {/* Dashed lines */}
                  {Array.from({ length: 25 }).map((_, i) => (
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
              
              {/* Road labels with measurements - Increased text size */}
              <g className="road-labels">
                <text x="450" y="185" fontSize="16" fontWeight="600" fill="#333" textAnchor="middle">9M WIDE ROAD (29.5 ft)</text>
                <text x="450" y="685" fontSize="16" fontWeight="600" fill="#333" textAnchor="middle">9M WIDE ROAD (29.5 ft)</text>
                <text x="450" y="1185" fontSize="16" fontWeight="600" fill="#333" textAnchor="middle">9M WIDE ROAD (29.5 ft)</text>
                <text x="920" y="600" fontSize="16" fontWeight="600" fill="white" textAnchor="middle" transform="rotate(90,900,600)">32M WIDE ROAD (105 ft)</text>
              </g>

              {/* Plot measurements - Increased text size */}
              <g className="measurements" fill="#333" fontSize="14" fontWeight="500">
                <text x="100" y="100">50 ft (15.24m)</text>
                <line x1="80" y1="90" x2="130" y2="90" stroke="#333" strokeWidth="1.5" />
                <text x="60" y="200" transform="rotate(-90,60,200)">100 ft (30.48m)</text>
                <line x1="70" y1="180" x2="70" y2="280" stroke="#333" strokeWidth="1.5" />
                <text x="150" y="120">Area: 464.5 m² (5000 sq ft)</text>
              </g>
            </g>

            {/* Corner Points - Increased text size */}
            <g className="corner-points">
              <circle cx="50" cy="50" r="4" fill="#2F5233" />
              <circle cx="950" cy="50" r="4" fill="#2F5233" />
              <circle cx="50" cy="1350" r="4" fill="#2F5233" />
              <circle cx="950" cy="1350" r="4" fill="#2F5233" />
              
              <text x="60" y="40" fontSize="14" fontWeight="600" fill="#2F5233">AA1</text>
              <text x="960" y="40" fontSize="14" fontWeight="600" fill="#2F5233">AA2</text>
              <text x="60" y="1340" fontSize="14" fontWeight="600" fill="#2F5233">AA4</text>
              <text x="960" y="1340" fontSize="14" fontWeight="600" fill="#2F5233">AA3</text>
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
              transform="translate(0, 750)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            <PlotRow
              plots={[22, 23, 24, 25, 26]}
              transform="translate(0, 900)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
            <PlotRow
              plots={[31, 30, 29, 28, 27]}
              transform="translate(0, 1250)"
              onPlotSelect={setSelectedPlot}
              allPlots={plots}
              getPlotColor={getPlotColor}
            />
          </svg>
          
          {/* Legend moved below the map */}
          <div className="mt-6 flex justify-center gap-8 bg-white/90 p-4 rounded-lg shadow-sm">
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
        </div>

        <PlotInfo selectedPlot={selectedPlot} />
      </div>
    </div>
  );
};

export default PlotMap;
