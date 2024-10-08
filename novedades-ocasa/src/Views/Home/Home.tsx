import styles from './Home.module.css'
import Logo from '../../Assets/LogoOcasaBig.png'
import { Link } from "react-router-dom";

const Home = ()=>{
    return (
        <div className={styles.LandingContainer}>
          <div className={styles.content}>
            <img src={Logo} className={styles.landingImage} alt="Logo Ocasa" />
            <h1>Seleccione Sección</h1>
              <div className={styles.buttons}>
                <Link to="/Ingresos">
                  <button className={styles.primaryButton}>Ingresos</button>
                </Link>
                <Link to="/Presentismo">
                  <button className={styles.primaryButton}>Presentismo</button>
                </Link>
                <Link to="/Control">
                  <button className={styles.primaryButton}>Control de Stock</button>
                </Link>              
            </div>
          </div>
        </div>    
    )
}

export default Home;