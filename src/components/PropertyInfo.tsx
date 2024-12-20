import { Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Prime location with excellent connectivity",
  "Well-planned 9M wide roads throughout",
  "All plots are regular-shaped for optimal usage",
  "Ready for immediate development",
  "Clear titles and documentation",
  "Flexible payment plans available",
];

const PropertyInfo = () => {
  return (
    <div className="container py-16 px-4 bg-gradient-primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-light text-primary tracking-wide">
            Property Highlights
          </h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <Check className="h-5 w-5 text-forest flex-shrink-0 mt-0.5" />
                <span className="text-secondary leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-light text-primary tracking-wide">Property Overview</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <p className="text-sm text-secondary/80 uppercase tracking-wider">Total Area</p>
              <p className="text-xl font-light mt-1 text-primary">4 Acres</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <p className="text-sm text-secondary/80 uppercase tracking-wider">Number of Plots</p>
              <p className="text-xl font-light mt-1 text-primary">31 Premium Plots</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <p className="text-sm text-secondary/80 uppercase tracking-wider">Plot Sizes</p>
              <p className="text-xl font-light mt-1 text-primary">464.5 square meters (50 x 100 feet)</p>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <p className="text-sm text-secondary/80 uppercase tracking-wider">Road Width</p>
              <p className="text-xl font-light mt-1 text-primary">9M Internal Roads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;