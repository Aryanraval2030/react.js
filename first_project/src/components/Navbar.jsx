import './Navbar.css'

function Navbar() {
    return (
        <div>
            
            <header id='header'>
                <nav>
                    <ul>
                        <li><a href="">AOX movies</a></li>
                        <li><input type="search" id='input_search' placeholder='Enter Movie name' /></li>
                        <li><a href="">sign-up</a></li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Navbar
