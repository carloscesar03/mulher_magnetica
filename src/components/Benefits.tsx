import { Sparkles, Heart, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="py-16 px-6 bg-[#FAFAFA] border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black mb-12 text-center text-zinc-950 tracking-tight uppercase">
                O QUE VOCÊ VAI DESCOBRIR
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <div className="bg-rose-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                        <Sparkles className="w-8 h-8 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-950 mb-4 uppercase">Magnetismo Natural</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">
                        Aprenda a atrair a atenção e o interesse dele sem esforço, sendo exatamente quem você é, mas na sua melhor versão.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <div className="bg-rose-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                        <Heart className="w-8 h-8 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-950 mb-4 uppercase">Conexão Profunda</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">
                        Descubra como criar um vínculo emocional inquebrável que vai muito além da atração física e superficial.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                    <div className="bg-rose-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck className="w-8 h-8 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-950 mb-4 uppercase">Segurança e Poder</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">
                        Elimine a insegurança de uma vez por todas e torne-se a mulher confiante que escolhe, em vez de esperar ser escolhida.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}
