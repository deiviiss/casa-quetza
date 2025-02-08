'use server'

import * as brevo from '@getbrevo/brevo'
const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY || ''
)

interface EmailOptionsParams {
  to: string
  subject: string
  message: string
}

export const sendEmail = async ({ to, subject, message }: EmailOptionsParams) => {
  console.log('email server', to)
  try {
    const smtpEmail = new brevo.SendSmtpEmail()
    smtpEmail.subject = subject
    smtpEmail.to = [{ email: to, name: to }]
    smtpEmail.htmlContent = `<html><body>${message}</body></html>`
    smtpEmail.sender = { name: 'Casa Quetzal Cannabis Seed 420', email: 'bazar.campechano@hotmail.com' }

    await apiInstance.sendTransacEmail(smtpEmail)

    return {
      ok: true,
      message: 'Correo enviado'
    }
  } catch (error) {

    console.error(error)
    return {
      ok: false,
      message: 'Error al enviar este correo'
    }
  }
}
