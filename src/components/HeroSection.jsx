import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { heroContent, whatsappLink } from "@/data/content";
import logo from "@/Assets/BE86F7DC-B951-4A25-86A7-CBDA821BFC34.png";
import { ChevronDown, ArrowLeft } from "lucide-react";
import { GlassOrb, MagneticButton } from "@/components/AnimatedSection";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.45], [0, -60]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center gpu-layer"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=1600&h=1000&fit=crop&fm=webp&q=80')",
          y: bgY,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-lux-cream/70 to-white/90" />
      <div className="absolute inset-0 mesh-gradient-warm opacity-50" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GlassOrb className="top-[10%] right-[-5%]" size="400px" color="rgba(244,131,155,0.07)" />
        <GlassOrb className="bottom-[10%] left-[-8%]" size="350px" color="rgba(255,194,209,0.06)" />
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-28 pb-20 gpu-layer"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.img
          src={logo}
          alt="Pilates by Lilush"
          fetchPriority="high"
          className="w-24 sm:w-32 h-auto mx-auto mb-10 drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.div
          className="inline-flex items-center gap-2.5 glass-card rounded-full px-6 py-2.5 mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-2 h-2 rounded-full bg-lux-pink animate-pulse" />
          <span className="text-sm font-medium text-charcoal">{heroContent.badge}</span>
        </motion.div>

        <motion.h1
          className="mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block heading-xl text-charcoal">{heroContent.headline}</span>
          <span className="block heading-xl text-gradient-pink mt-2">{heroContent.headlineAccent}</span>
        </motion.h1>

        <motion.p
          className="font-display text-xl sm:text-2xl font-bold text-charcoal/75 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          {heroContent.headlineSuffix}
        </motion.p>

        <motion.p
          className="text-body-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {heroContent.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton strength={0.15}>
            <motion.button
              onClick={() => document.getElementById("vod-catalog")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-premium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {heroContent.ctaPrimary}
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
          </MagneticButton>

          <MagneticButton strength={0.15}>
            <motion.a
              href={whatsappLink("היי לי! אשמח לשמוע עוד על השיעורים שלך")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {heroContent.ctaSecondary}
            </motion.a>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs font-medium text-lux-fog tracking-wider uppercase">גלגלו למטה</span>
          <ChevronDown className="w-5 h-5 text-lux-fog" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-lux-cream to-transparent z-[5]" />
    </section>
  );
}
