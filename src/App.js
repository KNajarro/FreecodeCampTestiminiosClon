import './App.css';
import Testimonio from './componentes/Testimonio';
import testimonios from './componentes/Testimonio-Datos';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      {testimonios.map(testimonio => (
        <Testimonio 
          nombre={testimonio.nombre}
          pais={testimonio.pais}
          imagen={testimonio.imagen}
          textoImagen={testimonio.textoImagen}
          cargo={testimonio.cargo}
          empresa={testimonio.empresa}
          testimonio={testimonio.testimonio}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
