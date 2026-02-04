import { Link } from "react-router-dom";
import { ExternalLink, FileText, HelpCircle, Scale, FolderOpen } from "lucide-react";

interface QuickLink {
  icon: typeof FileText;
  title: string;
  description: string;
  url: string;
  isInternal?: boolean;
}

const quickLinks: QuickLink[] = [
  {
    icon: FileText,
    title: "Texto Oficial",
    description: "Diretiva (UE) 2022/2555",
    url: "https://eur-lex.europa.eu/eli/dir/2022/2555"
  },
  {
    icon: Scale,
    title: "Transposição Nacional",
    description: "DL 125/2025, 4 Dezembro",
    url: "https://diariodarepublica.pt/dr/detalhe/decreto-lei/125-2025-962603401"
  },
  {
    icon: HelpCircle,
    title: "FAQ NIS2",
    description: "Perguntas frequentes",
    url: "https://nis2directive.eu/frequently-asked-question-about-nis2-directive/"
  },
  {
    icon: FolderOpen,
    title: "Templates",
    description: "Biblioteca de recursos",
    url: "/templates",
    isInternal: true
  }
];

const QuickLinks = () => {
  return (
    <div className="bg-card rounded-2xl shadow-card p-6 mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Recursos Úteis
      </h3>
      
      <div className="grid md:grid-cols-4 gap-4">
        {quickLinks.map((link, index) => {
          const Icon = link.icon;
          
          if (link.isInternal) {
            return (
              <Link
                key={index}
                to={link.url}
                className="flex items-center gap-3 p-4 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground text-sm">{link.title}</h4>
                  <p className="text-xs text-muted-foreground truncate">{link.description}</p>
                </div>
              </Link>
            );
          }
          
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-secondary/30 transition-all group"
            >
              <div className="p-2 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground text-sm">{link.title}</h4>
                <p className="text-xs text-muted-foreground truncate">{link.description}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
