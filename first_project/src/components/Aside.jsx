import './Aside.css'
import Card from './card.jsx'

function Aside() {





    return (
        <div>
            <div className='container_main'>
                <aside>
                    <ul id='asideui'>
                        <li>videos</li>
                        <li>movies & shows</li>
                        <li>premium contents</li>
                        <li>live</li>
                        <li>subscriptions</li>
                        <li>library</li>
                        <li>linked videos</li>
                        <li>watch later</li>
                        <li>settings</li>
                        <li>help &report</li>
                    </ul>
                </aside>

                <div>
                    <h1>Movies</h1>
                    <div className='rendem'>
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aside
