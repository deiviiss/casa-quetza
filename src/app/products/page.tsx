import CallToAction from "@/components/CallToActionMemberships"
import HeroSection from "@/components/HeroSection"
import ProductCards from "@/components/ProductCards"
import ProductStructuredData from "@/components/ProductStructuredData"
import { Product } from "@/types/product.interface"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Productos - Casa Quetzal Cannabis Seeds",
  description:
    "Descubre nuestros productos premium de cáñamo: semillas certificadas, pre-rolados, cremas CBD y más. Calidad y trazabilidad garantizadas.",
}

const products: Product[] = [
  {
    name: "Pre-Rolados K’aax Ik’",
    image: "/imgs/pre-rolados.png",
    description: "Disfruta de la experiencia pura del cáñamo con nuestros pre-rolados premium. De flores curadas de 2 años sin fertilizantes sintéticos. Suave, aromático y de alta calidad.",
    price: 299,
  },
  {
    name: "Cremas, Aceites y Miel con CBD",
    description: "Infusionados con cáñamo cultivado en espacios regenerativos. Alivio natural y relajación. Productos de bienestar infundidos con CBD para tu rutina diaria.",
    price: 499,
    image: "/imgs/crema-cbd.png",
  },
  {
    name: "Velas y Souvenirs de cáñamo",
    image: "/imgs/vela-decorativa.png",
    description: "Lleva contigo un pedazo de nuestra cultura del cáñamo. Productos ecológicos hechos con fibra de cáñamo. Aromas relajantes y diseño artesanal.",
    price: 199,
  },
  {
    name: "Biofertilizante Orgánico",
    image: "/imgs/aceite-cbd.png",
    description: "Nutre tus cultivos de manera natural con nuestro biofertilizante de cáñamo. Elaborado con procesos anaeróbicos para enriquecer suelos degradados. Ideal para cultivos sustentables.",
    price: 399,
  },
]

export default function Productos() {
  return (
    <main className="min-h-screen">
      {/* SEO */}
      <ProductStructuredData products={products} />
      <HeroSection
        title="Descubre Nuestros Productos"
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

