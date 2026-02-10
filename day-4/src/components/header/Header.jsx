import { Logs } from 'lucide-react'
function Header() {
    return (
        <div>

            <header className='h-14 w-full border-2 border-b-black flex justify-between px-10 items-center'>

                <div className="text-2xl font-medium border-black">logo</div>

                <nav>
                    <ul className="hidden sm:flex gap-10">
                        <li><a href="#home">home</a></li>
                        <li><a href="#service">service</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li><a href="#contact-us">contact us</a></li>
                    </ul>


                    
                    <div className='sm:hidden'>
                        <details className="relative md:hidden">
                            <summary className="list-none cursor-pointer">
                                <svg
                                    className="w-7 h-7 text-gray-700"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </summary>

                            <div className="absolute right-0 mt-4 w-56 rounded-xl bg-white shadow-lg overflow-hidden">
                                <a href="#" className="block px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
                                    Home
                                </a>
                                <a href="#" className="block px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
                                    service
                                </a>
                                <a href="#" className="block px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
                                    portfolio
                                </a>
                                <a href="#" className="block px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
                                    Contact us
                                </a>
                                <div className="p-4">
                                    <button className="w-full rounded-full bg-indigo-600 py-2 text-white hover:bg-indigo-700 transition">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </details>
                        </div>
                </nav>
            </header>


        </div>
    )
}

export default Header
