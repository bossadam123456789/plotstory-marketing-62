
import { Plot } from "./types";

interface PlotRowProps {
  plots: number[];
  transform: string;
  onPlotSelect: (plot: Plot) => void;
  allPlots: Plot[];
  getPlotColor: (status: Plot["status"], plotId: number) => string;
  selectedPlot: Plot | null;
}

export const PlotRow = ({ plots, transform, onPlotSelect, allPlots, getPlotColor, selectedPlot }: PlotRowProps) => {
  const mainRoadPlots = [7, 16, 17, 26, 27];
  let currentX = 0;

  return (
    <g transform={transform}>
      {plots.map((num) => {
        const plot = allPlots[num - 1];
        const isMainRoadPlot = mainRoadPlots.includes(num);
        const isPlot6 = num === 6;
        const width = isPlot6 ? 130 : (isMainRoadPlot ? 170 : 130);
        const x = currentX;
        currentX += width;
        
        const isSelected = selectedPlot?.id === plot.id;
        
        return (
          <g
            key={num}
            className="plot-hover cursor-pointer transition-all duration-300"
            onClick={() => onPlotSelect(plot)}
          >
            {/* Enhanced Selection shadow effect */}
            {isSelected && (
              <rect
                x={x - 4}
                y={-4}
                width={width + 8}
                height={128}
                fill="none"
                stroke="#000"
                strokeWidth="2"
                filter="drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7))"
                rx="6"
                ry="6"
              />
            )}
            <rect
              x={x}
              y={0}
              width={width}
              height={120}
              fill={getPlotColor(plot.status, plot.id)}
              stroke={isSelected ? "#000" : "#555"}
              strokeWidth={isSelected ? "3" : "1"}
              rx="3" 
              ry="3"
              className={`transition-all duration-300 ${isSelected ? "opacity-90" : "hover:opacity-80"}`}
            >
              <animate
                attributeName="opacity"
                from="1"
                to="0.6"
                dur="0.5s"
                begin="click"
                fill="freeze"
              />
              <animate
                attributeName="opacity"
                from="0.6"
                to="1"
                dur="0.5s"
                begin="click+0.5s"
                fill="freeze"
              />
            </rect>
            <text
              x={x + width/2}
              y={60}
              fill={plot.isPrime ? "#000" : "white"}
              textAnchor="middle"
              fontSize="16"
              fontWeight="600"
            >
              {num}
            </text>
            {plot.isPrime && (
              <text
                x={x + width/2}
                y={80}
                fill="#000"
                textAnchor="middle"
                fontSize="12"
                fontWeight="500"
              >
                35k USD
              </text>
            )}
            {isSelected && (
              <>
                <text
                  x={x + width/2}
                  y={100}
                  fill={plot.isPrime ? "#000" : "white"}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="600"
                  className="animate-fade-in"
                >
                  Selected
                </text>
                {/* Pulse circle effect for selected plot */}
                <circle
                  cx={x + width/2}
                  cy={60}
                  r={30}
                  fill="transparent"
                  stroke={plot.isPrime ? "#000" : "#fff"}
                  strokeWidth="1"
                  opacity="0.5"
                  className="animate-pulse"
                >
                  <animate
                    attributeName="r"
                    values="30;40;30"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;0.2;0.5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </>
            )}
          </g>
        );
      })}
    </g>
  );
};
