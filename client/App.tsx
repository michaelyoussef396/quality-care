import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AccommodationTenancy from "./pages/AccommodationTenancy";
import AssistLifeStageTransition from "./pages/AssistLifeStageTransition";
import AssistPersonalActivities from "./pages/AssistPersonalActivities";
import AssistTravelTransport from "./pages/AssistTravelTransport";
import SharedLiving from "./pages/SharedLiving";
import CommunityParticipation from "./pages/CommunityParticipation";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/AccommodationTenancy" element={<AccommodationTenancy />} />
            <Route path="/AssistLifeStageTransition" element={<AssistLifeStageTransition />} />
            <Route path="/AssistPersonalActivities" element={<AssistPersonalActivities />} />
            <Route path="/AssistTravelTransport" element={<AssistTravelTransport />} />
            <Route path="/SharedLiving" element={<SharedLiving />} />
            <Route path="/CommunityParticipation" element={<CommunityParticipation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
