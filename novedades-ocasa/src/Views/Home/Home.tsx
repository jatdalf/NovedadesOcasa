import styles from './Home.module.css'
import Logo from '../../Assets/OcasaIcon.png'

const Home = ()=>{
    return (
        <div className={styles.HomeContainer}>
            <img src={Logo} className={styles.LandingLogo} alt="Logo Ocasa"/>
            <h1>Home</h1>
            <button>Volver</button>
        </div>
    )
}

export default Home;