import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/content";
import { Star, Quote, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection, { MagneticButton } from "@/components/AnimatedSection";

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll("[data-card]");
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const dist = Math.abs(cardCenter - containerCenter);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          updateActiveIndex();
          ticking = false;
        });
      }
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [updateActiveIndex]);

  const scrollTo = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll("[data-card]");
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  const TestimonialCard = ({ t, index, isMobile = false }) => (
    <motion.div
      {...(isMobile ? { "data-card": true } : {})}
      className={`glass-card-strong rounded-4xl p-7 xl:p-9 flex flex-col card-glow glass-highlight ${
        isMobile ? "shrink-0 w-[85vw] sm:w-[380px] snap-center" : ""
      }`}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-6 ${
        index % 2 === 0 ? "bg-lux-pink/10" : "bg-lux-rose/20"
      }`}>
        <Quote className={`w-5 h-5 rotate-180 ${index % 2 === 0 ? "text-lux-pink" : "text-lux-pink-deep"}`} />
      </div>

      <p className="text-charcoal leading-relaxed text-[15px] flex-1 mb-7">&ldquo;{t.text}&rdquo;</p>

      <div className="flex items-center justify-between pt-5 border-t border-lux-pearl/50">
        <span className="font-display font-bold text-charcoal">{t.name}</span>
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 md:py-40 overflow-hidden perf-section">
      <div className="absolute inset-0 bg-lux-sand/30" />
      <div className="absolute inset-0 mesh-gradient-warm opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block font-display text-sm font-bold tracking-widest uppercase text-lux-pink mb-5">ביקורות</span>
          <h2 className="heading-lg text-charcoal mb-5">מה אומרות המתאמנות שלי</h2>
          <p className="text-body-lg max-w-md mx-auto">מתאמנות מספרות על החוויה שלהן</p>
        </AnimatedSection>
      </div>

      <AnimatedSection className="relative">
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.id} t={t} index={index} />
          ))}
        </div>

        <div className="md:hidden">
          <div
            ref={scrollRef}
            role="region"
            aria-label="ביקורות מתאמנות"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scrollbar-hide"
          >
            {testimonials.map((t, index) => (
              <TestimonialCard key={t.id} t={t} index={index} isMobile />
            ))}
            <div className="shrink-0 w-6" />
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
              className="w-11 h-11 rounded-2xl glass-card flex items-center justify-center transition-colors"
              aria-label="ביקורת קודמת"
            >
              <ChevronRight className="w-4 h-4 text-charcoal" />
            </button>

            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-400 ${
                    i === activeIndex ? "bg-lux-pink w-8" : "bg-charcoal/10 w-2.5"
                  }`}
                  aria-label={`ביקורת ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollTo(Math.min(testimonials.length - 1, activeIndex + 1))}
              className="w-11 h-11 rounded-2xl glass-card flex items-center justify-center transition-colors"
              aria-label="ביקורת הבאה"
            >
              <ChevronLeft className="w-4 h-4 text-charcoal" />
            </button>
          </div>
        </div>

        <div className="text-center mt-14">
          <MagneticButton strength={0.15}>
            <motion.a href="#vod-catalog" className="btn-premium" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              גם אני רוצה להתחיל
              <ArrowLeft className="w-5 h-5" />
            </motion.a>
          </MagneticButton>
        </div>
      </AnimatedSection>
    </section>
  );
}
