export type Plot = {
  id: number;
  status: "available" | "sold";
  size: string;
  price: string;
  isPrime: boolean;
};

export const getPlotPrice = (plotId: number) => {
  // All plots that cost 35k (prime plots along 32m road)
  const primePlots = [6, 7, 11, 12, 16, 17, 21, 22, 26, 27, 31];
  
  if (primePlots.includes(plotId)) {
    return "$35,000";
  } else {
    return "$30,000";
  }
};

export const getPlotColor = (status: Plot["status"], plotId: number) => {
  // Prime plots are yellow
  const primePlots = [6, 7, 11, 12, 16, 17, 21, 22, 26, 27, 31];
  
  if (status === "sold") {
    return "#ea384c";
  }
  
  return primePlots.includes(plotId) ? "#FEF7CD" : "#2F5233";
};