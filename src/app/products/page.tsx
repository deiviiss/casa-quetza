import { getProducts } from "@/actions/products/get-products"
import CallToAction from "@/components/CallToActionMemberships"
import HeroSection from "@/components/HeroSection"
import ProductCards from "@/components/ProductCards"
import ProductStructuredData from "@/components/ProductStructuredData"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Productos - Casa Quetzal Cannabis Seeds",
  description:
    "Descubre nuestros productos premium de cáñamo: semillas certificadas, pre-rolados, cremas CBD y más. Calidad y trazabilidad garantizadas.",
}

export default async function Products() {
  const { products } = await getProducts()

  return (
    <main className="min-h-screen">
      {/* SEO */}
      <ProductStructuredData products={products} />
      <HeroSection
        title="Descubre nuestros productos"
        subtitle="Semillas certificadas, productos derivados y más, con trazabilidad garantizada"
        desktopImage="/imgs/hero-background.png"
        mobileImage="/imgs/hero-background-mobile.jpg"
        imageAlt="Variedad de productos de cáñamo de CQCS"
      />
      <ProductCards products={products} />
      <CallToAction
        title="¿Tienes dudas? Escríbenos y te asesoramos en tu compra"
        buttonText="Chatear con un Asesor"
        buttonLink={`https://wa.me/529999688834?text=Hola%2C%20me%20gustar%C3%ADa%20hablar%20con%20un%20asesor%20para%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20productos.`}
      />
    </main>
  )
}

