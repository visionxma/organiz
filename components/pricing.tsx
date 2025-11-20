"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
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

export function Pricing() {
  const handleSubscribe = (planName: string) => {
    const message = `Olá! Gostaria de assinar o plano ${planName} do ORGANIZ.`
    const whatsappUrl = `https://wa.me/5599984680391?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="precos" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Planos que cabem no seu bolso</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Escolha o plano ideal para seu negócio e comece a organizar sua gestão hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-3xl p-8 relative ${
                plan.highlighted ? "ring-2 ring-primary shadow-2xl shadow-primary/20 scale-105" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                {plan.savings && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    {plan.savings}
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground">R$ {plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-12 text-lg ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30"
                    : "glass-effect border-white/20 text-foreground hover:bg-white/5"
                }`}
                onClick={() => handleSubscribe(plan.name)}
              >
                Assinar Agora
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Todos os planos incluem 7 dias de garantia. Não gostou? Devolvemos seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  )
}
