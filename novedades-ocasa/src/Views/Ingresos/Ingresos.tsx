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
    const isOptionSelected = () => {
        if (step === 1) return !!formData.turno;
        if (step === 2) return !!formData.estadoVehiculo;
        if (step === 3) return !!formData.producto;
        if (step === 4) return !!formData.documentacion;
        return false;
    };

    return (
        <div className={styles.LandingContainer}>
          <div className={styles.content}>
            <img src={Logo} className={styles.landingImage} alt="Logo Ocasa" />
            <h1 className={styles.IngresosH1}>Informe de Recepción</h1>
            <section>
                {step === 1 && (                    
                  <div>
                    <fieldset className={styles.legendContainer}>
                            <legend>Turnos</legend>
                            
                            <input className={styles.IngresosInput} type="radio" id="control_01" name="turno" value="Todo correcto" onChange={handleOptionChange} />
                            <label htmlFor="control_01">
                                Todo correcto
                            </label>

                            <input className={styles.IngresosInput} type="radio" id="control_02" name="turno" value="Se presenta más de 1 vehiculo" onChange={handleOptionChange} />
                            <label htmlFor="control_02">
                                Se presenta más de 1 vehiculo
                            </label>
                            
                            <input className={styles.IngresosInput} type="radio" id="control_03" name="turno" value="Sin turno" onChange={handleOptionChange} />
                            <label htmlFor="control_03">
                                Sin turno
                            </label>
                            
                            <input className={styles.IngresosInput} type="radio" id="control_04" name="turno" value="Fuera del turno asignado" onChange={handleOptionChange} />
                            <label htmlFor="control_04">
                                Fuera del turno asignado
                            </label>
                    
                    </fieldset>
                  </div>
                )}

                {step === 2 && (
                    <div>
                    
                        <fieldset className={styles.legendContainer}>
                            <legend>Estado del vehículo</legend>
                            
                            <input className={styles.IngresosInput} type="radio" id="control_01" name="estadoVehiculo" value="Todo correcto" onChange={handleOptionChange} />
                            <label htmlFor="control_01">
                                Todo correcto
                            </label>
                            <input className={styles.IngresosInput} type="radio" id="control_02" name="estadoVehiculo" value="Cajas sin cerramientos (lona/sin lona)" onChange={handleOptionChange} />
                            <label htmlFor="control_02">
                                Cajas sin cerramientos (lona/sin lona)
                            </label>
                            
                            <input className={styles.IngresosInput} type="radio" id="control_03" name="estadoVehiculo" value="Transporta productos incompatibles" onChange={handleOptionChange} />
                            <label htmlFor="control_03">
                                Transporta productos incompatibles
                            </label>
                            
                            <input className={styles.IngresosInput} type="radio" id="control_04" name="estadoVehiculo" value="Temperatura fuera de rango" onChange={handleOptionChange} />
                            <label htmlFor="control_04">
                                Temperatura fuera de rango
                            </label>
                            
                            <input className={styles.IngresosInput} type="radio" id="control_05" name="estadoVehiculo" value="Condiciones de limpieza inadecuadas" onChange={handleOptionChange} />
                            <label htmlFor="control_05">
                                Condiciones de limpieza inadecuadas
                            </label>
                            
                            <input className={styles.IngresosInput} type="radio" id="control_06" name="estadoVehiculo" value="Otras condiciones inadecuadas – detalle" onChange={handleOptionChange} />
                            <label htmlFor="control_06">
                                Otras condiciones inadecuadas – detalle
                            </label>
                        
                        </fieldset>
                    
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <fieldset className={styles.legendContainer}>
                            <legend>Producto</legend>
                                <input className={styles.IngresosInput} type="radio" id="control_01" name="producto" value="Todo correcto" onChange={handleOptionChange} />
                            <label htmlFor="control_01">
                                Todo correcto
                            </label>

                                <input className={styles.IngresosInput} type="radio" id="control_02" name="producto" value="Producto deteriorado" onChange={handleOptionChange} />
                            <label htmlFor="control_02">
                                Producto deteriorado
                            </label>

                                <input className={styles.IngresosInput} type="radio" id="control_03" name="producto" value="Mala estiba" onChange={handleOptionChange} />
                            <label htmlFor="control_03">
                                Mala estiba
                            </label>
                            
                                <input className={styles.IngresosInput} type="radio" id="control_04" name="producto" value="Conservación" onChange={handleOptionChange} />
                            <label htmlFor="control_04">
                                Conservación
                            </label>
                        </fieldset>
                    </div>
                )}

                {step === 4 && (
                    <div>
                        <fieldset className={styles.legendContainer}>
                            <legend>Documentación</legend>
                            
                                <input className={styles.IngresosInput} type="radio" id="control_01" name="documentacion" value="Todo correcto" onChange={handleOptionChange} />
                            <label htmlFor="control_01">
                                Todo correcto
                            </label>

                                <input className={styles.IngresosInput} type="radio" id="control_02" name="documentacion" value="Falta Remito" onChange={handleOptionChange} />
                            <label htmlFor="control_02">
                                Falta Remito
                            </label>

                                <input className={styles.IngresosInput} type="radio" id="control_03" name="documentacion" value="Falta OC" onChange={handleOptionChange} />
                            <label htmlFor="control_03">
                                Falta OC
                            </label>

                                <input className={styles.IngresosInput} type="radio" id="control_04" name="documentacion" value="No posee Autorización" onChange={handleOptionChange} />
                            <label htmlFor="control_04">
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
                        <button className={styles.primaryButton} onClick={handleNextStep} disabled={!isOptionSelected()}>
                            Siguiente
                        </button>
                    ) : (
                        <Link to="/final">
                            <button className={styles.primaryButton} disabled={!isOptionSelected()}>
                                Finalizar
                            </button>
                        </Link>
                    )}
                    </div>
            </section>
          </div>
        </div>
    );
}

export default Ingresos;
