import { NextResponse } from "next/server";

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
  "https://script.google.com/macros/s/AKfycbyFGO7H81sllwYpLA7jDVji0nV1Ki7dfbxNqarOOWXEwMEsUpWXFMPYvFNv3k5bBDHO/exec";

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

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

    let appsScriptData: any = null;

    try {
      appsScriptData = JSON.parse(appsScriptText);
    } catch {
      appsScriptData = { raw: appsScriptText };
    }

    if (!appsScriptResponse.ok || !appsScriptData?.ok) {
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

    return NextResponse.json({
      ok: true,
      message: "Quiz recebido e salvo com sucesso.",
    });
  } catch (error) {
    console.error("Erro no endpoint /api/quiz-submit:", error);

    return NextResponse.json(
      { ok: false, error: "Erro interno ao processar o quiz." },
      { status: 500 }
    );
  }
}