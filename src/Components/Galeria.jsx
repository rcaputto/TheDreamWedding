
import '../Styles/Galeria.css'
import {FooterBis} from './FooterBis'
import GaleriaModalDinamica from './GaleriaModalDinamica'
import NavBarBis from './NavBarBis'

export default function Galeria(){
    
   
    return(
        <div>
        <NavBarBis/>
        <h1  id='Galery' className='Galery'
        style={{
            fontFamily: 'Allura, cursive',
            fontSize: '52px', textAlign:'center', 
            marginTop:'16px', 
            marginBottom:'24px',
        }}> 
            Galeria de imágenes 
        </h1>
            <GaleriaModalDinamica/>
            <FooterBis/>
        </div>
    )
}