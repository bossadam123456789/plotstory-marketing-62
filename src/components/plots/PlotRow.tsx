import { Plot } from "./types";

interface PlotRowProps {
  plots: number[];
  transform: string;
  onPlotSelect: (plot: Plot) => void;
  allPlots: Plot[];
  getPlotColor: (status: Plot["status"], plotId: number) => string;
}

export const PlotRow = ({ plots, transform, onPlotSelect, allPlots, getPlotColor }: PlotRowProps) => {
  const specialPlots = [6, 7, 16, 17, 26, 27];

  return (
    <g transform={transform}>
      {plots.map((num, col) => {
        const plot = allPlots[num - 1];
        const isSpecialPlot = specialPlots.includes(num);
        
        return (
          <g
            key={num}
            className="plot-hover cursor-pointer"
            onClick={() => onPlotSelect(plot)}
          >
            <rect
              x={100 + col * 100}
              y={50}
              width="80"
              height="120"
              fill={getPlotColor(plot.status, plot.id)}
              stroke="#000"
              strokeWidth="1"
            />
            <text
              x={140 + col * 100}
              y={110}
              fill={isSpecialPlot ? "#000" : "white"}
              textAnchor="middle"
            >
              {num}
            </text>
            {isSpecialPlot && (
              <text
                x={140 + col * 100}
                y={130}
                fill="#000"
                textAnchor="middle"
                fontSize="12"
              >
                25k USD
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
};