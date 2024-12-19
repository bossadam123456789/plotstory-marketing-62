import { Check } from "lucide-react";

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
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Property Highlights</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <Check className="h-6 w-6 text-forest" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-forest text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Property Overview</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sand/80">Total Area</p>
              <p className="text-2xl">4 Acres</p>
            </div>
            <div>
              <p className="text-sand/80">Number of Plots</p>
              <p className="text-2xl">31 Premium Plots</p>
            </div>
            <div>
              <p className="text-sand/80">Plot Sizes</p>
              <p className="text-2xl">Starting from 5400 sq ft</p>
            </div>
            <div>
              <p className="text-sand/80">Road Width</p>
              <p className="text-2xl">9M Internal Roads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;