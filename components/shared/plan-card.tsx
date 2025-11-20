import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import type { Plan } from "@/lib/data/plans"

interface PlanCardProps {
  plan: Plan
  onSubscribe: (planName: string) => void
}

export function PlanCard({ plan, onSubscribe }: PlanCardProps) {
  return (
    <div
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
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
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
        onClick={() => onSubscribe(plan.name)}
      >
        Assinar Agora
      </Button>
    </div>
  )
}
