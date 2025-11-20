"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { CONTACT } from "@/lib/constants"

export function CTA() {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de conhecer melhor o ORGANIZ."
    const whatsappUrl = CONTACT.getWhatsAppUrl(message)
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center space-y-8 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Pronto para transformar sua gestão?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance mb-8">
              Junte-se a centenas de profissionais que já simplificaram sua rotina com o ORGANIZ
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/30 text-lg px-8 h-14 group"
                onClick={handleWhatsApp}
              >
                Falar no WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Resposta rápida • Sem compromisso • Tire todas suas dúvidas
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-muted-foreground text-sm">
        <p>© 2025 ORGANIZ. Todos os direitos reservados.</p>
      </footer>
    </section>
  )
}
