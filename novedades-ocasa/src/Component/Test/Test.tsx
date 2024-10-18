import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Test.module.css';
import Logo from '../../Assets/LogoOcasaBig.png';


const TestPage = ()=>{

    return(
        <div className={styles.LandingContainer}>
          <div className={styles.content}>
            <img src={Logo} className={styles.landingImage} alt="Logo Ocasa" />
            <h1 className={styles.IngresosH1}>Sección en Desarrollo</h1>          
            <section className={styles.ingresosSection}>
              <div>
                <fieldset className={styles.legendContainer}>
                <legend>Proximamente</legend>

                <Link to="/Home">                    <input className={styles.IngresosInput} type="radio" id="control_01" name="select" value="1" />
                    <label htmlFor="control_01">
                        Volver                     
                    </label>
                </Link>

                </fieldset>
              </div>
            </section>
          </div>
        </div>
    )
}

export default TestPage