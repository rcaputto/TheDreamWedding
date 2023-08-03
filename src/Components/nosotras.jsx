import '../Styles/Nosotras.css'
import Card from 'react-bootstrap/Card';


const nosotras = {
    textAlign : 'center',
    fontFamily: 'Allura, cursive',
    
}



function Nosotras () {
    return (
        <>
        <div id='us'/>
        <div  className="nosotras">
        <h1 id="nosotrasTitle" style={nosotras}>Nosotras</h1>
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
