import Image from "next/image"

type FooterProps = {
  primaryLinkLabel?: string
  primaryLinkHref?: string
  showPrimaryLink?: boolean
}

export default function Footer({
  primaryLinkLabel = "Começar meu diagnóstico",
  primaryLinkHref = "/diagnostico",
  showPrimaryLink = true,
}: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#0a1120] px-6 py-12 text-[#FFEAC5] md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3 md:items-start">
        <div className="flex items-center md:items-start">
          <div className="relative h-20 w-20 md:h-24 md:w-24">
            <Image
              src="/logo-despertar.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#E7992A]">
            Navegação
          </p>

          <div className="mt-4 flex flex-col gap-3 text-sm">
            {showPrimaryLink && (
              <a
                href={primaryLinkHref}
                className="text-[#FFEAC5]/80 transition hover:text-[#E7992A]"
              >
                {primaryLinkLabel}
              </a>
            )}

            <a
              href="/sobre"
              className="text-[#FFEAC5]/80 transition hover:text-[#E7992A]"
            >
              Sobre
            </a>

            <a
              href="/politica-de-privacidade"
              className="text-[#FFEAC5]/80 transition hover:text-[#E7992A]"
            >
              Política de Privacidade
            </a>

            <a
              href="/termos-de-uso"
              className="text-[#FFEAC5]/80 transition hover:text-[#E7992A]"
            >
              Termos de Uso
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#E7992A]">
            Contato
          </p>

          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a
              href="mailto:suporte@seudominio.com"
              className="text-[#FFEAC5]/80 transition hover:text-[#E7992A]"
            >
              suporte@seudominio.com
            </a>

            <a
              href="https://instagram.com/seuinstagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFEAC5]/80 transition hover:text-[#E7992A]"
            >
              Instagram
            </a>

            <p className="pt-3 text-[#FFEAC5]/45">
              © 2026 O Despertar de um Propósito. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}