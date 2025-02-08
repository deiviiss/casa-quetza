"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const products = [
  {
    name: "Pre-Rolados 'Viento del Monte'",
    image: "/imgs/pre-rolados.png",
    description: "Disfruta de la experiencia pura del cáñamo con nuestros pre-rolados premium.",
  },
  {
    name: "Cremas, Aceites y Miel con CBD",
    // image: "/cbd-products.jpg",
    image: "/imgs/crema-cbd.png",
    description: "Productos de bienestar infundidos con CBD para tu rutina diaria.",
  },
  {
    name: "Velas y Souvenirs de cáñamo",
    // image: "/hemp-souvenirs.jpg",
    image: "/imgs/vela-decorativa.png",
    description: "Lleva contigo un pedazo de nuestra cultura del cáñamo.",
  },
  {
    name: "Biofertilizante Orgánico",
    // image: "/biofertilizer.jpg",
    image: "/imgs/aceite-cbd.png",
    description: "Nutre tus cultivos de manera natural con nuestro biofertilizante de cáñamo.",
  },
]

export default function FeaturedProducts() {
  const [currentProduct, setCurrentProduct] = useState(0)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Productos Destacados
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={products[currentProduct].image || "/placeholder.svg"}
              alt={products[currentProduct].name}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover max-h-96"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{products[currentProduct].name}</h3>
            <p className="text-lg mb-6">{products[currentProduct].description}</p>
            <div className="flex space-x-4">
              {products.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentProduct ? "bg-green-600" : "bg-gray-300"}`}
                  onClick={() => setCurrentProduct(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

