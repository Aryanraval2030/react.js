import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div>
                    <h3 className={styles.heading}>aryan raval</h3>
                    <p>
                        Turning ideas into responsive and user-friendly web applications.          </p>
                </div>

                <div>
                    <h3 className={styles.heading}>Quick Links</h3>
                    <ul className={styles.linkList}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#work">work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className={styles.heading}>Follow Me</h3>
                    <div className={styles.socialIcons}>
                        <a href="#"><FaGithub /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>

            </div>

            <div className={styles.bottom}>
                © {new Date().getFullYear()} aryan raval. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;