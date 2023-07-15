import ImagePortrait1 from '../Images/Galeria WEB/Copia de Pedidomano-041.jpg'
import ImagePortrait2 from '../Images/Galeria WEB/Copia de TDW-33.jpg'
import ImagePortrait3 from '../Images/Galeria WEB/Copia de TDW-57.jpg'
import ImageVertical1 from '../Images/Galeria WEB/Copia de TDW-71.jpg'
import ImageVertical2 from '../Images/Galeria WEB/Copia de TDW-35.jpg'
import ImageVertical3 from '../Images/Galeria WEB/Copia de TDW-36.jpg'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export default function Imagenes (){

    return (
        <Container>
        <Row m = {5} lg = {6}>
          <Col lg={7} mb={4}>
            <Image src={ImagePortrait1} className ='w-100 mb-4' rounded />
          </Col>
          <Col lg={5} mb={4}>
            <Image src={ImagePortrait2} className ='w-100 mb-4' rounded />
          </Col>
          <Col lg={6} mb={4}>
            <Image src={ImageVertical1} className ='w-100 mb-4' rounded />
          </Col>
          <Col lg={6} mb={4}>
            <Image src={ImageVertical2} className ='w-100 mb-4' rounded />
          </Col>
          <Col lg={6} mb={4}>
            <Image src={ImagePortrait3} className ='w-100 mb-4' rounded />
          </Col>
          <Col lg={6} mb={4}>
            <Image src={ImageVertical3} className ='w-100 mb-4' rounded />
          </Col>
        </Row>
      </Container>
    )
}