
export default function Truth() {
  return (
    <section className="py-20 lg:py-24 px-6 bg-zinc-950 text-white text-center">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-10 text-rose-500 uppercase tracking-tight">A VERDADE SOBRE ATRAÇÃO</h2>
            
            <p className="text-xl font-medium mb-10">Você gasta mensalmente para agradar um homem:</p>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-10 mb-10 max-w-2xl mx-auto shadow-2xl text-left">
                <ul className="space-y-4 text-lg font-medium text-gray-300 mb-6">
                    <li className="flex justify-between items-center border-b border-zinc-800 pb-3">
                        <span className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/></svg> Cabelo & Salão</span>
                        <span className="text-gray-400">R$ 150,00</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-zinc-800 pb-3">
                        <span className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg> Manicure & Unhas</span>
                        <span className="text-gray-400">R$ 60,00</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-zinc-800 pb-3">
                        <span className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-rose-500"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Roupas & Acessórios</span>
                        <span className="text-gray-400">R$ 200,00</span>
                    </li>
                </ul>
                <div className="flex justify-between items-center text-xl sm:text-2xl font-black text-white pt-2">
                    <span>Custo Mensal Estimado:</span>
                    <span className="text-rose-500">R$ 410,00+</span>
                </div>
            </div>
            
            <p className="text-xl font-light italic text-gray-400 mb-6">Tudo isso ajuda, é claro.</p>
            
            <div className="bg-rose-950/30 border border-rose-900/50 p-6 rounded-xl mb-10">
                <p className="text-lg text-gray-200 font-medium leading-relaxed">
                    Mas roupas caras e salão não seguram homem nenhum se a sua postura grita insegurança. <br/>
                    O custo real não é R$ 17,00. <strong className="text-rose-400">O custo real é continuar investindo tempo e emoção em quem não te prioriza.</strong>
                </p>
            </div>
            
            <p className="text-2xl sm:text-3xl font-bold leading-tight mb-12">
                <span className="text-rose-500 underline decoration-2 underline-offset-4">Comportamento e posicionamento</span> são o que realmente definem como você é tratada.
            </p>
            
            <div className="inline-block border-2 border-green-500 bg-green-500/10 px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.15)]">
                <p className="text-xl font-bold text-gray-300 mb-2">O CONHECIMENTO DEFINITIVO POR APENAS:</p>
                <p className="text-4xl font-black text-green-400 uppercase">R$ 17,00</p>
                <p className="text-sm font-medium text-green-500 mt-2">Pagamento Único. Sem mensalidades.</p>
                
                <a href="https://lastlink.com/p/CA5B2A829/checkout-payment/" className="btn-pulse-green mt-6 inline-block w-full bg-green-600 hover:bg-green-700 text-white font-black py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all text-lg uppercase tracking-wider">
                    QUERO ME TORNAR INESQUECÍVEL
                </a>
            </div>
        </div>
    </section>
  );
}
