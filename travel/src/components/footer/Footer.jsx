import styles from './Footer.module.css'
function Footer() {
    return (
        <div>

            <footer className={styles.footer}>
                <div className={styles.ftrbox}>Logo</div>
                <div className={styles.ftrbox}>
                    <p></p>
                    <a href="#">home</a>
                    <a href="#">our services</a>
                    <a href="#">about us</a>
                    <a href="#">contact</a>
                    <a href="#">FAQ</a>
                </div>
                <div className={styles.ftrbox}>
                    <p></p>
                    <a href="#">study destination</a>
                    <a href="#">travel trends</a>
                    <a href="#">testimemories</a>
                    <a href="#">partner</a>
                    <a href="#">news </a>
                </div>
                <div className={styles.ftrbox}>
                    <p></p>
                    <a href="#"><Facebook /></a>
                    <a href="#"><Instagram /></a>
                    <a href="#"><Mail /></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
