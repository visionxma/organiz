"use client"

import { PLANS } from "@/lib/data/plans"
import { CONTACT } from "@/lib/constants"
import { SectionHeader } from "@/components/shared/section-header"
import { PlanCard } from "@/components/shared/plan-card"

export function Pricing() {
  const handleSubscribe = (planName: string) => {
    const message = `Olá! Gostaria de assinar o plano ${planName} do ORGANIZ.`
    const whatsappUrl = CONTACT.getWhatsAppUrl(message)
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="precos" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Planos que cabem no seu bolso"
          description="Escolha o plano ideal para seu negócio e comece a organizar sua gestão hoje mesmo"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PLANS.map((plan, index) => (
            <PlanCard key={index} plan={plan} onSubscribe={handleSubscribe} />
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
