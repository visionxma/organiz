import { FEATURES } from "@/lib/data/features"
import { SectionHeader } from "@/components/shared/section-header"
import { FeatureCard } from "@/components/shared/feature-card"

export function Features() {
  return (
    <section id="funcionalidades" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Tudo que você precisa em um só lugar"
          description="Ferramentas poderosas para gerenciar seu negócio com eficiência e profissionalismo"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
