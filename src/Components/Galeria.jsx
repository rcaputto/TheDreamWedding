


import GaleriaModalDinamica from './GaleriaModalDinamica'
import NavBarBis from './NavBarBis'

export default function Galeria(){
    
   
    return(
        <div>
        <NavBarBis/>
        <h1 
        style={{
            fontFamily: 'Allura, cursive',
            fontSize: '52px', textAlign:'center', 
            marginTop:'16px', 
            marginBottom:'24px'}}> 
            Galeria de imágenes 
        </h1>
            <GaleriaModalDinamica/>
        </div>
    )
}