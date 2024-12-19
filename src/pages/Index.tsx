import Hero from "@/components/Hero";
import PlotMap from "@/components/PlotMap";
import PropertyInfo from "@/components/PropertyInfo";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <PropertyInfo />
      <PlotMap />
      <ContactForm />
    </main>
  );
};

export default Index;