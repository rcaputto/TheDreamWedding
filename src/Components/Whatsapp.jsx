import whatsapp from '../Images/Redes/icons8-whatsapp.gif';
import '../Styles/Whatsapp.css'

export default function Whatsapp (){
    return(
        <>
    <div className="social-bar-whatsapp">
    <a href=" https://wa.me/+34671317998" target="_blank" rel="noopener noreferrer">
      <img src={whatsapp} alt="Facebook" />
    </a>
    
  </div>
    </>
    )
}