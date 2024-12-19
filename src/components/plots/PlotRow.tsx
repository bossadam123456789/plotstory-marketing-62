import { Plot } from "./types";

interface PlotRowProps {
  plots: number[];
  transform: string;
  onPlotSelect: (plot: Plot) => void;
  allPlots: Plot[];
  getPlotColor: (status: Plot["status"]) => string;
}

export const PlotRow = ({ plots, transform, onPlotSelect, allPlots, getPlotColor }: PlotRowProps) => {
  return (
    <g transform={transform}>
      {plots.map((num, col) => (
        <g
          key={num}
          className="plot-hover cursor-pointer"
          onClick={() => onPlotSelect(allPlots[num - 1])}
        >
          <rect
            x={100 + col * 100}
            y={50}
            width="80"
            height="120"
            fill={getPlotColor(allPlots[num - 1].status)}
            stroke="#000"
            strokeWidth="1"
          />
          <text
            x={140 + col * 100}
            y={120}
            fill="white"
            textAnchor="middle"
          >
            {num}
          </text>
        </g>
      ))}
    </g>
  );
};