import Image from "next/image";
import { WA_URL } from "@/app/constants";
import WhatsAppIcon from "@/app/components/icons/WhatsAppIcon";

const galleryItems = [
  { src: "/produtos/produto_1.jpg", label: "Bolos de Vitrine" },
  { src: "/produtos/produto_2.jpg", label: "Fatias de Cheesecake" },
  { src: "/produtos/produto_3.jpg", label: "Bolo Rufos de Chocolate" },
  { src: "/produtos/produto_4.jpg", label: "Bolo Floral Rosa" },
  { src: "/produtos/produto_5.jpg", label: "Bolo Vintage" },
  { src: "/produtos/produto_6.webp", label: "Bolo de Pudim" },
];

export default function GallerySection() {
  return (
    <section className="bg-bege px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <p className="text-rosa text-sm font-medium tracking-widest uppercase">
            Nossa vitrine
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-chocolate">
            Feitos para encantar
          </h2>
          <p className="text-chocolate/60 text-base max-w-md mx-auto">
            Cada criação é única — do design ao sabor, tudo feito artesanalmente
            com ingredientes selecionados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.src}
              className="group relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-chocolate/0 group-hover:bg-chocolate/45 transition-colors duration-300 flex items-end">
                <div className="w-full px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-display text-white text-lg font-semibold drop-shadow-md">
                    {item.label}
                  </p>
                  <p className="text-white/80 text-sm mt-0.5">
                    Encomendar no WhatsApp →
                  </p>
                </div>
              </div>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Encomendar ${item.label}`}
                className="absolute inset-0"
              />
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rosa text-white font-medium px-8 py-3.5 rounded-full shadow-lg hover:bg-[#c55a6a] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            <WhatsAppIcon size={20} />
            Quero fazer meu pedido
          </a>
        </div>
      </div>
    </section>
  );
}
