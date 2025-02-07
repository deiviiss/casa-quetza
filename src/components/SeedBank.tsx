"use client"

import { motion } from "framer-motion"

export default function SeedBank() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Banco de Semillas y Genética
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-semibold mb-4">Mejora Genética y Estabilidad Fenotípica</h3>
            <p className="text-lg mb-4">
              Nuestro enfoque en la mejora genética nos permite ofrecer semillas de cáñamo con características
              superiores y una estabilidad fenotípica excepcional.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Producción Sin Fertilizantes Sintéticos</h3>
            <p className="text-lg mb-4">
              Cultivamos nuestras plantas sin el uso de fertilizantes sintéticos, lo que resulta en productos más puros
              y respetuosos con el medio ambiente.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-semibold mb-4">Genética Exclusiva Xbalanqué</h3>
            <p className="text-lg mb-4">
              Nuestra genética exclusiva Xbalanqué supera a la popular Fedora 17 en términos de rendimiento y calidad.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Comparativa con Fedora 17</h4>
              <ul className="list-disc list-inside">
                <li>Mayor resistencia a plagas y enfermedades</li>
                <li>Rendimiento superior en condiciones climáticas variadas</li>
                <li>Perfil de cannabinoides optimizado</li>
                <li>Mejor adaptación a las condiciones locales de México</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

