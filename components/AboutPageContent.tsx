'use client'

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
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function AboutPageContent() {
  return (
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
              Sobre mim
            </motion.p>

            <motion.h1
              variants={fadeUpVariants}
              initial={{ opacity: 1, y: 0 }}
              className="mt-4 text-[clamp(2.6rem,5vw,5.2rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-[#FFF0D1]"
            >
              Eu acredito que muita gente não está sem potencial.
              <br />
              Está sem clareza.
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              initial={{ opacity: 1, y: 0 }}
              className="mt-8 max-w-3xl text-[clamp(1.05rem,1.25vw,1.22rem)] leading-[1.9] text-[#FFEAC5]/78"
            >
              Criei esse projeto para ajudar pessoas que sentem que poderiam estar
              vivendo algo maior, mas continuam travadas, confusas ou sem direção.
              Meu foco não é te encher de frase pronta. É te ajudar a enxergar com
              mais honestidade o ponto em que você está e começar a sair do
              automático com mais consciência.
            </motion.p>
          </motion.div>
        </section>

        {/* HISTÓRIA */}
        <section className="relative -mt-16 overflow-hidden px-8 pb-14 pt-24 md:px-10 lg:px-14 lg:pt-28">
          <div className="absolute inset-0 bg-[#0F1728]/82 backdrop-blur-[6px]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[180px_1fr]">
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
                De onde isso nasceu
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl"
              >
                Eu comecei a perceber um padrão que se repetia.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-5 max-w-3xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                Pessoas inteligentes, sensíveis, capazes e cheias de potencial,
                mas que, por dentro, se sentiam perdidas, travadas ou sem conseguir
                transformar reflexão em movimento.
                <br />
                <br />
                E quanto mais eu observava isso, mais ficava claro para mim que,
                muitas vezes, o problema não era falta de esforço. Era falta de
                clareza. Falta de direção. Falta de um olhar mais honesto sobre o
                que realmente estava acontecendo por dentro.
                <br />
                <br />
                Foi daí que nasceu a vontade de criar algo que ajudasse a tornar esse
                processo mais claro, mais consciente e mais aplicável à vida real.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* VALORES */}
        <section className="relative -mt-16 overflow-hidden px-8 pb-14 pt-24 md:px-10 lg:px-14 lg:pt-28">
          <div className="absolute inset-0 bg-[#0F1728]/82 backdrop-blur-[6px]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />

          <div className="relative z-10">
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
                No que eu acredito
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                Mudança de verdade não vem de pressão.
                <br />
                Vem de consciência, coragem e direção.
              </motion.h2>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              {[
                {
                  title: "Autoconhecimento",
                  text: "Toda mudança mais sólida começa quando você entende melhor quem é, o que sente e de onde vêm seus padrões.",
                },
                {
                  title: "Coragem emocional",
                  text: "Nem sempre você vai agir sem medo. Mas pode aprender a agir com mais consciência mesmo sentindo desconforto.",
                },
                {
                  title: "Autenticidade",
                  text: "Crescer não é virar uma versão artificial de si mesmo. É se aproximar mais daquilo que faz sentido de verdade.",
                },
                {
                  title: "Ação prática",
                  text: "Clareza sem movimento vira só reflexão acumulada. Em algum momento, precisa virar passo concreto.",
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
          </div>
        </section>

        {/* MÉTODO / VISÃO */}
        <section className="relative -mt-16 overflow-hidden px-8 pb-14 pt-24 md:px-10 lg:px-14 lg:pt-28">
          <div className="absolute inset-0 bg-[#0F1728]/82 backdrop-blur-[6px]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
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
                Como eu enxergo esse processo
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl"
              >
                Para mim, tudo começa com clareza.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-5 text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                Antes de tentar fazer mais, produzir mais ou mudar tudo de uma vez,
                existe uma etapa anterior: entender onde você está, o que está te
                travando e o que realmente faz sentido para você.
                <br />
                <br />
                Quando essa base começa a aparecer, o movimento deixa de ser só
                impulsivo e passa a ter mais coerência.
              </motion.p>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="space-y-4"
            >
              {[
                "Primeiro, você entende melhor o que está vivendo.",
                "Depois, começa a identificar o que está drenando sua direção.",
                "A partir disso, fica mais fácil transformar reflexão em movimento.",
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
                  Meu objetivo é te ajudar a sair do automático e ganhar mais clareza
                  sobre si mesmo — para que suas escolhas façam mais sentido na prática.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative -mt-16 overflow-hidden px-8 pb-16 pt-24 md:px-10 lg:px-14 lg:pt-28">
          <div className="absolute inset-0 bg-[#0F1728]/82 backdrop-blur-[6px]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />

          <motion.div
            variants={sectionVariants}
            initial={false}
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <motion.p
              variants={fadeUpVariants}
              initial={{ opacity: 1, y: 0 }}
              className="text-sm font-medium uppercase tracking-[0.22em] text-[#E7992A]"
            >
              Seu próximo passo
            </motion.p>

            <motion.h2
              variants={fadeUpVariants}
              initial={{ opacity: 1, y: 0 }}
              className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
            >
              Se isso fez sentido para você,
              o diagnóstico é o melhor lugar para começar.
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              initial={{ opacity: 1, y: 0 }}
              className="mt-6 text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
            >
              Em poucos minutos, você pode enxergar com mais clareza o que está te
              travando hoje e começar a dar um primeiro passo com mais consciência.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              initial={{ opacity: 1, y: 0 }}
              className="mt-10 flex justify-center"
            >
              <motion.a
                href="/diagnostico"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center justify-center rounded-full bg-[#E7992A] px-8 py-4 text-[clamp(0.96rem,1vw,1.04rem)] font-semibold text-[#0F1728] shadow-[0_10px_30px_rgba(231,153,42,0.18)]"
              >
                Começar meu diagnóstico
              </motion.a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}