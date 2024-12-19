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
  // Special yellow plots
  const yellowPlots = [6, 7, 16, 17, 26, 27];
  if (yellowPlots.includes(plotId)) {
    return "#FEF7CD";
  }

  switch (status) {
    case "available":
      return "#2F5233";
    case "reserved":
      return "#FFA500";
    case "sold":
      return "#ea384c"; // Updated red color for sold plots
    default:
      return "#2F5233";
  }
};