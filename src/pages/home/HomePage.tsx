import { useState } from 'react';
import { FooterComponent } from '../../components/FooterComponent';

interface FaqQuestion {
    question: string;
    answer: string;
}

interface Feature {
    title: string;
    description: string;
}


const faqs: FaqQuestion[] = [
    {
        question: 'Como funciona o orçamento personalizado?',
        answer: 'Você nos informa seu orçamento e necessidades, e nossa equipe monta uma configuração ideal com o melhor custo-benefício.'
    },
    {
        question: 'Em quanto tempo recebo meu PC?',
        answer: 'O prazo de entrega é de até 48 horas úteis após a confirmação do pagamento.'
    },
    {
        question: 'Posso parcelar a compra?',
        answer: 'Sim! Oferecemos parcelamento no cartão de crédito em até 12 vezes com juros.'
    },
    {
        question: 'O PC vem pronto para usar?',
        answer: 'Sim, entregamos o computador montado, testado e com sistema operacional instalado, pronto para uso.'
    },
    {
        question: 'A configuração pode ser atualizada no futuro?',
        answer: 'Claro! Todas as máquinas são montadas com foco em upgrade e compatibilidade futura.'
    },
];

const features: Feature[] = [
    {
        title: 'Custo-benefício com propósito',
        description: 'Montagens com peças recondicionadas testadas para entregar uma experiência satisfatória pelo menor custo possível.'
    },
    {
        title: 'Entrega rápida',
        description: 'Seu PC pronto para uso em até 48h úteis após a confirmação. Simples, direto e funcional.'
    },
    {
        title: 'Atendimento personalizado',
        description: 'Negociação baseada em confiança e atendimento direto e transparente com cada tipo de cliente.'
    },
];

const HeyPCPage = () => {
    const [faqOpen, setFaqOpen] = useState([false, false, false, false, false]);

    const toggleFAQ = (index: number) => {
        setFaqOpen((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    return (
        <>
            <section className="relative bg-zinc-900 py-32 px-4 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 opacity-90"></div>

                <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
                    <h1 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                        O PC que <span className="text-green-500">você precisa</span><br className="hidden " /> com o preço que <span className="text-green-500">você pode pagar</span>
                    </h1>

                    <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
                        Montamos sua máquina com peças recondicionadas testadas, entregando performance de verdade com economia, agilidade e transparência. Seu setup ideal, sem complicação.
                    </p>

                    <a
                        href="/montagem"
                        className="inline-block bg-green-600 hover:bg-green-500 text-black font-semibold text-lg px-10 py-4 rounded-xl shadow-lg transition"
                    >
                        Quero pedir agora!
                    </a>
                </div>
            </section>


            <section className="bg-zinc-950 py-20 px-4 w-full">
                <div className="max-w-6xl mx-auto text-white text-center">
                    <h2 className="text-3xl font-bold mb-12">Por que escolher a <span className="text-green-500">HeyPC</span>?</h2>
                    <div className='flex'>

                        {features.map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center m-5">
                                <div className={`w-16 h-16 rounded-full mb-4 ${i === 0 ? 'bg-green-600' : i === 1 ? 'bg-blue-600' : 'bg-pink-600'}`}></div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-zinc-900 py-20 px-4 w-full">
                <div className="max-w-5xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">Encontre o Perfil Ideal para Sua Montagem</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed text-lg">
                        Descubra qual configuração combina mais com seu uso e orçamento.
                        Escolha entre opções otimizadas para jogos, trabalho, estudo e muito mais.
                    </p>
                    <a
                        href="/montagem"
                        className="inline-block bg-green-600 hover:bg-green-500 text-black font-semibold text-lg px-10 py-4 rounded-xl shadow-lg transition"
                    >
                        Escolher o PC ideal
                    </a>
                </div>
            </section>

            <section className="bg-zinc-800 py-20 px-4 w-full">
                <div className="max-w-4xl mx-auto text-white">
                    <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className="border border-zinc-700 rounded-lg p-5 cursor-pointer"
                            onClick={() => toggleFAQ(i)}
                        >
                            <h3 className="text-xl font-semibold mb-2 flex justify-between items-center">
                                {item.question}
                                <span className="text-green-500">{faqOpen[i] ? '–' : '+'}</span>
                            </h3>
                            {faqOpen[i] && <p className="text-gray-400">{item.answer}</p>}
                        </div>
                    ))}
                </div>
            </section>
            <FooterComponent/>
        </>
    );
};

export default HeyPCPage;
