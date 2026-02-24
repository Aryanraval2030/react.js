import styles from "./contact.module.css";

const Contact = () => {
    return (
        <>
            <section id="contact" className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.heading}>
                        Contact <span>Me</span>
                    </h2>

                    <div className={styles.formWrapper}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Name</label>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email</label>
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>Message</label>
                            <textarea
                                className={styles.textarea}
                                placeholder="Write your message..."
                            />
                        </div>

                        <button type="button" className={styles.button}>
                            Send Message
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;