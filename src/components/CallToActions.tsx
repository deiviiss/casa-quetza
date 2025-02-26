"use client"

import { sendEmail } from "@/actions/notifications/email/send-email-message"
import { motion } from "framer-motion"
import { useState } from "react"

export default function CallToAction() {
  const [isSubmittingMessage, setIsSubmittingMessage] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    setIsSubmittingMessage(true)

    //! SHOULD BE CASTING TO ZOD
    const userEmail = formData.get('email') as string
    const userAdmin = 'casaquetzalcannabisseeds@hotmail.com'

    await sendEmail({
      to: userAdmin,
      subject: 'Suscripción al boletín de noticias',
      message: `
          <div div style="font-family: Arial, sans-serif; background-color: #1a1a1a; color: #f0f0f0; padding: 20px; border-radius: 8px;" >
      <h2 style="color: #ffffff;">¡Nuevo suscriptor!</h2>
      <p><strong style="color: #ffffff;">Datos del usuario:</strong></p>
      <ul style="list-style-type: none; padding: 0;">
        <li style="color: #cccccc;"><strong>Email:</strong> ${userEmail}</li>
      </ul>
      <hr style="border: 1px solid #333;" />
      <p style="color: #cccccc;">Este mensaje fue enviado desde el formulario de contacto del sitio web.</p>
    </div >
        `
    })

    form.reset()
    setIsSubmittingMessage(false)
  }

  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Únete a la Revolución del Cáñamo
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              name="email"
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-grow px-4 py-2 rounded-full text-gray-800"
              required
              disabled={isSubmittingMessage}
            />
            <button
              type="submit"
              disabled={isSubmittingMessage}
              className={`bg-white text-slate-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300 ${isSubmittingMessage ? "cursor-not-allowed" : ""}`}
            >
              Suscribirse
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

