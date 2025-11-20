import { CheckCircle2, Users, FileText, TrendingUp, Calendar, PieChart, type LucideIcon } from "lucide-react"

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const FEATURES: Feature[] = [
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
