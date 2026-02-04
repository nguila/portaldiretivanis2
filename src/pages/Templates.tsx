import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Download, ExternalLink, Search, Filter } from "lucide-react";
import { nis2Stages, Template } from "@/data/nis2Stages";
import { Input } from "@/components/ui/input";

interface TemplateWithCategory extends Template {
  category: string;
  categoryId: number;
  categoryColor: string;
}

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // Flatten all templates with their category info
  const allTemplates: TemplateWithCategory[] = nis2Stages.flatMap((stage) =>
    stage.templates.map((template) => ({
      ...template,
      category: stage.title,
      categoryId: stage.id,
      categoryColor: stage.colorClass,
    }))
  );

  // Filter templates based on search and category
  const filteredTemplates = allTemplates.filter((template) => {
    const matchesSearch =
      searchTerm === "" ||
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory =
      selectedCategory === null || template.categoryId === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Group filtered templates by category
  const templatesByCategory = filteredTemplates.reduce((acc, template) => {
    if (!acc[template.categoryId]) {
      acc[template.categoryId] = {
        title: template.category,
        color: template.categoryColor,
        templates: [],
      };
    }
    acc[template.categoryId].templates.push(template);
    return acc;
  }, {} as Record<number, { title: string; color: string; templates: TemplateWithCategory[] }>);

  const categories = nis2Stages.map((stage) => ({
    id: stage.id,
    title: stage.title,
    color: stage.colorClass,
    count: stage.templates.length,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary-foreground/10 rounded-xl">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold">Templates e Recursos NIS2</h1>
          </div>
          <p className="text-primary-foreground/80 max-w-2xl">
            Biblioteca completa de templates para apoiar a implementação do regime de cibersegurança. 
            Todos os documentos estão organizados por etapa de implementação.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-card rounded-2xl shadow-card p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Pesquisar templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filtrar:</span>
            </div>
          </div>
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Todos ({allTemplates.length})
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <span className={`w-2 h-2 rounded-full stage-indicator-dot ${category.color}`} />
                {category.title.split(" ")[0]} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        {Object.keys(templatesByCategory).length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Nenhum template encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou termos de pesquisa.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(templatesByCategory)
              .sort(([a], [b]) => Number(a) - Number(b))
              .map(([categoryId, { title, color, templates }]) => (
                <section key={categoryId}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`stage-indicator ${color} shrink-0`}>
                      {categoryId}
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">
                      {title}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      ({templates.length} template{templates.length !== 1 ? "s" : ""})
                    </span>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {templates.map((template, idx) => (
                      <a
                        key={idx}
                        href={template.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-card rounded-xl p-5 shadow-card hover:shadow-hover transition-all border border-transparent hover:border-primary/20"
                      >
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <FileText className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {template.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                              {template.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            Aceder ao template
                          </span>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              ))}
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-12 bg-secondary/50 rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{allTemplates.length}</div>
              <div className="text-sm text-muted-foreground">Templates disponíveis</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{categories.length}</div>
              <div className="text-sm text-muted-foreground">Categorias</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Gratuitos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">NIS2</div>
              <div className="text-sm text-muted-foreground">Conformidade</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/30 py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          Recursos disponibilizados para apoio à implementação do DL 125/2025. 
          Consulte sempre as autoridades competentes.
        </div>
      </footer>
    </div>
  );
};

export default Templates;
