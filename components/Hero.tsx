'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
}

const itemVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function Hero() {
  const [isCtaHovered, setIsCtaHovered] = useState(false)

  return (
    <section className="relative overflow-hidden bg-[#07101f] px-6 pb-0 text-[#FFEAC5] md:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07101f_0%,#081325_30%,#07101f_100%)]" />

        <motion.div
          initial={{ opacity: 0.35, y: 0, scale: 1 }}
          animate={{
            opacity: [0.35, 0.55, 0.35],
            y: [0, -10, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-[#E7992A]/[0.05] blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0.28, y: 0, scale: 1 }}
          animate={{
            opacity: [0.28, 0.48, 0.28],
            y: [0, -14, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute right-[-120px] top-[180px] h-[360px] w-[360px] rounded-full bg-[#E7992A]/[0.04] blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="relative px-8 pt-24 pb-20 md:px-10 md:pt-28 lg:px-14 lg:pt-32 lg:pb-24">
          <div className="absolute inset-0 bg-[#0F1728]/82 backdrop-blur-[6px]" />

          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,rgba(255,255,255,0.04),transparent)]" />

          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />

          <motion.div
            variants={containerVariants}
            initial={false}
            animate="show"
            className="relative z-10 max-w-5xl"
          >
            <motion.h1
              variants={itemVariants}
              initial={{ opacity: 1, y: 0 }}
              className="text-[clamp(3.2rem,5.5vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-[#FFF0D1]"
            >
              Você sente que tem potencial…
              mas continua travado no mesmo lugar?
            </motion.h1>

            <motion.p
              variants={itemVariants}
              initial={{ opacity: 1, y: 0 }}
              className="mt-10 max-w-3xl text-[clamp(1.12rem,1.28vw,1.34rem)] leading-[1.85] text-[#FFEAC5]/80"
            >
              Em poucos minutos, entenda o que está te travando
              e qual o próximo passo para começar a sair disso.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 1, y: 0 }}
              className="mt-12 flex flex-col gap-5 sm:flex-row"
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

            {/* Navegação leve */}
            <motion.div
              variants={itemVariants}
              initial={{ opacity: 1, y: 0 }}
              className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#FFEAC5]/55"
            >
              <span className="text-[#FFEAC5]/40">Entenda melhor:</span>

              <a href="#como-funciona" className="hover:text-[#FFEAC5] transition">
                Como funciona
              </a>

              <span>•</span>

              <a href="#descobrir" className="hover:text-[#FFEAC5] transition">
                O que você descobre
              </a>

              <span>•</span>

              <a href="#identificacao" className="hover:text-[#FFEAC5] transition">
                Para quem é
              </a>

              <span>•</span>

              <a href="#sobre" className="hover:text-[#FFEAC5] transition">
                Sobre
              </a>
            </motion.div>

            <motion.p
              variants={itemVariants}
              initial={{ opacity: 1, y: 0 }}
              className="mt-6 text-sm text-[#FFEAC5]/60"
            >
              Leva menos de 3 minutos • Resultado imediato • Sem enrolação
            </motion.p>
          </motion.div>
        </div>

        {/* Âncoras */}
      </div>
    </section>
  )
}