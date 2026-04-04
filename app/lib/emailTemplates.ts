type ResultadoEmailParams = {
  nome: string
  perfil: string
  descricao: string
  acao: string
}

export function buildResultadoEmail({
  nome,
  perfil,
  descricao,
  acao,
}: ResultadoEmailParams) {
  const subject = "Seu resultado do diagnóstico está salvo aqui"

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
                <td style="padding-top:28px; font-size:12px; line-height:1.6; color:#FFEAC5; opacity:0.6; text-align:center;">
                  Este e-mail foi enviado para que você não perca o registro do seu diagnóstico.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `

  const text = `
Olá, ${nome}.

Estou te enviando este e-mail para que você não perca o registro do seu diagnóstico.

Seu perfil:
${perfil}

Resultado:
${descricao}

O que fazer agora:
${acao}
  `.trim()

  return { subject, html, text }
}