"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/shared/logo"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#funcionalidades"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Funcionalidades
          </a>
          <a href="#precos" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Preços
          </a>
        </nav>

        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
          onClick={() => {
            const pricingSection = document.getElementById("precos")
            pricingSection?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Começar Agora
        </Button>
      </div>
    </header>
  )
}
