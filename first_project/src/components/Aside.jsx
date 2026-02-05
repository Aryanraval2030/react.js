import './Aside.css'
// import Card from './Card'

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

                <div className=''>
                    <h1>Movies</h1>
                    <div className='rendem'>
                        {/* <Card  moviname={movie.name} />
                        <Card />
                        <Card />
                        <Card />
                        <Card /> */}
                        {/* {movies.map((movie) => (
                            <Card key={movie.id} moviname={movie.name} />
                        ))} */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Aside
