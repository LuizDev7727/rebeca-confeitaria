import { WA_URL, products } from "@/app/constants";

export default function Products() {
  return (
    <section className="bg-bege px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-rosa text-sm font-medium tracking-widest uppercase">
            Nossos produtos
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-chocolate">
            Para cada ocasião especial
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="rounded-3xl p-8 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, ${p.from} 0%, ${p.to} 100%)`,
              }}
            >
              <span className="text-5xl">{p.emoji}</span>
              <h3 className="font-display text-xl font-semibold text-chocolate">
                {p.name}
              </h3>
              <p className="text-chocolate/65 text-sm leading-relaxed">
                {p.desc}
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-rosa text-sm font-medium hover:underline"
              >
                Encomendar →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
