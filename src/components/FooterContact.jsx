import { useState } from "react";
import { motion } from "framer-motion";
import { contactInfo, whatsappLink } from "@/data/content";
import { Phone, Mail, Send } from "lucide-react";
import logo from "@/Assets/pilates-logo-final.png";
import AnimatedSection from "@/components/AnimatedSection";

export default function FooterContact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `היי לי!\nשם: ${form.name}\nטלפון: ${form.phone}\n${form.message ? `הודעה: ${form.message}` : ""}`;
    window.open(whatsappLink(text), "_blank");
  };

  const inputCls = "w-full bg-white/[0.06] border border-white/[0.1] rounded-2xl px-6 py-4 text-white placeholder:text-white/40 font-display focus:outline-none focus:ring-2 focus:ring-lux-pink/30 focus:border-lux-pink/30 focus:bg-white/[0.1] transition-colors duration-300";

  return (
    <footer id="contact" className="relative overflow-hidden perf-section">
      <div className="absolute inset-0 bg-charcoal-dark" />
      <div className="absolute inset-0 mesh-gradient-dark" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 sm:py-32 md:py-40 relative text-white">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block font-display text-sm font-bold tracking-widest uppercase text-lux-pink mb-5">צרו קשר</span>
          <h2 className="heading-lg mb-5">{contactInfo.footerHeadline}</h2>
          <p className="text-white/50 text-lg">נשמח לשמוע מכם</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-12 items-start">
          <AnimatedSection variant="slideRight" delay={0.1} className="w-full md:pt-8">
            <form onSubmit={handleSubmit} className="space-y-5" dir="rtl">
              <input type="text" name="name" placeholder="שם מלא" required value={form.name} onChange={handleChange} className={`${inputCls} text-right`} />
              <input type="tel" name="phone" placeholder="טלפון" required dir="ltr" value={form.phone} onChange={handleChange} className={`${inputCls} text-right placeholder:text-right`} />
              <textarea name="message" placeholder="הודעה חופשית (לשאלות והתייעצות לפני רכישה)" rows={3} value={form.message} onChange={handleChange} className={`${inputCls} text-right resize-none`} />
              <motion.button
                type="submit"
                className="flex items-center justify-center gap-3 w-full bg-whatsapp text-white font-display font-bold text-lg py-4 rounded-2xl shadow-lg shadow-whatsapp/15 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                שליחה בוואטסאפ
              </motion.button>
              <p className="text-white/30 text-xs text-center mt-3 font-medium">הטופס יפתח שיחת WhatsApp עם ההודעה שלכם</p>
            </form>
          </AnimatedSection>

          <AnimatedSection variant="slideLeft" delay={0.2} className="flex flex-col items-center justify-start gap-6 w-full">
            <img src={logo} alt="Pilates by Lilush" className="w-full max-w-md h-auto brightness-0 invert opacity-50" />
            <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-lux-pink/15 to-transparent" />
            <p className="font-display font-bold text-xl text-center text-white/90">
              {contactInfo.name} – {contactInfo.brand}
            </p>
            <div className="inline-flex flex-col lg:flex-row gap-4 lg:gap-6">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-2xl glass-dark flex items-center justify-center shrink-0 group-hover:border-lux-pink/20 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-2xl glass-dark flex items-center justify-center shrink-0 group-hover:border-lux-pink/20 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">{contactInfo.email}</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="relative border-t border-white/5 py-6 text-center text-white/20 text-xs font-medium">
        &copy; {new Date().getFullYear()} {contactInfo.brand}. כל הזכויות שמורות.
      </div>
    </footer>
  );
}
