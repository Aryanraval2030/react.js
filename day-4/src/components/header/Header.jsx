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
                        <Logs />
                    </div> 
                </nav>
            </header>


        </div>
    )
}

export default Header
