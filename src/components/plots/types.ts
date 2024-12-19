export type Plot = {
  id: number;
  status: "available" | "sold";
  size: string;
  price: string;
  isPrime: boolean;
};

export const getPlotPrice = (plotId: number) => {
  // All plots that cost 35k (prime plots along 32m road)
  const primePlots = [6, 11, 16, 21, 26, 31];
  
  if (primePlots.includes(plotId)) {
    return "$35,000";
  } else {
    return "$30,000";
  }
};

export const getPlotColor = (status: Plot["status"], plotId: number) => {
  // All plots that cost 35k (prime plots along 32m road)
  const primePlots = [6, 11, 16, 21, 26, 31];
  
  if (status === "sold") {
    return "#ea384c"; // Red color for sold plots
  } else if (primePlots.includes(plotId)) {
    return "#FEF7CD"; // Light yellow for prime plots
  } else {
    return "#2F5233"; // Forest green for available plots
  }
};