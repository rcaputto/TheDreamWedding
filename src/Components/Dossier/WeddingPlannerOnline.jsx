import NavBarBis from "../NavBarBis";
import '../../Styles/CuatroPorCuatro.css'
import image1 from '../../Images/Dossier/44img.jpg'
import image2 from '../../Images/Dossier/44imgb.jpg'

export default function WeddingPlannerOnline() {

    return (
        <>
            <NavBarBis />
            <div className="backgroundImage">

            </div>
            <div className="cuatroCopy">
                <div className="fondoCuatro">
                    <h1 className="cuatroTitle">Dossier Wedding Planner Online</h1>
                    <h1 style={{fontSize:'42px', padding:'0 2rem 0 4rem'}} className="cuatroTitle">Como Wedding Planner en nuestro servicio de Wedding Planner a Distancia nos encargamos de los siguientes aspectos</h1>

                    <h3>Los ayudamos a la distancia a planificar y organizar uno de los días más importantes de su vida. Organizamos varias sesiones, empezando
                        con una entrevista en la cual sus respuestas harán que captemos la idea del evento que tienen en mente o cómo les gustaría que fuese.
                        Les daremos consejos para empezar la organización y podremos resolver todas sus dudas, que ahora mismo sabemos que son muchas.
                        Les entregaremos material escrito para que puedan ir organizándose en el paso a paso de su boda
                    </h3>
                    <div className="imgCenter">
                        <img src={image1} alt='img' />
                        <img src={image2} alt='img' />
                    </div>
                    <div className="cuatroSecondCopy">
                        <h3>
                            Nos encargamos del diseño de la papelería de la boda y lo personalizamos al detalle.
                            Trasladamos los materiales y los montamos ese día, además de supervisar los montajes de proveedores externos.
                            </h3>
                    </div>
                </div>
            </div>
        </>

    )
}