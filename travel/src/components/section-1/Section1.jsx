import styles from './Section1.module.css'
import Button from '../custom-button/Button'

function Section1() {
  return (
    <div>
      <section className={styles.sectionFirst}>
        <div className={styles.first}>
          <h1>Manifesting your <br /> Travel Dreams!</h1>
          <p>Study, work, and Live abroad! Let's help you  <br /> achieve dreams as we have a  <br /> renowned visa success rate.</p>
          <div><Button /></div>
        </div>

        <div className={styles.second}>
          <img src="https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        </div>

      </section>


    </div>
  )
}

export default Section1
