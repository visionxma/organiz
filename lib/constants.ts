export const PROFESSIONS = [
  "Editores de Vídeo",
  "Designers",
  "Gestores de Tráfego",
  "Advogados",
  "Serviços Gráficos",
  "Fotógrafos",
  "Consultores",
  "Arquitetos",
] as const

export const WHATSAPP_NUMBER = "5599984680391"

export const CONTACT = {
  whatsapp: WHATSAPP_NUMBER,
  getWhatsAppUrl: (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
} as const
