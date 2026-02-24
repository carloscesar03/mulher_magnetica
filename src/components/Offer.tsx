
export default function Offer() {
  return (
    <section id="oferta" className="py-20 px-6 bg-zinc-950 relative">
        <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-black text-center text-white mb-10 uppercase tracking-tight">
                    O QUE VOCÊ VAI DESCOBRIR <span className="text-rose-500">DENTRO DAS PÁGINAS:</span>
                </h3>
                
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <span className="text-rose-500 font-black text-xl shrink-0 mt-1">01.</span>
                        <div>
                            <p className="text-lg font-bold text-white mb-1">O Segredo Acima do Queixo (Pág. 08)</p>
                            <p className="text-gray-400 leading-relaxed">
                                A característica física nº 1 que vence qualquer corpo perfeito (Spoiler: Não é o bumbum, não são os seios, e você já tem - e você pode usar isso a seu favor agora mesmo).
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <span className="text-rose-500 font-black text-xl shrink-0 mt-1">02.</span>
                        <div>
                            <p className="text-lg font-bold text-white mb-1">O Mecanismo de Bloqueio (Pág. 18)</p>
                            <p className="text-gray-400 leading-relaxed">
                                Por que ele "esfria", se cala e se afasta justamente quando você tenta conversar sobre a relação — e o ajuste simples na sua fala que faz ele parar de te ignorar e começar a te escutar com atenção.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <span className="text-rose-500 font-black text-xl shrink-0 mt-1">03.</span>
                        <div>
                            <p className="text-lg font-bold text-white mb-1">A Arma da Vulnerabilidade Estratégica (Pág. 24)</p>
                            <p className="text-gray-400 leading-relaxed">
                                Como usar a única "fraqueza" feminina que desarma qualquer homem e ativa o instinto de Herói dele (fazendo ele sentir um desejo incontrolável de te proteger e te agradar, sem você precisar cobrar nada).
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <span className="text-rose-500 font-black text-xl shrink-0 mt-1">04.</span>
                        <div>
                            <p className="text-lg font-bold text-white mb-1">O Paradoxo da Independência (Pág. 29)</p>
                            <p className="text-gray-400 leading-relaxed">
                                O erro silencioso que mulheres bem-sucedidas cometem achando que estão ganhando pontos, mas que na verdade faz ele se sentir inútil ao seu lado (e o que fazer para ser poderosa sem matar a paixão dele).
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <span className="text-rose-500 font-black text-xl shrink-0 mt-1">05.</span>
                        <div>
                            <p className="text-lg font-bold text-white mb-1">O Gatilho Visual do Pescoço (Pág. 43)</p>
                            <p className="text-gray-400 leading-relaxed">
                                Um detalhe sutil no jeito de prender seu cabelo que dispara um instinto primitivo de atração nele (cientificamente explicado, e não tem nada a ver com a cor ou o corte).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-900 rounded-3xl p-8 lg:p-12 border border-rose-600/30 shadow-[0_0_50px_rgba(225,29,72,0.15)] text-center relative z-10 flex flex-col md:flex-row items-center gap-10">
            
            <div className="w-full md:w-1/2 flex justify-center">
                <img src="https://i.postimg.cc/xTQHd36D/mockup_combo_oferta_com_bonus_Photoroom.webp" alt="Combo Completo" loading="lazy" width="600" height="450" className="w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-2 flex items-center justify-center md:justify-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Preço Promocional
                </p>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">VOCÊ LEVA TUDO ISSO:</h2>
                
                <ul className="space-y-4 mb-8 text-left text-gray-300 font-medium text-base lg:text-lg">
                    <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 
                        <span className="leading-snug"><strong className="text-white">Material Exclusivo:</strong> Torne-se a Mulher Que Todo Homem Deseja</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 
                        <span className="leading-snug"><strong className="text-white">Bônus 01:</strong> E-book A Felicidade Começa com Você</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 
                        <span className="leading-snug"><strong className="text-white">Bônus 02:</strong> E-book Controlando a Ansiedade</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 
                        <span className="leading-snug"><strong className="text-white">Acesso Vitalício</strong> ao conteúdo</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 
                        <span className="leading-snug"><strong className="text-white">Garantia Incondicional</strong> de 7 dias</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-500 shrink-0 mt-0.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg> 
                        <span className="leading-snug"><strong className="text-white">Todas as atualizações</strong> futuras garantidas</span>
                    </li>
                </ul>
                
                <div className="mb-8 border-t border-zinc-800 pt-6">
                    <p className="text-gray-500 line-through text-2xl font-medium mb-1">De R$ 97,00</p>
                    <p className="text-5xl lg:text-6xl font-black text-white tracking-tight">Por <span className="text-green-400">R$ 17,00</span></p>
                </div>
                
                <a href="https://lastlink.com/p/CA5B2A829/checkout-payment/" className="btn-pulse-green inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-black py-5 px-6 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all text-xl uppercase tracking-wide mb-4">
                    QUERO ME TORNAR INESQUECÍVEL
                </a>
                
                <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/50 mb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">
                        <strong className="text-white block mb-1">Por que tão barato?</strong>
                        Eu poderia cobrar R$ 97 por isso. Mas decidi fazer essa oferta por R$ 17 porque quero que você conheça meu método sem medo. Sei que depois de ver os resultados, você vai querer meus treinamentos avançados.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start gap-3 mt-4">
                    <p className="text-gray-400 font-medium text-sm">Pagamento 100% Seguro. Acesso enviado por e-mail.</p>
                    <img src="https://i.postimg.cc/LsVHTKKJ/xxxcompra_Segura_vetor_branco1_1.png" alt="Formas de Pagamento Seguras" loading="lazy" width="300" height="40" className="h-8 object-contain opacity-70" />
                </div>
            </div>
            
        </div>
    </section>
  );
}
