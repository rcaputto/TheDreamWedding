import {useForm} from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBarBis from './NavBarBis'
import {FooterBis} from './FooterBis'
import '../Styles/Formulario.css'


export default function Formulario (){
    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm ({mode: 'onChange'})

    const onSubmit =  (data) => {
        
        console.log ('REGISTRO',data)
    }


   
    return(
        <div >
        <NavBarBis/>
        <h1 className='FormTitle'>Dejanos tus datos y te contactaremos</h1>
        <Form
        onSubmit={handleSubmit(onSubmit)}>
            <Form.Group  
                className='form'
                controlId="exampleForm.ControInput1"
                >
            <Form.Label>Nombre</Form.Label>
            <Form.Control 
                placeholder = 'Ingrese su nombre'
                type="text" {...register("nombre", { required: true })} />
                {errors?.nombre && <p>El campo es obligatorio</p>}
            </Form.Group>
            
            <Form.Group 
                onSubmit={handleSubmit(onSubmit)} 
                className='form'>
            <Form.Label>Apellido</Form.Label>
            <Form.Control 
                placeholder = 'Ingrese su apellido'
                type="text" {...register("apellido", { required: true })} />
                {errors?.apellido && <p>El campo es obligatorio</p>}
            </Form.Group>

            <Form.Group 
                onSubmit={handleSubmit(onSubmit)} 
                className='form'>
            <Form.Label>Email</Form.Label>
            <Form.Control 
                placeholder = 'Ingrese su email'
                type="email" {...register("email", { required: true })} />
                {errors?.email && <p>El campo es obligatorio</p>}
            </Form.Group>
            
            <Form.Group 
                onSubmit={handleSubmit(onSubmit)} 
                className='form'>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control 
                placeholder = 'Ingrese su número de teléfono'
                type="text" 
                {...register("phone", 
                { required: true, 
                  minLength: 4, 
                  maxLength: 12 
                })} />
                {errors?.password?.type === "required "&& (<p>Elcampo es obligatorio</p>)}
            </Form.Group>
                <Button variant="primary" type="submit" style = {{marginTop:'6px', width:'100%'}}>Registrarse</Button>
            </Form>
            <Form.Group 
                onSubmit={handleSubmit(onSubmit)} 
                className='form'>
            <Form.Label>Cuéntanos sobre tí</Form.Label>
            <Form.Control 
                type="text" {...register("email", { required: true })} />
                {errors?.email && <p>El campo es obligatorio</p>}
            </Form.Group>
            <FooterBis/>   
        </div>
    )
}