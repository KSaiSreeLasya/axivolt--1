import Header from "@/components/Header";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

interface BillRange {
  min: number;
  max: number;
  capacity: number;
  previousPrice: number;
  currentPrice: number;
}

const billRanges: BillRange[] = [
  {
    min: 1500,
    max: 2500,
    capacity: 3,
    previousPrice: 210000,
    currentPrice: 205000,
  },
  {
    min: 2501,
    max: 3500,
    capacity: 4,
    previousPrice: 271000,
    currentPrice: 266000,
  },
  {
    min: 3501,
    max: 4500,
    capacity: 5,
    previousPrice: 332000,
    currentPrice: 327000,
  },
  {
    min: 4501,
    max: 5500,
    capacity: 6,
    previousPrice: 393000,
    currentPrice: 388000,
  },
  {
    min: 5501,
    max: 6500,
    capacity: 7,
    previousPrice: 454000,
    currentPrice: 449000,
  },
  {
    min: 6501,
    max: 7500,
    capacity: 8,
    previousPrice: 515000,
    currentPrice: 510000,
  },
  {
    min: 7501,
    max: 10500,
    capacity: 10,
    previousPrice: 637000,
    currentPrice: 632000,
  },
];

const billOptions = billRanges.map(
  (range) => `₹${range.min.toLocaleString()} - ₹${range.max.toLocaleString()}`,
);

export default function GetQuote() {
  const [category, setCategory] = useState<
    "residential" | "housing" | "commercial"
  >("residential");
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    pinCode: "",
    billRange: "",
    capacity: "",
    agreeToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const selectedRangeIndex = billOptions.indexOf(formData.billRange);
  const selectedBillRange =
    selectedRangeIndex >= 0 ? billRanges[selectedRangeIndex] : null;
  const suggestedCapacity = selectedBillRange?.capacity || null;

  // Auto-fill capacity when bill range changes
  const handleBillRangeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      billRange: value,
      capacity:
        billRanges[billOptions.indexOf(value)]?.capacity.toString() || "",
    }));
  };

  const handleCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      capacity: e.target.value,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Quote submitted:", { category, ...formData });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-32 pb-20 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get a <span className="text-cyan">Quote</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Choose your category and fill the form to receive a free
              consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <button
              onClick={() => setCategory("residential")}
              className={`py-3 px-6 rounded font-semibold transition-all ${
                category === "residential"
                  ? "bg-cyan text-background"
                  : "bg-card border border-border text-white hover:border-cyan"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setCategory("housing")}
              className={`py-3 px-6 rounded font-semibold transition-all ${
                category === "housing"
                  ? "bg-cyan text-background"
                  : "bg-card border border-border text-white hover:border-cyan"
              }`}
            >
              Housing Society
            </button>
            <button
              onClick={() => setCategory("commercial")}
              className={`py-3 px-6 rounded font-semibold transition-all ${
                category === "commercial"
                  ? "bg-cyan text-background"
                  : "bg-card border border-border text-white hover:border-cyan"
              }`}
            >
              Commercial
            </button>
          </div>

          {/* Quote Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="bg-card rounded-lg border border-border p-8">
              <h2 className="text-2xl font-bold mb-8">
                {category === "residential" && "Residential Quote Form"}
                {category === "housing" && "Housing Society Quote Form"}
                {category === "commercial" && "Commercial Quote Form"}
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg">
                  <p className="text-green-400 font-semibold">
                    Thank you! We'll contact you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Enter Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded bg-background border border-border text-foreground focus:outline-none focus:border-cyan transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Whatsapp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded bg-background border border-border text-foreground focus:outline-none focus:border-cyan transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Pin Code */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Pin Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded bg-background border border-border text-foreground focus:outline-none focus:border-cyan transition-colors"
                    placeholder="500049"
                  />
                </div>

                {/* Average Monthly Bill */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    What is your average monthly bill?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="billRange"
                    value={formData.billRange}
                    onChange={(e) => handleBillRangeChange(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded bg-background border border-border text-foreground focus:outline-none focus:border-cyan transition-colors"
                  >
                    <option value="">Select</option>
                    {billOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {suggestedCapacity && (
                    <p className="text-sm text-gray-400 mt-2">
                      Suggested capacity for this bill range:{" "}
                      {suggestedCapacity} kW
                    </p>
                  )}
                </div>

                {/* Select Capacity */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Select Capacity (kW)
                  </label>
                  <input
                    type="text"
                    value={formData.capacity}
                    onChange={handleCapacityChange}
                    className="w-full px-4 py-2 rounded bg-background border border-border text-foreground focus:outline-none focus:border-cyan transition-colors"
                    placeholder="Select capacity"
                    readOnly
                  />
                </div>

                {/* GST Section */}
                {selectedBillRange && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold">GST</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Previous GST */}
                      <div className="bg-background rounded border border-border p-4 text-center">
                        <p className="text-sm text-gray-400 mb-2">
                          Previous GST
                        </p>
                        <p className="text-2xl font-bold text-cyan mb-1">
                          ₹{selectedBillRange.previousPrice.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 line-through">
                          ₹{selectedBillRange.previousPrice.toLocaleString()}
                        </p>
                      </div>

                      {/* Current GST */}
                      <div className="bg-background rounded border border-cyan p-4 text-center">
                        <p className="text-sm text-gray-400 mb-2">
                          Current GST
                        </p>
                        <p className="text-2xl font-bold text-cyan mb-1">
                          ₹{selectedBillRange.currentPrice.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-500 line-through">
                          ₹{selectedBillRange.previousPrice.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Estimated Cost */}
                    <div className="bg-background/50 rounded border border-cyan/50 p-4">
                      <p className="text-cyan font-bold text-lg">
                        Estimated Cost: ₹
                        {selectedBillRange.currentPrice.toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}

                {/* Agreement Checkbox */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 cursor-pointer accent-cyan"
                  />
                  <span className="text-sm text-gray-400">
                    I agree to terms of service & privacy policy
                  </span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-cyan text-background px-6 py-3 rounded font-bold hover:bg-yellow-green transition-all"
                >
                  Submit Details
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="bg-card rounded-lg border border-border overflow-hidden h-full min-h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1508873699372-f7615961e270?w=600&h=800&fit=crop"
                alt="Solar Installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Get a Quote with AXIVOLT?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Free Consultation",
                description: "Get expert advice tailored to your energy needs",
              },
              {
                title: "Accurate Pricing",
                description: "Transparent pricing with no hidden costs",
              },
              {
                title: "Fast Response",
                description: "Get your quote within 24 hours",
              },
              {
                title: "Expert Support",
                description: "Dedicated team to guide you throughout",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg border border-border p-6 text-center"
              >
                <div className="w-12 h-12 bg-cyan/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <CheckCircle className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 AXIVOLT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
