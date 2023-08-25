import Card from 'react-bootstrap/Card';
import '../Styles/Formulario.css';
import Formulario from '../Components/Formulario'



export default function FormularioCompleto (){
    
    return(
        <>
        <Card className='formshadow' >
        <Card.Body>
        <div className='FormTitle' id='linkForm'>Contactá con nosotras</div>
        <div className='formularioCompleto'>
          <Card.Text className='formText'>
            Para contratar nuestros servicios como Wedding Planner y organizadora de eventos
            dejanos tus datos que nos ponemos en contacto contigo en un abrir y cerrar de ojos. 
            Salvo que estemos en acción! Gracias!
          </Card.Text>
          <Formulario/>
          </div>
        </Card.Body>
      </Card>
        </>
    )
}