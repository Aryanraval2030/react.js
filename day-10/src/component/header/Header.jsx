import style from "./Header.module.css"
import { CiMenuFries } from "react-icons/ci";


function Header() {
  return (
    <>
      <header>
        <div><p className={style.logo}>AR</p></div>

        <nav>
          <ul className={style.box}>
            <li><a href="#home">home</a></li>
            <li><a href="#work">work</a></li>
            <li><a href="#contact">contact</a></li>
          </ul>
        </nav>
        <a href=""><button className={style.btn}>resume</button></a>

        <CiMenuFries className={style.icon} />
        
      </header>


    </>
  )
}

export default Header
