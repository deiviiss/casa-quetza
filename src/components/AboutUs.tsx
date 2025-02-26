"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Nosotros
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 px-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-4">
              En Casa Quetzal Cannabis Seeds, nos enfocamos en la innovación genética, sustentabilidad y trazabilidad en
              el cultivo y comercialización de cáñamo en México.
            </p>
            <p className="text-lg mb-4">
              Nuestra misión es revolucionar la industria del cáñamo a través de prácticas sustentables y genética
              avanzada, proporcionando productos de la más alta calidad a nuestros clientes.
            </p>
            <p className="text-lg">
              Visualizamos un futuro donde el cáñamo juega un papel crucial en la economía y el bienestar de México,
              impulsando la innovación y el desarrollo sostenible.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 mx-auto flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              // src="/milpas-regenerativas.jpg"
              src="/imgs/milpas.jpg"
              alt="Milpas regenerativas y banco de semillas"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-96 h-96 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

