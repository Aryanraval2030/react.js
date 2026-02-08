import styles from './Section5.module.css'

function Section5() {
    return (
        <div>

            <section className={styles.section5}>
                <div className={styles.first}>
                    <p>TESTIMONIALS</p>
                    <h1>What people say <br /> about us</h1>
                </div>
                <div className={styles.second}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br />Magni libero, aspernatur nostrum excepturi, necessitatibus  <br />  animi doloremque molestiae vitae a dignissimos, <br /> accusamus veniam hic.  Illo nostrum consectetur alias, ad  <br /> cupiditate distinctio!</p>
                    <div className={styles.inrsecond1}>
                        <p>studentname</p>
                        <p>student</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section5
