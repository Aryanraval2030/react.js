import styles from "./Work.module.css"
import umaImg from "../../assets/uma.jpg"
import vibeImg from "../../assets/vibenova.jpg"
import marketingImg from "../../assets/marketing.jpg"


const projects = [
  {
    id: 1,
    title: "uma-restaurant",
    desc: "A modern restaurant website showcasing menu, ambiance, and easy table reservations.",
    img: umaImg,
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "vibenova-clothes",
    desc: "A trendy fashion e-commerce platform for discovering and shopping the latest styles.",
    img: vibeImg,
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "app-marketing",
    desc: "A sleek landing page designed to promote and market a mobile app effectively.",
    img: marketingImg,
    live: "#",
    github: "#",
  },
]

const Work = () => {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          My <span className={styles.highlight}>Works</span>
        </h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              
              <div className={styles.imageWrapper}>
                <img
                  src={project.img}
                  alt={project.title}
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.desc}</p>

                <div className={styles.buttonGroup}>
                  <a href={project.live} className={styles.liveBtn}>
                    Live
                  </a>
                  <a href={project.github} className={styles.githubBtn}>
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work