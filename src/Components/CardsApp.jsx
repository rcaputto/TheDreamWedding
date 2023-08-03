import "../Styles/CardsApp.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Cards";
import Carousel from "./CarouselII";
import weddingAllTerrain from '../Images/png/4x4wedding.png';
import raceDay from '../Images/png/Raceday.png';
import bodasDeDestino from '../Images/png/BodasDestino.png';
import MicroTuning from '../Images/png/Microtuning.png';
import Tuning from '../Images/png/Tuning.png';
import microBodas from '../Images/png/microbodas.png';
import OnLine from '../Images/png/online.png';




function CardsApp() {
  let cards = [
    {
      
      key:  uuidv4() ,
      content: (
          <Card
            imagen={weddingAllTerrain}
            titulo='4X4 Wedding'
            texto='Este servicio te lo incluye todo, si lo que buscas es disfrutar del proceso, te lo recomendamos… .
              Creamos el proyecto íntegro de la boda, presupuesto, proveedores, diseño, decoración y coordinamos el Día B.'
            link = "/cuatro-cuatro"
              />
       
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={raceDay}
          titulo='Race Day'
          texto='Es lo que necesitas para disfrutar de tu boda y no preocuparte por nada.
            Realizamos timing de la boda, montaje de puntos de decoración y todo lo que necesites para disfrutar'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={Tuning}
          titulo='Tuning 2.0'
          texto='En base a tus ideas, elaboramos una propuesta de diseño a medida donde exista un hilo conductor único a lo largo de toda la boda, diseñamos la papelería y personalizamos cada detalle al máximo.'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={MicroTuning}
          titulo='MicroTuning'
          texto='Estas necesitando un montaje fotográfico, un photocall, una puesta en escena para capturar un momento mágico? … Nosotras podemos ayudarte!'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={microBodas}
          titulo='MicroWedding'
          texto='Creamos este servicio de bodas simbólicas basada en el concepto de Las Vegas'
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={bodasDeDestino}
          titulo='Wedding Point'
          texto='Lo mágico de estas bodas, es que los novios eligen un destino que les guste, pero del que ninguno sea originario, para cumplir el sueño de celebrar su boda en un lugar especial para ellos con sus allegados.
          
          '
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={OnLine}
          titulo='Wedding Planner OnLine'
          texto='Este servicio está ideado para ayudarlos a distancia a organizar su boda paso a paso y así evitar que queden temas desatendidos.
          
          '
        />
      ),
    },
  ];
  const slogan = {

    fontFamily: 'Allura, cursive',
    fontSize: '40px',
    height: '7rem',
    textAlign: 'center',
    marginBottom: '4rem',
    marginLeft:'8rem',
    backgroundColor: '#DAA99E',
    color: '#69283B',
    lineHeight: '3.5rem',
    fontWeight: '450',
    maxWidth:'1020px'

    
}

  return (
    <>
    <h1 className="title">Servicios</h1>
    <h1 style={slogan}>En nuestro punto de partida es esencial la conexión, la empatía, conocernos y escucharnos</h1>
    <div className="carousel">
      <Carousel
        cards={cards}
        height="400px"
        width="40%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
    </>
  );
}

export default CardsApp;
