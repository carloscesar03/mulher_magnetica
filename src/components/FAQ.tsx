
export default function FAQ() {
  return (
    <section className="py-20 px-6 bg-zinc-900 text-white border-t border-zinc-800">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-center text-rose-500 uppercase tracking-widest">PERGUNTAS FREQUENTES</h2>
            
            <div className="space-y-4">
                <details className="group bg-zinc-950 rounded-xl border border-zinc-800 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-100 font-bold text-lg">
                        Como eu vou receber o material?
                        <span className="shrink-0 rounded-full bg-zinc-900 p-1.5 text-rose-500 sm:p-3 group-open:bg-rose-600 group-open:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-open:hidden"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hidden group-open:block"><path d="M5 12h14"/></svg>
                        </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed border-t border-zinc-800 pt-4 mt-2">
                        Imediatamente após a confirmação do pagamento, você receberá um e-mail com o seu login e senha para acessar a área de membros exclusiva onde o E-book e os Bônus estarão disponíveis para download. Pagamentos via PIX ou Cartão liberam o acesso na mesma hora.
                    </div>
                </details>

                <details className="group bg-zinc-950 rounded-xl border border-zinc-800 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-100 font-bold text-lg">
                        E se eu não gostar?
                        <span className="shrink-0 rounded-full bg-zinc-900 p-1.5 text-rose-500 sm:p-3 group-open:bg-rose-600 group-open:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-open:hidden"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hidden group-open:block"><path d="M5 12h14"/></svg>
                        </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed border-t border-zinc-800 pt-4 mt-2">
                        Você está protegida pela nossa garantia incondicional de 7 dias. Se por qualquer motivo você não gostar do conteúdo, basta enviar um e-mail para o nosso suporte e devolveremos 100% do valor pago, sem burocracia.
                    </div>
                </details>

                <details className="group bg-zinc-950 rounded-xl border border-zinc-800 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-100 font-bold text-lg">
                        Quais as formas de pagamento?
                        <span className="shrink-0 rounded-full bg-zinc-900 p-1.5 text-rose-500 sm:p-3 group-open:bg-rose-600 group-open:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-open:hidden"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 hidden group-open:block"><path d="M5 12h14"/></svg>
                        </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed border-t border-zinc-800 pt-4 mt-2">
                        Aceitamos pagamentos via PIX (acesso imediato), Cartão de Crédito (acesso imediato) e Boleto Bancário (pode levar até 3 dias úteis para compensar).
                    </div>
                </details>
            </div>
            
            <div className="mt-12 text-center text-gray-500 font-medium">
                <p>Ainda tem dúvidas? Fale conosco:</p>
                <p className="text-rose-500 font-bold">suporte@seudominio.com.br</p>
            </div>
        </div>
    </section>
  );
}
