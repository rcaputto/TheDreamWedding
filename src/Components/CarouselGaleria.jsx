import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../Images/Galeria WEB/Col1/12.jpg'
import Image2 from '../Images/Galeria WEB/Col1/13.jpg';
import Image3 from '../Images/Galeria WEB/Col1/14.jpg'

export default function CarouselGaleria (){
  const ImgStyle = {
    marginLeft : '10rem',
    marginTop : '1rem',
    height: '75vh',
    objectFit: 'cover',
  }
    return (
      <div>  
      
      <Carousel >
        <Carousel.Item>
        <img
          className="d-block w-75"
          src={Image1}
          style = {ImgStyle}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>TITULO</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src={Image2}
          style = {ImgStyle}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>TITULO</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src={Image3}
          style = {ImgStyle}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>TITULO</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
    )
}