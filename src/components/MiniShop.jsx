import { motion } from "framer-motion";
import { products, whatsappLink } from "@/data/content";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function MiniShop() {
  return (
    <section id="shop" className="relative py-24 sm:py-32 md:py-40 px-6 overflow-hidden perf-section">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 mesh-gradient-warm opacity-25" />

      <div className="max-w-7xl mx-auto relative">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block font-display text-sm font-bold tracking-widest uppercase text-lux-pink mb-5">חנות</span>
          <h2 className="heading-lg text-charcoal mb-5">הציוד המשלים</h2>
          <p className="text-body-lg max-w-md mx-auto">שדרגו את האימון שלכם עם הציוד הנכון</p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto" staggerDelay={0.12}>
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <motion.div
                className="glass-card-strong rounded-4xl overflow-hidden card-glow h-full flex flex-col"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="relative overflow-hidden">
                  <img src={product.image} alt={product.name} loading="lazy" decoding="async" className="w-full h-60 object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute top-5 right-5 glass-dark-strong rounded-full px-4 py-1.5">
                    <span className="text-white text-sm font-display font-bold">{product.price}&#8362;</span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-charcoal text-xl mb-3">{product.name}</h3>
                  <p className="text-lux-slate text-[15px] leading-relaxed mb-6 flex-1">{product.description}</p>
                  <motion.a
                    href={whatsappLink(`היי לי! אשמח להזמין ${product.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-whatsapp text-white font-display font-bold py-4 rounded-2xl shadow-lg shadow-whatsapp/20 hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.584l-.386-.232-2.649.888.888-2.649-.232-.386A9.94 9.94 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                    </svg>
                    {product.ctaText}
                  </motion.a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
