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
    <div className="container py-12 md:py-24 px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-forest">
            Property Highlights
          </h2>
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Check className="h-6 w-6 text-forest flex-shrink-0 mt-1" />
                <span className="text-base md:text-lg text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="bg-forest text-white p-8 md:p-10 rounded-2xl shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-sand">Property Overview</h3>
          <div className="space-y-8">
            <div className="bg-forest-light p-6 rounded-xl">
              <p className="text-sand/80 text-sm uppercase tracking-wider">Total Area</p>
              <p className="text-2xl md:text-3xl font-semibold mt-2">4 Acres</p>
            </div>
            <div className="bg-forest-light p-6 rounded-xl">
              <p className="text-sand/80 text-sm uppercase tracking-wider">Number of Plots</p>
              <p className="text-2xl md:text-3xl font-semibold mt-2">31 Premium Plots</p>
            </div>
            <div className="bg-forest-light p-6 rounded-xl">
              <p className="text-sand/80 text-sm uppercase tracking-wider">Plot Sizes</p>
              <p className="text-2xl md:text-3xl font-semibold mt-2">Starting from 5400 sq ft</p>
            </div>
            <div className="bg-forest-light p-6 rounded-xl">
              <p className="text-sand/80 text-sm uppercase tracking-wider">Road Width</p>
              <p className="text-2xl md:text-3xl font-semibold mt-2">9M Internal Roads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;