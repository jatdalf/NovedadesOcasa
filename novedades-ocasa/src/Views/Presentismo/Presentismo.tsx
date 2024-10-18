import styles from './Presentismo.module.css'
import Logo from '../../Assets/LogoOcasaBig.png'
import { Link } from "react-router-dom";

const Presentismo = ()=>{
    return (
        <div className={styles.LandingContainer}>
        <div className={styles.content}>
          <img src={Logo} className={styles.landingImage} alt="Logo Ocasa" />
          <h1>Registro de asistencia</h1>
          <fieldset className={styles.legendContainer}>
            <legend>En desarrollo</legend>
          </fieldset>
          <div className={styles.buttons}>
            <Link to="/Home">
              <button className={styles.primaryButton}>Aceptar</button>
            </Link>                                   
          </div>
        </div>
      </div>    
    )
}

export default Presentismo