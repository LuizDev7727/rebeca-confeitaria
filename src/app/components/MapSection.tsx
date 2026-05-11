// Substitua o valor de MAP_EMBED_SRC pelo src do iframe do Google Maps:
// Google Maps → clique na loja → Compartilhar → Incorporar um mapa → copie o src do <iframe>
const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.1784701875117!2d-47.213002499999995!3d-22.8698647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b94035f3cdeb%3A0x28d765e26b67544c!2sRebeca%20Ferreira%20Confeitaria!5e0!3m2!1sen!2sbr!4v1778516290055!5m2!1sen!2sbr";

export default function MapSection() {
  return (
    <section className="bg-creme px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="text-rosa text-sm font-medium tracking-widest uppercase">
            Onde nos encontrar
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-chocolate">
            Nossa localização
          </h2>
          <p className="text-chocolate/60 text-base">
            📍 Hortolândia – SP &nbsp;·&nbsp; 🕐 Seg a Sáb: 9h às 18h30
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl border border-roseclaro/30">
          {MAP_EMBED_SRC ? (
            <iframe
              src={MAP_EMBED_SRC}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Rebeca Ferreira Confeitaria"
            />
          ) : (
            <div className="w-full h-[420px] bg-bege flex flex-col items-center justify-center gap-4 text-chocolate/50">
              <span className="text-5xl">🗺️</span>
              <p className="text-sm font-medium">
                Cole o src do iframe do Google Maps em MapSection.tsx
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
