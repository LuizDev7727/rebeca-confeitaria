import { WA_URL } from "@/app/constants";
import WhatsAppIcon from "@/app/components/icons/WhatsAppIcon";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-creme/90 backdrop-blur-sm border-b border-roseclaro/40 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="font-display text-xl font-semibold text-chocolate tracking-wide">
          Rebeca Ferreira
        </span>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-rosa text-white text-sm font-medium px-5 py-2.5 rounded-full shadow hover:bg-[#c55a6a] transition-colors duration-200"
        >
          <WhatsAppIcon size={16} />
          Fazer pedido
        </a>
      </div>
    </nav>
  );
}
