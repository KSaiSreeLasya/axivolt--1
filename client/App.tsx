import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingActionButton from "./components/FloatingActionButton";
import Index from "./pages/Index";
import Advisory from "./pages/Advisory";
import Procurement from "./pages/Procurement";
import DigitalSolutions from "./pages/DigitalSolutions";
import Industry from "./pages/Industry";
import Careers from "./pages/Careers";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import GetQuote from "./pages/GetQuote";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import Solar from "./pages/Solar";
import SolarResidential from "./pages/SolarResidential";
import SolarCommercial from "./pages/SolarCommercial";
import SolarGovernment from "./pages/SolarGovernment";
import Wind from "./pages/Wind";
import EnergyStorage from "./pages/EnergyStorage";
import EVStations from "./pages/EVStations";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Compliance from "./pages/Compliance";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FloatingActionButton />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/quote" element={<GetQuote />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/digital-solutions" element={<DigitalSolutions />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/solar" element={<Solar />} />
          <Route
            path="/solutions/solar/residential"
            element={<SolarResidential />}
          />
          <Route
            path="/solutions/solar/commercial"
            element={<SolarCommercial />}
          />
          <Route
            path="/solutions/solar/government"
            element={<SolarGovernment />}
          />
          <Route path="/solutions/wind" element={<Wind />} />
          <Route path="/solutions/energy-storage" element={<EnergyStorage />} />
          <Route path="/solutions/ev-stations" element={<EVStations />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/compliance" element={<Compliance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Initialize root only once, properly handling HMR
const initializeApp = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) return;

  // Get or create root
  const root = (window as any).__APP_ROOT__ || createRoot(rootElement);
  (window as any).__APP_ROOT__ = root;

  root.render(<App />);
};

// Call init when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
