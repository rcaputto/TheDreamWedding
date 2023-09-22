import NavBarBis from "../NavBarBis";
import '../../Styles/CuatroPorCuatro.css'
import image1 from '../../Images/Dossier/44img.jpg'
import image2 from '../../Images/Dossier/44imgb.jpg'
import Whatsapp from "../Whatsapp";

export default function TunningDos() {

    return (
        <>
            <NavBarBis />
            <div className="backgroundImage">

            </div>
            <div className="cuatroCopy">
                <div className="fondoCuatro">
                    <h1 className="cuatroTitle">Dossier Tunning 2.0</h1>
                    <Whatsapp/>
                    <h1 style={{fontSize:'42px', padding:'0 2rem 0 4rem'}} className="cuatroTitle">Como Wedding Planner en nuestro servicio de Decoración Integral nos encargamos de los siguientes aspectos</h1>

                    <h3>Nos reunimos con ustedes para conocer sus ideas con respecto al estilo y temática de su boda, cuales son sus preferencias… como la sueñan.
                        Elaboramos una propuesta de diseño a medida donde exista un hilo conductor único a lo largo de toda la boda. Gestionamos los proveedores para llevar a cabo la decoración.
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