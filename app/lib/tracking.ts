declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
  }
}

type LeadPayload = {
  source?: string
  medium?: string
  campaign?: string
  content_name?: string
}

export function trackLead(payload?: LeadPayload) {
  if (typeof window === "undefined") return

  const {
    source,
    medium,
    campaign,
    content_name = "Quiz Diagnóstico",
  } = payload || {}

  // Google Analytics
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      currency: "BRL",
      value: 1,
      source,
      medium,
      campaign,
      content_name,
    })
  }

  // Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      content_name,
      source,
      medium,
      campaign,
      value: 1,
      currency: "BRL",
    })
  }
}