import styles from './Section2.module.css'

function Section2() {
    return (
        <div>

            <section className={styles.section2}>

                <div className={styles.first}>
                    <img src="https://media.istockphoto.com/id/2147497907/photo/young-woman-traveler-relaxing-and-enjoying-the-tropical-sea-while-traveling-for-summer.jpg?s=612x612&w=0&k=20&c=iY2aqFsXX9Hzq_KwAZhy3ug74z0y7KHxUc_msPHyKzU=" alt="" />
                </div>

                <div className={styles.second}>
                    <h1>Travel Around The <br /> World</h1>
                    <p>Let's help you achieve you abroad dreams as <br /> we have a renowned visa success rate.</p>

                    <div className={styles.boxes}>

                        <div className={styles.box1}>
                            <h2>3K</h2>
                            <p>Clents</p>
                        </div>

                        <div className={styles.box2}>
                            <h2>2K+</h2>
                            <p>Partners</p>
                        </div>

                        <div className={styles.box3}>
                            <h2>1K</h2>
                            <p>On Going</p>
                        </div>

                        <div className={styles.box4}>
                            <h2>1K</h2>
                            <p>Approvals</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section2
