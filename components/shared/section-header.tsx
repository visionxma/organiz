interface SectionHeaderProps {
  title: string
  description: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-4xl md:text-5xl font-bold text-balance">{title}</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{description}</p>
    </div>
  )
}
