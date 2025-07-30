import { useState } from "react";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



interface FaqQuestion {
    question: string;
    answer: string;
}

export const FAQComponent = () => {
    const [faqOpen, setFaqOpen] = useState<boolean[]>([]);


    const faqs: FaqQuestion[] = [
        {
            question: 'Como funciona o orçamento personalizado?',
            answer:
                'Você nos informa seu orçamento e o tipo de uso que deseja (jogos, trabalho, estudos, etc). A partir disso, nossa equipe pesquisa, seleciona e monta uma configuração otimizada com peças recondicionadas testadas, entregando o melhor desempenho possível dentro do valor.'
        },
        {
            question: 'Qual é o prazo de entrega?',
            answer:
                'Após a confirmação do pagamento, montamos, testamos e entregamos sua CPU em até 48 horas úteis, diretamente em seu domicílio apenas para o DF.'
        },
        {
            question: 'Quais são os meios de pagamento?',
            answer:
                'Aceitamos Pix, cartão de débito, crédito (em até 12x com juros) e transferência bancária. O pagamento deve ser confirmado antes do início da montagem.'
        },
        {
            question: 'A CPU vem pronta para uso?',
            answer:
                'Sim. Você recebe seu PC montado, limpo, testado e com sistema operacional instalado. É só ligar, conectar periféricos e começar a usar.'
        },
        {
            question: 'Posso parcelar a compra?',
            answer:
                'Sim! Trabalhamos com parcelamento via cartão de crédito em até 12 vezes. O valor das parcelas e os juros aplicados são informados no momento da compra.'
        },
        {
            question: 'Vocês compram PCs usados para troca?',
            answer:
                'Ainda não aceitamos trocas diretas, mas estamos desenvolvendo um programa de recompra. Em breve, você poderá trocar seu PC antigo por um desconto em um novo.'
        },
        {
            question: 'Posso escolher marcas ou modelos específicos?',
            answer:
                'Sim, desde que estejam disponíveis no estoque.'
        },
        {
            question: 'As peças são novas?',
            answer:
                'Sim, mas também utilizamos peças recondicionadas e testadas , todas com garantia funcional. Isso garante desempenho por um preço acessível, sem abrir mão da segurança.'
        },
    ];

    const toggleFAQ = (index: number) => {
        setFaqOpen((prev) => {
            const updated = [...prev];
            updated[index] = !updated[index];
            return updated;
        });
    };

    return(
        <section className="bg-gradient-to-b from-zinc-800 to bg-zinc-950 py-20 px-4 w-full">
        <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6 text-center p-5">Questões sobre a <span className="text-green-500">HeyPC</span></h2>
            {faqs.map((item, i) => (
                <div
                    key={i}
                    className="border border-zinc-700 rounded-lg p-5 cursor-pointer m-3"
                    onClick={() => toggleFAQ(i)}
                >
                    <h3 className="text-xl font-semibold mb-2 flex justify-between items-center">
                        {item.question}
                        <span className="text-green-500">{faqOpen[i] ? '–' : '+'}</span>
                    </h3>
                    {faqOpen[i] && <p className="text-gray-400">{item.answer}</p>}
                </div>
            ))}
            <div className="p-5 m-5">
                <h3 className="text-3xl font-bold mb-6 text-center p-5">Não encontrou o que procurava? Entre em <span className="text-green-500">contato</span> conosco</h3>
                <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="border-2 border-white rounded-full p-4 m-2 flex items-center text-center justify-center hover:text-green-500 hover:border-green-500 cursor-pointer">
                        <FaWhatsapp/>
                        <span className="m-2"> Whatsapp</span>
                    </div>
                    <div className="border-2 border-white rounded-full p-4 m-2 flex items-center text-center justify-center hover:text-green-500 hover:border-green-500 cursor-pointer">
                        <MdEmail/>
                        <span className="m-2"> Email</span>
                    </div>
                    <div className="border-2 border-white rounded-full p-4 m-2 flex items-center text-center justify-center hover:text-green-500 hover:border-green-500 cursor-pointer">
                        <FaFacebook/>
                        <span className="m-2"> Facebook</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}