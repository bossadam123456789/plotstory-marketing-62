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
    <div className="container py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary">
            Property Highlights
          </h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border"
              >
                <Check className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm border">
          <h3 className="text-2xl font-bold mb-6 text-primary">Property Overview</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted">
              <p className="text-sm text-gray-600 uppercase tracking-wider">Total Area</p>
              <p className="text-2xl font-semibold mt-1">4 Acres</p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <p className="text-sm text-gray-600 uppercase tracking-wider">Number of Plots</p>
              <p className="text-2xl font-semibold mt-1">31 Premium Plots</p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <p className="text-sm text-gray-600 uppercase tracking-wider">Plot Sizes</p>
              <p className="text-2xl font-semibold mt-1">Starting from 5400 sq ft</p>
            </div>
            <div className="p-4 rounded-lg bg-muted">
              <p className="text-sm text-gray-600 uppercase tracking-wider">Road Width</p>
              <p className="text-2xl font-semibold mt-1">9M Internal Roads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;