"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { trackLead } from "../lib/tracking"

const questions = [
  "Sinto que estou vivendo abaixo do meu potencial, mas não consigo mudar isso.",
  "Tenho dificuldade de enxergar um sentido claro na minha vida hoje.",
  "Mesmo querendo mudar, acabo adiando e permanecendo no mesmo lugar.",
  "Tenho medo do julgamento das pessoas quando penso em mudar algo na minha vida.",
  "Sinto que estou vivendo no automático, sem direção clara.",
];

const options = [
  { label: "Discordo totalmente", value: 1 },
  { label: "Discordo", value: 2 },
  { label: "Neutro", value: 3 },
  { label: "Concordo", value: 4 },
  { label: "Concordo totalmente", value: 5 },
];

function toPercent(value: number, max: number) {
  return Math.round((value / max) * 100);
}

function getClarezaNivel(clareza: number) {
  if (clareza <= 4) return "baixa";
  if (clareza <= 7) return "media";
  return "alta";
}

function getTravamentoNivel(travamento: number) {
  if (travamento <= 6) return "baixo";
  if (travamento <= 10) return "medio";
  return "alto";
}

function getPerfilKey(clareza: number, travamento: number) {
  const clarezaNivel = getClarezaNivel(clareza);
  const travamentoNivel = getTravamentoNivel(travamento);
  return `${clarezaNivel}-${travamentoNivel}`;
}

const perfis: Record<
  string,
  {
    nomePerfil: string;
    titulo: string;
    texto: string;
    acao: string;
  }
> = {
  "baixa-baixo": {
    nomePerfil: "Base estável, mas pouco aprofundada",
    titulo:
      "Você tem uma base relativamente estável, mas ainda pode aprofundar sua direção",
    texto:
      "Seu resultado sugere que você não está fortemente travado neste momento, mas também pode não estar olhando com profundidade suficiente para o que realmente quer construir. Existe uma base boa para crescer, e o próximo avanço tende a vir menos de “resolver um problema urgente” e mais de desenvolver mais consciência, intenção e alinhamento.",
    acao:
      "Reserve um momento para refletir sobre o que hoje faz sentido para você de forma mais autêntica. Em vez de esperar uma crise para mudar, use essa fase para construir clareza com calma e intenção.",
  },

  "baixa-medio": {
    nomePerfil: "Potencial presente, mas com freios sutis",
    titulo:
      "Você já tem alguma base interna, mas ainda existe um travamento moderado te freando",
    texto:
      "Seu resultado mostra que não há uma grande sensação de vazio ou falta de sentido, mas existem travas suficientes para reduzir sua fluidez. Isso pode aparecer como adiamento, hesitação, medo de se expor ou dificuldade de sustentar movimento. Você não está totalmente perdido, mas também não está completamente livre para avançar.",
    acao:
      "Escolha uma decisão ou ação que você vem empurrando. Em vez de tentar “ganhar confiança antes”, transforme essa pequena ação em evidência prática de que você consegue se mover mesmo com desconforto.",
  },

  "baixa-alto": {
    nomePerfil: "Direção razoável, mas travado por bloqueios",
    titulo:
      "Você já tem mais direção do que imagina, mas está sendo travado por bloqueios internos",
    texto:
      "Seu resultado indica que o problema principal não parece ser falta de sentido ou ausência total de direção. O que está pesando mais é um conjunto de bloqueios emocionais e comportamentais que interfere na sua capacidade de agir. Em outras palavras: talvez você até saiba mais ou menos para onde precisa ir, mas algo dentro de você está dificultando a travessia.",
    acao:
      "Pare de interpretar sua dificuldade como falta de capacidade. O foco agora é identificar o que te paralisa com mais frequência — medo, vergonha, insegurança ou autoexigência — e começar a quebrar isso com pequenas exposições e microvitórias.",
  },

  "media-baixo": {
    nomePerfil: "Em busca de mais definição",
    titulo:
      "Você não parece muito travado, mas ainda está em uma fase de busca e definição",
    texto:
      "Seu resultado sugere que existe uma certa nebulosidade interna, mas sem um travamento emocional muito forte. Isso pode significar que você está em uma etapa de transição, exploração ou amadurecimento de direção. Ainda não está totalmente claro o que realmente faz sentido, mas o terreno para descobrir isso parece relativamente aberto.",
    acao:
      "Evite se cobrar por uma resposta definitiva agora. Em vez disso, trate este momento como uma fase de investigação. Observe atividades, contextos e escolhas que aumentam ou drenam seu senso de sentido, energia e coerência interna.",
  },

  "media-medio": {
    nomePerfil: "Confusão e inércia moderadas",
    titulo:
      "Você está em um ponto de confusão e inércia que pede mais consciência e movimento",
    texto:
      "Seu resultado mostra um meio-termo importante: existe uma falta parcial de direção e também um travamento moderado. Isso costuma gerar uma sensação de estar “meio preso, meio perdido”, onde a pessoa até percebe que precisa mudar, mas não consegue organizar bem o que sente, o que quer e qual deveria ser o próximo passo.",
    acao:
      "Reduza a complexidade. Escolha uma única área da sua vida para observar com mais atenção e defina uma ação simples, concreta e executável. Clareza costuma aumentar quando você sai do abstrato e começa a gerar evidência prática.",
  },

  "media-alto": {
    nomePerfil: "Busca interna com bloqueios fortes",
    titulo:
      "Você está buscando mais direção, mas seus bloqueios internos estão pesando bastante",
    texto:
      "Seu resultado indica que você não está apenas em dúvida: você também está emocionalmente travado. Isso significa que a confusão não é puramente intelectual. Ela provavelmente está misturada com medo, ansiedade, autocrítica, receio do julgamento ou dificuldade de sustentar mudanças. Quando isso acontece, a pessoa tende a se sentir cansada por dentro, mesmo sem sair muito do lugar.",
    acao:
      "Seu primeiro passo não precisa ser “descobrir toda a sua vida”. Comece reduzindo o peso emocional do processo. Foque em ações pequenas, seguras e repetíveis que te devolvam sensação de agência. Primeiro você recupera movimento; depois aprofunda direção.",
  },

  "alta-baixo": {
    nomePerfil: "Sem direção clara, mas com boa capacidade de agir",
    titulo:
      "Seu principal desafio hoje parece ser falta de clareza, não incapacidade",
    texto:
      "Seu resultado mostra que você sente mais fortemente a ausência de sentido, direção ou alinhamento do que um travamento emocional em si. Isso é importante, porque significa que talvez o seu maior gargalo não seja falta de força para agir, e sim falta de um “porquê” suficientemente claro para sustentar a ação com profundidade. Sem direção, até pessoas capazes entram no automático.",
    acao:
      "Antes de pensar em acelerar, pare para investigar melhor o que realmente importa para você. Pergunte-se com honestidade: “Estou construindo algo que faz sentido ou apenas mantendo uma estrutura que já não conversa com quem eu sou?”",
  },

  "alta-medio": {
    nomePerfil: "Desalinhamento importante com travas moderadas",
    titulo:
      "Você parece estar vivendo um desalinhamento significativo, com travas que já começam a pesar",
    texto:
      "Seu resultado sugere uma mistura delicada: existe uma percepção alta de falta de direção, e junto dela já aparecem travas moderadas que podem estar tornando tudo mais pesado. Quando isso acontece, a pessoa tende a sentir que algo está fora do lugar, mas acaba entrando em ciclos de dúvida, adiamento e desgaste mental. É como perceber o desalinhamento, mas não conseguir responder a ele com firmeza.",
    acao:
      "Escolha um espaço curto de silêncio e reflexão para reorganizar o que realmente importa hoje. Depois, traduza isso em uma ação concreta para os próximos dias. O objetivo não é resolver tudo de uma vez, mas sair da abstração e começar a alinhar pensamento e prática.",
  },

  "alta-alto": {
    nomePerfil: "Sem direção e fortemente travado",
    titulo:
      "Seu resultado indica falta de direção e travamento interno em nível alto",
    texto:
      "Seu resultado aponta para um momento mais crítico de desalinhamento. Há uma percepção forte de vazio, confusão ou ausência de sentido, ao mesmo tempo em que existem bloqueios internos significativos dificultando qualquer tentativa de movimento. Isso pode gerar sensação de estagnação, frustração, autocobrança e até a impressão de estar vivendo abaixo do próprio potencial sem conseguir sair do lugar.",
    acao:
      "Não tente reorganizar a vida inteira agora. Comece interrompendo o automático. Observe o que mais tem drenado seu sentido, o que você vem evitando e qual pequena ação pode te reconectar minimamente com presença, clareza e movimento. O primeiro passo aqui é recuperar chão interno.",
  },
};

const pageVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function DiagnosticoPage() {
  const [step, setStep] = useState("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isStartHovered, setIsStartHovered] = useState(false);
  const [isLeadHovered, setIsLeadHovered] = useState(false);
  const [isHistoryRestore, setIsHistoryRestore] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        setIsHistoryRestore(true);
      }
    };

    window.addEventListener("pageshow", handlePageShow as EventListener);
    return () => {
      window.removeEventListener("pageshow", handlePageShow as EventListener);
    };
  }, []);

  const progresso =
    step === "questions"
      ? ((currentQuestion + 1) / questions.length) * 100
      : 0;

  function startQuiz() {
    setStep("questions");
    setCurrentQuestion(0);
    setAnswers([]);
  }

  function answerQuestion(value: number) {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion === questions.length - 1) {
      setStep("lead");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  async function showResult() {
    if (!name.trim() || !email.trim() || isSubmitting) return;

    setIsSubmitting(true);

    const q1 = answers[0] || 0;
    const q2 = answers[1] || 0;
    const q3 = answers[2] || 0;
    const q4 = answers[3] || 0;
    const q5 = answers[4] || 0;

    const clareza = q2 + q5;
    const travamento = q1 + q3 + q4;

    const perfilKey = getPerfilKey(clareza, travamento);
    const resultado = perfis[perfilKey];

    const params = new URLSearchParams(window.location.search);

    const utm_source = params.get("utm_source") || "";
    const utm_medium = params.get("utm_medium") || "";
    const utm_campaign = params.get("utm_campaign") || "";
    const gclid = params.get("gclid") || "";

    try {
      const response = await fetch("/api/quiz-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: name,
          email,
          q1,
          q2,
          q3,
          q4,
          q5,
          clareza,
          travamento,
          resultado: resultado.nomePerfil,
          origem: "nextjs_quiz_diagnostico_v1",
          utm_source,
          utm_medium,
          utm_campaign,
          gclid,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        alert(data.error || "Erro ao enviar os dados do quiz.");
        setIsSubmitting(false);
        return;
      }

      trackLead({
        source: utm_source,
        medium: utm_medium,
        campaign: utm_campaign,
        content_name: "Quiz Diagnóstico",
      })

      setStep("result");
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar os dados. Tente novamente.");
      setIsSubmitting(false);
    }
  }

  const q1 = answers[0] || 0;
  const q2 = answers[1] || 0;
  const q3 = answers[2] || 0;
  const q4 = answers[3] || 0;
  const q5 = answers[4] || 0;

  const clareza = q2 + q5;
  const travamento = q1 + q3 + q4;

  const clarezaPercent = toPercent(clareza, 10);
  const travamentoPercent = toPercent(travamento, 15);

  const perfilKey = getPerfilKey(clareza, travamento);
  const resultado = perfis[perfilKey];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07101f] px-6 py-10 text-[#FFEAC5] md:px-10 lg:px-16">
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
        <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[#0F1728]/82 backdrop-blur-[8px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-[linear-gradient(270deg,rgba(255,255,255,0.04),transparent)]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />

          <div className="relative mx-auto max-w-3xl px-6 py-10 sm:px-10 sm:py-12">
            <AnimatePresence mode="wait" initial={false}>
              {step === "intro" && (
                <motion.section
                  key="intro"
                  variants={pageVariants}
                  initial={isHistoryRestore ? false : "initial"}
                  animate="animate"
                  exit="exit"
                  className="flex min-h-[76vh] flex-col justify-center"
                >
                  <motion.p
                    variants={itemVariants}
                    className="text-sm uppercase tracking-[0.22em] text-[#E7992A]"
                  >
                    Diagnóstico inicial
                  </motion.p>

                  <motion.h1
                    variants={itemVariants}
                    className="mt-4 text-4xl font-semibold leading-tight text-[#FFF0D1] sm:text-5xl lg:text-6xl"
                  >
                    Entenda o que está te travando.
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="mt-6 max-w-2xl text-base leading-8 text-[#FFEAC5]/80 sm:text-lg"
                  >
                    Este diagnóstico identifica padrões internos que podem estar
                    afetando sua clareza, suas decisões e sua capacidade de agir.
                  </motion.p>

                  <motion.p
                    variants={itemVariants}
                    className="mt-4 text-sm text-[#FFEAC5]/60"
                  >
                    Leva menos de 3 minutos.
                  </motion.p>

                  <motion.div variants={itemVariants} className="mt-8">
                    <motion.button
                      onClick={startQuiz}
                      onHoverStart={() => setIsStartHovered(true)}
                      onHoverEnd={() => setIsStartHovered(false)}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.985 }}
                      transition={{ duration: 0.2 }}
                      className="relative inline-flex overflow-hidden rounded-full bg-[#E7992A] px-8 py-4 text-sm font-semibold text-[#0F1728] shadow-[0_0_0_rgba(231,153,42,0)] transition-shadow hover:shadow-[0_10px_30px_rgba(231,153,42,0.18)]"
                    >
                      <motion.span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-[-20%] left-[-55%] w-[38%] bg-white/30 blur-md"
                        animate={{ x: ["-160%", "620%"] }}
                        transition={{
                          duration: isStartHovered ? 1.55 : 3.2,
                          repeat: Infinity,
                          repeatDelay: isStartHovered ? 0.25 : 1.35,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        style={{ skewX: "-20deg" }}
                      />
                      <span className="relative z-10">Começar agora</span>
                    </motion.button>
                  </motion.div>
                </motion.section>
              )}

              {step === "questions" && (
                <motion.section
                  key={`question-${currentQuestion}`}
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex min-h-[76vh] flex-col justify-center"
                >
                  <motion.div variants={itemVariants} className="mb-8">
                    <div className="mb-3 flex items-center justify-between text-sm text-[#FFEAC5]/60">
                      <span>
                        Pergunta {currentQuestion + 1} de {questions.length}
                      </span>
                      <span>{Math.round(progresso)}%</span>
                    </div>

                    <div className="h-2 w-full rounded-full bg-white/10">
                      <motion.div
                        className="h-2 rounded-full bg-[#E7992A]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progresso}%` }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </motion.div>

                  <motion.p
                    variants={itemVariants}
                    className="text-sm uppercase tracking-[0.22em] text-[#E7992A]"
                  >
                    Diagnóstico
                  </motion.p>

                  <motion.h2
                    variants={itemVariants}
                    className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl"
                  >
                    {questions[currentQuestion]}
                  </motion.h2>

                  <motion.div
                    variants={itemVariants}
                    className="mt-10 flex flex-col gap-4"
                  >
                    {options.map((option, index) => (
                      <motion.button
                        key={option.value}
                        onClick={() => answerQuestion(option.value)}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.08 * index,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ y: -2, scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left text-base text-[#FFEAC5]/85 transition hover:border-[#E7992A]/30 hover:bg-white/10"
                      >
                        {option.label}
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.section>
              )}

              {step === "lead" && (
                <motion.section
                  key="lead"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex min-h-[76vh] flex-col justify-center"
                >
                  <motion.p
                    variants={itemVariants}
                    className="text-sm uppercase tracking-[0.22em] text-[#E7992A]"
                  >
                    Seu diagnóstico está quase pronto
                  </motion.p>

                  <motion.h2
                    variants={itemVariants}
                    className="mt-4 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl"
                  >
                    Informe seu nome e e-mail para ver seu resultado completo.
                  </motion.h2>

                  <motion.p
                    variants={itemVariants}
                    className="mt-5 max-w-2xl text-base leading-8 text-[#FFEAC5]/75"
                  >
                    Falta só um passo para liberar sua leitura inicial.
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="mt-8 grid grid-cols-1 gap-4"
                  >
                    <motion.input
                      type="text"
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                      whileFocus={{ scale: 1.01 }}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[#FFEAC5] outline-none placeholder:text-[#FFEAC5]/40 disabled:cursor-not-allowed disabled:opacity-70"
                    />

                    <motion.input
                      type="email"
                      placeholder="Seu e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      whileFocus={{ scale: 1.01 }}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-[#FFEAC5] outline-none placeholder:text-[#FFEAC5]/40 disabled:cursor-not-allowed disabled:opacity-70"
                    />

                    <div className="mt-2">
                      <motion.button
                        onClick={showResult}
                        onHoverStart={() => setIsLeadHovered(true)}
                        onHoverEnd={() => setIsLeadHovered(false)}
                        whileHover={isSubmitting ? {} : { scale: 1.02, y: -1 }}
                        whileTap={isSubmitting ? {} : { scale: 0.985 }}
                        transition={{ duration: 0.2 }}
                        disabled={isSubmitting}
                        className="relative inline-flex overflow-hidden rounded-full bg-[#E7992A] px-8 py-4 text-sm font-semibold text-[#0F1728] shadow-[0_0_0_rgba(231,153,42,0)] transition-shadow hover:shadow-[0_10px_30px_rgba(231,153,42,0.18)] disabled:cursor-not-allowed disabled:opacity-75"
                      >
                        <motion.span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-y-[-20%] left-[-55%] w-[38%] bg-white/30 blur-md"
                          animate={{ x: ["-160%", "620%"] }}
                          transition={{
                            duration: isLeadHovered ? 1.55 : 3.2,
                            repeat: Infinity,
                            repeatDelay: isLeadHovered ? 0.25 : 1.35,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          style={{ skewX: "-20deg" }}
                        />
                        <span className="relative z-10">
                          {isSubmitting ? "Gerando resultado..." : "Ver meu resultado"}
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.section>
              )}

              {step === "result" && (
                <motion.section
                  key="result"
                  variants={pageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="py-6 sm:py-10"
                >
                  <motion.p
                    variants={itemVariants}
                    className="text-sm uppercase tracking-[0.22em] text-[#E7992A]"
                  >
                    Resultado do diagnóstico
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="mt-4 inline-flex rounded-full border border-[#E7992A]/20 bg-[#E7992A]/10 px-4 py-2 text-sm text-[#E7992A]"
                  >
                    {resultado.nomePerfil}
                  </motion.div>

                  <motion.h2
                    variants={itemVariants}
                    className="mt-5 text-3xl font-semibold leading-tight text-[#FFF0D1] sm:text-4xl"
                  >
                    {resultado.titulo}
                  </motion.h2>

                  <motion.p
                    variants={itemVariants}
                    className="mt-6 max-w-2xl text-base leading-8 text-[#FFEAC5]/80 sm:text-lg"
                  >
                    Olá, <span className="text-[#FFEAC5]">{name}</span>.{" "}
                    {resultado.texto}
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6"
                    >
                      <p className="text-sm uppercase tracking-[0.2em] text-[#E7992A]">
                        Clareza interna
                      </p>
                      <p className="mt-2 text-2xl font-semibold">
                        {clarezaPercent}%
                      </p>
                      <div className="mt-4 h-3 w-full rounded-full bg-white/10">
                        <motion.div
                          className="h-3 rounded-full bg-[#E7992A]"
                          initial={{ width: 0 }}
                          animate={{ width: `${clarezaPercent}%` }}
                          transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.2,
                          }}
                        />
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[#FFEAC5]/65">
                        Esse indicador mostra o quanto hoje existe sensação de falta
                        de sentido, direção ou alinhamento interno.
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-3xl border border-white/10 bg-white/5 p-6"
                    >
                      <p className="text-sm uppercase tracking-[0.2em] text-[#E7992A]">
                        Travamento interno
                      </p>
                      <p className="mt-2 text-2xl font-semibold">
                        {travamentoPercent}%
                      </p>
                      <div className="mt-4 h-3 w-full rounded-full bg-white/10">
                        <motion.div
                          className="h-3 rounded-full bg-[#E7992A]"
                          initial={{ width: 0 }}
                          animate={{ width: `${travamentoPercent}%` }}
                          transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.3,
                          }}
                        />
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[#FFEAC5]/65">
                        Esse indicador mostra o peso atual de bloqueios, medo,
                        adiamento e dificuldade de se mover com consistência.
                      </p>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6"
                  >
                    <p className="text-sm uppercase tracking-[0.2em] text-[#E7992A]">
                      O que fazer agora
                    </p>

                    <p className="mt-4 text-base leading-8 text-[#FFEAC5]/80">
                      {resultado.acao}
                    </p>
                  </motion.div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}