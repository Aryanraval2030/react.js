import styles from "./Button.module.css";

function Button() {
  return (
    <div>
      <button className={styles.btn}>
        Get Started
      </button>
    </div>
  );
}

export default Button;
