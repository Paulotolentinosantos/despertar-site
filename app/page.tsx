import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0F1728] text-[#FFEAC5]">
      <Navbar />
      <section className="px-6 py-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.22em] text-[#E7992A]">
            Em construção
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#FFF0D1] sm:text-5xl lg:text-6xl">
            Uma página principal para a sua marca vai entrar aqui.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#FFEAC5]/75">
            Enquanto isso, você pode acessar o diagnóstico em /quiz.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}