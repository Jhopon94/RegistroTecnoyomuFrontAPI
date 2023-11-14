import yeye from './componentes/img/yeye.png';
import yeye2 from './componentes/img/yeye2.png'
import './App.css';
import { useState } from 'react';



function App() {

  const [imagen, setImagen] = useState(yeye);

  const CambioImagen = () => {
    if (imagen == yeye) {
      setImagen(yeye2);
    }else{
      setImagen(yeye);
    }
  }


  return (
    <div className="App">
      <header onClick={CambioImagen} className="App-header">
        <img src={imagen} className="App-logo" alt="logo" />
        <p>
          Se buscan este par de cochinos
        </p>

      </header>
    </div>
  );
}

export default App;
