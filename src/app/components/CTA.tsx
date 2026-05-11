import { WA_URL } from "@/app/constants";
import WhatsAppIcon from "@/app/components/icons/WhatsAppIcon";

export default function CTA() {
  return (
    <section
      className="px-6 py-24 text-white"
      style={{
        background: "linear-gradient(135deg, #D96C7B 0%, #c55a6a 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
          Pronto para adoçar seu momento?
        </h2>
        <p className="text-white/80 text-lg">
          Entre em contato pelo WhatsApp e faça seu pedido. Respondemos
          rapidinho! 🍰
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-rosa font-semibold text-lg px-8 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-200"
        >
          <WhatsAppIcon size={22} />
          Pedir agora no WhatsApp
        </a>
      </div>
    </section>
  );
}
