import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock } from "lucide-react";
import { whatsappLink } from "@/data/content";

export default function ClassModal({ classItem, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        onClick={(e) => e.target === overlayRef.current && onClose()}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-charcoal-dark/40 backdrop-blur-xl" style={{ WebkitBackdropFilter: "blur(20px)" }} onClick={onClose} />

        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="relative glass-card-strong rounded-[2.5rem] max-w-md w-full max-h-[90vh] overflow-y-auto shadow-[0_24px_80px_rgba(0,0,0,0.15)]"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 28, stiffness: 350 }}
        >
          <button
            onClick={onClose}
            aria-label="סגירת חלון"
            className="absolute top-4 left-4 z-10 w-11 h-11 flex items-center justify-center rounded-full glass-card shadow-lg transition-transform duration-200 hover:scale-110"
          >
            <X className="w-4 h-4 text-charcoal" />
          </button>

          <div className="relative overflow-hidden rounded-t-[2.5rem]">
            <img src={classItem.image} alt={classItem.title} loading="lazy" decoding="async" className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="p-8">
            <h3 id="modal-title" className="font-display text-xl font-bold text-charcoal mb-4">{classItem.title}</h3>
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center gap-1.5 glass-card rounded-full text-charcoal px-4 py-1.5 text-sm font-display font-medium">
                <Clock className="w-3.5 h-3.5 text-lux-pink" />{classItem.duration}
              </span>
              <span className="bg-charcoal text-white px-4 py-1.5 rounded-full text-sm font-display font-bold">{classItem.price} &#8362;</span>
            </div>
            <p className="text-lux-slate leading-relaxed mb-8">{classItem.description}</p>
            <motion.a
              href={whatsappLink(classItem.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-whatsapp text-white font-display font-bold text-lg py-4 rounded-2xl shadow-lg shadow-whatsapp/20 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.584l-.386-.232-2.649.888.888-2.649-.232-.386A9.94 9.94 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              {classItem.ctaWhatsapp || classItem.ctaText}
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
