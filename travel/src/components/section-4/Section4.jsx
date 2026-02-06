import styles from './Section4.module.css'
import Button from '../custom-button/Button'

function Section4() {
    return (
        <div>

            <section className={styles.section4}>

                <div className={styles.first}>

                    <div className={styles.firstinr}>
                        <div className={styles.firstimg1}>
                            <img src="https://static.toiimg.com/photo/58490365.cms" alt="" />
                        </div>
                        <div className={styles.firstimg2}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FvOiLtJ-vu8pIC2kC8F-LjYdpuBVcYp-_Q&s" alt="" />
                        </div>
                   
                        <div className={styles.firstimg3}>
                            <img src="https://hblimg.mmtcdn.com/content/hubble/img/agra/mmt/activities/m_activities-agra-taj-mahal_l_400_640.jpg" alt="" />
                        </div>
                        <div className={styles.firstimg4}>
                            <img src="https://static.toiimg.com/thumb/msid-92089121,width-748,height-499,resizemode=4,imgsize-139308/.jpg" alt="" />
                        </div>
                    </div>

                </div>

                <div className={styles.second}>
                    <h1>Latest Travel Trends</h1>
                    <p>let us assist you with efficient <br />strategies to secure a tourist <br />visa of your choice country</p>
                    <Button />
                </div>

            </section>
        </div>
    )
}

export default Section4
