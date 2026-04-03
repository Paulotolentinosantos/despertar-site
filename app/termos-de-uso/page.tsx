import Footer from "@/components/Footer"

export default function TermosDeUso() {
  return (
    <>
      <main className="min-h-screen bg-[#0F1728] px-6 py-16 text-[#FFEAC5] md:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold">
            Termos de Uso
          </h1>

          <p className="mb-6 text-[#FFEAC5]/80">
            Ao acessar este site, você concorda com os termos e condições descritos abaixo.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-semibold">
            1. Uso do site
          </h2>
          <p className="text-[#FFEAC5]/80">
            Este site tem caráter informativo e educacional. O uso das informações é de
            responsabilidade do usuário.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-semibold">
            2. Propriedade intelectual
          </h2>
          <p className="text-[#FFEAC5]/80">
            Todo o conteúdo presente neste site é protegido por direitos autorais e não
            pode ser reproduzido sem autorização.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-semibold">
            3. Limitação de responsabilidade
          </h2>
          <p className="text-[#FFEAC5]/80">
            Não garantimos resultados específicos com base nas informações fornecidas.
            As decisões tomadas são de responsabilidade do usuário.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-semibold">
            4. Modificações
          </h2>
          <p className="text-[#FFEAC5]/80">
            Podemos alterar estes termos a qualquer momento, sendo responsabilidade do
            usuário revisá-los periodicamente.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-semibold">
            5. Contato
          </h2>
          <p className="text-[#FFEAC5]/80">
            Para dúvidas, entre em contato:
            <br />
            <span className="text-[#E7992A]">suporte@seudominio.com</span>
          </p>

          <p className="mt-10 text-sm text-[#FFEAC5]/40">
            Última atualização: 2026
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}