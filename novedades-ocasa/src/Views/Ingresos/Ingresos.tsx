import styles from './Ingresos.module.css'
import Logo from '../../Assets/LogoOcasaBig.png'
import { Link } from "react-router-dom";

const Ingresos = ()=>{
    return (
        <div className={styles.LandingContainer}>
          <div className={styles.content}>
            <img src={Logo} className={styles.landingImage} alt="Logo Ocasa" />
            <h1>Informe de Recepción</h1>
            <fieldset className={styles.legendContainer}>
              <legend>Turnos</legend>
            </fieldset>
            <div className={styles.buttons}>
              <Link to="/Ingresos">
                <button className={styles.primaryButton}>Aceptar</button>
              </Link>                                   
            </div>
          </div>
        </div>    
    )
}

export default Ingresos