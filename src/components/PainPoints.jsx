import { motion } from "framer-motion";
import { painPoints } from "@/data/content";
import { Clock, Heart, Eye, ArrowLeft } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem, MagneticButton } from "@/components/AnimatedSection";

const iconMap = { Clock, Heart, Eye };

export default function PainPoints() {
  return (
    <section id="why" className="relative py-24 sm:py-32 md:py-40 px-6 overflow-hidden perf-section">
      <div className="absolute inset-0 bg-lux-cream" />
      <div className="absolute inset-0 mesh-gradient-warm" />

      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block font-display text-sm font-bold tracking-widest uppercase text-lux-pink mb-5">
            היתרונות
          </span>
          <h2 className="heading-lg text-charcoal mb-5">למה להתאמן איתי בבית?</h2>
          <p className="text-body-lg max-w-lg mx-auto">שלושה סיבות שיגרמו לכם לאהוב את הפילאטיס מחדש</p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" staggerDelay={0.12}>
          {painPoints.map((point) => {
            const Icon = iconMap[point.icon];
            return (
              <StaggerItem key={point.id}>
                <motion.div
                  className="group relative glass-card-strong rounded-4xl p-9 text-center h-full card-glow glass-highlight"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-lux-pink/10 mb-6 group-hover:bg-lux-pink/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-lux-pink" />
                  </div>

                  <span className="relative inline-block font-display text-xs font-bold text-lux-pink-deep tracking-wider uppercase bg-lux-pink/8 rounded-full px-4 py-1.5 mb-5 border border-lux-pink/15">
                    {point.tag}
                  </span>

                  <h3 className="relative font-display text-xl font-bold text-charcoal mb-4">{point.title}</h3>
                  <p className="relative text-lux-slate leading-relaxed text-[15px]">{point.description}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-16">
          <MagneticButton strength={0.15}>
            <motion.a href="#vod-catalog" className="btn-premium" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              בחרו אימון ונתחיל
              <ArrowLeft className="w-5 h-5" />
            </motion.a>
          </MagneticButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
