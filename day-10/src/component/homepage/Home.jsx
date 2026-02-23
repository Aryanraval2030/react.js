import style from './Home.module.css'

function Home() {
    return (
        <>
            <div className={style.container}>
                <div className={style.inrhild}>
                    <h1>hi</h1>
                    <h1>i'm aryan raval</h1>
                    <h1>FrontEnd Developer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ipsam, culpa eum dolore laborum reprehenderit inventore provident sapiente, numquam sunt corrupti consectetur, a quam accusantium sequi blanditiis? Qui, quidem dolorum!</p>
                </div>
                <div className={`${style.inrhild} ${style.homeimg}`}>
                    <img src="https://png.pngtree.com/png-vector/20241009/ourlarge/pngtree-sigma-male-silhouette-logo-with-a-slight-yellow-shadow-vector-png-image_14041053.png" alt="myphoto" />
                </div>
            </div>
        </>
    )
}

export default Home
