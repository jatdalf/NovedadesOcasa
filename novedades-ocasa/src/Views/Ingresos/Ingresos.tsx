import { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Ingresos.module.css';
import Logo from '../../Assets/LogoOcasaBig.png';

const Ingresos = () => {  
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        turno: '',
        estadoVehiculo: '',
        producto: '',
        documentacion: ''
    });

    // Tipo explícito para el evento de cambio
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div className={styles.LandingContainer}>
          <div className={styles.content}>
            <img src={Logo} className={styles.landingImage} alt="Logo Ocasa" />
            <h1>Informe de Recepción</h1>

            {step === 1 && (                    
                <div>
                    <fieldset className={styles.legendContainer}>
                        <legend>Turnos</legend>
                        <label>
                            <input type="radio" name="turno" value="Todo correcto" onChange={handleOptionChange} />
                            Todo correcto
                        </label><br/>
                        <label>
                            <input type="radio" name="turno" value="Se presenta más de 1 vehiculo" onChange={handleOptionChange} />
                            Se presenta más de 1 vehiculo
                        </label><br/>
                        <label>
                            <input type="radio" name="turno" value="Sin turno" onChange={handleOptionChange} />
                            Sin turno
                        </label><br/>
                        <label>
                            <input type="radio" name="turno" value="Fuera del turno asignado" onChange={handleOptionChange} />
                            Fuera del turno asignado
                        </label>
                    </fieldset>
                </div>
            )}

            {step === 2 && (
                <div>
                    <fieldset className={styles.legendContainer}>
                        <legend>Estado del vehículo</legend>
                        <label>
                            <input type="radio" name="estadoVehiculo" value="Todo correcto" onChange={handleOptionChange} />
                            Todo correcto
                        </label><br/>
                        <label>
                            <input type="radio" name="estadoVehiculo" value="Cajas sin cerramientos (lona/sin lona)" onChange={handleOptionChange} />
                            Cajas sin cerramientos (lona/sin lona)
                        </label><br/>
                        <label>
                            <input type="radio" name="estadoVehiculo" value="Transporta productos incompatibles" onChange={handleOptionChange} />
                            Transporta productos incompatibles
                        </label><br/>
                        <label>
                            <input type="radio" name="estadoVehiculo" value="Temperatura fuera de rango" onChange={handleOptionChange} />
                            Temperatura fuera de rango
                        </label><br/>
                        <label>
                            <input type="radio" name="estadoVehiculo" value="Condiciones de limpieza inadecuadas" onChange={handleOptionChange} />
                            Condiciones de limpieza inadecuadas
                        </label><br/>
                        <label>
                            <input type="radio" name="estadoVehiculo" value="Otras condiciones inadecuadas – detalle" onChange={handleOptionChange} />
                            Otras condiciones inadecuadas – detalle
                        </label>
                    </fieldset>
                </div>
            )}

            {step === 3 && (
                <div>
                    <fieldset className={styles.legendContainer}>
                        <legend>Producto</legend>
                        <label>
                            <input type="radio" name="producto" value="Todo correcto" onChange={handleOptionChange} />
                            Todo correcto
                        </label><br/>
                        <label>
                            <input type="radio" name="producto" value="Producto deteriorado" onChange={handleOptionChange} />
                            Producto deteriorado
                        </label><br/>
                        <label>
                            <input type="radio" name="producto" value="Mala estiba" onChange={handleOptionChange} />
                            Mala estiba
                        </label><br/>
                        <label>
                            <input type="radio" name="producto" value="Conservación" onChange={handleOptionChange} />
                            Conservación
                        </label>
                    </fieldset>
                </div>
            )}

            {step === 4 && (
                <div>
                    <fieldset className={styles.legendContainer}>
                        <legend>Documentación</legend>
                        <label>
                            <input type="radio" name="documentacion" value="Todo correcto" onChange={handleOptionChange} />
                            Todo correcto
                        </label><br/>
                        <label>
                            <input type="radio" name="documentacion" value="Falta Remito" onChange={handleOptionChange} />
                            Falta Remito
                        </label><br/>
                        <label>
                            <input type="radio" name="documentacion" value="Falta OC" onChange={handleOptionChange} />
                            Falta OC
                        </label><br/>
                        <label>
                            <input type="radio" name="documentacion" value="No posee Autorización" onChange={handleOptionChange} />
                            No posee Autorización
                        </label>
                    </fieldset>
                </div>
            )}

            <div className={styles.buttons}>
                {step > 1 && (
                    <button className={styles.secondaryButton} onClick={handlePreviousStep}>
                        Anterior
                    </button>
                )}

                {step < 4 ? (
                    <button className={styles.primaryButton} onClick={handleNextStep}>
                        Siguiente
                    </button>
                ) : (
                    <Link to="/final">
                        <button className={styles.primaryButton}>
                            Finalizar
                        </button>
                    </Link>
                )}
            </div>
          </div>
        </div>
    );
}

export default Ingresos;
