export interface Plot {
  id: number;
  status: "available" | "reserved" | "sold";
  size: string;
  price: string;
  isPrime: boolean;
}

export const getPlotPrice = (plotId: number): string => {
  // Plots along 32m road (6, 11, 16, 21, 26, 31)
  const primePlots = [6, 11, 16, 21, 26, 31];
  // Plots adjacent to prime plots
  const semiPrimePlots = [5, 10, 15, 20, 25, 30];
  
  if (primePlots.includes(plotId)) {
    return "$25,000";
  } else if (semiPrimePlots.includes(plotId)) {
    return "$20,000";
  } else {
    return "$15,000";
  }
};

export const getPlotColor = (status: Plot["status"], plotId: number) => {
  // All plots that cost 25k (prime plots along 32m road)
  const primePlots = [6, 11, 16, 21, 26, 31];
  // Plots that should be red
  const redPlots = [1, 2, 3, 4, 5, 29, 30];
  
  if (primePlots.includes(plotId)) {
    return "#FEF7CD";
  }
  
  if (redPlots.includes(plotId)) {
    return "#ea384c";
  }

  switch (status) {
    case "available":
      return "#2F5233";
    case "reserved":
      return "#FFA500";
    case "sold":
      return "#ea384c";
    default:
      return "#2F5233";
  }
};