import { howItWorks } from "@/data/content";
import { ArrowLeft } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem, MagneticButton } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32 md:py-40 px-6 overflow-hidden perf-section">
      <div className="absolute inset-0 bg-charcoal-dark" />
      <div className="absolute inset-0 mesh-gradient-dark" />

      <div className="max-w-7xl mx-auto relative text-white">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block font-display text-sm font-bold tracking-widest uppercase text-lux-pink mb-5">התהליך</span>
          <h2 className="heading-lg mb-5">איך זה עובד?</h2>
          <p className="text-white/60 max-w-md mx-auto text-lg">פשוט. מהיר. מהסלון שלכם.</p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {howItWorks.map((item) => (
            <StaggerItem key={item.step}>
              <motion.div
                className="relative glass-dark rounded-3xl p-8 h-full group glass-highlight"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl glass-dark-strong text-lux-pink font-display font-bold text-sm mb-6 border border-lux-pink/20">
                  {String(item.step).padStart(2, '0')}
                </div>

                <h3 className="relative font-display font-bold text-lg mb-3">{item.title}</h3>
                <p className="relative text-white/55 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-16">
          <MagneticButton strength={0.15}>
            <motion.a
              href="#vod-catalog"
              className="relative inline-flex items-center gap-2.5 font-display font-bold text-lg px-8 py-4 rounded-full glass-dark-strong text-white hover:bg-white/15 transition-colors duration-300 border border-lux-pink/20"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              מוכנות? לקטלוג האימונים
              <ArrowLeft className="w-5 h-5" />
            </motion.a>
          </MagneticButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
