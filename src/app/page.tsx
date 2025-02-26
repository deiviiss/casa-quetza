import { getProducts } from "@/actions/products/get-products";
import AboutUs from "@/components/AboutUs";
import CallToAction from "@/components/CallToActions";
import DigitalDispensary from "@/components/DigitalDispensary";
import DigitalStrategy from "@/components/DigitalStrategy";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import SeedBank from "@/components/SeedBank";

export default async function Home() {
  const { products } = await getProducts()
  return (
    <main className="min-h-screen">
      <HeroSection
        title="Innovación en genética y sustentabilidad del cáñamo"
        subtitle="Semillas certificadas, productos derivados y un dispensario digital exclusivo"
        ctaLink="https://www.facebook.com/QuetzalSeeds420"
        ctaText="Únete a nuestra comunidad"
        desktopImage="/imgs/hero-background.png"
        mobileImage="/imgs/hero-background-mobile.jpg"
        imageAlt="Cultivos regenerativos de cáñamo"
      />
      <div className="max-w-7xl mx-auto">
        <AboutUs />
        <SeedBank />
        <DigitalDispensary />
        <FeaturedProducts products={products} />
        <DigitalStrategy />
        <CallToAction />
      </div>
    </main>
  )
}
