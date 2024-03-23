import './css/ventanaIngresoEquipo.css'
import BotonForm from './BotonForm';
import PartesEquipoIngreso from './PartesEquipoIngreso';
import { useState } from 'react';

function VentanaIngresoEquipo({ isOpen, onClose }) {

    const [abrirModalPartes, setAbrirModalPartes] = useState(false);


    //Manejar check de pantalla
    const [checkPantalla, setCheckPantalla] = useState(false);
    const CheckPantallaEvento = (event) => {
        setCheckPantalla(event.target.checked);
    }

    //Manejar check de puertos
    const [checkPuertos, setCheckPuertos] = useState(false);
    const CheckPuertosEvento = (event) => {
        setCheckPuertos(event.target.checked);
    }

    //Manejar check de parlantes
    const [checkParlantes, setCheckParlantes] = useState(false);
    const CheckParlantesEvento = (event) => {
        setCheckParlantes(event.target.checked);
    }

    //Manejar check de batería
    const [checkBateria, setCheckBateria] = useState(false);
    const CheckBateriaEvento = (event) => {
        setCheckBateria(event.target.checked);
    }

    //Manejar check de energía
    const [checkEnergia, setCheckEnergia] = useState(false);
    const CheckEnergiaEvento = (event) => {
        setCheckEnergia(event.target.checked);
    }

    //Manejar check de ventiladores
    const [checkVentiladores, setCheckVentiladores] = useState(false);
    const CheckVentiladoresEvento = (event) => {
        setCheckVentiladores(event.target.checked);
    }

    //Manejar check de Bluetooth
    const [checkBluetooth, setCheckBluetooth] = useState(false);
    const CheckBluetoothEvento = (event) => {
        setCheckBluetooth(event.target.checked);
    }

    //Manejar check de Wifi
    const [checkWifi, setCheckWifi] = useState(false);
    const CheckWifiEvento = (event) => {
        setCheckWifi(event.target.checked);
    }

    //Manejar check de Teclado
    const [checkTeclado, setCheckTeclado] = useState(false);
    const CheckTecladoEvento = (event) => {
        setCheckTeclado(event.target.checked);
    }

    //Manejar check de Touchpad
    const [checkTouchpad, setCheckTouchpad] = useState(false);
    const CheckTouchpadEvento = (event) => {
        setCheckTouchpad(event.target.checked);
    }

    //Manejar check de Windows
    const [checkWindows, setCheckWindows] = useState(false);
    const CheckWindowsEvento = (event) => {
        setCheckWindows(event.target.checked);
    }

    //Manejar check de Office
    const [checkOffice, setCheckOffice] = useState(false);
    const CheckOfficeEvento = (event) => {
        setCheckOffice(event.target.checked);
    }

    //cambiar div por form al hacer la app completa!!!

    if (!isOpen) return null;
    return (
        <div id="fondoIngresoEquipo">
            <label id='etNombreCliIngEq' className='tituloNombreModales'>Nombre del Cliente</label>
            <div className='modal' id='formVentanaIngEq'>
                <section id='secIngresoPorIngEq'>
                    <label id='cabezalIngresoPorIngEq'>Ingreso por:</label>
                    <article className='opcionNormal'>
                        <input type='radio' name='tipoIngresoIngEqGrupo' value='garantia' id='radioGarantiaIngEq' />
                        <label htmlFor='garantia' className='etOpcIngEq' >Garantía</label>
                    </article>
                    <article className='opcionNormal'>
                        <input type='radio' name='tipoIngresoIngEqGrupo' value='servicioNormal' id='radioServNormalIngEq' />
                        <label htmlFor='servicioNormal' className='etOpcIngEq' >Servicio Normal</label>
                    </article>
                </section>
                <section id='secPantallaIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkPantalla} onChange={CheckPantallaEvento} />
                        <label>Pantalla</label>
                    </article>
                    {checkPantalla ? //está la pantalla checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='checkbox' />
                                <label className='etOpcIngEq' >Rayones</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' />
                                <label className='etOpcIngEq' >Hendiduras</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' />
                                <label className='etOpcIngEq' >Lineas</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' />
                                <label className='etOpcIngEq' >Manchas</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' />
                                <label className='etOpcIngEq' >Otro, ¿Cuál?</label>
                                <input type='text' />
                            </article>
                        </div>
                        : null
                    }

                </section>
                <section id='secPuertosIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkPuertos} onChange={CheckPuertosEvento} />
                        <label>Puertos</label>
                    </article>
                    {checkPuertos ? //está la pantalla checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='checkbox' />
                                <label className='etOpcIngEq' >RJ45</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' />
                                <label className='etOpcIngEq' >USB</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' />
                                <label className='etOpcIngEq' >Audio</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' />
                                <label className='etOpcIngEq' >Micrófono</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' />
                                <label className='etOpcIngEq' >CD</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' />
                                <label className='etOpcIngEq' >Otro, ¿Cuál?</label>
                                <input type='text' />
                            </article>
                        </div>
                        : null
                    }
                </section>
                <section id='secParlantesIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkParlantes} onChange={CheckParlantesEvento} />
                        <label>Parlantes</label>
                    </article>
                    {checkParlantes ? //está la pantalla checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='parlantesIngEqGrupo' />
                                <label className='etOpcIngEq' >Sonido Defectuoso</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='parlantesIngEqGrupo' />
                                <label className='etOpcIngEq' >Sonido Ausente</label>
                            </article>
                        </div>
                        : null
                    }
                </section>
                <section id='secBateriaIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkBateria} onChange={CheckBateriaEvento} />
                        <label>Bateria</label>
                    </article>
                    {checkBateria ? //está la pantalla checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='bateriaIngEqGrupo' />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='bateriaIngEqGrupo' />
                                <label className='etOpcIngEq' >No Funciona</label>
                            </article>
                        </div>
                        : null
                    }
                </section>
                <section id='secEnergiaIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkEnergia} onChange={CheckEnergiaEvento} />
                        <label>Energia</label>
                    </article>
                    {checkEnergia ? //está la pantalla checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='energiaIngEqGrupo' />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='energiaIngEqGrupo' />
                                <label className='etOpcIngEq' >No Funciona</label>
                            </article>
                        </div>
                        : null
                    }
                </section>
                <section id='secVentiladoresIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkVentiladores} onChange={CheckVentiladoresEvento} />
                        <label>Ventiladores</label>
                    </article>
                    {checkVentiladores ? //está la pantalla checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='VentiladoresIngEqGrupo' />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='VentiladoresIngEqGrupo' />
                                <label className='etOpcIngEq' >No Funciona</label>
                            </article>
                        </div>
                        : null
                    }
                </section>
                <section id='secBluetoothIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkBluetooth} onChange={CheckBluetoothEvento} />
                        <label>Bluetooth</label>
                    </article>
                    {checkBluetooth ? //está la pantalla checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='BluetoothIngEqGrupo' />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='BluetoothIngEqGrupo' />
                                <label className='etOpcIngEq' >No Funciona</label>
                            </article>
                        </div>
                        : null
                    }
                </section>
                <section id='secWifiIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkWifi} onChange={CheckWifiEvento} />
                        <label>Wifi</label>
                    </article>
                    {checkWifi ? //está la pantalla checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='WifiIngEqGrupo' />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='WifiIngEqGrupo' />
                                <label className='etOpcIngEq' >No Funciona</label>
                            </article>
                        </div>
                        : null
                    }
                </section>
                <section id='secTecladoIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkTeclado} onChange={CheckTecladoEvento} />
                        <label>Teclado</label>
                    </article>
                    {checkTeclado ? //está la pantalla checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='TecladoIngEqGrupo' />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='TecladoIngEqGrupo' />
                                <label className='etOpcIngEq' >No Funciona</label>
                            </article>
                        </div>
                        : null
                    }
                </section>
                <section id='secTouchpadIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkTouchpad} onChange={CheckTouchpadEvento} />
                        <label>Touchpad</label>
                    </article>
                    {checkTouchpad ? //está la pantalla checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='TouchpadIngEqGrupo' />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' />
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='TouchpadIngEqGrupo' />
                                <label className='etOpcIngEq' >No Funciona</label>
                            </article>
                        </div>
                        : null
                    }
                </section>
                <section id='secWindowsIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkWindows} onChange={CheckWindowsEvento} />
                        <label>Windows</label>
                    </article>
                    {checkWindows ? //está la pantalla checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='WindowsIngEqGrupo' />
                                <label className='etOpcIngEq' >Con Licencia</label>
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='WindowsIngEqGrupo' />
                                <label className='etOpcIngEq' >Sin Licencia</label>
                            </article>
                        </div>
                        : null
                    }
                </section>
                <section id='secOfficeIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkOffice} onChange={CheckOfficeEvento} />
                        <label>Office</label>
                    </article>
                    {checkOffice ? //está la pantalla checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='OfficeIngEqGrupo' />
                                <label className='etOpcIngEq' >Con Licencia</label>
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='OfficeIngEqGrupo' />
                                <label className='etOpcIngEq' >Sin Licencia</label>
                            </article>
                        </div>
                        : null
                    }
                </section>
                <div id='contBotonesIngEq'>
                    <BotonForm textoBoton="Continuar" classNameImportado="btnContinuar" onClickImportado={() => setAbrirModalPartes(true)} />
                    <BotonForm textoBoton="Cancelar" classNameImportado="btnCancelar" onClickImportado={onClose} />
                </div>
            </div>
            <PartesEquipoIngreso isOpen={abrirModalPartes} onClose={() => setAbrirModalPartes(false)} />
        </div>
    );
}
export default VentanaIngresoEquipo;