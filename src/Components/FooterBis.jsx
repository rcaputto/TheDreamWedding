import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Facebook from '../Images/Redes/facebook.png'
import Instagram from '../Images/Redes/instagram.png'
import { Link } from 'react-router-dom';

export const FooterBis = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Sigue nuestras redes sociales</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <img src={Facebook} alt='img' />
          </a>
          
          <a href='https://www.instagram.com/thedreamwedding.es/' className='me-4 text-reset'>
            <img src={Instagram} alt='img' />
          </a>
        </div>
      </section>

      <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='mb-4' style={{fontFamily: 'Allura, cursive',
            fontSize: '24px',}}>
              <MDBIcon icon="gem" className="me-3" />
              The Dream Wedding
            </h6>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Enlaces</h6>
              <p>
                <Link to ='/' className='text-reset'>
                  Inicio
                </Link>
              </p>
              
              <p>
                <a href='#Galery' className='text-reset'>
                  Galeria
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Blog
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          The Dream Wedding
        </a>
      </div>
      </MDBFooter>
   
    
  );
};