
import {Link} from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Whatsapp from '../Images/Redes/icons8-whatsapp-48.png';
import Instagram from '../Images/Redes/icons8-instagram-48.png';
import Facebook from '../Images/Redes/icons8-facebook-50.png';

import '../assets/Styles/RedesSociales.css'

function BarraRedesSociales() {
    
  return (
    <>
    <div className="social-bar">
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src={Whatsapp} alt="Facebook" />
    </a>
    <a href="https://www.instagram.com/thedreamwedding.es/" target="_blank" rel="noopener noreferrer">
      <img src={Instagram} alt="Twitter" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src={Facebook} alt="Instagram" />
    </a>
  </div>
    </>
  );
}

export default BarraRedesSociales;