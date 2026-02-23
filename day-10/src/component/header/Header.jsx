import style from "./Header.module.css"

function Header() {
  return (
    <>
      <header>
        <div><p className={style.logo}>AR</p></div>

        <nav>
          <ul className={style.box}>
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">skills</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </nav>
      </header>

      
    </>
  )
}

export default Header
