import NavBarBis from "../NavBarBis";
import '../../Styles/CuatroPorCuatro.css'
import image1 from '../../Images/Dossier/44img.jpg'
import image2 from '../../Images/Dossier/44imgb.jpg'


export default function DossierRaceDay() {

    return (
        <>
            <NavBarBis />
            <div className="backgroundImage">

            </div>
            <div className="cuatroCopy">
                <div className="fondoCuatro">
                    <h1 className="cuatroTitle">Dossier Race Day</h1>
                    <h3>El día de su Boda será inolvidable, intenso, lleno de emociones y adrenalina, el tiempo se les escurrirá entre los dedos, lo disfrutarán tanto que sin darse cuenta… habrá llegado al final. Ahora, la pregunta es, ¿quieren que todo ese disfrute se vea interrumpido por estar pendiente de la lista de canciones, de que los proveedores lleguen a tiempo, o de que todo salga como lo soñaron?
                    </h3>
                    <h3>Para eso estamos nosotras, para COORDINAR EL DIA DE LA BODA; profesionales preparadas para organizar y resolver cualquier incidencia sin que ustedes siquiera se enteren.
                    </h3>
                    <h3>Realizamos juntos el timing de la boda, coordinamos una visita en el espacio que hayan elegido para llevar a cabo la celebración, para hacer juntos el recorrido y que el día B todo salga perfecto.
                    </h3>
                    <div className="imgCenter">
                        <img src={image1} alt='img' />
                        <img src={image2} alt='img' />
                    </div>
                    <div className="cuatroSecondCopy">
                        <h3>
                            Llegamos al lugar de la celebración unas horas antes del comienzo de la ceremonia para supervisar el arribo de los proveedores, los montajes y ultimar detalles para que todo luzca fantástico.
                            Estamos presentes en todo momento para dar asistencia a los invitados, coordinar la entrada y salida de los novios, así como la del cortejo, si lo hubiera.

                        </h3>
                        <h3>
                            Luego de la ceremonia, también estamos presente durante el cóctel y el banquete, ocupándonos de todo, asistiéndolos a ustedes continuamente y a sus invitados.
                            El Valor de nuestro Race Day es de 550 € + IVA.

                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}