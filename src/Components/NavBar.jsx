
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar(){

    return (
        <Navbar expand="lg"  className="bg-body-secondary sticky-top">
        
          <Navbar.Brand href="#home" className='ms-5'>The Dream Wedding</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto " >
              <Nav.Link href="#home" className="p-3">Inicio</Nav.Link>
              <Nav.Link href="#link" className="p-3">Nosotras</Nav.Link>
              <NavDropdown title="Servicios" id="basic-nav-dropdown" className="p-2">
                <NavDropdown.Item href="#action/3.1">Wedding 4 x 4</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Race Day
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Microtuning</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Planner Online</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Tuning 2.0</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">MicroWedding</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Wedding Point</NavDropdown.Item>
               
              </NavDropdown>
              <Nav.Link href="#link" className="p-3">Galeria</Nav.Link>
              <Nav.Link href="#link" className="p-3">Blog</Nav.Link>
              <Nav.Link href="#link" className="ms-5 me-3 p-3">Contacto</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
    );
}