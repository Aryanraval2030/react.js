import styles from './Footer.module.css'
import { Facebook } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Mail } from 'lucide-react'

function Footer() {

    return (
        <div>

            <footer className={styles.footer}>
                <div className={styles.logoname}>Logo</div>
                <div className={styles.ftrbox}>
                    <p>quick links</p>
                    <a href="#">home</a>
                    <a href="#">our services</a>
                    <a href="#">about us</a>
                    <a href="#">contact</a>
                    <a href="#">FAQ</a>
                </div>
                <div className={styles.ftrbox}>
                    <p>features</p>
                    <a href="#">study destination</a>
                    <a href="#">travel trends</a>
                    <a href="#">testimemories</a>
                    <a href="#">partner</a>
                    <a href="#">news </a>
                </div>
                <div className={styles.ftrbox}>
                    <p>connect with us</p>
                    <span className={styles.icons}><Facebook /></span>
                    <span className={styles.icons}><Instagram /></span>
                    <span className={styles.icons}><Mail /></span>
                </div>
            </footer>
        </div>
    )
}

export default Footer
