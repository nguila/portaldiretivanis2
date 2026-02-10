import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Setores from "./pages/Setores";
import Obrigacoes from "./pages/Obrigacoes";
import Incidentes from "./pages/Incidentes";
import Sancoes from "./pages/Sancoes";
import Registo from "./pages/Registo";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/setores" element={<Setores />} />
          <Route path="/obrigacoes" element={<Obrigacoes />} />
          <Route path="/incidentes" element={<Incidentes />} />
          <Route path="/sancoes" element={<Sancoes />} />
          <Route path="/registo" element={<Registo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
