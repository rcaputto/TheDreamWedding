
import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'


export default function ModalDinamico ({data}){
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow1(false);
    const handleShow = () => setShow1(true);

   
    
    return(
        <>
        <img 
            onClick={handleShow} 
            className='w-100 mb-4 rounded' 
            src={data.src} 
            alt='img' 
        />
                
        <Modal 
        show={show1} 
        onHide = {handleClose}
        size='lg'
        >
            <img className='w-100  rounded' src={data.src} alt='img' />
        </Modal>
    </>
    )
}