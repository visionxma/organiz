"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { PROFESSIONS } from "@/lib/constants"
import { StatCard } from "@/components/shared/stat-card"

export function Hero() {
  const [currentProfession, setCurrentProfession] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentProfession((prev) => (prev + 1) % PROFESSIONS.length)
        setIsAnimating(false)
      }, 300)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Simplifique sua gestão hoje mesmo
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            Gestão simplificada <br />
            para{" "}
            <span className="relative inline-block">
              <span
                className={`text-primary transition-all duration-300 ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                {PROFESSIONS[currentProfession]}
              </span>
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            O sistema completo para gerenciar seus clientes, serviços, orçamentos e finanças em um só lugar. Simples,
            poderoso e feito para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/30 text-lg px-8 h-14 group"
              onClick={() => {
                const pricingSection = document.getElementById("precos")
                pricingSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass-effect border-white/20 text-foreground hover:bg-white/5 text-lg px-8 h-14 bg-transparent"
            >
              Ver Demonstração
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <StatCard value="100%" label="Online" />
            <StatCard value="24/7" label="Acesso" />
            <StatCard value="R$29" label="Por mês" />
          </div>
        </div>
      </div>
    </section>
  )
}
