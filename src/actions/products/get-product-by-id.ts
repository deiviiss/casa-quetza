'use server'

import { getProducts } from "./get-products"

// import prisma from '@/lib/prisma'

export const getProductById = async (id: string) => {
  const { products } = await getProducts()
  const product = products.find(p => p.id === id)

  if (!product || !products) {
    return {
      ok: false,
      message: 'Product not found'
    }
  }

  return {
    ok: true,
    product
  }
}
