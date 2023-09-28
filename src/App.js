import React from 'react';
import './App.css';
import imagenPan from './imagen/receta-de-pan-facil.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagenPan} alt="Receta fácil de pan" />
      </header>
      <main>
        <h1>Receta de Pan</h1>
        <section>
          <h2>Ingredientes</h2>
          <ul>
            <li>Harina</li>
            <li>Agua</li>
            <li>Levadura</li>
            <li>Sal</li>
          </ul>
        </section>
        <section>
          <h2>Pasos</h2>
          <ol>
            <li>Mezclar los ingredientes secos en un tazón.</li>
            <li>Agregar el agua y la levadura a los ingredientes secos.</li>
            <li>Amasar la mezcla hasta obtener una masa homogénea.</li>
            <li>Dejar reposar la masa durante una hora.</li>
            <li>Hornear la masa en un horno precalentado a 180°C durante 30 minutos.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}

export default App;
