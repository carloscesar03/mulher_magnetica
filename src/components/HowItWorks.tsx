
export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-16 text-center text-zinc-950 uppercase">COMO FUNCIONA</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-50 rounded-2xl p-8 border-t-4 border-rose-600 hover:shadow-lg transition-shadow">
                    <span className="text-rose-600 font-black text-5xl opacity-20 block mb-4">01</span>
                    <h3 className="text-xl font-bold mb-4 text-zinc-950 uppercase">Leitura Rápida e Prática</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        Sem teorias chatas. Um material direto ao ponto para você ler hoje e aplicar hoje mesmo.
                    </p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8 border-t-4 border-rose-600 hover:shadow-lg transition-shadow">
                    <span className="text-rose-600 font-black text-5xl opacity-20 block mb-4">02</span>
                    <h3 className="text-xl font-bold mb-4 text-zinc-950 uppercase">Passo a Passo Claro</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        Instruções exatas do que fazer e como agir para gerar atração e respeito imediato.
                    </p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8 border-t-4 border-rose-600 hover:shadow-lg transition-shadow">
                    <span className="text-rose-600 font-black text-5xl opacity-20 block mb-4">03</span>
                    <h3 className="text-xl font-bold mb-4 text-zinc-950 uppercase">Acesso Imediato</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        Leia no seu celular, tablet ou computador assim que o pagamento for aprovado.
                    </p>
                </div>
            </div>
            
            <div className="text-center max-w-3xl mx-auto bg-rose-50 py-10 px-6 rounded-2xl">
                <p className="text-2xl font-bold text-zinc-950 mb-2">E quando existe a possibilidade de perder…</p>
                <p className="text-3xl font-black text-rose-600 uppercase">Existe esforço para manter.</p>
            </div>
        </div>
    </section>
  );
}
