import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Styles/Formulario.css';
import { useNavigate, Link } from 'react-router-dom'


export default function Formulario() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' })

    const onSubmit = (data) => {

        console.log('REGISTRO', data)
    }

    const navigate = useNavigate()

    return (
        <div >

            <div className='formulario'>
                <Form
                    action="https://formsubmit.co/rgcaputto@gmail.com" method="POST"
                    className='plantillaForm'
                >
                    <div className='nombreyapellido'>
                        <Form.Group
                            className='form'
                            controlId="exampleForm.ControInput1"

                        >
                            <Form.Label style={{ color: 'white' }}>Nombre</Form.Label>
                            <Form.Control

                                name='nombre'

                                type="text" {...register("nombre", { required: true })} />
                            {errors?.nombre && <p>El campo es obligatorio</p>}
                        </Form.Group>

                        <Form.Group
                            onSubmit={handleSubmit(onSubmit)}
                            className='form'>
                            <Form.Label style={{ color: 'white' }}>Apellido</Form.Label>
                            <Form.Control

                                name='apellido'

                                type="text" {...register("apellido", { required: true })} />
                            {errors?.apellido && <p>El campo es obligatorio</p>}
                        </Form.Group>
                    </div>
                    <div className='emailytelefono'>
                        <Form.Group
                            onSubmit={handleSubmit(onSubmit)}
                            className='form'>
                            <Form.Label style={{ color: 'white' }}>Email</Form.Label>
                            <Form.Control

                                name='email'
                                
                                type="email" {...register("email", { required: true })} />
                            {errors?.email && <p>El campo es obligatorio</p>}
                        </Form.Group>

                        <Form.Group
                            onSubmit={handleSubmit(onSubmit)}
                            className='form'>
                            <Form.Label style={{ color: 'white' }}>Teléfono</Form.Label>

                            <Form.Control

                                name='teléfono'

                                type="textArea"
                                {...register("phone",
                                    {
                                        required: true,
                                        minLength: 4,
                                        maxLength: 12
                                    })} />
                            {errors?.password?.type === "required " && (<p>Elcampo es obligatorio</p>)}
                        </Form.Group>
                    </div>
                    <Form.Group
                        onSubmit={handleSubmit(onSubmit)}
                        className='form'>
                        <Form.Label style={{ color: 'white', marginLeft: '4rem', marginTop: '1rem' }}>Contanos en que podemos ayudarte</Form.Label>

                    </Form.Group>
                    <textarea style={{ marginLeft: '4rem' }} name="postContent" rows={6} cols={70} />


                    <input
                        type='hidden'
                        name='_next'
                        value='http://127.0.0.1:5173/sent'
                    />
                    <input
                        type='hidden'
                        name='_captcha'
                        value='false'
                    />
                    <Button variant="secondary" type="submit" style={{ marginTop: '6px', width: '100%' }}> Enviar</Button>


                </Form>
            </div>
        </div>
    )
}