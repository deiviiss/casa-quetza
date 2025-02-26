"use client"

import type React from "react"

import { motion } from "framer-motion"

interface CallToActionProps {
  title: string
  buttonText: string
  buttonLink: string
}

export default function CallToAction({ title, buttonText, buttonLink }: CallToActionProps) {

  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <a
            href={buttonLink}
            className="bg-white text-slate-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition duration-300"
          >
            {buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

