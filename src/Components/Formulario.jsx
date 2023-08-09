import {useForm} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Styles/Formulario.css';
import {useNavigate} from 'react-router-dom'


export default function Formulario (){
    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm ({mode: 'onChange'})

    const onSubmit =  (data) => {
        
        console.log ('REGISTRO',data)
    }

const navigate = useNavigate()
   
    return(
        <div >
        <h1 className='FormTitle' id='formtitle'>Dejanos tus datos y te contactaremos</h1>
        <div className='formulario'>
        <Form
        action="https://formsubmit.co/rgcaputto@gmail.com" method="POST"
        style={{width:'50%', marginBottom:'4rem'}}
        >
            <Form.Group  
                className='form'
                controlId="exampleForm.ControInput1"
                
                >
            <Form.Label>Nombre</Form.Label>
            <Form.Control
                name = 'nombre' 
                placeholder = 'Ingrese su nombre'
                type="text" {...register("nombre", { required: true })} />
                {errors?.nombre && <p>El campo es obligatorio</p>}
            </Form.Group>
            
            <Form.Group 
                onSubmit={handleSubmit(onSubmit)} 
                className='form'>
            <Form.Label>Apellido</Form.Label>
            <Form.Control 
                name = 'apellido'
                placeholder = 'Ingrese su apellido'
                type="text" {...register("apellido", { required: true })} />
                {errors?.apellido && <p>El campo es obligatorio</p>}
            </Form.Group>

            <Form.Group 
                onSubmit={handleSubmit(onSubmit)} 
                className='form'>
            <Form.Label>Email</Form.Label>
            <Form.Control 
                name = 'email'
                placeholder = 'Ingrese su email'
                type="email" {...register("email", { required: true })} />
                {errors?.email && <p>El campo es obligatorio</p>}
            </Form.Group>
            
            <Form.Group 
                onSubmit={handleSubmit(onSubmit)} 
                className='form'>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control 
                name = 'teléfono'
                placeholder = 'Ingrese su número de teléfono'
                type="text" 
                {...register("phone", 
                { required: true, 
                  minLength: 4, 
                  maxLength: 12 
                })} />
                {errors?.password?.type === "required "&& (<p>Elcampo es obligatorio</p>)}
            </Form.Group>
            <input
            type='hidden'
            name='_next'
            value='https://dwedding.vercel.app/sent'
            />
            <input
            type='hidden'
            name='_captcha'
            value='false'
            />
                <Button variant="primary" type="submit" style = {{marginTop:'6px', width:'100%'}}>Enviar</Button>
                
            </Form>
            </div>  
        </div>
    )
}