import { motion } from "framer-motion";
import { whatsappLink } from "@/data/content";

export default function WhatsAppFAB() {
  return (
    <motion.a
      href={whatsappLink("היי לי! אשמח לשמוע עוד על השיעורים שלך")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="שלחי הודעה בוואטסאפ"
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5b] rounded-full shadow-[0_8px_32px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] p-3.5 sm:py-3.5 sm:pr-5 sm:pl-6 min-w-[52px] min-h-[52px] transition-all duration-500"
      initial={{ scale: 0, opacity: 0, filter: "blur(10px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-white font-display font-bold text-sm hidden sm:block">דברו איתי עכשיו</span>
      <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.584l-.386-.232-2.649.888.888-2.649-.232-.386A9.94 9.94 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
      </svg>
    </motion.a>
  );
}
