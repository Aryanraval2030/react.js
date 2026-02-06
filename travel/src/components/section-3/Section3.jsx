import Styles from './Section3.module.css'
import { Lightbulb } from 'lucide-react'
import Button from '../custom-button/Button'


function Section3() {
    return (
        <div>

            <section className={Styles.section3}>

                <div className={Styles.first}>
                    <h1>Services We Provide</h1>
                    <p>Feel free to browse our wide variety of <br /> services</p>
                </div>


                <div className={Styles.second}>

                    <div className={Styles.inrsecond1}>
                        <span className={Styles.icon}><Lightbulb /></span>
                        <h3>Admission Support</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quibusdam, quaerat, nihil voluptatibus,</p>
                    </div>

                    <div className={Styles.inrsecond2}>
                        <span className={Styles.icon}><Lightbulb /></span>
                        <h3>study Visa assistance</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quibusdam, quaerat, nihil voluptatibus,</p>
                    </div>

                    <div className={Styles.inrsecond3}>
                        <span className={Styles.icon}><Lightbulb /></span>
                        <h3>flight booking</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quibusdam, quaerat, nihil voluptatibus,</p>
                    </div>

                </div>

                <div className={Styles.btn3}><Button /></div>

            </section>
        </div>
    )
}

export default Section3
