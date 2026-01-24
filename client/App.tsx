import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Solar from "./pages/Solar";
import Wind from "./pages/Wind";
import EnergyStorage from "./pages/EnergyStorage";
import EVStations from "./pages/EVStations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/quote" element={<GetQuote />} />
          <Route path="/advisory" element={<Advisory />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/digital-solutions" element={<DigitalSolutions />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/solar" element={<Solar />} />
          <Route path="/solutions/wind" element={<Wind />} />
          <Route path="/solutions/energy-storage" element={<EnergyStorage />} />
          <Route path="/solutions/ev-stations" element={<EVStations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
