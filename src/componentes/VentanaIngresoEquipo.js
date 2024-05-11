import './css/ventanaIngresoEquipo.css'
import BotonForm from './BotonForm';
import PartesEquipoIngreso from './PartesEquipoIngreso';
import { useEffect, useRef, useState } from 'react';
import ClaseEquipo from '../clases/equipo';

function VentanaIngresoEquipo({ isOpen, onClose, objetoCliente }) {

    const [abrirModalPartes, setAbrirModalPartes] = useState(false);
    const [equipo, setEquipo] = useState(new ClaseEquipo());

    /////////////// Daños Equipo hooks //////////////////
    const [daniosPantalla, setDaniosPantalla] = useState({
        "rayones": '',
        "hendiduras": '',
        "lineas": '',
        "manchas": '',
        "otro": ''
    });
    const [daniosPuertos, setDaniosPuertos] = useState({
        "rj45": '',
        "usb": '',
        "audio": '',
        "mic": '',
        "cd": '',
        "otro": ''
    });
    const [daniosParlantes, setDaniosParlantes] = useState("");
    const [daniosBateria, setDaniosBateria] = useState("");
    const [daniosEnergia, setDaniosEnergia] = useState("");
    const [daniosVentiladores, setDaniosVentiladores] = useState("");
    const [daniosBluetooth, setDaniosBluetooth] = useState("");
    const [daniosWifi, setDaniosWifi] = useState("");
    const [daniosTeclado, setDaniosTeclado] = useState("");
    const [daniosTouchpad, setDaniosTouchpad] = useState("");
    const [daniosWin, setDaniosWin] = useState("");
    const [daniosOffice, setDaniosOffice] = useState("");
    const [daniosOtros, setDaniosOtros] = useState("");
    ///////////////////////////////////////////////////////

    //Daños por defecto
    const daniosDefault = {
        "pantalla": ['Pantalla: No posee o imposible verificar estado.\n'],
        "puertos": ['Puertos: No posee o imposible verificar estado.\n'],
        "parlantes": 'Parlantes: No posee o imposible verificar estado.\n',
        "bateria": 'Batería: No posee o imposible verificar estado.\n',
        "energia": 'Daños: No posee de energía o imposible verificar estado.\n',
        "ventiladores": 'Ventiladores: No posee o imposible verificar estado.\n',
        "bluetooth": 'Bluetooth: No posee o imposible verificar estado.\n',
        "wifi": 'Wifi: No posee o imposible verificar estado.\n',
        "teclado": 'Teclado: No posee o imposible verificar estado.\n',
        "touchpad": 'Touchpad: No posee o imposible verificar estado.\n',
        "windows": 'Windows: No posee o imposible verificar estado.\n',
        "office": 'Office: No posee o imposible verificar estado.\n',
        "otros": 'Otros: No se encontraron otros daños.'
    };
    //Danios que se irán llenando para crear por fin el texto que irá en daniosEquipo
    const daniosAux = {
        "pantalla": [],
        "puertos": [],
        "parlantes": '',
        "bateria": '',
        "energia": '',
        "ventiladores": '',
        "bluetooth": '',
        "wifi": '',
        "teclado": '',
        "touchpad": '',
        "windows": '',
        "office": '',
        "otros": ''
    };
    //Texto para acomodar los danios
    const [textoDanios, setTextoDanios] = useState('');
    //Poner los daños recibidos por default en el objeto equipo
    equipo.daniosRecibido = textoDanios;
    //Se pode idCliente en el equipo
    equipo.idCliente = objetoCliente.id;

    //////////////////// INPUTS DISABLED///////////////////
    //////////////////////////////////////////////////////////

    //Inputs Pantalla
    const [inputsPantallaRayonesOff, setInputsPantallaRayonesOff] = useState(true);
    const [inputsPantallaHendidurasOff, setInputsPantallaHendidurasOff] = useState(true);
    const [inputsPantallaLineasOff, setInputsPantallaLineasOff] = useState(true);
    const [inputsPantallaManchasOff, setInputsPantallaManchasOff] = useState(true);
    const [inputsPantallaOtrosOff, setInputsPantallaOtrosOff] = useState(true);
    //Inputs Puertos
    const [inputsPuertosRJ45Off, setInputsPuertosRJ45Off] = useState(true);
    const [inputsPuertosUSBOff, setInputsPuertosUSBOff] = useState(true);
    const [inputsPuertosAudioOff, setInputsPuertosAudioOff] = useState(true);
    const [inputsPuertosMicOff, setInputsPuertosMicOff] = useState(true);
    const [inputsPuertosCDOff, setInputsPuertosCDOff] = useState(true);
    const [inputsPuertosOtrosOff, setInputsPuertosOtrosOff] = useState(true);
    //Inputs Parlantes
    const [inputsParlantesDefectuososOff, setInputsParlantesDefectuososOff] = useState(true);
    //Inputs Batería
    const [inputsBateriaDefectuosaOff, setInputsBateriaDefectuosaOff] = useState(true);
    //Inputs Energía
    const [inputsEnergiaDefectuosaOff, setInputsEnergiaDefectuosaOff] = useState(true);
    //Inputs Ventiladores
    const [inputsVentiladoresDefectuososOff, setInputsVentiladoresDefectuososOff] = useState(true);
    //Inputs Bluetooth
    const [inputsBluetoothDefectuosoOff, setInputsBluetoothDefectuosoOff] = useState(true);
    //Inputs Wifi
    const [inputsWifiDefectuosoOff, setInputsWifiDefectuosoOff] = useState(true);
    //Inputs Teclado
    const [inputsTecladoDefectuosoOff, setInputsTecladoDefectuosoOff] = useState(true);
    //Inputs Touchpad
    const [inputsTouchpadDefectuosoOff, setInputsTouchpadDefectuosoOff] = useState(true);
    //Inputs Otros
    const [inputsOtrosOff, setInputsOtrosOff] = useState(true);

    ///////////////// Listas con los Setters input disabled Pantalla y Puertos /////////////////////

    const listaSettersInputsPantalla = [
        setInputsPantallaRayonesOff,
        setInputsPantallaHendidurasOff,
        setInputsPantallaLineasOff,
        setInputsPantallaManchasOff,
        setInputsPantallaOtrosOff
    ];
    const listaSettersInputsPuertos = [
        setInputsPuertosRJ45Off,
        setInputsPuertosUSBOff,
        setInputsPuertosAudioOff,
        setInputsPuertosMicOff,
        setInputsPuertosCDOff,
        setInputsPuertosOtrosOff
    ];
    //Nota: Si los otros cabezales tendrán mas de un input, entonces manejar listas también
    //////////////////////////////////////////////////////////

    //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////


    ////////////// CHECKS PRINCIPALES /////////////////////////
    ///////////////////////////////////////////////////////////

    //Manejar check de pantalla
    const [checkPantalla, setCheckPantalla] = useState(false);
    const CheckPantallaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckPantalla(bandera);
        //Desactivar los inputs y ckecks(hooks) false en caso de desmarcar la casilla Pantalla
        if (!bandera) {
            listaSettersInputsPantalla.forEach(funcion => {
                funcion(true);
            });
            listaSettersChecksPantalla.forEach(setCheck => {
                setCheck(false);
            });
            // Reestablesco el texto de los inputs
            const auxDaniosObj = {};
            for (let danio in daniosPantalla) {
                auxDaniosObj[danio] = "";
            }
            setDaniosPantalla(auxDaniosObj);
        }
        console.log(daniosPantalla);
    }

    //////////////////// Checks Pantalla /////////////////
    const [checkRayones, setCheckRayones] = useState(false);
    const CheckRayonesEvento = (event) => {
        let bandera = event.target.checked;
        console.log("rayones es: " + bandera);
        setCheckRayones(bandera);
        setInputsPantallaRayonesOff(!bandera);
        //SI desmarco
        if (!bandera) {
            daniosPantalla.rayones = '';
        }
    }
    const [checkHendiduras, setCheckHendiduras] = useState(false);
    const CheckHendidurasEvento = (event) => {
        let bandera = event.target.checked;
        setCheckHendiduras(bandera);
        setInputsPantallaHendidurasOff(!bandera);
        if (!bandera) {
            daniosPantalla.hendiduras = '';
        }
    }
    const [checkLineas, setCheckLineas] = useState(false);
    const CheckLineasEvento = (event) => {
        let bandera = event.target.checked;
        setCheckLineas(bandera);
        setInputsPantallaLineasOff(!bandera);
        if (!bandera) {
            daniosPantalla.lineas = '';
        }
    }
    const [checkManchas, setCheckManchas] = useState(false);
    const CheckManchasEvento = (event) => {
        let bandera = event.target.checked;
        setCheckManchas(bandera);
        setInputsPantallaManchasOff(!bandera);
        if (!bandera) {
            daniosPantalla.manchas = '';
        }
    }
    const [checkOtrosPantalla, setCheckOtrosPantalla] = useState(false);
    const CheckOtrosPantallaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckOtrosPantalla(bandera);
        setInputsPantallaOtrosOff(!bandera);
        if (!bandera) {
            daniosPantalla.otro = '';
        }
    }
    //////////////////////////////////////////////////////

    //Manejar check de puertos
    const [checkPuertos, setCheckPuertos] = useState(false);
    const CheckPuertosEvento = (event) => {
        let bandera = event.target.checked;
        setCheckPuertos(bandera);
        if (!bandera) {
            listaSettersInputsPuertos.forEach(funcion => {
                funcion(true);
            });
            listaSettersChecksPuertos.forEach(setCheck => {
                setCheck(false);
            });
            // Reestablesco el texto de los inputs
            const auxDaniosObj = {};
            for (let danio in daniosPuertos) {
                auxDaniosObj[danio] = "";
            }
            setDaniosPuertos(auxDaniosObj);
        }
        console.log(daniosPuertos);
    }

    //////////////////// Checks Puertos /////////////////////////
    const [checkRJ45, setCheckRJ45] = useState(false);
    const CheckRJ45Evento = (event) => {
        let bandera = event.target.checked;
        setCheckRJ45(bandera);
        setInputsPuertosRJ45Off(!bandera);
        if (!bandera) {
            daniosPuertos.rj45 = '';
        }
    }
    const [checkUSB, setCheckUSB] = useState(false);
    const CheckUSBEvento = (event) => {
        let bandera = event.target.checked;
        setCheckUSB(bandera);
        setInputsPuertosUSBOff(!bandera)
        if (!bandera) {
            daniosPuertos.usb = '';
        }
    }
    const [checkAudio, setCheckAudio] = useState(false);
    const CheckAudioEvento = (event) => {
        let bandera = event.target.checked;
        setCheckAudio(bandera);
        setInputsPuertosAudioOff(!bandera)
        if (!bandera) {
            daniosPuertos.audio = '';
        }
    }
    const [checkMic, setCheckMic] = useState(false);
    const CheckMicEvento = (event) => {
        let bandera = event.target.checked;
        setCheckMic(bandera);
        setInputsPuertosMicOff(!bandera)
        if (!bandera) {
            daniosPuertos.mic = '';
        }
    }
    const [checkCD, setCheckCD] = useState(false);
    const CheckCDEvento = (event) => {
        let bandera = event.target.checked;
        setCheckCD(bandera);
        setInputsPuertosCDOff(!bandera)
        if (!bandera) {
            daniosPuertos.cd = '';
        }
    }
    const [checkOtrosPuertos, setCheckOtrosPuertos] = useState(false);
    const CheckOtrosPuertosEvento = (event) => {
        let bandera = event.target.checked;
        setCheckOtrosPuertos(bandera);
        setInputsPuertosOtrosOff(!bandera)
        if (!bandera) {
            daniosPuertos.otro = '';
        }
    }
    /////////////////////////////////////////////////////////////

    //Manejar check de parlantes
    const [checkParlantes, setCheckParlantes] = useState(false);
    const CheckParlantesEvento = (event) => {
        let bandera = event.target.checked;
        setCheckParlantes(bandera);
        if (!bandera) {
            setInputsParlantesDefectuososOff(true);
            listaSettersChecksParlantes.forEach(setCheck => {
                setCheck(false);
            });
            setDaniosParlantes("");
        }
    }

    ////////////////////// Checks Parlantes /////////////////////
    const [checkSonidoDefectuoso, setCheckSonidoDefectuoso] = useState(false);
    const CheckSonidoDefectuosoEvento = (event) => {
        let bandera = event.target.checked;
        setCheckSonidoDefectuoso(bandera);
        //se asigna el valor contrario al otro radio, ya que onChange no funciona como esperaba
        setCheckSonidoAusente(!bandera);
        setInputsParlantesDefectuososOff(!bandera);
        setDaniosParlantes("");
    }
    const [checkSonidoAusente, setCheckSonidoAusente] = useState(false);
    const CheckSonidoAusenteEvento = (event) => {
        let bandera = event.target.checked;
        setCheckSonidoAusente(bandera);
        setCheckSonidoDefectuoso(!bandera);
        setInputsParlantesDefectuososOff(bandera);
        setDaniosParlantes("Sonido totalmente ausente");
    }
    /////////////////////////////////////////////////////////////

    //Manejar check de batería
    const [checkBateria, setCheckBateria] = useState(false);
    const CheckBateriaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckBateria(bandera);
        if (!bandera) {
            setInputsBateriaDefectuosaOff(true);
            listaSettersChecksBateria.forEach(setCheck => {
                setCheck(false);
            });
            setDaniosBateria("");
        }
    }

    ////////////////////// Checks Batería /////////////////////
    const [checkBateriaDefectuosa, setCheckBateriaDefectuosa] = useState(false);
    const CheckBateriaDefectuosaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckBateriaDefectuosa(bandera);
        //se asigna el valor contrario al otro radio, ya que onChange no funciona como esperaba
        setCheckBateriaNoFunciona(!bandera);
        setInputsBateriaDefectuosaOff(!bandera);
        setDaniosBateria("");
    }
    const [checkBateriaNoFunciona, setCheckBateriaNoFunciona] = useState(false);
    const CheckBateriaNoFuncionaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckBateriaNoFunciona(bandera);
        setCheckBateriaDefectuosa(!bandera);
        setInputsBateriaDefectuosaOff(bandera);
        setDaniosBateria("Batería no funciona");
    }
    /////////////////////////////////////////////////////////////

    //Manejar check de energía
    const [checkEnergia, setCheckEnergia] = useState(false);
    const CheckEnergiaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckEnergia(bandera);
        if (!bandera) {
            setInputsEnergiaDefectuosaOff(true);
            listaSettersChecksEnergia.forEach(setCheck => {
                setCheck(false);
            });
            setDaniosEnergia("");
        }
    }

    ////////////////////// Checks Energía /////////////////////
    const [checkEnergiaDefectuosa, setCheckEnergiaDefectuosa] = useState(false);
    const CheckEnergiaDefectuosaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckEnergiaDefectuosa(bandera);
        //se asigna el valor contrario al otro radio, ya que onChange no funciona como esperaba
        setCheckEnergiaNoFunciona(!bandera);
        setInputsEnergiaDefectuosaOff(!bandera);
        setDaniosEnergia("");
    }
    const [checkEnergiaNoFunciona, setCheckEnergiaNoFunciona] = useState(false);
    const CheckEnergiaNoFuncionaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckEnergiaNoFunciona(bandera);
        setCheckEnergiaDefectuosa(!bandera);
        setInputsEnergiaDefectuosaOff(bandera);
        setDaniosEnergia("El dispositivo no enciende!");
    }
    /////////////////////////////////////////////////////////////

    //Manejar check de ventiladores
    const [checkVentiladores, setCheckVentiladores] = useState(false);
    const CheckVentiladoresEvento = (event) => {
        let bandera = event.target.checked;
        setCheckVentiladores(bandera);
        if (!bandera) {
            setInputsVentiladoresDefectuososOff(true);
            listaSettersChecksVentiladores.forEach(setCheck => {
                setCheck(false);
            });
            setDaniosVentiladores("");
        }
    }

    ////////////////////// Checks Ventiladores /////////////////////
    const [checkVentiladoresDefectuosa, setCheckVentiladoresDefectuosa] = useState(false);
    const CheckVentiladoresDefectuosaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckVentiladoresDefectuosa(bandera);
        //se asigna el valor contrario al otro radio, ya que onChange no funciona como esperaba
        setCheckVentiladoresNoFunciona(!bandera);
        setInputsVentiladoresDefectuososOff(!bandera);
        setDaniosVentiladores('');
    }
    const [checkVentiladoresNoFunciona, setCheckVentiladoresNoFunciona] = useState(false);
    const CheckVentiladoresNoFuncionaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckVentiladoresNoFunciona(bandera);
        setCheckVentiladoresDefectuosa(!bandera);
        setInputsVentiladoresDefectuososOff(bandera);
        setDaniosVentiladores('Los ventiladores no funcionan');
    }
    /////////////////////////////////////////////////////////////

    //Manejar check de Bluetooth
    const [checkBluetooth, setCheckBluetooth] = useState(false);
    const CheckBluetoothEvento = (event) => {
        let bandera = event.target.checked;
        setCheckBluetooth(bandera);
        if (!bandera) {
            setInputsBluetoothDefectuosoOff(true);
            listaSettersChecksBluetooth.forEach(setCheck => {
                setCheck(false);
            });
            setDaniosBluetooth("");
        }
    }

    ////////////////////// Checks Bluetooth /////////////////////
    const [checkBluetoothDefectuosa, setCheckBluetoothDefectuosa] = useState(false);
    const CheckBluetoothDefectuosaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckBluetoothDefectuosa(bandera);
        //se asigna el valor contrario al otro radio, ya que onChange no funciona como esperaba
        setCheckBluetoothNoFunciona(!bandera);
        setInputsBluetoothDefectuosoOff(!bandera);
        setDaniosBluetooth('');
    }
    const [checkBluetoothNoFunciona, setCheckBluetoothNoFunciona] = useState(false);
    const CheckBluetoothNoFuncionaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckBluetoothNoFunciona(bandera);
        setCheckBluetoothDefectuosa(!bandera);
        setInputsBluetoothDefectuosoOff(bandera);
        setDaniosBluetooth('El bluetooth no funciona');
    }
    /////////////////////////////////////////////////////////////

    //Manejar check de Wifi
    const [checkWifi, setCheckWifi] = useState(false);
    const CheckWifiEvento = (event) => {
        let bandera = event.target.checked;
        setCheckWifi(bandera);
        if (!bandera) {
            setInputsWifiDefectuosoOff(true);
            listaSettersChecksWifi.forEach(setCheck => {
                setCheck(false);
            });
            setDaniosWifi("");
        }
    }

    ////////////////////// Checks Wifi /////////////////////
    const [checkWifiDefectuosa, setCheckWifiDefectuosa] = useState(false);
    const CheckWifiDefectuosaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckWifiDefectuosa(bandera);
        //se asigna el valor contrario al otro radio, ya que onChange no funciona como esperaba
        setCheckWifiNoFunciona(!bandera);
        setInputsWifiDefectuosoOff(!bandera);
        setDaniosWifi('');
    }
    const [checkWifiNoFunciona, setCheckWifiNoFunciona] = useState(false);
    const CheckWifiNoFuncionaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckWifiNoFunciona(bandera);
        setCheckWifiDefectuosa(!bandera);
        setInputsWifiDefectuosoOff(bandera);
        setDaniosWifi('El wifi no funciona');
    }
    /////////////////////////////////////////////////////////////

    //Manejar check de Teclado
    const [checkTeclado, setCheckTeclado] = useState(false);
    const CheckTecladoEvento = (event) => {
        let bandera = event.target.checked;
        setCheckTeclado(bandera);
        if (!bandera) {
            setInputsTecladoDefectuosoOff(true);
            listaSettersChecksTeclado.forEach(setCheck => {
                setCheck(false);
            });
            setDaniosTeclado("");
        }
    }

    ////////////////////// Checks Teclado /////////////////////
    const [checkTecladoDefectuosa, setCheckTecladoDefectuosa] = useState(false);
    const CheckTecladoDefectuosaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckTecladoDefectuosa(bandera);
        //se asigna el valor contrario al otro radio, ya que onChange no funciona como esperaba
        setCheckTecladoNoFunciona(!bandera);
        setInputsTecladoDefectuosoOff(!bandera);
        setDaniosTeclado('');
    }
    const [checkTecladoNoFunciona, setCheckTecladoNoFunciona] = useState(false);
    const CheckTecladoNoFuncionaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckTecladoNoFunciona(bandera);
        setCheckTecladoDefectuosa(!bandera);
        setInputsTecladoDefectuosoOff(bandera);
        setDaniosTeclado('El teclado no funciona');
    }
    /////////////////////////////////////////////////////////////

    //Manejar check de Touchpad
    const [checkTouchpad, setCheckTouchpad] = useState(false);
    const CheckTouchpadEvento = (event) => {
        let bandera = event.target.checked;
        setCheckTouchpad(bandera);
        if (!bandera) {
            setInputsTouchpadDefectuosoOff(true);
            listaSettersChecksTouchpad.forEach(setCheck => {
                setCheck(false);
            });
            setDaniosTouchpad("");
        }
    }

    ////////////////////// Checks Touchpad /////////////////////
    const [checkTouchpadDefectuosa, setCheckTouchpadDefectuosa] = useState(false);
    const CheckTouchpadDefectuosaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckTouchpadDefectuosa(bandera);
        //se asigna el valor contrario al otro radio, ya que onChange no funciona como esperaba
        setCheckTouchpadNoFunciona(!bandera);
        setInputsTouchpadDefectuosoOff(!bandera);
        setDaniosTouchpad('');
    }
    const [checkTouchpadNoFunciona, setCheckTouchpadNoFunciona] = useState(false);
    const CheckTouchpadNoFuncionaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckTouchpadNoFunciona(bandera);
        setCheckTouchpadDefectuosa(!bandera);
        setInputsTouchpadDefectuosoOff(bandera);
        setDaniosTouchpad('El touchpad no funciona');
    }
    /////////////////////////////////////////////////////////////

    //Manejar check de Windows
    const [checkWindows, setCheckWindows] = useState(false);
    const CheckWindowsEvento = (event) => {
        let bandera = event.target.checked;
        setCheckWindows(bandera);
        if (!bandera) {
            listaSettersChecksWin.forEach(setCheck => {
                setCheck(false);
            });
        }
    }

    ////////////////////// Checks Windows /////////////////////
    const [checkWinConLicencia, setCheckWinConLicencia] = useState(false);
    const CheckWinConLicenciaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckWinConLicencia(bandera);
        //se asigna el valor contrario al otro radio, ya que onChange no funciona como esperaba
        setCheckWinSinLicencia(!bandera);
        setDaniosWin("Windows activado");
    }
    const [checkWinSinLicencia, setCheckWinSinLicencia] = useState(false);
    const CheckWinSinLicenciaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckWinSinLicencia(bandera);
        setCheckWinConLicencia(!bandera);
        setDaniosWin("Windows desactivado o sin licencia");
    }
    /////////////////////////////////////////////////////////////

    //Manejar check de Office
    const [checkOffice, setCheckOffice] = useState(false);
    const CheckOfficeEvento = (event) => {
        let bandera = event.target.checked;
        setCheckOffice(bandera);
        if (!bandera) {
            listaSettersChecksOffice.forEach(setCheck => {
                setCheck(false);
            });
        }
    }

    ////////////////////// Checks Office /////////////////////
    const [checkOfficeConLicencia, setCheckOfficeConLicencia] = useState(false);
    const CheckOfficeConLicenciaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckOfficeConLicencia(bandera);
        //se asigna el valor contrario al otro radio, ya que onChange no funciona como esperaba
        setCheckOfficeSinLicencia(!bandera);
        setDaniosOffice("Office activado");
    }
    const [checkOfficeSinLicencia, setCheckOfficeSinLicencia] = useState(false);
    const CheckOfficeSinLicenciaEvento = (event) => {
        let bandera = event.target.checked;
        setCheckOfficeSinLicencia(bandera);
        setCheckOfficeConLicencia(!bandera);
        setDaniosOffice("Office desactivado o sin licencia");
    }

    //Manejar check de Otros Daños
    const [checkOtros, setCheckOtros] = useState(false);
    const CheckOtrosEvento = (event) => {
        let bandera = event.target.checked;
        setCheckOtros(bandera);
        setInputsOtrosOff(bandera);
        if (!bandera) {
            setDaniosOtros("");
        }
        console.log(daniosOtros);
    }

    // Listas de Checkes por grupo
    const listaSettersChecksPantalla = [
        setCheckRayones,
        setCheckHendiduras,
        setCheckLineas,
        setCheckManchas,
        setCheckOtrosPantalla
    ];
    const listaSettersChecksPuertos = [
        setCheckRJ45,
        setCheckUSB,
        setCheckAudio,
        setCheckMic,
        setCheckCD,
        setCheckOtrosPuertos
    ];
    const listaSettersChecksParlantes = [
        setCheckSonidoDefectuoso,
        setCheckSonidoAusente
    ];
    const listaSettersChecksBateria = [
        setCheckBateriaDefectuosa,
        setCheckBateriaNoFunciona
    ];
    const listaSettersChecksEnergia = [
        setCheckEnergiaDefectuosa,
        setCheckEnergiaNoFunciona
    ];
    const listaSettersChecksVentiladores = [
        setCheckVentiladoresDefectuosa,
        setCheckVentiladoresNoFunciona
    ];
    const listaSettersChecksBluetooth = [
        setCheckBluetoothDefectuosa,
        setCheckBluetoothNoFunciona
    ];
    const listaSettersChecksWifi = [
        setCheckWifiDefectuosa,
        setCheckWifiNoFunciona
    ];
    const listaSettersChecksTeclado = [
        setCheckTecladoDefectuosa,
        setCheckTecladoNoFunciona
    ];
    const listaSettersChecksTouchpad = [
        setCheckTouchpadDefectuosa,
        setCheckTouchpadNoFunciona
    ];
    const listaSettersChecksWin = [
        setCheckWinConLicencia,
        setCheckWinSinLicencia
    ];
    const listaSettersChecksOffice = [
        setCheckOfficeConLicencia,
        setCheckOfficeSinLicencia
    ];
    /////////////////////////////////////////////////////////////

    /////////////// VALIDACIONES Y ENVIAR DATOS A LA SIGUIENTE VISTA ///////////////////
    const SiguienteVista = () => {

        if (checkPantalla) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            let auxCadena = daniosPantalla.rayones + daniosPantalla.hendiduras + daniosPantalla.lineas +
                daniosPantalla.manchas + daniosPantalla.otro;
            if (auxCadena === '') {
                daniosAux.pantalla.push('No se detectaron daños en la Pantalla.');
            } else {
                for (let llave in daniosPantalla) {
                    daniosAux.pantalla.push(llave  + ": " + daniosPantalla[llave] + '\n');
                }
            }
        } else {
            daniosAux.pantalla = daniosDefault.pantalla;
        }if (checkPuertos) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            let auxCadena = daniosPuertos.rj45 + daniosPuertos.usb + daniosPuertos.audio +
                daniosPuertos.mic + daniosPuertos.cd + daniosPuertos.otro;
            if (auxCadena === '') {
                daniosAux.puertos.push('No se detectaron daños en los puertos.');
            } else {
                for (let llave in daniosPuertos) {
                    daniosAux.puertos.push(llave  + ": " + daniosPuertos[llave] + '\n');
                }
            }
        } else {
            daniosAux.puertos = daniosDefault.puertos;
        }if (checkParlantes) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            if (daniosParlantes === '') {
                daniosAux.parlantes =  'No se detectaron daños en los parlantes.';
            } else {
                daniosAux.parlantes = daniosParlantes;
            }
        } else {
            daniosAux.parlantes = daniosDefault.parlantes;
        }if (checkBateria) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            if (daniosBateria === '') {
                daniosAux.bateria =  'No se detectaron daños en la bateria.';
            } else {
                daniosAux.bateria = daniosBateria;
            }
        } else {
            daniosAux.bateria = daniosDefault.bateria;
        }if (checkEnergia) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            if (daniosEnergia === '') {
                daniosAux.energia =  'No se detectaron daños de energía.';
            } else {
                daniosAux.energia = daniosEnergia;
            }
        } else {
            daniosAux.energia = daniosDefault.energia;
        }if (checkVentiladores) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            if (daniosVentiladores === '') {
                daniosAux.ventiladores =  'No se detectaron daños en los ventiladores .';
            } else {
                daniosAux.ventiladores = daniosVentiladores;
            }
        } else {
            daniosAux.ventiladores = daniosDefault.ventiladores;
        }if (checkBluetooth) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            if (daniosBluetooth === '') {
                daniosAux.bluetooth =  'No se detectaron daños en el bluetooth.';
            } else {
                daniosAux.bluetooth = daniosBluetooth;
            }
        } else {
            daniosAux.bluetooth = daniosDefault.bluetooth;
        }if (checkWifi) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            if (daniosWifi === '') {
                daniosAux.wifi =  'No se detectaron daños en el wifi.';
            } else {
                daniosAux.wifi = daniosWifi;
            }
        } else {
            daniosAux.wifi = daniosDefault.wifi;
        }if (checkTeclado) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            if (daniosTeclado === '') {
                daniosAux.teclado =  'No se detectaron daños en el teclado .';
            } else {
                daniosAux.teclado = daniosTeclado;
            }
        } else {
            daniosAux.teclado = daniosDefault.teclado;
        }if (checkTouchpad) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            if (daniosTouchpad === '') {
                daniosAux.touchpad =  'No se detectaron daños en el touchpad .';
            } else {
                daniosAux.touchpad = daniosTouchpad;
            }
        } else {
            daniosAux.touchpad = daniosDefault.touchpad;
        }if (checkOtros) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            if (daniosOtros === '') {
                daniosAux.otros =  'No se detectaron otros daños .';
            } else {
                daniosAux.otros = daniosOtros;
            }
        } else {
            daniosAux.otros = daniosDefault.otros;
        }if (checkWindows) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            if (daniosWin === '') {
                daniosAux.windows =  'Imposible identificar licencia de Windows';
            } else {
                daniosAux.windows = daniosWin;
            }
        } else {
            daniosAux.windows = daniosDefault.windows;
        }if (checkOffice) {
            //Verificar que todos los campos estén vacíos para poner el mensaje por default
            if (daniosOffice === '') {
                daniosAux.office =  'Imposible identificar licencia de office';
            } else {
                daniosAux.office = daniosOffice;
            }
        } else {
            daniosAux.office = daniosDefault.office;
        }
        console.log(daniosAux);
    }

    const ManejarCancelar = () => {
        onClose();
    }

    //cambiar div por form al hacer la app completa!!!

    if (!isOpen) return null;
    return (
        <div id="fondoIngresoEquipo">
            <label id='etNombreCliIngEq' className='tituloNombreModales'>{objetoCliente.nombre}</label>
            <div className='modal' id='formVentanaIngEq'>
                <section id='secIngresoPorIngEq'>
                    <label id='cabezalIngresoPorIngEq'>Ingreso por:</label>
                    <article className='opcionNormal'>
                        <input type='radio' name='tipoIngresoIngEqGrupo' value='garantia'
                            id='radioGarantiaIngEq' onChange={e => equipo.tipoIngreso = e.target.value} />
                        <label htmlFor='garantia' className='etOpcIngEq' >Garantía</label>
                    </article>
                    <article className='opcionNormal'>
                        <input type='radio' name='tipoIngresoIngEqGrupo' value='servicioNormal'
                            id='radioServNormalIngEq' onChange={e => equipo.tipoIngreso = e.target.value}
                            defaultChecked />
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
                                <input type='checkbox' onChange={CheckRayonesEvento} />
                                <label className='etOpcIngEq' >Rayones</label>
                                <input type='text' disabled={inputsPantallaRayonesOff}
                                    onChange={e => setDaniosPantalla(daniosPantalla => ({
                                        ...daniosPantalla,
                                        rayones: e.target.value
                                    }))}
                                    value={daniosPantalla.rayones} />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' onChange={CheckHendidurasEvento} />
                                <label className='etOpcIngEq' >Hendiduras</label>
                                <input type='text' disabled={inputsPantallaHendidurasOff}
                                    onChange={e => setDaniosPantalla(daniosPantalla => ({
                                        ...daniosPantalla,
                                        hendiduras: e.target.value
                                    }))}
                                    value={daniosPantalla.hendiduras} />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' onChange={CheckLineasEvento} />
                                <label className='etOpcIngEq' >Lineas</label>
                                <input type='text' disabled={inputsPantallaLineasOff}
                                    onChange={e => setDaniosPantalla(daniosPantalla => ({
                                        ...daniosPantalla,
                                        lineas: e.target.value
                                    }))}
                                    value={daniosPantalla.lineas} />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' onChange={CheckManchasEvento} />
                                <label className='etOpcIngEq' >Manchas</label>
                                <input type='text' disabled={inputsPantallaManchasOff}
                                    onChange={e => setDaniosPantalla(daniosPantalla => ({
                                        ...daniosPantalla,
                                        manchas: e.target.value
                                    }))}
                                    value={daniosPantalla.manchas} />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' onChange={CheckOtrosPantallaEvento} />
                                <label className='etOpcIngEq' >Otro, ¿Cuál?</label>
                                <input type='text' disabled={inputsPantallaOtrosOff}
                                    onChange={e => setDaniosPantalla(daniosPantalla => ({
                                        ...daniosPantalla,
                                        otro: e.target.value
                                    }))}
                                    value={daniosPantalla.otro} />
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
                    {checkPuertos ? //Puertos checkeado?
                        <div>
                            <article className='opcionNormal'>
                                <input type='checkbox' onChange={CheckRJ45Evento} />
                                <label className='etOpcIngEq' >RJ45</label>
                                <input type='text' disabled={inputsPuertosRJ45Off}
                                    onChange={e => setDaniosPuertos(daniosPuertos => ({
                                        ...daniosPuertos,
                                        rj45: e.target.value
                                    }))}
                                    value={daniosPuertos.rj45} />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' onChange={CheckUSBEvento} />
                                <label className='etOpcIngEq' >USB</label>
                                <input type='text' disabled={inputsPuertosUSBOff}
                                    onChange={e => setDaniosPuertos(daniosPuertos => ({
                                        ...daniosPuertos,
                                        usb: e.target.value
                                    }))}
                                    value={daniosPuertos.usb}  />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' onChange={CheckAudioEvento} />
                                <label className='etOpcIngEq' >Audio</label>
                                <input type='text' disabled={inputsPuertosAudioOff}
                                    onChange={e => setDaniosPuertos(daniosPuertos => ({
                                        ...daniosPuertos,
                                        audio: e.target.value
                                    }))}
                                    value={daniosPuertos.audio}  />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' onChange={CheckMicEvento} />
                                <label className='etOpcIngEq' >Micrófono</label>
                                <input type='text' disabled={inputsPuertosMicOff}
                                    onChange={e => setDaniosPuertos(daniosPuertos => ({
                                        ...daniosPuertos,
                                        mic: e.target.value
                                    }))}
                                    value={daniosPuertos.mic} />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' onChange={CheckCDEvento} />
                                <label className='etOpcIngEq' >CD</label>
                                <input type='text' disabled={inputsPuertosCDOff}
                                    onChange={e => setDaniosPuertos(daniosPuertos => ({
                                        ...daniosPuertos,
                                        cd: e.target.value
                                    }))}
                                    value={daniosPuertos.cd}  />
                            </article>
                            <article className='opcionNormal'>
                                <input type='checkbox' onChange={CheckOtrosPuertosEvento} />
                                <label className='etOpcIngEq' >Otro, ¿Cuál?</label>
                                <input type='text' disabled={inputsPuertosOtrosOff}
                                    onChange={e => setDaniosPuertos(daniosPuertos => ({
                                        ...daniosPuertos,
                                        otro: e.target.value
                                    }))}
                                    value={daniosPuertos.otro} />
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
                    {checkParlantes ? //parlantes checkeado?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='parlantesIngEqGrupo' onChange={CheckSonidoDefectuosoEvento} />
                                <label className='etOpcIngEq' >Sonido Defectuoso</label>
                                <input type='text' disabled={inputsParlantesDefectuososOff}
                                    onChange={e => setDaniosParlantes(e.target.value)} 
                                    value={daniosParlantes}/>
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='parlantesIngEqGrupo' onChange={CheckSonidoAusenteEvento} />
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
                    {checkBateria ? //batería checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='bateriaIngEqGrupo' onChange={CheckBateriaDefectuosaEvento} />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' disabled={inputsBateriaDefectuosaOff}
                                    onChange={e => setDaniosBateria(e.target.value)} 
                                    value={daniosBateria}/>
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='bateriaIngEqGrupo' onChange={CheckBateriaNoFuncionaEvento} />
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
                    {checkEnergia ? //Energia checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='energiaIngEqGrupo' onChange={CheckEnergiaDefectuosaEvento} />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' disabled={inputsEnergiaDefectuosaOff}
                                    onChange={e => setDaniosEnergia(e.target.value)}
                                    value={daniosEnergia} />
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='energiaIngEqGrupo' onChange={CheckEnergiaNoFuncionaEvento} />
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
                    {checkVentiladores ? //ventiladores checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='VentiladoresIngEqGrupo' onChange={CheckVentiladoresDefectuosaEvento} />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' disabled={inputsVentiladoresDefectuososOff}
                                    onChange={e => setDaniosVentiladores(e.target.value)} 
                                    value={daniosVentiladores}/>
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='VentiladoresIngEqGrupo' onChange={CheckVentiladoresNoFuncionaEvento} />
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
                    {checkBluetooth ? //bluetooth checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='BluetoothIngEqGrupo' onChange={CheckBluetoothDefectuosaEvento} />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' disabled={inputsBluetoothDefectuosoOff}
                                    onChange={e => setDaniosBluetooth(e.target.value)}
                                    value={daniosBluetooth} />
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='BluetoothIngEqGrupo' onChange={CheckBluetoothNoFuncionaEvento} />
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
                    {checkWifi ? //Wifi checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='WifiIngEqGrupo' onChange={CheckWifiDefectuosaEvento} />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' disabled={inputsWifiDefectuosoOff}
                                    onChange={e => setDaniosWifi(e.target.value)} 
                                    value={daniosWifi}/>
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='WifiIngEqGrupo' onChange={CheckWifiNoFuncionaEvento} />
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
                    {checkTeclado ? //teclado checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='TecladoIngEqGrupo' onChange={CheckTecladoDefectuosaEvento} />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' disabled={inputsTecladoDefectuosoOff}
                                    onChange={e => setDaniosTeclado(e.target.value)} 
                                    value={daniosTeclado}/>
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='TecladoIngEqGrupo' onChange={CheckTecladoNoFuncionaEvento} />
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
                    {checkTouchpad ? //touchpad checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='TouchpadIngEqGrupo' onChange={CheckTouchpadDefectuosaEvento} />
                                <label className='etOpcIngEq' >Mal Funcionamiento</label>
                                <input type='text' disabled={inputsTouchpadDefectuosoOff}
                                    onChange={e => setDaniosTouchpad(e.target.value)} 
                                    value={daniosTouchpad}/>
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='TouchpadIngEqGrupo' onChange={CheckTouchpadNoFuncionaEvento} />
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
                    {checkWindows ? //windows checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='WindowsIngEqGrupo' onChange={CheckWinConLicenciaEvento} />
                                <label className='etOpcIngEq' >Con Licencia</label>
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='WindowsIngEqGrupo' onChange={CheckWinSinLicenciaEvento} />
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
                    {checkOffice ? //Office checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <input type='radio' name='OfficeIngEqGrupo' onChange={CheckOfficeSinLicenciaEvento} />
                                <label className='etOpcIngEq' >Con Licencia</label>
                            </article>
                            <article className='opcionNormal'>
                                <input type='radio' name='OfficeIngEqGrupo' onChange={CheckOfficeSinLicenciaEvento} />
                                <label className='etOpcIngEq' >Sin Licencia</label>
                            </article>
                        </div>
                        : null
                    }
                </section>
                <section id='secOtrosIngEq' className='seccionesIngEq'>
                    <article className='cabezalOpciones'>
                        <input type='checkbox' checked={checkOtros} onChange={CheckOtrosEvento} />
                        <label>Otros:</label>
                    </article>
                    {checkOtros ? //Otros checkeada?
                        <div>
                            <article className='opcionNormal'>
                                <textarea placeholder='Escribe otros daños encontrados...'
                                    disabled={!inputsOtrosOff}
                                    onChange={e => setDaniosOtros(e.target.value)}
                                    value={daniosOtros}>
                                </textarea>
                            </article>
                        </div>
                        : null
                    }
                </section>
                <div id='contBotonesIngEq'>
                    <BotonForm textoBoton="Continuar" classNameImportado="btnContinuar"
                        onClickImportado={SiguienteVista} />
                    <BotonForm textoBoton="Cancelar" classNameImportado="btnCancelar"
                        onClickImportado={ManejarCancelar} />
                </div>
            </div>
            <PartesEquipoIngreso isOpen={abrirModalPartes} onClose={() => setAbrirModalPartes(false)} />
        </div>
    );
}
export default VentanaIngresoEquipo;