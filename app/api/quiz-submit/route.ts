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

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.APP_URL ||
    "";

  const logoUrl = siteUrl
    ? `${siteUrl.replace(/\/$/, "")}/logo-despertar.png`
    : "";

  const logoBlock = logoUrl
    ? `
      <tr>
        <td align="center" style="padding:0 0 18px 0;">
          <img
            src="${logoUrl}"
            alt="O Despertar de um Propósito"
            width="220"
            style="display:block; width:220px; max-width:100%; height:auto; border:0; outline:none; text-decoration:none; margin:0 auto;"
          />
        </td>
      </tr>
    `
    : `
      <tr>
        <td align="center" style="padding:0 0 18px 0;">
          <div style="font-size:12px; line-height:1; letter-spacing:2px; text-transform:uppercase; color:#E7992A; font-weight:700; margin-bottom:10px;">
            O Despertar de um Propósito
          </div>
          <div style="width:72px; height:3px; background:#E7992A; border-radius:999px; margin:0 auto;"></div>
        </td>
      </tr>
    `;

  const html = `
  <!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>${subject}</title>
    </head>
    <body style="margin:0; padding:0; background-color:#07101f; font-family:Arial, Helvetica, sans-serif; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0; padding:0; width:100%; background-color:#07101f;">
        <tr>
          <td align="center" style="padding:32px 14px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px; margin:0 auto;">
              <tr>
                <td align="center" style="padding:0 0 14px 0;">
                  <div style="font-size:11px; line-height:1.2; letter-spacing:2px; text-transform:uppercase; color:#E7992A; font-weight:700;">
                    Resultado do diagnóstico
                  </div>
                </td>
              </tr>

              <tr>
                <td style="border-radius:26px; overflow:hidden; border:1px solid #202b3f; background-color:#0F1728;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td
                        style="
                          padding:34px 28px 26px 28px;
                          background:
                            radial-gradient(circle at top left, rgba(231,153,42,0.14), transparent 34%),
                            radial-gradient(circle at top right, rgba(231,153,42,0.08), transparent 28%),
                            linear-gradient(180deg, #0F1728 0%, #0B1322 100%);
                        "
                      >
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                          ${logoBlock}

                          <tr>
                            <td align="center" style="font-size:30px; line-height:1.2; font-weight:700; color:#FFF0D1;">
                              Seu diagnóstico está pronto
                            </td>
                          </tr>

                          <tr>
                            <td align="center" style="padding-top:12px; font-size:15px; line-height:1.8; color:#FFEAC5;">
                              Guarde este e-mail para revisitar seu resultado com mais calma sempre que quiser.
                            </td>
                          </tr>

                          <tr>
                            <td style="padding-top:24px;">
                              <div style="height:1px; background:linear-gradient(90deg, rgba(231,153,42,0), rgba(231,153,42,0.45), rgba(231,153,42,0));"></div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:26px 28px 0 28px; font-size:15px; line-height:1.9; color:#FFEAC5;">
                        Olá, <strong style="color:#FFF0D1;">${nome}</strong>.
                        <br /><br />
                        Estou te enviando este e-mail para que você não perca o registro do seu diagnóstico.
                        Assim, você pode revisitar esse conteúdo com mais calma e usar esse resultado como referência para refletir e agir com mais clareza.
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:24px 28px 0 28px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="border-radius:18px; border:1px solid rgba(231,153,42,0.34); background:linear-gradient(180deg, rgba(231,153,42,0.18) 0%, rgba(231,153,42,0.10) 100%); padding:20px 18px; text-align:center;">
                              <div style="font-size:11px; line-height:1.2; letter-spacing:1.8px; text-transform:uppercase; color:#E7992A; font-weight:700;">
                                Seu perfil
                              </div>
                              <div style="margin-top:10px; font-size:22px; line-height:1.45; color:#FFF0D1; font-weight:700;">
                                ${perfil}
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:18px 28px 0 28px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="border-radius:18px; border:1px solid rgba(255,255,255,0.09); background:#121c2e; padding:22px 20px;">
                              <div style="font-size:11px; line-height:1.2; letter-spacing:1.8px; text-transform:uppercase; color:#E7992A; font-weight:700;">
                                Leitura do resultado
                              </div>
                              <div style="margin-top:12px; font-size:15px; line-height:1.9; color:#FFEAC5;">
                                ${descricao}
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:18px 28px 0 28px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="border-radius:18px; border:1px solid rgba(255,255,255,0.10); background:rgba(255,255,255,0.04); padding:22px 20px;">
                              <div style="font-size:11px; line-height:1.2; letter-spacing:1.8px; text-transform:uppercase; color:#E7992A; font-weight:700;">
                                O que fazer agora
                              </div>
                              <div style="margin-top:12px; font-size:15px; line-height:1.9; color:#FFEAC5;">
                                ${acao}
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:18px 28px 0 28px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td style="border-radius:16px; border:1px solid rgba(162,70,23,0.38); background:rgba(162,70,23,0.14); padding:16px 18px;">
                              <div style="font-size:13px; line-height:1.8; color:#FFEAC5;">
                                Este e-mail foi enviado para que você tenha esse registro salvo e possa revisitar seu diagnóstico sempre que precisar.
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding:26px 28px 0 28px;">
                        <div style="height:1px; background:linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.10), rgba(255,255,255,0));"></div>
                      </td>
                    </tr>

                    <tr>
                      <td align="center" style="padding:18px 28px 30px 28px;">
                        <div style="font-size:11px; line-height:1.8; color:#FFEAC5; opacity:0.56;">
                          © 2026 O Despertar de um Propósito<br />
                          Este e-mail foi enviado porque você realizou o diagnóstico.
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding-top:14px;">
                  <div style="font-size:11px; line-height:1.6; color:#FFEAC5; opacity:0.35;">
                    Se você não reconhecer este envio, basta desconsiderar esta mensagem.
                  </div>
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

Seu diagnóstico está pronto.

Estou te enviando este e-mail para que você não perca o registro do seu diagnóstico.
Assim, você pode revisitar esse conteúdo com mais calma e usar esse resultado como referência para refletir e agir com mais clareza.

Seu perfil:
${params.perfil}

Leitura do resultado:
${params.descricao}

O que fazer agora:
${params.acao}

Este e-mail foi enviado para que você tenha esse registro salvo e possa revisitar seu diagnóstico sempre que precisar.

© 2026 O Despertar de um Propósito
Este e-mail foi enviado porque você realizou o diagnóstico.
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

    console.log("Preparando envio de e-mail para:", email);
    console.log("SMTP host configurado:", !!process.env.ZOHO_SMTP_HOST);
    console.log("SMTP port configurado:", !!process.env.ZOHO_SMTP_PORT);
    console.log("SMTP user configurado:", !!process.env.ZOHO_SMTP_USER);
    console.log("SMTP pass configurado:", !!process.env.ZOHO_SMTP_PASS);
    console.log("MAIL_FROM_NAME configurado:", !!process.env.MAIL_FROM_NAME);
    console.log(
      "MAIL_FROM_ADDRESS configurado:",
      !!process.env.MAIL_FROM_ADDRESS
    );

    let emailSent = false;
    let emailErrorMessage = "";

    try {
      const mailResult = await transporter.sendMail({
        from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
        to: email,
        subject: emailContent.subject,
        text: emailContent.text,
        html: emailContent.html,
      });

      emailSent = true;
      console.log("E-mail enviado com sucesso. Message ID:", mailResult.messageId);
    } catch (mailError) {
      console.error("Erro ao enviar e-mail pelo Zoho:", mailError);

      emailErrorMessage =
        mailError instanceof Error
          ? mailError.message
          : "Falha desconhecida ao enviar e-mail";
    }

    return NextResponse.json({
      ok: true,
      message: emailSent
        ? "Quiz recebido, salvo e e-mail enviado com sucesso."
        : "Quiz recebido e salvo com sucesso, mas o e-mail não pôde ser enviado.",
      emailSent,
      emailErrorMessage,
    });
  } catch (error) {
    console.error("Erro no endpoint /api/quiz-submit:", error);

    return NextResponse.json(
      { ok: false, error: "Erro interno ao processar o quiz." },
      { status: 500 }
    );
  }
}