'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

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
      duration: 0.7,
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

export default function HowItWorks() {
  const [isCtaHovered, setIsCtaHovered] = useState(false)

  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 relative -mt-20 overflow-hidden bg-[#07101f] px-6 pb-24 text-[#FFEAC5] md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07101f_0%,#081325_30%,#07101f_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="relative px-8 pt-28 pb-14 md:px-10 md:pt-32 lg:px-14 lg:pt-36 lg:pb-16">
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
                Como funciona
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                Um diagnóstico simples para te tirar do automático
                e te dar mais clareza sobre o próximo passo.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-5 max-w-2xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                Em poucos minutos, você responde algumas perguntas
                e recebe uma leitura inicial para entender melhor
                em que ponto da sua jornada você está.
              </motion.p>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-[#FFEAC5]/60"
              >
                Leva menos de 3 minutos • Resultado imediato • Sem enrolação
              </motion.p>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
              className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              <motion.div
                variants={cardVariants}
                initial={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.22 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E7992A] text-lg font-bold text-[#0F1728]">
                  1
                </div>

                <h3 className="text-xl font-semibold text-[#FFEAC5]">
                  Responda perguntas diretas sobre sua fase atual
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#FFEAC5]/72 sm:text-base">
                  Você responde perguntas objetivas sobre sua fase atual,
                  seus bloqueios e sua sensação de direção.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                initial={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.22 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E7992A] text-lg font-bold text-[#0F1728]">
                  2
                </div>

                <h3 className="text-xl font-semibold text-[#FFEAC5]">
                  Veja com mais clareza o que está acontecendo com você hoje
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#FFEAC5]/72 sm:text-base">
                  Ao final, você recebe uma leitura inicial sobre os padrões
                  que podem estar afetando sua clareza, sua ação e sua constância.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                initial={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.22 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E7992A] text-lg font-bold text-[#0F1728]">
                  3
                </div>

                <h3 className="text-xl font-semibold text-[#FFEAC5]">
                  Receba uma direção inicial
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#FFEAC5]/72 sm:text-base">
                  Em vez de continuar no abstrato, você sai com um próximo passo
                  mais consciente e aplicável à sua realidade.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial={{ opacity: 1, y: 0 }}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-12 flex justify-center"
            >
              <motion.a
                href="/diagnostico"
                onHoverStart={() => setIsCtaHovered(true)}
                onHoverEnd={() => setIsCtaHovered(false)}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.2 }}
                className="relative inline-flex overflow-hidden items-center justify-center rounded-full bg-[#E7992A] px-8 py-4 text-[clamp(0.96rem,1vw,1.04rem)] font-semibold text-[#0F1728] shadow-[0_0_0_rgba(231,153,42,0)] transition-shadow hover:shadow-[0_10px_30px_rgba(231,153,42,0.18)]"
              >
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-[-20%] left-[-55%] w-[38%] bg-white/30 blur-md"
                  animate={{ x: ['-160%', '620%'] }}
                  transition={{
                    duration: isCtaHovered ? 1.55 : 3.2,
                    repeat: Infinity,
                    repeatDelay: isCtaHovered ? 0.25 : 1.35,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  style={{ skewX: '-20deg' }}
                />
                <span className="relative z-10">Começar meu diagnóstico</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}