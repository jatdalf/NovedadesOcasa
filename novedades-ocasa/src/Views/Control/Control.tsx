import styles from './Control.module.css'
import Logo from '../../Assets/LogoOcasaBig.png'
import { Link } from "react-router-dom";

const Control =()=>{
    return (
        <div className={styles.LandingContainer}>
        <div className={styles.content}>
          <img src={Logo} className={styles.landingImage} alt="Logo Ocasa" />
          <h1>Relevamiento de Inventarios</h1>
          <fieldset className={styles.legendContainer}>
            <legend>Turnos</legend>
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

export default Control