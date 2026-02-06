import Button from '../custom-button/Button'
import styles from './Header.module.css'
function Header() {
    return (
        <div>
            <header>
                <nav>

                    <div className={styles.logo}>Logo</div>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Our services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>

                    <div>
                        <Button />
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
