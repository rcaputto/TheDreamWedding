import '../Styles/Nosotras.css'
import Card from 'react-bootstrap/Card';
import  nosotrasImg from '../Images/nosotras.jpg'





function Nosotras () {
    return (
        <>
        <div id='us'/>
        <div  className="nosotras">
        <h1 id="nosotrasTitle">Nosotras</h1>
        <img id='nosotrasImg' src={nosotrasImg} alt='img'/>
        <div className="background">
        <div className="nosotrasCard">
        <h1 className='nosotrasCopy'>Somos May y Miri, dos argentinas Todo Terreno pisando fuerte en España, que creamos este proyecto conjunto para plasmar nuestra esencia en uno de los momentos más lindos de su vida… Tu boda soñada!
        Y te preguntarás ¿Cuál es nuestra esencia? Somos locas, divertidas y audaces, aunque también somos muy muy responsables, detallistas y comprometidas.
        Imaginate con todo esto cómo puede llegar a ser tu fiesta; 3,2,1… Fiestón!
        ¿Empezamos?
        </h1>
        </div>
        </div>
        </div>
        </>
    )
}

export default Nosotras
