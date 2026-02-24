
export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-12 text-zinc-950 uppercase">O QUE AS LEITORAS RELATAM</h2>
            
            <p className="text-lg font-bold text-gray-500 uppercase tracking-widest mb-8">Depois de aplicar o método:</p>
            
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm text-left inline-block w-full max-w-2xl mx-auto">
                <ul className="space-y-5 text-lg md:text-xl font-medium text-gray-800">
                    <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-500 mr-4 shrink-0"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.3-.4a2.5 2.5 0 1 0-3.6 3.5l3.9 3.9 3.9-3.9a2.5 2.5 0 0 0 0-3.5Z"/></svg> Conversas ficam mais intensas</li>
                    <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-500 mr-4 shrink-0"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg> Homens demonstram mais iniciativa</li>
                    <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-500 mr-4 shrink-0"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg> Encontros se tornam mais envolventes</li>
                    <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-500 mr-4 shrink-0"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg> A sensação de correr atrás diminui</li>
                    <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-rose-500 mr-4 shrink-0"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg> A autoconfiança aumenta visivelmente</li>
                </ul>
            </div>
            
            <div className="mt-14 text-2xl font-black uppercase text-zinc-950">
                <p className="text-gray-400 line-through mb-2 text-xl font-bold">Não é sobre manipular.</p>
                <p className="text-rose-600 text-3xl">É sobre entender dinâmica emocional.</p>
            </div>

            <div className="mt-20 pt-16 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-4">Veja o que acontece na prática:</h3>
                
                <p className="text-sm text-rose-500 font-medium mb-8 sm:hidden flex justify-center items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg> Arraste para o lado para ver mais
                </p>

                <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide scroll-smooth">
                    <img src="https://i.postimg.cc/WbTG0yKR/Dep_Ana_Paula_risco.webp" alt="Depoimento 1" loading="lazy" width="400" height="600" className="min-w-[85%] sm:min-w-0 w-full rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow object-cover snap-center" />
                    <img src="https://i.postimg.cc/BQ4T2zyf/Dep_Camila_risco.webp" alt="Depoimento 2" loading="lazy" width="400" height="600" className="min-w-[85%] sm:min-w-0 w-full rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow object-cover snap-center" />
                    <img src="https://i.postimg.cc/9FCdykk6/Dep_Carla_risco.webp" alt="Depoimento 3" loading="lazy" width="400" height="600" className="min-w-[85%] sm:min-w-0 w-full rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-shadow object-cover snap-center" />
                </div>
            </div>
        </div>
    </section>
  );
}
