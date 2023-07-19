import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

export default function NavBar(){

    return (
        <Navbar expand="lg"  className="bg-body-secondary sticky-top">
        
          <Navbar.Brand href="#home" className='ms-5'>The Dream Wedding</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto " >
              <Nav.Link className="p-3" ><Link to ='/'>Inicio</Link></Nav.Link>
              <Nav.Link className="p-3" href="#nosotrasTitle"> Nosotras</Nav.Link>
              <NavDropdown title="Servicios" id="basic-nav-dropdown" className="p-2">
                <NavDropdown.Item > 
                  <Link to ='/cuatro-cuatro'> Wedding 4 x 4</Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to='/race-day'> Race Day </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/microtunnig'> Microtuning </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to ='/WeddingPlannerOnline'>Planner Online</Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                <Link to = '/TunningDos'>Tuning 2.0</Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                <Link to = '/MicroWedding'>MicroWedding</Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                <Link to ='/WeddingPoint'>Wedding Point</Link>
                </NavDropdown.Item>
               
              </NavDropdown>
              <Nav.Link  className="p-3"><Link to ="/Galeria">Galeria</Link></Nav.Link>
              <Nav.Link href="#link" className="p-3">Blog</Nav.Link>
              <Nav.Link href="#link" className="ms-5 me-3 p-3">Contacto</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
    );
}