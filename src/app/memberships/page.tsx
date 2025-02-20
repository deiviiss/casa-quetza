import CallToAction from "@/components/CallToActionMemberships"
import HeroSection from "@/components/HeroSection"
import MembershipCards from "@/components/MembershipCards"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Membresías - Casa Quetzal Cannabis Seeds",
  description:
    "Explora nuestras membresías exclusivas y elige la que mejor se adapte a tus necesidades. Accede a productos premium, descuentos y contenido exclusivo.",
}

export default function MembershipPage() {
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Elige la Membresía que se Adapte a Ti"
        subtitle="Accede a productos exclusivos, descuentos y contenido premium"
        desktopImage="/imgs/hero-background.png"
        mobileImage="/imgs/hero-background-mobile.jpg"
        imageAlt="Comunidad CQCS y beneficios de membresía"
      />
      <MembershipCards />
      <CallToAction
        title="Forma parte de la comunidad CQCS y accede a beneficios exclusivos"
        buttonText="Elige tu Membresía"
        buttonLink="#membership-cards"
      />
    </main>
  )
}

