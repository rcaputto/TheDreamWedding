import plant from '../Images/png/planta 1.png'
import Logo from '../Images/png/logotipo.png'
import "../Styles/Main.css"
import Break from './Break'
import NavBar from './NavBar'
import Card from 'react-bootstrap/Card';


const slogan = {

    fontFamily: 'sans-serif, cursive',
    fontSize: '46px',
    width:'75%',
    marginLeft: '10rem',
    marginTop: '4rem',
    marginBottom: '4rem',
    backgroundColor: 'pink',
    color: 'white',
    lineHeight: 'normal',
    fontWeight: '450',
    textAlign: 'center'
}

const card = {
    backgroundColor: 'pink'
}

export default function Main() {

    return (
        <>
            <NavBar />
            <Break />
            <Card style={card}>
                <div className='main'></div>
                <Card.ImgOverlay className="animate__animated animate__flip animate__delay-5s">
                    <Card.Img variant="top" className='w-25' src={Logo} />
                </Card.ImgOverlay>
                <Card.ImgOverlay className='plant'>
                    <Card.Img   src={plant} />
                </Card.ImgOverlay>
            </Card>
            <br />
            <Break />
            <h1 style={slogan}>“Es tu boda, tu la soñaste…. Nosotras te ayudamos a lograrlo.”</h1>
            
        </>
    )
}