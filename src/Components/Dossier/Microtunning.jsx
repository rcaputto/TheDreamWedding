import NavBarBis from "../NavBarBis";
import '../../Styles/CuatroPorCuatro.css'
import image1 from '../../Images/Dossier/44img.jpg'
import image2 from '../../Images/Dossier/44imgb.jpg'

export default function Microtunning() {

    return (
        <>
            <NavBarBis />
            <div className="backgroundImage">

            </div>
            <div className="cuatroCopy">
                <div className="fondoCuatro">
                    <h1 className="cuatroTitle">Dossier Microtunnig</h1>
                    <h3>Estas necesitando un montaje fotográfico, un photocall, una puesta en escena para capturar un momento mágico? … Nosotras podemos ayudarte!
                        En qué consiste?
                    </h3>
                    <div className="imgCenter">
                        <img src={image1} alt='img' />
                        <img src={image2} alt='img' />
                    </div>
                    <div className="cuatroSecondCopy">
                        <h3>Te armamos una mini escena con el estilo que elijas, la paleta de colores acorde, elementos principales y secundarios, nos encargamos del traslado, montaje y desmontaje.
                        </h3>
                        <h3>Y te preguntarás en qué te beneficias…. En que tu idea esté materializada tal cual la imaginas. Tenemos la capacidad y las herramientas para hacerlo
                            El valor de nuestro Microtuning parte desde 150 euros.

                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}