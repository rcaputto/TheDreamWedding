import CarouselGaleria from './CarouselGaleria';
import NavBar from './NavBar'
import Imagenes from './Imagenes'

export default function Galeria(){

    return(
        <div>
        <NavBar/>
        <h1> Galeria de imágenes </h1>
            <CarouselGaleria/>
            <Imagenes/>
        </div>
    )
}