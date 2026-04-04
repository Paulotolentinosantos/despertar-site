'use client'

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import { motion } from "framer-motion"

const sectionVariants = {
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

const fadeUpVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const cardVariants = {
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const chipVariants = {
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

function ProductSection({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={`relative -mt-16 overflow-hidden px-6 pb-14 pt-24 md:px-10 lg:px-14 lg:pt-28 ${className}`}
    >
      <div className="absolute inset-0 bg-[#0F1728]/82 backdrop-blur-[6px]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,rgba(255,255,255,0.04),transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />

      <div className="relative z-10">{children}</div>
    </section>
  )
}

export default function ProdutoPage() {
  return (
    <main className="bg-[#0F1728]">
      <Navbar ctaLabel="Quero fazer parte" ctaHref="#oferta" />

      <div className="relative overflow-hidden bg-[#07101f] px-4 pb-24 pt-24 text-[#FFEAC5] md:px-8 lg:px-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#07101f_0%,#081325_30%,#07101f_100%)]" />

          <motion.div
            initial={{ opacity: 0.35, y: 0, scale: 1 }}
            animate={{
              opacity: [0.35, 0.55, 0.35],
              y: [0, -10, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-[#E7992A]/[0.05] blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0.28, y: 0, scale: 1 }}
            animate={{
              opacity: [0.28, 0.48, 0.28],
              y: [0, -14, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute right-[-120px] top-[180px] h-[360px] w-[360px] rounded-full bg-[#E7992A]/[0.04] blur-3xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* HERO */}
          <section className="relative overflow-hidden px-6 pb-16 pt-16 md:px-10 lg:px-14 lg:pt-20">
            <div className="absolute inset-0 bg-[#0F1728]/82 backdrop-blur-[6px]" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent)]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,rgba(255,255,255,0.04),transparent)]" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />

            <motion.div
              variants={sectionVariants}
              initial={false}
              animate="show"
              className="relative z-10 max-w-5xl"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-xs font-medium uppercase tracking-[0.24em] text-[#E7992A] sm:text-sm"
              >
                O Despertar de um Propósito
              </motion.p>

              <motion.h1
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 max-w-5xl text-[clamp(2.4rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#FFF0D1]"
              >
                Se você sabe que precisa mudar,
                <br />
                mas continua travado e sem direção,
                <br />
                isso aqui é pra você.
              </motion.h1>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-8 max-w-3xl text-[clamp(1rem,1.2vw,1.22rem)] leading-[1.9] text-[#FFEAC5]/80"
              >
                Descubra o que está te bloqueando, ganhe clareza sobre quem você é
                e construa um caminho real para sair do lugar — com direção,
                confiança e ação.
              </motion.p>

              <motion.div
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <motion.a
                  href="#oferta"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center justify-center rounded-full bg-[#E7992A] px-8 py-4 text-[clamp(0.96rem,1vw,1.04rem)] font-semibold text-[#0F1728] shadow-[0_10px_30px_rgba(231,153,42,0.18)]"
                >
                  Quero fazer parte
                </motion.a>

                <motion.a
                  href="#conteudo"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[clamp(0.96rem,1vw,1.04rem)] text-[#FFEAC5]/72 transition duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-[#FFEAC5]"
                >
                  Ver o que está dentro
                </motion.a>
              </motion.div>

              <motion.div
                variants={sectionVariants}
                initial={false}
                animate="show"
                className="mt-8 flex flex-wrap gap-3"
              >
                {[
                  "Curso online",
                  "Acesso digital",
                  "Processo estruturado",
                  "Autoconhecimento + ação prática",
                ].map((chip, i) => (
                  <motion.span
                    key={i}
                    variants={chipVariants}
                    initial={{ opacity: 1, y: 0, scale: 1 }}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[#FFEAC5]/65"
                  >
                    {chip}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </section>

          {/* VOCÊ JÁ TENTOU */}
          <ProductSection>
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-4xl"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                Talvez isso já esteja acontecendo há algum tempo
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                Você já tentou mudar.
                <br />
                Mas, no fundo, continua no mesmo lugar.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-3xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                Você pensa, reflete, busca entender sua vida, tenta se organizar…
                <br />
                <br />
                Mas, quando chega a hora de agir, algo trava.
                Você perde força, volta para os mesmos padrões e sente que sua
                vida não avança como poderia.
              </motion.p>
            </motion.div>
          </ProductSection>

          {/* IDENTIFICAÇÃO */}
          <ProductSection>
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                Talvez o problema não seja falta de potencial
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                O problema não é falta de esforço.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-5 max-w-2xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                O problema é que você pode estar tentando agir sem clareza,
                sem entender o que realmente está te travando.
                <br />
                <br />
                E isso mantém você preso no mesmo ciclo:
                pensa muito, sente muito, mas anda pouco.
              </motion.p>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              {[
                "Você sente que nasceu para algo maior, mas não sabe por onde começar.",
                "Você quer mudar, mas trava na hora de agir.",
                "Você vive no automático e sente que falta sentido.",
                "Você entende muita coisa, mas ainda não transforma isso em direção prática.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <p className="text-sm leading-7 text-[#FFEAC5]/78 sm:text-base">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </ProductSection>

          {/* BIG IDEA */}
          <ProductSection>
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-4xl"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                A grande virada de chave
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                O problema não é falta de propósito.
                <br />
                É falta de clareza e ação.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-3xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                Propósito não é algo mágico que simplesmente aparece.
                <br />
                <br />
                Ele é construído quando você entende melhor quem é,
                aprende a lidar com seus bloqueios e começa a agir com mais
                direção, consistência e consciência.
              </motion.p>
            </motion.div>
          </ProductSection>

          {/* VÍDEO DE APRESENTAÇÃO */}
          <ProductSection>
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="mx-auto max-w-5xl"
            >
              <motion.div className="text-center">
                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
                >
                  Assista antes de continuar
                </motion.p>

                <motion.h2
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
                >
                  Isso pode te ajudar a enxergar com mais clareza
                  <br />
                  o que está acontecendo na sua vida hoje.
                </motion.h2>

                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
                >
                  Se esse processo fizer sentido para você, continue a página depois
                  do vídeo e veja como o curso foi estruturado para te ajudar a sair
                  da confusão e entrar em ação com mais direção.
                </motion.p>
              </motion.div>

              <motion.div
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-[#0A1322] shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
              >
                <div className="border-b border-white/10 bg-white/[0.03] px-5 py-4">
                  <p className="text-sm text-[#FFEAC5]/65">
                    Vídeo de apresentação
                  </p>
                </div>

                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/MpKMDwJnpsI"
                    title="Vídeo de apresentação - O Despertar de um Propósito"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute left-0 top-0 h-full w-full"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={sectionVariants}
                initial={false}
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-3"
              >
                {[
                  "Vídeo hospedado no YouTube",
                  "Sem custo extra",
                  "Pode trocar o link depois",
                ].map((chip, i) => (
                  <motion.span
                    key={i}
                    variants={chipVariants}
                    initial={{ opacity: 1, y: 0, scale: 1 }}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[#FFEAC5]/65"
                  >
                    {chip}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </ProductSection>

          {/* O QUE É */}
          <ProductSection>
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-4xl"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                O que é esse curso
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                Um processo para sair da confusão mental
                e entrar em ação com clareza e direção.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-5 max-w-3xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                O Despertar de um Propósito foi criado para ajudar você a se
                conhecer com mais profundidade, entender seus bloqueios internos,
                ganhar clareza sobre sua direção e transformar tudo isso em ação
                prática.
                <br />
                <br />
                Não é sobre motivação passageira.
                É sobre base, clareza, coragem emocional e movimento real.
              </motion.p>
            </motion.div>
          </ProductSection>

          {/* TRANSFORMAÇÃO */}
          <ProductSection>
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                O que muda quando você entra nesse processo
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                Você deixa de se sentir travado
                e começa a entrar em movimento.
              </motion.h2>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {[
                {
                  title: "Mais clareza sobre si mesmo",
                  text: "Você entende melhor seus padrões, emoções, forças, fragilidades e o que está por trás da sua confusão.",
                },
                {
                  title: "Mais consciência dos bloqueios",
                  text: "Você começa a enxergar o que trava sua ação e mantém você preso em ciclos de estagnação.",
                },
                {
                  title: "Mais equilíbrio interno",
                  text: "Você sai do improviso emocional e constrói mais coerência entre mente, rotina, escolhas e direção.",
                },
                {
                  title: "Mais direção",
                  text: "Você desenvolve uma visão mais clara do que faz sentido para você e do que quer construir.",
                },
                {
                  title: "Mais coragem para agir",
                  text: "Você aprende a se mover com mais consciência, mesmo sem ter tudo resolvido ou perfeito.",
                },
                {
                  title: "Mais ação prática",
                  text: "Você transforma reflexão em passos concretos, aplicáveis e alinhados à sua realidade.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#E7992A]">
                    {item.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#FFEAC5]/75 sm:text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial={{ opacity: 1, y: 0 }}
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="mt-12 flex justify-center"
            >
              <motion.a
                href="#oferta"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center rounded-full bg-[#E7992A] px-8 py-4 text-[clamp(0.96rem,1vw,1.04rem)] font-semibold text-[#0F1728] shadow-[0_10px_30px_rgba(231,153,42,0.18)]"
              >
                Quero destravar minha vida
              </motion.a>
            </motion.div>
          </ProductSection>

          {/* CONTEÚDO */}
          <ProductSection className="scroll-mt-24">
            <div id="conteudo" className="absolute -top-24" />
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                O que você vai encontrar dentro
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                Um caminho estruturado para transformar
                autoconhecimento em direção prática.
              </motion.h2>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {[
                {
                  n: "01",
                  title: "Autoconhecimento profundo",
                  text: "Uma base para entender melhor sua identidade, emoções, vulnerabilidades, padrões e forma de se perceber no mundo.",
                },
                {
                  n: "02",
                  title: "Bloqueios e travas emocionais",
                  text: "Um mergulho nos medos, inseguranças, autossabotagens, ansiedades e barreiras que dificultam seu movimento.",
                },
                {
                  n: "03",
                  title: "Mindset e crenças",
                  text: "Uma nova forma de interpretar sua história, suas possibilidades e sua capacidade de crescer e se reconstruir.",
                },
                {
                  n: "04",
                  title: "Equilíbrio entre áreas da vida",
                  text: "Uma visão mais integrada entre rotina, energia, bem-estar, prioridades e construção de uma vida coerente.",
                },
                {
                  n: "05",
                  title: "Propósito, visão e direção",
                  text: "Mais clareza sobre o que faz sentido para você, para onde quer ir e o que deseja construir de forma intencional.",
                },
                {
                  n: "06",
                  title: "Plano de ação real",
                  text: "Uma estrutura prática para tirar tudo do campo das ideias e transformar sua clareza em movimento.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E7992A] text-sm font-bold text-[#0F1728]">
                    {item.n}
                  </div>
                  <h3 className="text-xl font-semibold text-[#FFEAC5]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#FFEAC5]/72 sm:text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* BLOCO DE FERRAMENTAS / PRÁTICA */}
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-16 max-w-4xl"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                Mais do que conteúdo
              </motion.p>

              <motion.h3
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-2xl font-semibold text-[#FFF0D1] sm:text-3xl"
              >
                Você não vai ficar só entendendo.
                <br />
                Você vai começar a agir.
              </motion.h3>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-3xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                Dentro do curso, você vai encontrar ferramentas práticas que te ajudam
                a transformar clareza em ação real.
                <br /><br />
                A ideia não é só você entender sua vida.
                É você começar a organizar, estruturar e executar com mais direção.
              </motion.p>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {[
                {
                  title: "Clareza de propósito e direção",
                  text: "Ferramentas que te ajudam a entender quem você é, o que faz sentido e qual direção seguir.",
                },
                {
                  title: "Organização da vida e prioridades",
                  text: "Estruturas para organizar áreas da sua vida, seu tempo e suas prioridades com mais consciência.",
                },
                {
                  title: "Metas e plano de ação",
                  text: "Um caminho para transformar intenção em objetivos claros e ações práticas.",
                },
                {
                  title: "Rotina e execução",
                  text: "Formas de sair da teoria e começar a construir consistência no seu dia a dia.",
                },
                {
                  title: "Quebra de bloqueios emocionais",
                  text: "Processos para lidar com medos, ansiedade e gatilhos que travam sua ação.",
                },
                {
                  title: "Equilíbrio e alinhamento",
                  text: "Uma visão mais integrada para construir uma vida coerente com quem você quer ser.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#E7992A]">
                    {item.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#FFEAC5]/75 sm:text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </ProductSection>

          {/* MÉTODO */}
          <ProductSection>
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                A lógica do processo
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                Clareza. Desbloqueio. Direção. Ação.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-5 max-w-3xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                Primeiro, você entende melhor quem é e o que está vivendo.
                Depois, começa a enxergar os padrões que estão te travando.
                A partir disso, constrói direção com mais consciência
                e transforma isso em ação prática.
              </motion.p>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  title: "Clareza",
                  text: "Entender melhor quem você é, onde está e por que continua se sentindo travado.",
                },
                {
                  title: "Desbloqueio",
                  text: "Identificar medos, crenças e padrões que interferem no seu movimento.",
                },
                {
                  title: "Direção",
                  text: "Construir visão, propósito e coerência com mais consciência.",
                },
                {
                  title: "Ação",
                  text: "Transformar tudo isso em passos reais e sustentáveis na sua vida.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#E7992A]">
                    {item.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#FFEAC5]/75 sm:text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </ProductSection>

          {/* PARA QUEM É */}
          <ProductSection>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <motion.div
                variants={sectionVariants}
                initial={false}
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
                >
                  Para quem é
                </motion.p>

                <motion.h2
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl"
                >
                  Esse processo é para você que...
                </motion.h2>

                <motion.div
                  variants={sectionVariants}
                  initial={false}
                  whileInView="show"
                  viewport={{ once: false, amount: 0.15 }}
                  className="mt-8 space-y-4"
                >
                  {[
                    "sabe que precisa mudar, mas se sente travado e sem direção.",
                    "vive no automático e sente que precisa de uma mudança mais profunda.",
                    "quer entender melhor quem é e por que continua se repetindo em certos padrões.",
                    "está cansado de pensar demais e agir de menos.",
                    "quer construir uma vida com mais clareza, sentido e ação prática.",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      variants={cardVariants}
                      initial={{ opacity: 1, y: 0, scale: 1 }}
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ duration: 0.22 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                      <p className="text-[#FFEAC5]/85">• {text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                variants={sectionVariants}
                initial={false}
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
                >
                  Para quem não é
                </motion.p>

                <motion.h2
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl"
                >
                  Esse processo não é para quem...
                </motion.h2>

                <motion.div
                  variants={sectionVariants}
                  initial={false}
                  whileInView="show"
                  viewport={{ once: false, amount: 0.15 }}
                  className="mt-8 space-y-4"
                >
                  {[
                    "procura fórmula mágica ou solução instantânea.",
                    "não quer se olhar com mais honestidade.",
                    "quer só consumir conteúdo sem aplicar nada na prática.",
                    "não está disposto a construir mudança com consciência e responsabilidade.",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      variants={cardVariants}
                      initial={{ opacity: 1, y: 0, scale: 1 }}
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ duration: 0.22 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                      <p className="text-[#FFEAC5]/85">• {text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </ProductSection>

          {/* BÔNUS */}
          <ProductSection>
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-4xl"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                Bônus especial
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                Além do curso, você também recebe uma aplicação de suporte
                para te ajudar a sair da intenção e entrar na prática.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-6 max-w-3xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                Esse bônus foi pensado para te ajudar a sustentar a mentalidade,
                organizar sua rotina e manter em movimento aquilo que precisa ser
                concluído.
                <br />
                <br />
                A ideia não é só te entregar clareza, mas também te dar um apoio
                prático para aplicar no dia a dia o que você aprender dentro do curso.
              </motion.p>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {[
                {
                  title: "Mais constância",
                  text: "Um apoio para manter aquilo que você definiu como importante em evidência no seu dia a dia.",
                },
                {
                  title: "Mais execução",
                  text: "Uma forma de reduzir o risco de ficar só na reflexão e aumentar suas chances de realmente concluir o que precisa ser feito.",
                },
                {
                  title: "Mais reforço mental",
                  text: "Um suporte para fortalecer a mentalidade e sustentar com mais firmeza o processo de mudança ao longo do tempo.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#E7992A]">
                    {item.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#FFEAC5]/75 sm:text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </ProductSection>

          {/* SOBRE VOCÊ */}
          <ProductSection>
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[160px_1fr]">
              <motion.div
                initial={false}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={cardVariants}
                className="flex justify-center lg:justify-start"
              >
                <div className="relative h-40 w-40 overflow-hidden rounded-3xl border border-white/10 md:h-44 md:w-44">
                  <Image
                    src="/paulo.png"
                    alt="Paulo Tolentino"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={sectionVariants}
                initial={false}
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
              >
                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
                >
                  Quem criou esse processo
                </motion.p>

                <motion.h2
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl"
                >
                  Eu não criei esse curso para entregar teoria.
                  <br />
                  Criei para ajudar pessoas a saírem do lugar.
                </motion.h2>

                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-5 max-w-3xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
                >
                  Eu sou o Paulo.
                  <br />
                  <br />
                  Criei esse processo a partir da percepção de um padrão muito comum:
                  pessoas com potencial, mas presas em confusão, ansiedade, travamento
                  e falta de direção.
                  <br />
                  <br />
                  Meu objetivo com esse trabalho é ajudar você a se conhecer com mais
                  profundidade, entender o que está te bloqueando e construir uma vida
                  mais coerente com quem você é.
                </motion.p>

                <motion.div
                  variants={sectionVariants}
                  initial={false}
                  whileInView="show"
                  viewport={{ once: false, amount: 0.15 }}
                  className="mt-6 flex flex-wrap gap-3 text-sm text-[#FFEAC5]/65"
                >
                  {[
                    "Clareza prática",
                    "Coragem emocional",
                    "Autoconhecimento com direção",
                  ].map((chip, i) => (
                    <motion.span
                      key={i}
                      variants={chipVariants}
                      initial={{ opacity: 1, y: 0, scale: 1 }}
                      whileHover={{ y: -3, scale: 1.02 }}
                      className="rounded-full border border-white/10 px-4 py-2"
                    >
                      {chip}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </ProductSection>

          {/* GARANTIA */}
          <ProductSection>
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="mx-auto max-w-4xl"
            >
              <motion.div
                variants={cardVariants}
                initial={{ opacity: 1, y: 0, scale: 1 }}
                className="rounded-3xl border border-[#E7992A]/20 bg-[#E7992A]/10 p-8 md:p-10"
              >
                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
                >
                  Garantia
                </motion.p>

                <motion.h2
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl"
                >
                  Você entra sem pressão e com segurança.
                </motion.h2>

                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-6 max-w-3xl text-base leading-8 text-[#FFEAC5]/80 sm:text-lg"
                >
                  Você terá uma garantia de 7 dias para conhecer o conteúdo e entender
                  se esse processo faz sentido para você.
                  <br />
                  <br />
                  Se dentro desse prazo você perceber que não era o que buscava,
                  poderá solicitar o reembolso.
                </motion.p>
              </motion.div>
            </motion.div>
          </ProductSection>

          {/* FAQ */}
          <ProductSection>
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-4xl"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                Perguntas frequentes
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                Algumas dúvidas que podem estar passando pela sua cabeça
              </motion.h2>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-12 space-y-4"
            >
              {[
                {
                  q: "Esse curso é para quem ainda não sabe qual é o seu propósito?",
                  a: "Sim. Na verdade, ele foi pensado justamente para pessoas que sentem confusão, travamento e falta de direção. O processo ajuda você a construir clareza, não exige que você já chegue com respostas prontas.",
                },
                {
                  q: "Preciso estar em um momento ‘certo’ da vida para fazer esse curso?",
                  a: "Não. Você só precisa sentir que quer entender melhor a si mesmo e começar a construir uma mudança mais consciente na sua vida.",
                },
                {
                  q: "Esse curso é só teórico?",
                  a: "Não. A proposta é unir profundidade e aplicação prática. A ideia é que você não fique apenas refletindo, mas transforme o que aprende em direção e ação.",
                },
                {
                  q: "Por quanto tempo terei acesso?",
                  a: "Aqui você pode preencher de acordo com sua configuração real de acesso, por exemplo: 1 ano de acesso, acesso por 6 meses ou acesso vitalício.",
                },
                {
                  q: "Como funciona a garantia?",
                  a: "Você terá um prazo de 7 dias para conhecer o conteúdo. Se entender que o curso não faz sentido para você, poderá solicitar o reembolso dentro desse período.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -4, scale: 1.005 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <p className="text-lg font-semibold text-[#FFF0D1]">
                    {item.q}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[#FFEAC5]/75 sm:text-base">
                    {item.a}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </ProductSection>

          {/* OBJEÇÕES */}
          <ProductSection>
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                Talvez você esteja pensando...
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                E se eu já tiver tentado outras coisas?
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-5 max-w-3xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                Tudo bem.
                Esse processo não parte da ideia de que você precisa chegar pronto,
                nem de que já deveria ter todas as respostas.
                <br />
                <br />
                Ele foi pensado justamente para quem sente confusão, travamento,
                medo de agir ou dificuldade de sustentar direção.
              </motion.p>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-12 space-y-4"
            >
              {[
                "E se eu ainda não souber meu propósito?",
                "E se eu estiver muito travado para agir?",
                "E se eu tiver medo de não conseguir sustentar isso?",
                "E se eu já tiver pensado demais e feito de menos?",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ duration: 0.22 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-[#FFEAC5]/85">• {text}</p>
                </motion.div>
              ))}

              <motion.div
                variants={cardVariants}
                initial={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.22 }}
                className="rounded-2xl border border-[#E7992A]/20 bg-[#E7992A] p-5 text-[#0F1728]"
              >
                <p className="font-medium">
                  O objetivo aqui não é te pressionar.
                  É te ajudar a construir base, clareza e movimento com mais consciência.
                </p>
              </motion.div>
            </motion.div>
          </ProductSection>

          {/* CTA INTERMEDIÁRIO */}
          <ProductSection>
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                Se isso faz sentido para você
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl"
              >
                Talvez o que esteja faltando não seja mais informação.
                <br />
                Talvez seja um caminho.
              </motion.h2>

              <motion.div
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-8 flex justify-center"
              >
                <motion.a
                  href="#oferta"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[clamp(0.96rem,1vw,1.04rem)] text-[#FFEAC5]/85 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  Quero ver a oferta
                </motion.a>
              </motion.div>
            </motion.div>
          </ProductSection>

          {/* OFERTA / CTA FINAL */}
          <ProductSection className="scroll-mt-24">
            <div id="oferta" className="absolute -top-24" />
            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                Seu próximo passo começa aqui
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                Se você sabe que precisa mudar,
                <br />
                mas continua travado,
                <br />
                esse é o seu próximo passo.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-6 text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                O Despertar de um Propósito foi criado para te ajudar a se
                conhecer melhor, superar bloqueios internos, ganhar clareza
                sobre sua direção e transformar isso em ação prática.
              </motion.p>

              <motion.div
                variants={cardVariants}
                initial={{ opacity: 1, y: 0, scale: 1 }}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-left backdrop-blur-sm"
              >
                <p className="text-sm uppercase tracking-[0.22em] text-[#E7992A]">
                  O que você recebe
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    "Acesso ao curso completo em formato digital",
                    "Processo estruturado em etapas claras",
                    "Conteúdo para autoconhecimento, desbloqueio emocional, clareza de propósito e ação prática",
                    "Material que te ajuda a sair da confusão e construir direção com mais consciência",
                  ].map((item, i) => (
                    <p key={i} className="text-[#FFEAC5]/85">
                      • {item}
                    </p>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[#E7992A]/20 bg-[#E7992A]/10 p-5">
                  <p className="text-sm text-[#FFEAC5]/70">
                    Aqui você pode colocar:
                  </p>
                  <p className="mt-2 text-[#FFEAC5]">
                    preço • condição de pagamento • bônus • garantia
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-10 flex justify-center"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center justify-center rounded-full bg-[#E7992A] px-8 py-4 text-[clamp(0.96rem,1vw,1.04rem)] font-semibold text-[#0F1728] shadow-[0_10px_30px_rgba(231,153,42,0.18)]"
                >
                  Quero entrar agora
                </motion.a>
              </motion.div>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-5 text-sm text-[#FFEAC5]/60"
              >
                Quando você definir seu checkout, é só trocar o href do botão final.
              </motion.p>
            </motion.div>
          </ProductSection>
        </div>
      </div>

      <Footer showPrimaryLink={false} />
    </main>
  )
}