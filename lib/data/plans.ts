export interface Plan {
  name: string
  price: string
  period: string
  savings?: string
  description: string
  features: string[]
  highlighted: boolean
}

export const PLANS: Plan[] = [
  {
    name: "Mensal",
    price: "29,90",
    period: "/mês",
    description: "Perfeito para começar",
    features: [
      "Gestão completa de clientes",
      "Controle de serviços Kanban",
      "Orçamentos ilimitados",
      "Controle financeiro",
      "Relatórios detalhados",
      "Suporte via WhatsApp",
    ],
    highlighted: false,
  },
  {
    name: "Anual",
    price: "307,00",
    period: "/ano",
    savings: "Economize 2 meses",
    description: "Melhor custo-benefício",
    features: [
      "Gestão completa de clientes",
      "Controle de serviços Kanban",
      "Orçamentos ilimitados",
      "Controle financeiro",
      "Relatórios detalhados",
      "Suporte via WhatsApp",
      "Pagamento parcelado no cartão",
    ],
    highlighted: true,
  },
]
