import Image from "next/image";
import { WA_URL } from "@/app/constants";
import WhatsAppIcon from "@/app/components/icons/WhatsAppIcon";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Store image — full width, fixed height */}
      <div className="relative w-full h-[420px] md:h-[560px] lg:h-[640px]">
        <Image
          src="/loja.jpg"
          alt="Interior da Rebeca Ferreira Confeitaria"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
        {/* dark-to-transparent gradient overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(107,62,46,0.72) 0%, rgba(107,62,46,0.30) 55%, transparent 100%)",
          }}
        />

        {/* Text content over the image */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto w-full px-6">
            <div className="max-w-xl space-y-5 animate-fade-in-up">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-block bg-roseclaro/80 text-chocolate text-sm font-medium px-4 py-1.5 rounded-full tracking-wide">
                  📍 Hortolândia – SP
                </span>
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full tracking-wide border border-white/30">
                  🕐 9h – 18h30
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight drop-shadow-md">
                Bolos feitos com carinho para momentos especiais
              </h1>
              <p className="text-lg text-white/85 leading-relaxed max-w-md drop-shadow">
                Encomendas personalizadas em Hortolândia. Cada detalhe preparado
                com amor para tornar sua celebração inesquecível.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-rosa text-white font-medium px-7 py-3.5 rounded-full shadow-lg hover:bg-[#c55a6a] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  <WhatsAppIcon size={20} />
                  Fazer pedido no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rating badge below image */}
      <div className="bg-creme px-6 py-4 border-b border-roseclaro/20">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-rosa text-base tracking-wide">★★★★★</span>
              <span className="text-sm font-medium text-chocolate">
                Feito com amor e capricho
              </span>
            </div>
            <span className="hidden sm:block text-chocolate/30">|</span>
            <span className="hidden sm:block text-sm text-chocolate/60">
              +500 bolos entregues
            </span>
          </div>
          <span className="text-sm text-chocolate/60 font-medium">
            🕐 Funcionamento: segunda a sábado, das 9h às 18h30
          </span>
        </div>
      </div>
    </section>
  );
}
