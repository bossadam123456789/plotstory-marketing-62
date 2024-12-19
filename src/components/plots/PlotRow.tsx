import { Plot } from "./types";

interface PlotRowProps {
  plots: number[];
  transform: string;
  onPlotSelect: (plot: Plot) => void;
  allPlots: Plot[];
  getPlotColor: (status: Plot["status"], plotId: number) => string;
}

export const PlotRow = ({ plots, transform, onPlotSelect, allPlots, getPlotColor }: PlotRowProps) => {
  const mainRoadPlots = [6, 7, 16, 17, 26, 27];
  let currentX = 0;

  return (
    <g transform={transform}>
      {plots.map((num) => {
        const plot = allPlots[num - 1];
        const isMainRoadPlot = mainRoadPlots.includes(num);
        // Adjust width for plots 1-6
        const width = num <= 6 ? (isMainRoadPlot ? 170 : 130) : (isMainRoadPlot ? 170 : 130);
        const x = currentX;
        currentX += width;
        
        return (
          <g
            key={num}
            className="plot-hover cursor-pointer"
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
            />
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