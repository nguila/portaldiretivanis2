import euFlag from "@/assets/eu-flag.png";
import ptFlag from "@/assets/pt-flag.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Início", path: "/" },
  { label: "Setores", path: "/setores" },
  { label: "Obrigações", path: "/obrigacoes" },
  { label: "Incidentes", path: "/incidentes" },
  { label: "Sanções", path: "/sancoes" },
  { label: "Registo", path: "/registo" },
  { label: "FAQ", path: "/faq" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="hero-gradient text-primary-foreground">
      {/* Nav bar */}
      <nav className="max-w-6xl mx-auto px-6 pt-4 pb-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={euFlag} alt="Bandeira da União Europeia" className="w-8 h-6 object-cover rounded shadow border border-white/20" />
          <img src={ptFlag} alt="Bandeira de Portugal" className="w-8 h-6 object-cover rounded shadow border border-white/20" />
          <span className="font-bold text-sm ml-1 hidden sm:inline">NIS2 Portugal</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                location.pathname === item.path
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-1 bg-white/10 backdrop-blur-sm rounded-xl p-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Hero content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <img src={euFlag} alt="Bandeira da União Europeia" className="w-16 h-11 object-cover rounded-md shadow-lg border border-white/20" />
            <img src={ptFlag} alt="Bandeira de Portugal" className="w-16 h-11 object-cover rounded-md shadow-lg border border-white/20" />
          </div>
          <div className="h-12 w-px bg-white/30 hidden md:block" />
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Diretiva da União Europeia sobre Cibersegurança
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg mt-1">
              Decreto-Lei n.º 125/2025 | Diretiva NIS2
            </p>
          </div>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg md:text-xl font-light max-w-3xl leading-relaxed text-primary-foreground/90">
            Novo regime jurídico da cibersegurança — Transposição da Diretiva (UE) 2022/2555
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <span className="text-xs uppercase tracking-wider opacity-70">Diploma</span>
              <p className="font-semibold text-lg">DL 125/2025</p>
              <span className="text-xs opacity-60">4 de Dezembro</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <span className="text-xs uppercase tracking-wider opacity-70">Diretiva UE</span>
              <p className="font-semibold text-lg">2022/2555</p>
              <span className="text-xs opacity-60">NIS2</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <span className="text-xs uppercase tracking-wider opacity-70">Implementação</span>
              <p className="font-semibold text-lg">6 Etapas</p>
              <span className="text-xs opacity-60">Fases Principais</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
