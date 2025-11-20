import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-primary tracking-tight">ORGANIZ</span>
        </div>

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

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
          Começar Agora
        </Button>
      </div>
    </header>
  )
}
