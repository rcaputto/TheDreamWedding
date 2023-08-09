import NavBarBis from "../NavBarBis";
import '../../Styles/CuatroPorCuatro.css'
import image1 from '../../Images/Dossier/44img.jpg'
import image2 from '../../Images/Dossier/44imgb.jpg'

export default function MicroWedding() {

    return (
        <>
            <NavBarBis />
            <div className="backgroundImage">

            </div>
            <div className="cuatroCopy">
                <div className="fondoCuatro">
                    <h1 className="cuatroTitle">Dossier MicroWedding</h1>
                    <h3>Creamos este servicio de bodas simbólicas basado en el concepto de Las Vegas.
                        ¿Que hacemos? Organizamos una boda simbólica en la cual puede haber o no invitados, la idea es experimentar las emociones de una boda real y divertirse al máximo!!
                    </h3>
                    <div className="imgCenter">
                        <img src={image1} alt='img' />
                        <img src={image2} alt='img' />
                    </div>
                    <div className="cuatroSecondCopy">
                    
                    </div>
                </div>
            </div>
        </>
    )
}