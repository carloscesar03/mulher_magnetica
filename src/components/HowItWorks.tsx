
export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-16 text-center text-zinc-950 uppercase">COMO FUNCIONA</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-50 rounded-2xl p-8 border-t-4 border-rose-600 hover:shadow-lg transition-shadow">
                    <span className="text-rose-600 font-black text-5xl opacity-20 block mb-4">01</span>
                    <h3 className="text-xl font-bold mb-4 text-zinc-950 uppercase">Mentalidade Magnética</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        Você aprende a ajustar pequenos comportamentos que mudam completamente a forma como é percebida.
                    </p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8 border-t-4 border-rose-600 hover:shadow-lg transition-shadow">
                    <span className="text-rose-600 font-black text-5xl opacity-20 block mb-4">02</span>
                    <h3 className="text-xl font-bold mb-4 text-zinc-950 uppercase">Comunicação que Desperta Interesse</h3>
                    <p className="text-gray-600 leading-relaxed font-medium mb-2">
                        Frases. Timing. Silêncio.
                    </p>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        Você vai entender o poder do que dizer — e do que não dizer.
                    </p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8 border-t-4 border-rose-600 hover:shadow-lg transition-shadow">
                    <span className="text-rose-600 font-black text-5xl opacity-20 block mb-4">03</span>
                    <h3 className="text-xl font-bold mb-4 text-zinc-950 uppercase">Postura de Alto Valor</h3>
                    <div className="text-gray-600 leading-relaxed font-medium space-y-1 mb-3">
                        <p>Sem arrogância.</p>
                        <p>Sem frieza.</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        Mas com presença suficiente para que ele sinta que pode te perder.
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
