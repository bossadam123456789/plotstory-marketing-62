import { Plot } from "./types";

interface PlotRowProps {
  plots: number[];
  transform: string;
  onPlotSelect: (plot: Plot) => void;
  allPlots: Plot[];
  getPlotColor: (status: Plot["status"], plotId: number) => string;
}

export const PlotRow = ({ plots, transform, onPlotSelect, allPlots, getPlotColor }: PlotRowProps) => {
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
        
        return (
          <g
            key={num}
            className="plot-hover cursor-pointer transition-all duration-300"
            onClick={() => onPlotSelect(plot)}
          >
            <rect
              x={x}
              y={0}
              width={width}
              height={120}
              fill={getPlotColor(plot.status, plot.id)}
              stroke="#000"
              strokeWidth="1"
              className="transition-all duration-300 hover:opacity-80"
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
          </g>
        );
      })}
    </g>
  );
};