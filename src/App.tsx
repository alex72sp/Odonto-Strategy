import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Consultoria from "./pages/Consultoria";
import Gestao from "./pages/Gestao";
import Faturamento from "./pages/Faturamento";
import Diagnostico from "./pages/Diagnostico";
import ConsultoriaPilar from "./pages/ConsultoriaPilar";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Trajetoria from "./pages/Trajetoria";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consultoria-odontologica" element={<Consultoria />} />
          <Route path="/gestao-clinica-odontologica" element={<Gestao />} />
          <Route path="/aumentar-faturamento-clinica-odontologica" element={<Faturamento />} />
          <Route path="/diagnostico-clinica-odontologica" element={<Diagnostico />} />
          <Route path="/consultoria-odontologica-completa" element={<ConsultoriaPilar />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/nossa-trajetoria-clinicas-odontologicas" element={<Trajetoria />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;