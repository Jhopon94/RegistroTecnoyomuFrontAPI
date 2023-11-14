import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LogIn from './componentes/Login';
import reportWebVitals from './reportWebVitals';
import Cabezal from './componentes/Cabezal';
import BotonGeneral from './componentes/BotonGeneral';
import Administracion from './componentes/Administracion';
import ServicioCliente from './componentes/ServicioCliente';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" Component={LogIn} />
        <Route path="/Cabezal" Component={Cabezal} />
        <Route path="BotonGeneral" Component={BotonGeneral} />
        <Route path="/Administracion" Component={Administracion} />
        <Route path="/ServicioCLiente" Component={ServicioCliente} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
