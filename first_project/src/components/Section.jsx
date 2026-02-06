import './section.css'
import movie from './movies'
import {Video} from 'lucide-react'
import {Clapperboard} from 'lucide-react'
import {Contact} from 'lucide-react'
import {Radio} from 'lucide-react'
import {Podcast} from 'lucide-react'
import {BookCopy} from 'lucide-react'
import { Unlink2 } from 'lucide-react'

import {EyeClosed} from 'lucide-react'
import {Cog} from 'lucide-react'
import {HeartHandshake} from 'lucide-react'


function Section() {
    return (
        <div>
            <section className='movie-container'>


                <aside>
                    <ul id='asideui'>
                        <li>videos <Video /> </li>
                        <li>movies & shows <Clapperboard /></li>
                        <li>premium contents <Contact /></li>
                        <li>live <Radio /></li>
                        <li>subscriptions <Podcast /></li>
                        <li>library <BookCopy /></li>
                        <li>linked videos <Unlink2 /></li>
                        <li>watch later <EyeClosed /></li>
                        <li>settings <Cog /></li>
                        <li>help &report <HeartHandshake /></li>
                    </ul>
                </aside>

                <div className='otr-container'>

                    {movie.map((item) => (
                        <div className='moviecard' key={item.id}>

                            <div className='img'>
                                <img src={item.img} alt={item.moviname} height='100%' width='100%' />
                            </div>

                            <div className='movietext'>
                                <div>
                                    <span>{item.moviname}</span>
                                    <span>{item.rating}</span>
                                </div>

                                <div>
                                    <span>{item.updated}</span>
                                    <span>{item.runing}</span>

                                </div>

                                <div>
                                    <span>{item.duration}</span>
                                    <span>{item.startTime}</span>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

            </section>
        </div>
    )
}

export default Section
