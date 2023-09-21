import NavBarBis from "../NavBarBis";
import '../../Styles/CuatroPorCuatro.css'
import image1 from '../../Images/Dossier/44img.jpg'
import image2 from '../../Images/Dossier/44imgb.jpg'

export default function WeddingPoint() {

    return (
        <>
            <NavBarBis />
            <div className="backgroundImage">

            </div>
            <div className="cuatroCopy">
                <div className="fondoCuatro">
                    <h1 className="cuatroTitle">Dossier Weddings Point</h1>
                    <h1 style={{fontSize:'42px', padding:'0 2rem 0 4rem'}} className="cuatroTitle">Como Wedding Planner en nuestro servicio de Bodas de Destino nos encargamos de los siguientes aspectos</h1>

                    <h3>¡Esto parece una locura, y es que sí lo es!  Y nos encantan las parejas que se atreven a cumplir sueños, aunque estos sean muy locos!
                        Las bodas de destino están en auge, Lo mágico de estas bodas, es que los novios eligen un destino que les guste y se trasladen hasta ahí, para cumplir el sueño de celebrar su boda en un lugar especial para ellos.
                    </h3>
                    <div className="imgCenter">
                        <img src={image1} alt='img' />
                        <img src={image2} alt='img' />
                    </div>
                    <div className="cuatroSecondCopy">
                        <h3>
                            Son bodas que requieren de mucha organización, ya que suelen durar de dos a cuatro días, lo que conlleva una tarea meticulosa para que no se escape ningún detalle, por eso es fundamental contar con una Wedding Planner de confianza, que sea sus ojos, que comprenda exactamente lo que están buscando, que acompañe en el proceso y haga propuestas acorde al presupuesto estipulado. En definitiva, contar con una wedding planner va a ser una inversión para garantizar el éxito de su “Destination Wedding”.

                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}