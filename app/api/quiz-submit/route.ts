import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type QuizPayload = {
  nome: string;
  email: string;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  clareza: number;
  travamento: number;
  resultado: string;
  origem?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  gclid?: string;
};

const APPS_SCRIPT_URL =
  process.env.APPS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbyFGO7H81sllwYpLA7jDVji0nV1Ki7dfbxNqarOOWXEwMEsUpWXFMPYvFNv3k5bBDHO/exec";

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getResultadoContent(resultado: string) {
  const mapa: Record<string, { descricao: string; acao: string }> = {
    "Base estável, mas pouco aprofundada": {
      descricao:
        "Seu resultado sugere uma base relativamente estável, mas ainda com espaço para aprofundar sua direção com mais consciência, intenção e alinhamento.",
      acao:
        "Reserve um momento para refletir sobre o que hoje faz sentido para você de forma mais autêntica e use essa fase para construir mais clareza com calma.",
    },
    "Potencial presente, mas com freios sutis": {
      descricao:
        "Seu resultado mostra que existe uma base interna importante, mas ainda há travas suficientes para reduzir sua fluidez e sua constância.",
      acao:
        "Escolha uma ação que você vem adiando e transforme esse movimento em evidência prática de que você consegue agir mesmo com desconforto.",
    },
    "Direção razoável, mas travado por bloqueios": {
      descricao:
        "Seu resultado indica que o principal peso hoje não parece ser falta de direção, mas bloqueios internos que dificultam sua travessia.",
      acao:
        "Identifique o que mais te paralisa neste momento e comece a quebrar isso com pequenas exposições e microvitórias.",
    },
    "Em busca de mais definição": {
      descricao:
        "Seu resultado sugere uma fase de busca, transição ou amadurecimento de direção, sem um travamento emocional muito forte.",
      acao:
        "Observe com mais atenção o que aumenta ou drena seu senso de sentido, energia e coerência interna.",
    },
    "Confusão e inércia moderadas": {
      descricao:
        "Seu resultado mostra um ponto de confusão e travamento moderado que pede mais consciência e movimento.",
      acao:
        "Escolha uma área da sua vida para observar com mais atenção e defina uma ação simples, concreta e executável.",
    },
    "Busca interna com bloqueios fortes": {
      descricao:
        "Seu resultado indica que você está buscando mais direção, mas com bloqueios emocionais importantes pesando nesse processo.",
      acao:
        "Comece com ações pequenas, seguras e repetíveis para recuperar movimento antes de aprofundar direção.",
    },
    "Sem direção clara, mas com boa capacidade de agir": {
      descricao:
        "Seu principal gargalo hoje parece ser falta de clareza e alinhamento, mais do que incapacidade de agir.",
      acao:
        "Investigue com honestidade o que realmente importa para você antes de tentar acelerar.",
    },
    "Desalinhamento importante com travas moderadas": {
      descricao:
        "Seu resultado sugere um desalinhamento importante, com travas moderadas que já começam a pesar no seu movimento.",
      acao:
        "Reorganize o que realmente importa hoje e traduza isso em uma ação concreta para os próximos dias.",
    },
    "Sem direção e fortemente travado": {
      descricao:
        "Seu resultado aponta um momento mais crítico de desalinhamento, com falta de direção e bloqueios internos fortes.",
      acao:
        "Não tente reorganizar tudo agora. Comece interrompendo o automático e recuperando um pouco mais de chão interno.",
    },
  };

  return (
    mapa[resultado] || {
      descricao:
        "Seu resultado foi gerado com sucesso e já está salvo para você consultar depois com mais calma.",
      acao:
        "Use esse diagnóstico como um ponto de partida para refletir com mais honestidade sobre o seu próximo passo.",
    }
  );
}

function buildResultadoEmail(params: {
  nome: string;
  perfil: string;
  descricao: string;
  acao: string;
}) {
  const nome = escapeHtml(params.nome);
  const perfil = escapeHtml(params.perfil);
  const descricao = escapeHtml(params.descricao);
  const acao = escapeHtml(params.acao);

  const subject = "Seu resultado do diagnóstico está salvo aqui";

  const html = `
  <!DOCTYPE html>
  <html>
    <body style="margin:0; padding:0; background:#0F1728; font-family:Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#0F1728; border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:32px; color:#FFEAC5;">
              <tr>
                <td style="font-size:22px; font-weight:bold; color:#FFF0D1; text-align:center;">
                  Seu diagnóstico está pronto
                </td>
              </tr>

              <tr>
                <td style="padding-top:20px; font-size:14px; line-height:1.7; color:#FFEAC5;">
                  Olá, <strong>${nome}</strong>.<br><br>
                  Estou te enviando este e-mail para que você não perca o registro do seu diagnóstico.
                  Assim, você pode revisitar seu resultado com mais calma sempre que quiser.
                </td>
              </tr>

              <tr>
                <td style="padding-top:24px;">
                  <div style="background:rgba(231,153,42,0.1); border:1px solid rgba(231,153,42,0.3); padding:16px; border-radius:12px; text-align:center;">
                    <div style="font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#E7992A;">
                      Seu perfil
                    </div>
                    <div style="margin-top:6px; font-size:18px; font-weight:bold; color:#FFEAC5;">
                      ${perfil}
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding-top:20px; font-size:14px; line-height:1.7; color:#FFEAC5;">
                  ${descricao}
                </td>
              </tr>

              <tr>
                <td style="padding-top:20px;">
                  <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); padding:16px; border-radius:12px;">
                    <div style="font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#E7992A;">
                      O que fazer agora
                    </div>
                    <div style="margin-top:6px; font-size:14px; line-height:1.7; color:#FFEAC5;">
                      ${acao}
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding-top:24px; font-size:13px; line-height:1.7; color:#FFEAC5; opacity:0.75;">
                  Enviamos este e-mail para que você não perca esse registro e possa revisitar seu diagnóstico depois com mais calma.
                </td>
              </tr>

              <tr>
                <td style="padding-top:28px; font-size:11px; line-height:1.6; color:#FFEAC5; opacity:0.5; text-align:center;">
                  © 2026 O Despertar de um Propósito<br>
                  Este e-mail foi enviado porque você realizou o diagnóstico.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;

  const text = `
Olá, ${params.nome}.

Estou te enviando este e-mail para que você não perca o registro do seu diagnóstico.

Seu perfil:
${params.perfil}

Resultado:
${params.descricao}

O que fazer agora:
${params.acao}

Enviamos este e-mail para que você possa revisitar esse registro depois com mais calma.
  `.trim();

  return { subject, html, text };
}

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_SMTP_HOST,
  port: Number(process.env.ZOHO_SMTP_PORT || 465),
  secure: Number(process.env.ZOHO_SMTP_PORT || 465) === 465,
  auth: {
    user: process.env.ZOHO_SMTP_USER,
    pass: process.env.ZOHO_SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<QuizPayload>;

    const nome = String(body.nome || "").trim();
    const email = String(body.email || "").trim();
    const q1 = Number(body.q1 || 0);
    const q2 = Number(body.q2 || 0);
    const q3 = Number(body.q3 || 0);
    const q4 = Number(body.q4 || 0);
    const q5 = Number(body.q5 || 0);
    const clareza = Number(body.clareza || 0);
    const travamento = Number(body.travamento || 0);
    const resultado = String(body.resultado || "").trim();

    const origem = String(body.origem || "nextjs_quiz_diagnostico_v1").trim();
    const utm_source = String(body.utm_source || "").trim();
    const utm_medium = String(body.utm_medium || "").trim();
    const utm_campaign = String(body.utm_campaign || "").trim();
    const gclid = String(body.gclid || "").trim();

    if (!nome) {
      return NextResponse.json(
        { ok: false, error: "Nome é obrigatório." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "E-mail inválido." },
        { status: 400 }
      );
    }

    const respostas = [q1, q2, q3, q4, q5];
    const respostasInvalidas = respostas.some((n) => n < 1 || n > 5);

    if (respostasInvalidas) {
      return NextResponse.json(
        { ok: false, error: "As respostas do quiz são inválidas." },
        { status: 400 }
      );
    }

    if (!resultado) {
      return NextResponse.json(
        { ok: false, error: "Resultado não informado." },
        { status: 400 }
      );
    }

    const payloadParaPlanilha = {
      nome,
      email,
      q1,
      q2,
      q3,
      q4,
      q5,
      clareza,
      travamento,
      resultado,
      origem,
      utm_source,
      utm_medium,
      utm_campaign,
      gclid,
    };

    console.log("Payload enviado para Apps Script:", payloadParaPlanilha);

    const appsScriptResponse = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloadParaPlanilha),
    });

    const appsScriptText = await appsScriptResponse.text();

    console.log("Status Apps Script:", appsScriptResponse.status);
    console.log("Resposta bruta Apps Script:", appsScriptText);

    let appsScriptData: unknown = null;

    try {
      appsScriptData = JSON.parse(appsScriptText);
    } catch {
      appsScriptData = { raw: appsScriptText };
    }

    if (
      !appsScriptResponse.ok ||
      !appsScriptData ||
      typeof appsScriptData !== "object" ||
      !("ok" in appsScriptData) ||
      !appsScriptData.ok
    ) {
      console.error("Erro ao enviar para Apps Script:", appsScriptData);

      return NextResponse.json(
        {
          ok: false,
          error: "Erro ao salvar os dados na planilha.",
          details: appsScriptData,
        },
        { status: 500 }
      );
    }

    const { descricao, acao } = getResultadoContent(resultado);
    const emailContent = buildResultadoEmail({
      nome,
      perfil: resultado,
      descricao,
      acao,
    });

    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: email,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
    });

    return NextResponse.json({
      ok: true,
      message: "Quiz recebido, salvo e e-mail enviado com sucesso.",
    });
  } catch (error) {
    console.error("Erro no endpoint /api/quiz-submit:", error);

    return NextResponse.json(
      { ok: false, error: "Erro interno ao processar o quiz." },
      { status: 500 }
    );
  }
}