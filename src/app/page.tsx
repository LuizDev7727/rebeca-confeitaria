import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Products from "@/app/components/Products";
import GallerySection from "@/app/components/GallerySection";
import Differentials from "@/app/components/Differentials";
import Testimonials from "@/app/components/Testimonials";
import AboutSection from "@/app/components/AboutSection";
import MapSection from "@/app/components/MapSection";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="font-sans text-chocolate overflow-x-hidden">
      <FloatingWhatsApp />
      <Navbar />
      <Hero />
      <Products />
      <GallerySection />
      <Differentials />
      <Testimonials />
      <AboutSection />
      <MapSection />
      <CTA />
      <Footer />
    </main>
  );
}
