"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function CallToAction() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted with email:", email)
    setEmail("")
  }

  return (
    <section className="py-16 bg-green-600 text-white">
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
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 rounded-full text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-white text-green-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300"
            >
              Suscribirse
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

