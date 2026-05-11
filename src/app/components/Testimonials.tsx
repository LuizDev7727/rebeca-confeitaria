import { testimonials } from "@/app/constants";

export default function Testimonials() {
  return (
    <section className="bg-bege px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-rosa text-sm font-medium tracking-widest uppercase">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-chocolate">
            O que nossas clientes dizem
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm space-y-4 border border-roseclaro/20 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-rosa text-lg tracking-wide">★★★★★</div>
              <p className="text-chocolate/75 text-sm leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-chocolate font-semibold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
