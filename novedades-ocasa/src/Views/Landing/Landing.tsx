import styles from './Landing.module.css'
import Logo from '../../Assets/OcasaIcon.png'
import { Link } from "react-router-dom";

const Landing = ()=>{
    return (
        <div className={styles.LandingContainer}>
          <div className={styles.content}>
            <img src={Logo} className={styles.landingImage} alt="Logo Ocasa"
      
            />
            <h1>Bienvenidos al aplicativo</h1>
            <p>Registra y gestiona todas las novedades eficientemente.</p>
            <div className={styles.buttons}>
              <Link to="/Home">
                <button className={styles.primaryButton}>Comenzar</button>
              </Link>
            </div>
          </div>
        </div>
    )
}

export default Landing;