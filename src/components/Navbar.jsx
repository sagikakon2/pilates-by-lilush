import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "@/data/content";
import logo from "@/Assets/pilates-logo-final.png";

const links = [
  { label: "למה בבית?", href: "#why" },
  { label: "אודות", href: "#about" },
  { label: "האימונים", href: "#vod-catalog" },
  { label: "ציוד", href: "#shop" },
  { label: "יצירת קשר", href: "#contact" },
];

const sections = ["why", "about", "vod-catalog", "shop", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const debounceTimer = useRef(null);
  const lastDetected = useRef("");

  const detectSection = useCallback(() => {
    setScrolled(window.scrollY > 40);

    let found = "";
    for (const id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const heading = section.querySelector("h1, h2, h3, [class*='heading']");
        const target = heading || section;
        const rect = target.getBoundingClientRect();
        const viewportH = window.innerHeight;
        if (rect.top < viewportH && rect.bottom > 0) {
          found = `#${id}`;
          break;
        }
      }
    }

    if (found !== lastDetected.current) {
      lastDetected.current = found;
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        setActiveSection(found);
      }, 100);
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    const throttled = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          detectSection();
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", throttled, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttled);
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [detectSection]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">דלגו לתוכן הראשי</a>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? "glass-nav" : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18">
          <a
            href="#vod-catalog"
            className={`hidden md:inline-flex font-display text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-charcoal text-white hover:bg-charcoal-dark shadow-lg shadow-black/10"
                : "bg-charcoal/90 text-white hover:bg-charcoal shadow-xl shadow-black/10"
            }`}
          >
            לקטלוג האימונים
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href ? "text-charcoal" : "text-lux-slate hover:text-charcoal"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-lux-pink rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <a href="#" className="flex items-center">
            <img src={logo} alt="Pilates by Lilush" className="h-16 w-auto" />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-2xl glass-card transition-colors"
            aria-label="תפריט"
          >
            {menuOpen ? <X className="w-5 h-5 text-charcoal" /> : <Menu className="w-5 h-5 text-charcoal" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-[100] bg-lux-cream/90 backdrop-blur-xl"
            style={{ WebkitBackdropFilter: "blur(24px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-6 h-18">
              <a href="#" onClick={() => setMenuOpen(false)} className="flex items-center">
                <img src={logo} alt="Pilates by Lilush" className="h-16 w-auto" />
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-2xl hover:bg-charcoal/5 transition-colors"
                aria-label="סגור תפריט"
              >
                <X className="w-6 h-6 text-charcoal/80" />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-8 pt-16">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-2xl font-bold text-charcoal/90 hover:text-lux-pink transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {link.label}
                </motion.a>
              ))}

              <div className="w-16 h-[1px] bg-lux-pink/30 my-2" />

              <motion.a
                href={whatsappLink("היי לי! אשמח לשמוע עוד על השיעורים שלך")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="font-display text-lg font-bold bg-whatsapp text-white px-10 py-4 rounded-full shadow-xl shadow-whatsapp/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                דברו איתי בוואטסאפ
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
