import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const PainPoints = lazy(() => import("@/components/PainPoints"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const VodCatalog = lazy(() => import("@/components/VodCatalog"));
const MiniShop = lazy(() => import("@/components/MiniShop"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const AboutInstructor = lazy(() => import("@/components/AboutInstructor"));
const FooterContact = lazy(() => import("@/components/FooterContact"));

function SectionFallback() {
  return <div className="py-32" />;
}

function SectionDivider() {
  return <div className="section-divider mx-auto max-w-4xl" />;
}

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <PainPoints />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <AboutInstructor />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <VodCatalog />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <MiniShop />
        </Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <FooterContact />
      </Suspense>
      <WhatsAppFAB />
    </>
  );
}
