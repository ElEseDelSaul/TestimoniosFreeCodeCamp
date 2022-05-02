import './App.css';
import Testimonio from './components/Testimonio';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimonio
          imagen={data.Shawn.imagen}
          nombre={data.Shawn.nombre}
          pais={data.Shawn.pais}
          cargo={data.Shawn.cargo}
          empresa={data.Shawn.empresa}
          testimonio={data.Shawn.testimonio}
        />
        <Testimonio
          imagen={data.Sarah.imagen}
          nombre={data.Sarah.nombre}
          pais={data.Sarah.pais}
          cargo={data.Sarah.cargo}
          empresa={data.Sarah.empresa}
          testimonio={data.Sarah.testimonio} />
        <Testimonio
          imagen={data.Emma.imagen}
          nombre={data.Emma.nombre}
          pais={data.Emma.pais}
          cargo={data.Emma.cargo}
          empresa={data.Emma.empresa}
          testimonio={data.Emma.testimonio} />
      </div>
    </div>
  );
}

export default App;
