import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import '../Styles/CarouselGaleria.css'
import { Link } from 'react-router-dom';
import Image1 from '../Images/Carrousel/17.jpg'
import Image2 from '../Images/Carrousel/Copia de TDW-40.jpg';
import Image3 from '../Images/Carrousel/Copia de Pedidomano-014.jpg'
import Image4 from '../Images/Carrousel/Copia de Deco Pedido de mano-6.jpg'

export default function CarouselGaleria (){
  const ImgStyle = {
    marginLeft : '8rem',
    marginTop : '1rem',
    height: '75vh',
    objectFit: 'cover',
  }
  const tipografia ={
    color: '#fad4c8',
    fontFamily: 'Allura, cursive',
    textAlign: 'center',
    fontSize:'48px'
  }
    return (
       
      <Container>
      <h1 className='galeryTitle'>Galeria</h1>
      <Carousel >
        <Carousel.Item>
        <Link to ="/Galeria" style={{textDecoration:'none'}}>
        <img
          className="d-block "
          src={Image1}
          style = {ImgStyle}
          alt="First slide"
        />
        </Link>
        <Carousel.Caption>
          <h3 style={tipografia}>Amanecer Boho</h3>
          <h4 style={{color:'#fad4c8'}}>Banquete a pie de playa</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to ="/Galeria" style={{textDecoration:'none'}}>
        <img
          className="d-block "
          src={Image2}
          style = {ImgStyle}
          alt="Second slide"
        />
        </Link>

        <Carousel.Caption>
          <h3 style={tipografia}>Ceremonia Boho Chic</h3>
          <h4 style={{color:'#fad4c8'}}>4 x 4 Wedding</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to ="/Galeria" style={{textDecoration:'none'}}>
        <img
          className="d-block "
          src={Image3}
          style = {ImgStyle}
          alt="Third slide"
        />
        </Link>

        <Carousel.Caption>
          <h3 style={tipografia}>Pedida de mano</h3>
          <h4 style={{color:'#fad4c8'}}>
          Microtunning en Marbella
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      
    
    <Carousel.Item>
    <Link to ="/Galeria" style={{textDecoration:'none'}}>
        <img
          className="d-block "
          src={Image4}
          style = {ImgStyle}
          alt="Third slide"
        />
        </Link>

        <Carousel.Caption>
          <h3 style={tipografia}>En Acción</h3>
          <h4 style={{color:'#fad4c8'}}>
            Siempre en cada detalle
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </Container>
    )
}