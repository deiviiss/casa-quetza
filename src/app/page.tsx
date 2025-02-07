import AboutUs from "@/components/AboutUs";
import CallToAction from "@/components/CallToActions";
import DigitalDispensary from "@/components/DigitalDispensary";
import DigitalStrategy from "@/components/DigitalStrategy";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroSection from "@/components/HeroSection";
import SeedBank from "@/components/SeedBank";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div className="max-w-7xl mx-auto">
        <AboutUs />
        <SeedBank />
        <DigitalDispensary />
        <FeaturedProducts />
        <DigitalStrategy />
        <CallToAction />
      </div>
    </main>
  )
}
