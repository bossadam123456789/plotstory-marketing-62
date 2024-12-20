import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Keep track of whether the message was set by plot selection
  const [plotMessage, setPlotMessage] = useState("");

  useEffect(() => {
    // If message changes and it includes "plot number", update plotMessage
    if (formData.message.includes("plot number")) {
      setPlotMessage(formData.message);
    }
  }, [formData.message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setPlotMessage(""); // Reset plot message after submission
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
      // If it's the message field and we have a plot message, preserve it
      message: id === "message" ? value : (plotMessage || prev.message),
    }));
  };

  return (
    <div className="bg-gradient-secondary py-16 md:py-24">
      <div className="container max-w-2xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary-dark">Contact Us</h2>
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-primary-dark">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/50 border-primary/20 focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-primary-dark">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/50 border-primary/20 focus:border-primary"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-primary-dark">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+254 XXX XXX XXX"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-white/50 border-primary/20 focus:border-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-primary-dark">
                Your Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your interest..."
                value={formData.message || plotMessage}
                onChange={handleInputChange}
                className="min-h-[120px] md:min-h-[150px] bg-white/50 border-primary/20 focus:border-primary"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary-dark text-white text-lg py-6 transition-colors duration-300"
            >
              Send Inquiry
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
