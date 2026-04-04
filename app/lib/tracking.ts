declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

// =========================
// TIPOS
// =========================
type BasePayload = {
  source?: string
  medium?: string
  campaign?: string
  content_name?: string
}

type StepPayload = BasePayload & {
  step?: number
}

// =========================
// QUIZ START
// =========================
export function trackQuizStart(payload?: BasePayload) {
  if (typeof window === "undefined") return

  const {
    source,
    medium,
    campaign,
    content_name = "Quiz Diagnóstico",
  } = payload || {}

  // Google Analytics
  if (typeof window.gtag === "function") {
    window.gtag("event", "quiz_start", {
      content_name,
      source,
      medium,
      campaign,
    })
  }

  // Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "QuizStart", {
      content_name,
      source,
      medium,
      campaign,
    })
  }
}

// =========================
// QUIZ STEP (progresso)
// =========================
export function trackQuizStep(payload?: StepPayload) {
  if (typeof window === "undefined") return

  const {
    step,
    content_name = "Quiz Diagnóstico",
  } = payload || {}

  // Google Analytics
  if (typeof window.gtag === "function") {
    window.gtag("event", "quiz_step", {
      step,
      content_name,
    })
  }

  // Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "QuizStep", {
      step,
      content_name,
    })
  }
}

// =========================
// QUIZ COMPLETE
// =========================
export function trackQuizComplete(payload?: BasePayload) {
  if (typeof window === "undefined") return

  const {
    source,
    medium,
    campaign,
    content_name = "Quiz Diagnóstico",
  } = payload || {}

  // Google Analytics
  if (typeof window.gtag === "function") {
    window.gtag("event", "quiz_complete", {
      content_name,
      source,
      medium,
      campaign,
    })
  }

  // Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "QuizComplete", {
      content_name,
      source,
      medium,
      campaign,
    })
  }
}

// =========================
// LEAD (FINAL)
// =========================
export function trackLead(payload?: BasePayload) {
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
      content_name,
      source,
      medium,
      campaign,
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

export {}
