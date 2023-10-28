import React from "react";

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio' 
      src={require('../imagenes/testimonio-dipper.jpg')} 
      alt='foto de dipper'/>
    <div className="contenedor-texto-testimonio">
           <p className="nombre-testimonio">Dipper Pines</p>
           <p className="cargo-testimonio">Aficcionado al misterio</p>
           <p className="texto-testimonio">Mason «Dipper» Pines​ es un personaje ficticio y uno de los dos personajes principales de la serie animada de Disney Channel Gravity Falls. El personaje tiene la voz de Jason Ritter y está basado libremente en la infancia del creador de la serie Alex Hirsch.2​ Dipper es el único personaje que aparece en todos los episodios de Gravity Falls.</p>
    </div>

    </div>
  );
}

export default Testimonio;