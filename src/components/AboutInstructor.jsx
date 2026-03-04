import { motion } from "framer-motion";
import { aboutContent } from "@/data/content";
import AnimatedSection, { ParallaxSection } from "@/components/AnimatedSection";

export default function AboutInstructor() {
  return (
    <section id="about" className="relative py-24 sm:py-32 md:py-40 px-6 overflow-hidden perf-section">
      <div className="absolute inset-0 bg-lux-sand/40" />
      <div className="absolute inset-0 mesh-gradient-warm opacity-30" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          <AnimatedSection variant="rotateIn" className="flex-shrink-0">
            <div className="relative">
              <motion.div
                className="w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-[2.5rem] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.1)]"
                whileHover={{ rotate: -2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <img src={aboutContent.image} alt="מדריכת פילאטיס" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </motion.div>

              <ParallaxSection speed={0.12} className="absolute -bottom-5 -right-5 w-32 h-32 glass-card rounded-3xl -z-10" />
              <ParallaxSection speed={-0.08} className="absolute -top-5 -left-5 w-28 h-28 rounded-3xl -z-10 bg-lux-pink/10 border border-lux-pink/15" />
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideLeft" className="text-center md:text-right flex-1">
            <span className="inline-block font-display text-sm font-bold tracking-widest uppercase text-lux-pink mb-5">קצת עליי</span>
            <h2 className="heading-lg text-charcoal mb-8">{aboutContent.title}</h2>
            <div className="space-y-5">
              {aboutContent.textParts.map((part, i) => (
                <p key={i} className="text-body-lg">{part}</p>
              ))}
            </div>

            <motion.div
              className="mt-10 flex items-center justify-center md:justify-end gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="h-[1px] w-12 bg-lux-pink/40" />
              <span className="font-display text-lg font-bold text-lux-pink">לי ואנונו</span>
              <div className="h-[1px] w-12 bg-lux-pink/40" />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
