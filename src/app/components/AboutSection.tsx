export default function AboutSection() {
  return (
    <section className="bg-chocolate text-creme px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-roseclaro text-sm font-medium tracking-widest uppercase">
          Nossa história
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold leading-snug">
          Cada detalhe é preparado com cuidado
        </h2>
        <p className="text-creme/70 text-lg leading-relaxed max-w-2xl mx-auto">
          A Rebeca Ferreira Confeitaria nasceu da paixão por transformar
          ingredientes simples em momentos inesquecíveis. Cada bolo, cada doce
          é feito à mão, com receitas especiais e ingredientes cuidadosamente
          selecionados — porque você merece o melhor.
        </p>
        <div className="flex justify-center flex-wrap gap-10 md:gap-20 pt-4">
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-rosa">+500</p>
            <p className="text-creme/55 text-sm mt-1">Bolos entregues</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-rosa">100%</p>
            <p className="text-creme/55 text-sm mt-1">Artesanal</p>
          </div>
          <div className="text-center">
            <p className="font-display text-4xl font-bold text-rosa">5★</p>
            <p className="text-creme/55 text-sm mt-1">Avaliação</p>
          </div>
        </div>
      </div>
    </section>
  );
}
