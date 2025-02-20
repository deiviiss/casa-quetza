"use client"

import { Product } from "@/types/product.interface"
import { motion } from "framer-motion"
import Image from "next/image"

interface ProductCardsProps {
  products: Product[]
}

export default function ProductCards({ products }: ProductCardsProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestros Productos
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const whatsappMessage = encodeURIComponent(`Hola, quiero comprar el producto: ${product.name}`)
  const whatsappLink = `https://wa.me/529999688834?text=${whatsappMessage}`

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-green-600 mb-4">${product.price} MXN</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 text-center"
        >
          Comprar en WhatsApp
        </a>
      </div>
    </motion.div>
  )
}

