import { differentials } from "@/app/constants";

export default function Differentials() {
  return (
    <section className="bg-creme px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-rosa text-sm font-medium tracking-widest uppercase">
            Por que nos escolher
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-chocolate">
            Nossos diferenciais
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((d) => (
            <div
              key={d.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-bege hover:border-roseclaro hover:shadow-md transition-all duration-200 space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-roseclaro/50 flex items-center justify-center text-xl">
                {d.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-chocolate">
                {d.title}
              </h3>
              <p className="text-sm text-chocolate/65 leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
