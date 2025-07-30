import { FooterComponent } from '../../components/FooterComponent';
import banner from '../../assets/banner.jpg';
import pc1 from '../../assets/pc1.jpg';
import pc2 from '../../assets/pc2.jpg';
import pc3 from '../../assets/pc3.jpg';


import { MdAttachMoney, MdLocalShipping, MdPersonSearch, MdSupportAgent } from "react-icons/md";
import { FAQComponent } from '../../components/FAQComponent';



interface Feature {
    title: string;
    description: string;
    icon: React.ReactElement;
}

const features: Feature[] = [
    {
        title: "Custo-benefício com propósito",
        description:
            "Montagens com peças recondicionadas testadas para entregar uma experiência satisfatória pelo menor custo possível.",
        icon: <MdAttachMoney className="w-8 h-8" />
    },
    {
        title: "Entrega rápida",
        description:
            "Seu PC pronto para uso em até 48h úteis após a confirmação. Simples, direto e funcional.",
        icon: <MdLocalShipping className="w-8 h-8" />
    },
    {
        title: "Suporte direto",
        description:
            "Estamos sempre a disposição para tirar dúvidas, resolver imprevistos e acompanhar você antes, durante e depois da montagem. Atendimento direto e sem burocracia.",
        icon: <MdSupportAgent className="w-8 h-8" />
    },
    {
        title: "Atendimento personalizado",
        description:
            "Negociação baseada em confiança e atendimento direto e transparente com cada tipo de cliente.",
        icon: <MdPersonSearch className="w-8 h-8" />
    }
];





const HeyPCPage = () => {

    return (
        <>

            <section className="relative bg-zinc-950 py-32 px-4 w-full overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-right bg-no-repeat opacity-55" style={{ backgroundImage: `url(${banner})` }}></div>

                <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-950/90 to-transparent"></div>

                <div className="relative z-10 max-w-6xl mx-auto text-center text-white ">
                    <h1 className="text-5xl font-extrabold mb-6 leading-tight tracking-tight">
                        O PC que <span className="text-green-500">você precisa</span><br className="hidden " /> com o preço que <span className="text-green-500">você pode pagar</span>
                    </h1>

                    <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
                        Montamos sua máquina com peças recondicionadas testadas, entregando performance de verdade com economia, agilidade e transparência. Seu setup ideal, sem complicação.
                    </p>
                    <section className="py-20 px-4 w-full">
                        <div className="max-w-6xl mx-auto text-center text-white">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="relative group overflow-hidden rounded-xl border border-zinc-700">
                                    <img src={pc1} alt="banner-pc-1" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3 text-sm text-left">Para profissionais</div>
                                </div>
                                <div className="relative group overflow-hidden rounded-xl border border-zinc-700">
                                    <img src={pc2} alt="banner-pc-2" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3 text-sm text-left">Casuais</div>
                                </div>
                                <div className="relative group overflow-hidden rounded-xl border border-zinc-700">
                                    <img src={pc3} alt="banner-pc-3" className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3 text-sm text-left">Verdadeiros Entusiastas</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <a
                        href="/#/montagem"
                        className="inline-block border-white border-2 hover:border-green-500 hover:bg-green-500 text-white font-semibold text-lg px-10 py-4 rounded-xl transition ease-in-out"
                    >
                        Quero pedir agora!
                    </a>
                </div>
            </section>


            <section className="bg-zinc-900 py-20 px-4 w-full">
                <div className="relative max-w-6xl mx-auto text-white text-center md:flex-col md:flex">
                    <h2 className="text-3xl font-bold mb-12">Razões para escolher a <span className="text-green-500">HeyPC</span></h2>
                    <div className=' flex md:flex-row flex-col'>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="bg-zinc-900 border border-zinc-700 rounded-xl shadow-md shadow-white hover:shadow-green-500 transition ease-in-out p-6 text-white hover:text-green-500 flex flex-col items-center ">
                                    <div className="mb-4 ">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-2 ">{feature.title}</h3>
                                    <p className="absolut text-gray-400 text-sm hover:show hidden">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-zinc-950 via bg-zinc-900 to bg-zinc-800 py-20 px-4 w-full">
                <div className="max-w-5xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">Encontre o <span className="text-green-500">Perfil Ideal</span> para Sua Montagem</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed text-lg">
                        Descubra qual configuração combina mais com seu uso e orçamento.
                        Escolha entre opções otimizadas para jogos, trabalho, estudo e muito mais.
                    </p>
                    <a
                        href="/#/montagem"
                        className="inline-block border-white border-2 hover:border-green-500 hover:bg-green-500 text-white font-semibold text-lg px-10 py-4 rounded-xl transition ease-in-out"
                    >
                        Escolher o PC ideal
                    </a>
                </div>
            </section>

            <FooterComponent />
        </>
    );
};

export default HeyPCPage;
