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

const imageVariants = {
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const chipContainerVariants = {
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.18,
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

export default function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 relative -mt-24 overflow-hidden bg-[#07101f] px-6 pb-24 text-[#FFEAC5] md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0">
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
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[140px_1fr]">
              <motion.div
                initial={false}
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={imageVariants}
                className="flex justify-center lg:justify-start"
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.015 }}
                  transition={{ duration: 0.22 }}
                  className="relative h-36 w-36 overflow-hidden rounded-2xl border border-white/10 md:h-40 md:w-40"
                >
                  <Image
                    src="/paulo.png"
                    alt="Paulo Tolentino"
                    fill
                    className="object-cover"
                  />
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
                  Quem está por trás
                </motion.p>

                <motion.h2
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-3 text-2xl font-semibold leading-tight text-[#FFF0D1] sm:text-3xl"
                >
                  Eu criei esse diagnóstico para ajudar pessoas
                  a saírem da confusão e começarem a ganhar direção.
                </motion.h2>

                <motion.p
                  variants={fadeUpVariants}
                  initial={{ opacity: 1, y: 0 }}
                  className="mt-5 max-w-2xl text-base leading-8 text-[#FFEAC5]/75"
                >
                  Eu sou o Paulo.
                  <br />
                  <br />
                  Criei esse diagnóstico porque percebi um padrão:
                  pessoas com potencial, mas travadas, confusas e sem direção.
                  <br />
                  <br />
                  E isso, muitas vezes, não é falta de capacidade.
                  É falta de clareza.
                </motion.p>

                <motion.div
                  variants={chipContainerVariants}
                  initial={false}
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  className="mt-6 flex flex-wrap gap-3 text-sm text-[#FFEAC5]/65"
                >
                  {[
                    "Clareza prática",
                    "Diagnóstico objetivo",
                    "Do autoconhecimento à ação",
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
          </div>
        </div>
      </div>
    </section>
  )
}