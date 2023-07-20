import plant from '../Images/png/planta 1.png'
import Logo from '../Images/png/Logo A.png'
import "../Styles/Main.css"
import Break from './Break'
import NavBar from './NavBar'
import Card from 'react-bootstrap/Card';
import Nosotras from './nosotras'
import CardsApp from './CardsApp'
import CarouselGaleria from './CarouselGaleria'


const slogan = {

    fontFamily: 'Allura, cursive',
    fontSize: '46px',
    width:'75%',
    height: '7rem',
    textAlign: 'center',
    marginBottom: '4rem',
    backgroundColor: '#DAA99E',
    color: '#69283B',
    lineHeight: '7rem',
    fontWeight: '450',
    marginTop:'4rem',
    marginLeft: '10rem'

    
}

const card = {
    backgroundColor: '#75946A',
    marginBottom:'4rem'
    
}

export default function Main() {

    return (
        <>
            <NavBar />
            <Break />
            <div id='inicio'/>
            <Card style={card} >
                <div className='main'></div>
                <Card.ImgOverlay className="animate__animated animate__flip animate__delay-5s">
                    <Card.Img variant="top" className='w-25' src={Logo} />
                </Card.ImgOverlay>
                <Card.ImgOverlay className='plant'>
                    <Card.Img   src={plant} />
                </Card.ImgOverlay>
                <h1 style={slogan}>“Es tu boda, tu la soñaste…. Nosotras te ayudamos a lograrlo.”</h1>
            </Card>      
            <CarouselGaleria/>
            <Nosotras/>
            <CardsApp/>
        </>
    )
}