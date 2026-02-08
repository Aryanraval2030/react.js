import styles from './Section7.module.css'
function Section7() {
    return (
        <div>
            <section className={styles.section7}>
                <h1>Subscribe to get information, latest news and other <br />interesting offers.</h1>
                <div className={styles.inputbox}>
                    <input type="text" placeholder='Enter your email address' />
                    <button className={styles.btn}>continue</button>
                </div>
            </section>
        </div>
    )
}

export default Section7
