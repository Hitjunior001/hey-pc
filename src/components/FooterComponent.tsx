export const FooterComponent = () => {
    return (
        <footer className="bg-zinc-950 text-gray-400 py-12 px-6  bottom-0 w-full">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">

                <div>
                    <h4 className="text-white font-semibold mb-3">Empresa</h4>
                    <ul className="space-y-2">
                        <li><a href="/sobre" className="hover:text-white">Sobre a HeyPC</a></li>
                        <li><a href="/contato" className="hover:text-white">Contato</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Serviços</h4>
                    <ul className="space-y-2">
                        <li><a href="/montagem" className="hover:text-white">Monte seu PC</a></li>
                        <li><a href="/kits" className="hover:text-white">Kits Prontos</a></li>
                        <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Ajuda</h4>
                    <ul className="space-y-2">
                        <li><a href="/politica-garantia" className="hover:text-white">Garantia</a></li>
                        <li><a href="/termos" className="hover:text-white">Termos de Uso</a></li>
                        <li><a href="/privacidade" className="hover:text-white">Privacidade</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Fale Conosco</h4>
                    <ul className="space-y-2">
                        <li><a href="https://wa.me/5561981829709" target="_blank" className="hover:text-white">WhatsApp</a></li>
                        <li><a href="mailto:suporte.heypc@gmail.com" className="hover:text-white">E-mail</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-3">Redes Sociais</h4>
                    <ul className="space-y-2">
                        <li><a href="https://facebook.com" target="_blank" className="hover:text-white">Facebook</a></li>
                    </ul>
                </div>

            </div>

            <div className="mt-10 text-center text-xs text-gray-500 flex flex-col">
                © {new Date().getFullYear()} HeyPC. Todos os direitos reservados.
                <span className="text-gray-500">CNPJ 61.823.359/0001-53</span>

            </div>
        </footer>

    )
}

