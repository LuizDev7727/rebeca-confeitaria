import { WA_URL } from "@/app/constants";
import WhatsAppIcon from "@/app/components/icons/WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
