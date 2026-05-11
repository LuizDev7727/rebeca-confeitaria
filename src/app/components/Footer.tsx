import { WA_URL, INSTAGRAM_URL } from "@/app/constants";
import WhatsAppIcon from "@/app/components/icons/WhatsAppIcon";
import InstagramIcon from "@/app/components/icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-chocolate text-creme px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left space-y-1">
          <p className="font-display text-xl font-semibold">
            Rebeca Ferreira Confeitaria
          </p>
          <p className="text-creme/50 text-sm">📍 Hortolândia – SP</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-creme/60 hover:text-rosa transition-colors duration-200 text-sm font-medium"
          >
            <InstagramIcon />
            Instagram
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-creme/60 hover:text-rosa transition-colors duration-200 text-sm font-medium"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-creme/10 text-center">
        <p className="text-creme/30 text-xs">
          © {new Date().getFullYear()} Rebeca Ferreira Confeitaria. Feito com
          amor.
        </p>
      </div>
    </footer>
  );
}
