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
      duration: 0.82,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function FinalCTA() {
  const [isCtaHovered, setIsCtaHovered] = useState(false)

  return (
    <section className="relative -mt-24 overflow-hidden bg-[#07101f] px-6 pb-0 text-[#FFEAC5] md:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07101f_0%,#081325_30%,#07101f_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="relative px-8 pt-32 pb-0 md:px-10 md:pt-36 lg:px-14 lg:pt-40">
          <div className="absolute inset-0 bg-[#0F1728]/82 backdrop-blur-[6px]" />

          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,rgba(255,255,255,0.04),transparent)]" />

          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />

          <div className="relative z-10 flex justify-center pb-16 md:pb-20">
            <motion.div
              variants={cardVariants}
              initial={false}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="w-full max-w-3xl rounded-[32px] border border-[#E7992A]/15 bg-[#111b2f] px-6 py-14 text-center shadow-2xl shadow-black/20 sm:px-10 sm:py-16"
            >
              <motion.div
                variants={sectionVariants}
                initial={false}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
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
                  className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
                >
                  Se você sente que está travado,
                  o primeiro passo não é fazer mais.
                  <br />
                  É entender melhor onde você está.
                </motion.h2>

                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
                >
                  Em poucos minutos, você pode transformar confusão em direção inicial
                  e dar um primeiro passo mais consciente.
                </motion.p>

                <motion.div
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-8 flex justify-center"
                >
                  <motion.a
                    href="/diagnostico"
                    onHoverStart={() => setIsCtaHovered(true)}
                    onHoverEnd={() => setIsCtaHovered(false)}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.2 }}
                    className="relative inline-flex overflow-hidden items-center justify-center rounded-full bg-[#E7992A] px-8 py-4 text-sm font-semibold text-[#0F1728] shadow-[0_0_0_rgba(231,153,42,0)] transition-shadow hover:shadow-[0_10px_30px_rgba(231,153,42,0.18)]"
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

                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm text-[#FFEAC5]/60"
                >
                  Leva menos de 3 minutos • Resultado imediato • Sem enrolação
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}