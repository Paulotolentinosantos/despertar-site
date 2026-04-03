import Footer from "@/components/Footer"

export default function PoliticaPrivacidade() {
  return (
    <>
      <main className="min-h-screen bg-[#0F1728] px-6 py-16 text-[#FFEAC5] md:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold">
            Política de Privacidade
          </h1>

          <p className="mb-6 text-[#FFEAC5]/80">
            Esta Política de Privacidade descreve como suas informações são coletadas,
            utilizadas e protegidas ao utilizar este site.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-semibold">
            1. Coleta de informações
          </h2>
          <p className="text-[#FFEAC5]/80">
            Coletamos informações fornecidas por você, como nome, e-mail e respostas ao
            diagnóstico, com o objetivo de oferecer uma experiência personalizada.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-semibold">
            2. Uso das informações
          </h2>
          <p className="text-[#FFEAC5]/80">
            As informações coletadas são utilizadas para:
          </p>
          <ul className="mt-2 list-disc pl-5 text-[#FFEAC5]/80">
            <li>Personalizar sua experiência</li>
            <li>Enviar comunicações relevantes</li>
            <li>Melhorar nossos serviços</li>
          </ul>

          <h2 className="mt-8 mb-3 text-xl font-semibold">
            3. Compartilhamento de dados
          </h2>
          <p className="text-[#FFEAC5]/80">
            Seus dados não são vendidos ou compartilhados com terceiros, exceto quando
            necessário para operação da plataforma ou exigido por lei.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-semibold">
            4. Segurança
          </h2>
          <p className="text-[#FFEAC5]/80">
            Adotamos medidas de segurança para proteger suas informações contra acesso
            não autorizado.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-semibold">
            5. Seus direitos
          </h2>
          <p className="text-[#FFEAC5]/80">
            Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento.
          </p>

          <h2 className="mt-8 mb-3 text-xl font-semibold">
            6. Contato
          </h2>
          <p className="text-[#FFEAC5]/80">
            Para dúvidas sobre esta política, entre em contato pelo e-mail:
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