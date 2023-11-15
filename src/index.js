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
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
