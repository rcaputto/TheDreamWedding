import ImagePortrait1 from '../Images/Galeria WEB/Copia de Pedidomano-041.jpg'
import ImagePortrait2 from '../Images/Galeria WEB/Copia de TDW-33.jpg'
import ImagePortrait3 from '../Images/Galeria WEB/Copia de TDW-57.jpg'
import ImageVertical1 from '../Images/Galeria WEB/Copia de TDW-71.jpg'
import ImageVertical2 from '../Images/Galeria WEB/Copia de TDW-35.jpg'
import ImageVertical3 from '../Images/Galeria WEB/Copia de TDW-36.jpg'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'

export default function GaleriaModal (){
    const imgStyle = {
        width: '100%',
        height: '85vh',
        objetctFit: 'cover'
    }
    
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow1(false);
    const handleShow = () => setShow1(true);

    
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    
    const [show6, setShow6] = useState(false);
    const handleClose6= () => setShow6(false);
    const handleShow6 = () => setShow6(true);
return(
    <>
        <Row >
            <Col lg = {4} mb = {4}>
            
                <img onClick={handleShow} className='w-100 mb-4 rounded' src={ImageVertical1} alt='img' />  
                <Modal show={show1} onHide = {handleClose}>
                <img className='w-100  rounded' src={ImageVertical1} alt='img' style={imgStyle}/>
                </Modal>
                <img onClick={handleShow2} className='w-100 mb-4 rounded' src={ImagePortrait1} alt='img'/>
                <Modal show={show2} onHide = {handleClose2} size='lg'>
                <img className='w-100   rounded' src={ImagePortrait1} alt='img' />
                </Modal>
            </Col>
            <Col lg = {4} mb = {4}>

                <img onClick={handleShow3} className='w-100 mb-4 rounded' src={ImagePortrait2} alt='img' />
                <Modal show={show3} onHide = {handleClose3} size='lg'>
                <img className='w-100   rounded' src={ImagePortrait2} alt='img' />
                </Modal>
                <img onClick={handleShow4} className='w-100 mb-4 rounded' src={ImageVertical2} alt='img' />
                <Modal show={show4} onHide = {handleClose4}>
                <img className='w-100   rounded' src={ImageVertical2} alt='img' style={imgStyle}/>
                </Modal>
            </Col>
            <Col lg = {4} mb = {4}>
            <img onClick={handleShow5} className='w-100 mb-4 rounded' src={ImageVertical3} alt='img' />
            <Modal show={show5} onHide = {handleClose5}>
                <img className='w-100   rounded' src={ImageVertical3} alt='img' style={imgStyle}/>
                </Modal>
            <img onClick={handleShow6} className='w-100 mb-4 rounded' src={ImagePortrait3} alt='img' />
            <Modal show={show6} onHide = {handleClose6} size='lg'>
                <img className='w-100    rounded' src={ImagePortrait3} alt='img' />
                </Modal>
            </Col>
        </Row>
        
    
    </>

)
}