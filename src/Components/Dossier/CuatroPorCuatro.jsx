
import '../../Styles/CuatroPorCuatro.css'
import image1 from '../../Images/Dossier/44img.jpg'
import image2 from '../../Images/Dossier/44imgb.jpg'
import NavBarBis from "../NavBarBis";



export default function CuatroPorCuatro (){

    return (
        
            <div className='body'>
            <NavBarBis/>
            <div className="backgroundImage">
            
            </div>
            <div className="cuatroCopy">
            <div className="fondoCuatro">
                <h1 className="cuatroTitle">Dossier 4 x 4 Wedding</h1>
                
                <h1 style={{fontSize:'42px', padding:'0 2rem 0 4rem'}} className="cuatroTitle">Como Wedding Planner en nuestro servicio de Organización Integral nos encargamos de los siguientes aspectos</h1>
                    <h3>Proyecto de la boda: Creamos el plan de acción ideal para su boda, en base a sus preferencias adaptando el presupuesto estipulado, buscando y gestionando los mejores proveedores para su boda.
                    Elaboramos una propuesta de diseño a medida, según estilo, tema y escenario. Realizamos la búsqueda del espacio físico para la celebración y los guiamos con los trámites matrimoniales, ya sea por civil o por iglesia.
                    </h3>
                    </div>
                    <div className="imgCenter">
                    <img src={image1} alt='img'/>
                    <img src={image2} alt='img'/>
                    </div>
                    <div className="cuatroSecondCopy">
                    <h3>
                    En cuanto a la Coordinación del día B. Incluye al detalle el paquete Race Day. Contarán con al menos dos coordinadoras asistiendo el día de la boda, para encargarse que todo salga según lo planificado.
                    Creamos la línea de tiempo organizativa, nos encargamos de la búsqueda y gestión de los proveedores necesarios para el día de la boda.
                    </h3>
                    <h3>
                    Negociamos con proveedores para obtener mejores precios, sin perder calidad ni servicio.
                    Hacemos un borrador de gastos y optimización del presupuesto.
                    Nos encargamos de la gestión de traslado, alojamiento, detalles y todo lo necesario para ustedes y sus invitados.
                    </h3>
                   
                    </div>
                    </div>
            </div>
        
    )
}