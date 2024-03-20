import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogIn from './componentes/Login';
import reportWebVitals from './reportWebVitals';
import Cabezal from './componentes/Cabezal';
import BotonGeneral from './componentes/BotonGeneral';
import Administracion from './componentes/Administracion';
import ServicioCliente from './componentes/ServicioCliente';
import Contabilidad from './componentes/Contabilidad';
import Reparacion from './componentes/Reparacion';
import Empleados from './componentes/Empleados';
import Usuarios from './componentes/Usuarios';
import Clientes from './componentes/Clientes';
import Equipos from './componentes/Equipos';
import DatosContables from './componentes/DatosContables';
import Inventario from './componentes/Inventario';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/Cabezal" element={<Cabezal/>} />
        <Route path="/BotonGeneral" element={<BotonGeneral/>} />
        <Route path="/Administracion" element={<Administracion/>} />
        <Route path="/ServicioCliente" element={<ServicioCliente/>} />
        <Route path="/Contabilidad" element={<Contabilidad/>} />
        <Route path="/Reparacion" element={<Reparacion/>} />
        <Route path="/Empleados" element={<Empleados/>} />
        <Route path="/Usuarios" element={<Usuarios/>} />
        <Route path="/Clientes" element={<Clientes/>} />
        <Route path="/Equipos" element={<Equipos/>} />
        <Route path="/DatosContables" element={<DatosContables/>} />
        <Route path="/Inventario" element={<Inventario/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
