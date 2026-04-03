"use client"

import Image from "next/image"

type NavbarProps = {
  ctaLabel?: string
  ctaHref?: string
  showCta?: boolean
}

export default function Navbar({
  ctaLabel = "Fazer diagnóstico",
  ctaHref = "/diagnostico",
  showCta = true,
}: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#0F1728]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
        <div className="flex items-center">
          <Image
            src="/logo-despertar.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {showCta && (
          <a
            href={ctaHref}
            className="rounded-full bg-[#E7992A] px-5 py-2 text-sm font-semibold text-[#0F1728] transition hover:scale-[1.03]"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </header>
  )
}