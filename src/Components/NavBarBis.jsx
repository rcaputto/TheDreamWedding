import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'


export default function NavBarBis(){

    return (
      <>
        <Navbar expand="lg"  className=" sticky-top" >
        
          <Navbar.Brand href="#home" className='ms-5' style={{fontFamily: 'Allura, cursive', fontSize: '32px', color:'#586d45'}}>The Dream Wedding</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto " >
              <Nav.Link className="p-3" ><Link to ='/' style={{textDecoration:'none', color:'#586d45'}}>Inicio</Link></Nav.Link>
              
              <NavDropdown title="Servicios" id="basic-nav-dropdown" className="p-2" style={{color:'#586d45', fontWeight:'normal'}} >
                <NavDropdown.Item > 
                  <Link to ='/cuatro-cuatro' style={{textDecoration:'none', color:'#586d45'}}> Wedding 4 x 4</Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to='/race-day' style={{textDecoration:'none', color:'#586d45'}}> Race Day </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to='/microtunnig' style={{textDecoration:'none', color:'#586d45'}}> Microtuning </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to ='/WeddingPlannerOnline' style={{textDecoration:'none', color:'#586d45'}}>Planner Online</Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                <Link to = '/TunningDos' style={{textDecoration:'none', color:'#586d45'}}>Tuning 2.0</Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                <Link to = '/MicroWedding' style={{textDecoration:'none', color:'#586d45'}}>MicroWedding</Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                <Link to ='/WeddingPoint' style={{textDecoration:'none', color:'#586d45'}}>Wedding Point</Link>
                </NavDropdown.Item>
               
              </NavDropdown>
              <Nav.Link  className="p-3"><Link to ="/Galeria" style={{textDecoration:'none', color:'#586d45'}}>Galeria</Link></Nav.Link>
              <Nav.Link href="#link" className="p-3" style={{color:'#586d45'}}>Blog</Nav.Link>
          
              
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
     
      </>
    );
}