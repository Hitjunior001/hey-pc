export const NavbarComponent = () => {
    return (
        <nav className="bg-zinc-950 mb-6 text-green-700 px-6 py-4 shadow-md top-0 left-0 w-full z-50   fixed">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <a href="/" className='text-2xl font-extrabold'>
                    <span className='font-bold text-white'>Hey</span><span className='font-bold text-green-700'>PC</span>
                </a>

                <ul className="hidden md:flex gap-8 text-sm font-semibold">
                    <li><a href="/montagem" className=" border-white border-2 hover:border-green-500 hover:bg-green-500 text-white font-semibold p-2 rounded-xl transition ease-in-out">Monte seu PC</a></li>
                    {/* <li><a href="#" className="hover:text-green-500 transition">PC disponíveis</a></li>
                    <li><a href="#" className="hover:text-green-500 transition">Contato</a></li> */}

                </ul>   

                <button id="menuToggle" className="md:hidden focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div id="mobileMenu" className="md:hidden overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
                <ul className="flex flex-col gap-4 mt-4 px-4 pb-4 text-sm font-semibold">
                    <li><a href="#" className="hover:text-green-500 transition">Monte seu PC</a></li>
                    <li><a href="#" className="hover:text-green-500 transition">Estoque em Tempo Real</a></li>
                    <li><a href="#" className="hover:text-green-500 transition">Atendimento Personalizado</a></li>
                    <li><a href="#" className="hover:text-green-500 transition">Testes de Performance Grátis</a></li>
                </ul>
            </div>
        </nav>
    )
}