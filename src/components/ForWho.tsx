import { CheckCircle2 } from 'lucide-react';

export default function ForWho() {
  return (
    <section className="py-16 px-6 bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-10 text-center text-rose-500 tracking-tight uppercase">
                PARA QUEM É ESTE MÉTODO?
            </h2>
            
            <div className="space-y-6 bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-2xl">
                <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <p className="text-lg font-medium text-gray-200">Para você que está cansada de relações rasas e homens que somem do nada.</p>
                </div>
                
                <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <p className="text-lg font-medium text-gray-200">Para você que quer reacender a chama e a paixão no seu relacionamento atual.</p>
                </div>
                
                <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <p className="text-lg font-medium text-gray-200">Para você que deseja ser tratada com o valor, respeito e prioridade que realmente merece.</p>
                </div>
                
                <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                    <p className="text-lg font-medium text-gray-200">Para você que quer parar de correr atrás e começar a ser a mulher que eles procuram.</p>
                </div>
            </div>
            
            <div className="mt-12 text-center">
                <a href="https://payfast.greenn.com.br/redirect/275403" className="btn-pulse-green inline-block w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white font-black py-5 px-10 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all text-lg uppercase tracking-wide">
                    SIM, ISSO É PARA MIM
                </a>
            </div>
        </div>
    </section>
  );
}
