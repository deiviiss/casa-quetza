"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Product } from "@/types/product.interface"

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en comprar el ${product.name}. ¿Me puedes dar más información?`,
  )
  const whatsappLink = `https://wa.me/1234567890?text=${whatsappMessage}`

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            priority
          />
        </motion.div>

        {/* Product information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-xl text-gray-600">{product.shortDescription}</p>
          <p className="text-3xl font-bold text-slate-600">${product.price} MXN</p>

          <Button className="w-full md:w-auto" onClick={() => window.open(whatsappLink, "_blank")}>
            Comprar en WhatsApp
          </Button>
        </motion.div>
      </div>

      {/* Additional Details */}
      <motion.div
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
      >

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Descripción</h2>
          <p className="text-gray-600">{product.longDescription}</p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Beneficios</h2>
          <ul className="list-disc list-inside space-y-2">
            {product.benefits.map((benefit, index) => (
              <li key={index} className="text-gray-600">
                {benefit}
              </li>
            ))}

          </ul>
        </Card>

        {product.ingredients && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Ingredientes</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">
                  {ingredient}
                </li>
              ))}
            </ul>
          </Card>
        )}

        {product.usage && (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Modo de Uso</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.usage.map((instruction, index) => (
                <li key={index} className="text-gray-600">
                  {instruction}
                </li>
              ))}
            </ul>
          </Card>
        )}

        <Card className="p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Origen y Trazabilidad</h2>
          <p className="text-gray-600">{product.origin}</p>
        </Card>
      </motion.div>
    </div>
  )
}

