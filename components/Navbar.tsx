"use client"

import Image from "next/image"

type NavbarProps = {
  ctaLabel?: string
  ctaHref?: string
  showCta?: boolean
  logoSrc?: string
}

export default function Navbar({
  ctaLabel = "Fazer diagnóstico",
  ctaHref = "/diagnostico",
  showCta = true,
  logoSrc,
}: NavbarProps) {
  // fallback seguro
  const finalLogo = logoSrc || "/logo-despertar.png"

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#0F1728]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
        
        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src={finalLogo}
            alt={finalLogo} // ajuda a ver se mudou no inspect
            width={220}
            height={70}
            className="h-9 md:h-11 w-auto object-contain"
            priority
          />
        </div>

        {/* CTA */}
        {showCta && (
          <a
            href={ctaHref}
            className="rounded-full bg-[#E7992A] px-3 py-1.5 text-xs font-semibold text-[#0F1728] transition hover:scale-[1.03] md:px-5 md:py-2 md:text-sm"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </header>
  )
}