'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const sectionVariants = {
  show: {
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function WhatYouDiscover() {
  const [isCtaHovered, setIsCtaHovered] = useState(false)

  return (
    <section
      id="descobrir"
      className="scroll-mt-24 relative -mt-24 overflow-hidden bg-[#07101f] px-6 pb-24 text-[#FFEAC5] md:px-10 lg:px-16"
    >
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
                O que você pode descobrir
              </motion.p>

              <motion.h2
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl lg:text-5xl"
              >
                Isso não é só um questionário.
                <br />
                É uma forma de enxergar com mais clareza
                o que está travando sua vida hoje.
              </motion.h2>

              <motion.p
                variants={fadeUpVariants}
                initial={{ opacity: 1, y: 0 }}
                className="mt-5 max-w-2xl text-base leading-8 text-[#FFEAC5]/75 sm:text-lg"
              >
                O objetivo do diagnóstico não é te dar uma solução mágica,
                mas te ajudar a entender melhor o ponto em que você está
                e o que precisa começar a mudar.
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
                {
                  title: 'Clareza interna',
                  text: 'Entenda por que você se sente confuso, com excesso de dúvida ou dificuldade para escolher uma direção.',
                },
                {
                  title: 'Bloqueios atuais',
                  text: 'Identifique padrões que podem estar travando sua ação e dificultando sua constância.',
                },
                {
                  title: 'Fase da jornada',
                  text: 'Perceba em que momento você está: confusão, busca ou preparação para agir.',
                },
                {
                  title: 'Próximo passo',
                  text: 'Saia do abstrato com uma direção inicial mais coerente com a sua realidade.',
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
                className="relative inline-flex overflow-hidden items-center justify-center rounded-full bg-[#E7992A] px-8 py-4 text-[clamp(0.96rem,1vw,1.04rem)] font-semibold text-[#0F1728]"
              >
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-[-20%] left-[-55%] w-[38%] bg-white/30 blur-md"
                  animate={{ x: ['-160%', '620%'] }}
                  transition={{
                    duration: isCtaHovered ? 1.5 : 3.2,
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