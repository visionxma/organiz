import { CheckCircle2, Users, FileText, TrendingUp, Calendar, PieChart } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Gestão de Clientes",
    description: "Mantenha todos os dados dos seus clientes organizados e acessíveis em um só lugar.",
  },
  {
    icon: FileText,
    title: "Controle de Serviços",
    description: "Organize seus projetos e serviços com sistema Kanban visual e intuitivo.",
  },
  {
    icon: TrendingUp,
    title: "Orçamentos e Propostas",
    description: "Crie orçamentos profissionais e acompanhe o status de cada proposta.",
  },
  {
    icon: Calendar,
    title: "Gestão de Atividades",
    description: "Planeje e acompanhe todas as suas tarefas e compromissos diários.",
  },
  {
    icon: PieChart,
    title: "Controle Financeiro",
    description: "Visualize receitas, despesas e tenha controle total do seu fluxo de caixa.",
  },
  {
    icon: CheckCircle2,
    title: "Relatórios Detalhados",
    description: "Análises completas para tomar decisões baseadas em dados reais.",
  },
]

export function Features() {
  return (
    <section id="funcionalidades" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Tudo que você precisa em um só lugar</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Ferramentas poderosas para gerenciar seu negócio com eficiência e profissionalismo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
