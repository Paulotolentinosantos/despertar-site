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
    <section className={`relative -mt-16 overflow-hidden px-8 pb-14 pt-24 md:px-10 lg:px-14 lg:pt-28 ${className}`}>
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
      <Navbar ctaLabel="Quero fazer parte" ctaHref="SEU_LINK_AQUI" />

      <div className="relative overflow-hidden bg-[#07101f] px-6 pb-24 pt-24 text-[#FFEAC5] md:px-10 lg:px-16">
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
          <section className="relative overflow-hidden px-8 pb-16 pt-16 md:px-10 lg:px-14 lg:pt-20">
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
                className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
              >
                O Despertar de um Propósito
              </motion.p>

              <motion.h1
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-[clamp(2.7rem,5.2vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#FFF0D1]"
              >
                Saia da confusão
                <br />
                e construa uma vida com mais clareza,
                direção e propósito.
              </motion.h1>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-8 max-w-3xl text-[clamp(1.06rem,1.24vw,1.24rem)] leading-[1.9] text-[#FFEAC5]/80"
              >
                Um processo para te ajudar a entender quem você é,
                romper bloqueios internos e transformar autoconhecimento
                em ação prática — com mais consciência, equilíbrio e direção.
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

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-6 text-sm text-[#FFEAC5]/60"
              >
                Curso online • Acesso digital • Processo estruturado
              </motion.p>
            </motion.div>
          </section>

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
                Talvez você só esteja tentando mudar
                sem a clareza que esse processo pede.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-5 max-w-2xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                Você pode até já ter pensado muito, refletido bastante
                e tentado fazer diferente.
                <br />
                <br />
                Mas, mesmo assim, continua travado, sem direção clara,
                sem conseguir sustentar movimento ou sentindo que algo
                importante não se encaixa.
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
                "Você sente que poderia estar vivendo algo maior, mas não sabe por onde começar.",
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
                Um processo de transformação pessoal
                com profundidade e aplicação prática.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-5 max-w-3xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                O Despertar de um Propósito foi criado para ajudar você
                a se conhecer com mais profundidade, entender seus bloqueios
                internos e construir uma direção mais coerente com quem você é.
                <br />
                <br />
                Não é sobre motivação passageira.
                É sobre clareza, coragem emocional e ação prática.
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
                Você começa a sair da confusão
                e construir uma vida mais alinhada com quem é.
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
                  text: "Você entende melhor suas forças, fragilidades, emoções e padrões.",
                },
                {
                  title: "Mais consciência dos bloqueios",
                  text: "Você começa a enxergar o que trava sua ação e interfere na sua constância.",
                },
                {
                  title: "Mais equilíbrio interno",
                  text: "Você sai do improviso emocional e começa a construir mais coerência entre áreas da vida.",
                },
                {
                  title: "Mais direção",
                  text: "Você desenvolve uma visão mais clara do que faz sentido para você.",
                },
                {
                  title: "Mais coragem para agir",
                  text: "Você aprende a se mover com mais consciência, mesmo sem ter tudo resolvido.",
                },
                {
                  title: "Mais ação prática",
                  text: "Você transforma reflexão em passos concretos e aplicáveis à sua realidade.",
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

          {/* CONTEÚDO */}
          <ProductSection className="scroll-mt-24" >
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
                  title: "Clareza sobre quem você é",
                  text: "Uma base para entender melhor sua identidade, emoções, fragilidades e padrões internos.",
                },
                {
                  n: "02",
                  title: "Bloqueios e travas emocionais",
                  text: "Um mergulho nos medos, inseguranças, autossabotagens e barreiras que dificultam o movimento.",
                },
                {
                  n: "03",
                  title: "Mudança de mentalidade",
                  text: "Uma nova forma de se posicionar diante da própria história, com mais responsabilidade e crescimento.",
                },
                {
                  n: "04",
                  title: "Equilíbrio entre áreas da vida",
                  text: "Uma visão mais integrada entre rotina, energia, bem-estar e construção de uma vida coerente.",
                },
                {
                  n: "05",
                  title: "Propósito, visão e direção",
                  text: "Mais clareza sobre o que faz sentido para você, para onde quer ir e o que deseja construir.",
                },
                {
                  n: "06",
                  title: "Plano de ação real",
                  text: "Uma estrutura prática para tirar tudo do campo das ideias e transformar em movimento.",
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
                    "se sente travado e quer ganhar direção.",
                    "vive no automático e sente que precisa mudar algo de forma mais profunda.",
                    "quer entender melhor quem é e por que continua se repetindo em certos padrões.",
                    "quer parar de só pensar e começar a agir com mais consciência.",
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
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4"
            >
              {[
                { title: "Clareza", text: "Entender melhor quem você é e onde está." },
                { title: "Desbloqueio", text: "Identificar o que está te paralisando." },
                { title: "Direção", text: "Construir visão, propósito e coerência." },
                { title: "Ação", text: "Transformar tudo isso em passos reais." },
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
                  Eu criei esse curso para ajudar pessoas
                  a saírem da confusão e construírem direção.
                </motion.h2>

                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-5 max-w-3xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
                >
                  Eu sou o Paulo.
                  <br />
                  <br />
                  Criei esse processo a partir da percepção de um padrão
                  muito comum: pessoas com potencial, mas presas em confusão,
                  travamento e falta de direção.
                  <br />
                  <br />
                  Meu objetivo com esse trabalho é ajudar você a sair do automático,
                  se conhecer com mais profundidade e construir uma vida mais coerente
                  com quem você é.
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
                Tudo bem. Esse processo não parte da ideia de que você precisa chegar pronto,
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
                  O objetivo aqui não é te pressionar. É te ajudar a construir base,
                  clareza e movimento com mais consciência.
                </p>
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
                Se você sente que está vivendo abaixo
                do que poderia, talvez seja hora
                de construir isso com mais clareza.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-6 text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                Esse curso foi criado para te ajudar a se conhecer melhor,
                superar bloqueios internos e construir uma direção mais consciente
                para a sua vida — com equilíbrio, coragem e ação prática.
              </motion.p>

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
                  Quero entrar
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