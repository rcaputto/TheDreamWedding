
import {Link} from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Whatsapp from '../Images/Redes/icons8-whatsapp-160.png';
import Instagram from '../Images/Redes/icons8-instagram-96.png'


function BarraRedesSociales() {
    const url = 'Hola!%20quisiera%20más%20información%20sobre%20los%20servicios%20que%20ofrecen.'
  return (
    <ButtonGroup vertical size='lg' style={{position:'fixed', zIndex:'2000', marginTop:'26rem', marginLeft:'75rem' }}>
      
      <Link to={`https://wa.me/34671317998/?text=${url}`}> <img src={Whatsapp} alt='img' style={{width:'3.9rem'}} /></Link>
      <br/>
      
      
      
    </ButtonGroup>
  );
}

export default BarraRedesSociales;