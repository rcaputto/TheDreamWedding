import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalDinamico from './ModalDinamico'
import { Fotos, Fotos2, Fotos3 } from './Fotos';
console.log('FOTOS',Fotos)

export default function GaleriaModalDinamica (){

var src1 =[]
const data1 = () => {
    Fotos?.map((foto) =>(
        src1.push(foto)
        
    ))
}
data1()


var src2 = []
const data2 = () => {
    Fotos2?.map((foto) =>(
        src2.push(foto)
    ))
}
data2()
var src3 = []
const data3 = () => {
    Fotos3?.map((foto) =>(
        src3.push(foto) 
    ))
}
data3()
return(
      
    <Row>
        <Col 
        lg = {4} 
        mb = {4}
        >
            {src1?.map((src) =>(
                <ModalDinamico
                data = {src}
                />
            ))}
        </Col>
        
        <Col 
        lg = {4} 
        mb = {4}>
            {src2?.map((src) =>(
                <ModalDinamico
                data = {src}
                />
            ))}
        </Col>
        
        <Col 
        lg = {4} 
        mb = {4}>
            {src3?.map((src) =>(
                <ModalDinamico
                data = {src}
                />
            ))}
        </Col>
    </Row>
    
    

)
}