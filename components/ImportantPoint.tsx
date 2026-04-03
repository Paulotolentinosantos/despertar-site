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
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function ImportantPoint() {
  const [isCtaHovered, setIsCtaHovered] = useState(false)

  return (
    <section className="relative -mt-24 overflow-hidden bg-[#07101f] px-6 pb-24 text-[#FFEAC5] md:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07101f_0%,#081325_30%,#07101f_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="relative px-8 pt-32 pb-14 md:px-10 md:pt-36 lg:px-14 lg:pt-40 lg:pb-16">
          <div className="absolute inset-0 bg-[#0F1728]/82 backdrop-blur-[6px]" />

          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,rgba(255,255,255,0.04),transparent)]" />

          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
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
                  Um ponto importante
                </motion.p>

                <motion.h2
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
                >
                  Esse diagnóstico não resolve tudo.
                  <br className="hidden sm:block" /> Mas pode mudar a forma como você
                  enxerga o que está acontecendo.
                </motion.h2>

                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-5 max-w-2xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
                >
                  Responder esse diagnóstico não vai, por si só, destravar sua vida.
                  Mas ele pode te dar algo que muita gente não tem quando tenta mudar:
                  clareza.
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
                  'Clareza sobre o que está te travando hoje.',
                  'Clareza sobre o momento da sua vida em que você está.',
                  'Clareza sobre o que precisa começar a mudar.',
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
                    Sem clareza, qualquer tentativa vira tentativa solta. Com mais
                    consciência, você começa a sair do automático e tomar decisões mais
                    alinhadas.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUpVariants}
              initial={{ opacity: 1, y: 0 }}
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-10 text-center"
            >
              <p className="mx-auto max-w-3xl text-sm leading-7 text-[#FFEAC5]/65 sm:text-base">
                Isso é só o começo. Mas pode ser o começo que faltava para você se
                enxergar com mais honestidade e dar um primeiro passo com mais direção.
              </p>
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
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#E7992A] px-8 py-4 text-[clamp(0.96rem,1vw,1.04rem)] font-semibold text-[#0F1728]"
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