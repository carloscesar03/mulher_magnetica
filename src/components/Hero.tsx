
export default function Hero() {
  return (
    <section className="bg-zinc-950 text-white pt-16 pb-20 px-6 lg:pt-24 lg:pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-rose-600 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-rose-600 opacity-10 blur-3xl"></div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10">
            
            <div className="flex flex-col justify-center text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 lg:mb-6 tracking-tight uppercase">
                    TORNE-SE A MULHER <span className="text-rose-500">QUE TODO HOMEM DESEJA</span>
                </h1>
                
                <p className="text-lg sm:text-xl font-light text-gray-300 mb-8 lg:mb-6 leading-relaxed">
                    Descubra como despertar interesse real, provocar curiosidade e se tornar naturalmente inesquecível.
                </p>

                <div className="block lg:hidden relative w-full max-w-md mx-auto mb-10 flex justify-center">
                    <img src="https://i.postimg.cc/ZKm3qxwk/mockup_combo_1_dobra_Photoroom.webp" 
                         alt="E-book Torne-se a Mulher Que Todo Homem Deseja" 
                         width="600" height="450"
                         fetchPriority="high"
                         className="relative z-10 w-full object-contain drop-shadow-2xl" />
                </div>
                
                <div className="space-y-2 text-gray-400 font-medium text-lg mb-10 border-l-2 border-rose-500 pl-4 w-fit mx-auto lg:mx-0 text-left">
                    <p>Sem mudar quem você é.</p>
                    <p>Sem forçar situações.</p>
                    <p>Sem correr atrás.</p>
                </div>
                
                <div className="mb-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start sm:items-end gap-2 sm:gap-6">
                    <span className="text-gray-500 line-through text-xl font-medium">De R$ 97,00</span>
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Por apenas R$ 17,00</span>
                </div>
                
                <div className="flex flex-col items-center lg:items-start w-full">
                    <a href="https://lastlink.com/p/CA5B2A829/checkout-payment/" className="btn-pulse-green inline-block w-full sm:w-[90%] lg:w-[90%] text-center bg-green-600 hover:bg-green-700 text-white font-black py-5 px-8 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all text-lg lg:text-xl uppercase tracking-wider">
                        QUERO ME TORNAR INESQUECÍVEL
                    </a>
                    
                    <div className="mt-4 flex flex-col items-center lg:items-start gap-2">
                        <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
                            <span>Compra 100% Segura & Acesso Imediato</span>
                        </div>
                        <img src="https://i.postimg.cc/LsVHTKKJ/xxxcompra_Segura_vetor_branco1_1.png" alt="Formas de Pagamento" width="300" height="40" loading="lazy" className="mt-2 opacity-70 h-8 object-contain" />
                    </div>
                </div>
            </div>
            
            <div className="hidden lg:flex relative w-full max-w-md mx-auto lg:max-w-full justify-center">
                <img src="https://i.postimg.cc/ZKm3qxwk/mockup_combo_1_dobra_Photoroom.webp" 
                     alt="E-book Torne-se a Mulher Que Todo Homem Deseja" 
                     width="800" height="600"
                     fetchPriority="high"
                     className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>
        </div>
    </section>
  );
}
