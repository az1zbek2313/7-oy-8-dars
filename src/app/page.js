import Image from "next/image";
import icon from "../../public/image/icon.png";
import iconX from "../../public/image/x-512.webp";
import logo from "../../public/image/Logotip.svg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
       <span>
          <a href="#">
            <Image src={logo} />
          </a>
        </span>

       <input className={styles.inputt} id="sidebar" type="checkbox"/>

       <label className={styles.sidebar} htmlFor="sidebar">
       <Image className={styles.icon} src={icon} style={{
          width:'24px',
          height:'24px'
        }}/>
       <Image className={styles.iconX} src={iconX} style={{
          width:'24px',
          height:'24px',
          background:'white'
        }}/>
        
       </label>

        <div className={styles.logoItems}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <a href="#" className={styles.button}>Try for Free</a>
        </div>
      </header>
      <main className={styles.heroContainer}> 
        <article className={styles.article}>
          <h1 className={styles.title}>Discover new currency</h1>
          <p className={styles.text}>A cryptocurrency bank account for more trusting financial transaction & more reliable currency for better future finance</p>
          <a href="#" className={styles.button}>Try for Free</a>
        </article>
        {/* <Image src={dashboard} placeholder="blur" className={styles.image}/> */}
      </main>
    </div>
  );
}
