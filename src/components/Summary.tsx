
export default function Summary() {
  return (
    <section className="py-20 lg:py-24 px-6 bg-zinc-950 text-white text-center border-t border-zinc-800">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-10 text-rose-500 uppercase tracking-widest">RESUMINDO</h2>
            
            <p className="text-xl font-medium mb-6 text-gray-300">Você pode continuar:</p>
            
            <div className="space-y-2 text-lg font-light text-gray-400 mb-10">
                <p>Esperando iniciativa.</p>
                <p>Tentando entender sinais confusos.</p>
                <p>Repetindo padrões.</p>
            </div>
            
            <p className="text-2xl font-bold text-white mb-12 uppercase">
                Ou pode aprender a gerar <span className="text-rose-500">impacto emocional consciente.</span>
            </p>
            
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 mb-12">
                <p className="text-xl font-medium leading-relaxed">
                    Por <span className="text-rose-500 font-bold text-2xl">R$ 17,00</span>, você descobre ajustes que podem mudar completamente sua experiência nos relacionamentos.
                </p>
            </div>
            
            <p className="text-3xl font-black mb-8 uppercase tracking-tight">A decisão está nas suas mãos.</p>
            <p className="text-xl text-gray-300 font-light mb-10">Clique agora e comece hoje.</p>
            
            <a href="https://lastlink.com/p/CA5B2A829/checkout-payment/" className="btn-pulse-green inline-block w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white font-black py-5 px-12 rounded-lg transition-colors text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.3)] mb-6">
                QUERO COMEÇAR AGORA
            </a>

            <div className="flex justify-center mt-2">
                <img src="https://i.postimg.cc/LsVHTKKJ/xxxcompra_Segura_vetor_branco1_1.png" alt="Segurança" loading="lazy" width="300" height="40" className="h-8 object-contain opacity-70" />
            </div>
        </div>
    </section>
  );
}
