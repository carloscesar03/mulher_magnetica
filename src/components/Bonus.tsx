


export default function Bonus() {
  return (
    <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <span className="bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4 inline-block">Presentes Especiais</span>
                <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 uppercase">Garantindo hoje, você leva:</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                
                <div className="border-2 border-gray-100 rounded-2xl p-8 relative hover:border-rose-300 transition-colors shadow-sm">
                    <div className="absolute -top-4 right-8 bg-rose-600 text-white font-bold text-sm px-4 py-1 rounded-full shadow-md uppercase">
                        Gratuito
                    </div>

                    <div className="mb-6 flex justify-center">
                        <img src="https://i.postimg.cc/fTDcYPFR/mockup_bonus_felicidade.webp" alt="Bônus 1" loading="lazy" width="300" height="200" referrerPolicy="no-referrer" className="h-40 object-contain drop-shadow-md hover:scale-105 transition-transform" />
                    </div>

                    <p className="text-rose-600 font-black uppercase tracking-widest text-sm mb-2">BÔNUS 01</p>
                    <h3 className="text-2xl font-bold mb-2 text-zinc-950 uppercase leading-tight">A FELICIDADE COMEÇA COM VOCÊ</h3>
                    <p className="text-gray-400 text-sm font-medium mb-6 line-through">Avaliado em R$ 37,00</p>
                    
                    <p className="text-gray-600 font-medium italic mb-6">Porque atração começa dentro.</p>
                    
                    <p className="text-xl font-black text-zinc-950 bg-gray-50 p-4 rounded-lg text-center uppercase">
                        Mulheres seguras não imploram.<br/>
                        <span className="text-rose-600">Elas escolhem.</span>
                    </p>
                </div>

                <div className="border-2 border-gray-100 rounded-2xl p-8 relative hover:border-rose-300 transition-colors shadow-sm">
                    <div className="absolute -top-4 right-8 bg-rose-600 text-white font-bold text-sm px-4 py-1 rounded-full shadow-md uppercase">
                        Gratuito
                    </div>

                    <div className="mb-6 flex justify-center">
                        <img src="https://i.postimg.cc/vHbr5KjQ/mockup_bonus_ansiedade.webp" alt="Bônus 2" loading="lazy" width="300" height="200" referrerPolicy="no-referrer" className="h-40 object-contain drop-shadow-md hover:scale-105 transition-transform" />
                    </div>

                    <p className="text-rose-600 font-black uppercase tracking-widest text-sm mb-2">BÔNUS 02</p>
                    <h3 className="text-2xl font-bold mb-2 text-zinc-950 uppercase leading-tight">CONTROLANDO A ANSIEDADE</h3>
                    <p className="text-gray-400 text-sm font-medium mb-6 line-through">Avaliado em R$ 39,90</p>
                    
                    <p className="text-gray-600 font-medium italic mb-6">Porque ansiedade pode destruir uma conexão promissora.</p>
                    
                    <p className="text-xl font-black text-zinc-950 bg-gray-50 p-4 rounded-lg text-center uppercase">
                        Calma é <span className="text-rose-600">poder.</span>
                    </p>
                </div>

            </div>
        </div>
    </section>
  );
}
