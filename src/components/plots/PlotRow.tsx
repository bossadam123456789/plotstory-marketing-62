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
        
        const xOffset = col * 100; // Reduced from 120 to 100 to remove extra spacing
        const x = 100 + xOffset;
        
        return (
          <g
            key={num}
            className="plot-hover cursor-pointer"
            onClick={() => onPlotSelect(plot)}
          >
            <rect
              x={x}
              y={50}
              width="100"
              height="120"
              fill={getPlotColor(plot.status, plot.id)}
              stroke="#000"
              strokeWidth="1"
            />
            <text
              x={x + 50}
              y={110}
              fill={isSpecialPlot ? "#000" : "white"}
              textAnchor="middle"
              fontSize="18"
              fontWeight="600"
            >
              {num}
            </text>
            {isSpecialPlot && (
              <text
                x={x + 50}
                y={130}
                fill="#000"
                textAnchor="middle"
                fontSize="14"
                fontWeight="500"
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