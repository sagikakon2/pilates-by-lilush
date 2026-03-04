import { useState } from "react";
import { motion } from "framer-motion";
import { classes } from "@/data/content";
import { Clock } from "lucide-react";
import ClassModal from "@/components/ClassModal";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function VodCatalog() {
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <>
      <section id="vod-catalog" className="relative py-24 sm:py-32 md:py-40 px-6 overflow-hidden perf-section">
        <div className="absolute inset-0 bg-lux-cream" />
        <div className="absolute inset-0 mesh-gradient-warm opacity-40" />

        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block font-display text-sm font-bold tracking-widest uppercase text-lux-pink mb-5">האימונים</span>
            <h2 className="heading-lg text-charcoal mb-5">ספריית האימונים</h2>
            <p className="text-body-lg max-w-lg mx-auto">בחרו את האימון שמתאים לכם – לחצו על הכרטיס לפרטים נוספים ורכישה</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto" staggerDelay={0.15}>
            {classes.map((cls) => (
              <StaggerItem key={cls.id}>
                <motion.button
                  onClick={() => setSelectedClass(cls)}
                  className="group w-full glass-card-strong rounded-4xl overflow-hidden card-glow text-right"
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                >
                  <div className="relative overflow-hidden">
                    <img src={cls.image} alt={cls.title} loading="lazy" decoding="async" className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <div className="w-16 h-16 rounded-full glass-card-strong flex items-center justify-center">
                        <span className="font-display text-charcoal font-bold text-sm">פרטים</span>
                      </div>
                    </div>
                    <div className="absolute top-5 right-5 glass-dark rounded-full px-4 py-1.5">
                      <span className="text-white text-xs font-display font-bold">{cls.badge}</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <span className="inline-block font-display text-xs font-bold text-lux-pink-deep tracking-wider uppercase bg-lux-pink/8 rounded-full px-4 py-1.5 mb-3 border border-lux-pink/15">
                      {cls.cardLabel}
                    </span>
                    <h3 className="font-display font-bold text-charcoal text-xl mb-4">{cls.title}</h3>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-4">
                        <span className="font-display text-2xl font-black text-charcoal">{cls.price}&#8362;</span>
                        <span className="flex items-center gap-1.5 text-lux-fog text-sm">
                          <Clock className="w-3.5 h-3.5" />{cls.duration}
                        </span>
                      </div>
                      <span className="font-display bg-charcoal text-white font-bold px-5 py-2.5 rounded-full text-sm group-hover:bg-lux-pink transition-colors duration-300">
                        {cls.ctaText}
                      </span>
                    </div>
                  </div>
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-10">
            <p className="text-sm text-lux-fog font-medium">כל רכישה דרך וואטסאפ · קבלת הסרטון מיידי · ללא ציוד</p>
          </AnimatedSection>
        </div>
      </section>

      {selectedClass && <ClassModal classItem={selectedClass} onClose={() => setSelectedClass(null)} />}
    </>
  );
}
