import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";

function CollapsibleExample() {
  return (
    <Navbar expand="lg" className='background'>
      <Container  data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-in-out">
        <Navbar.Brand href="#" style={{color:"rgba(58, 100, 59, 1)","letter-spacing":"6px",fontWeight:"900",fontSize:"25px"}}>AMRUTAM </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{fontWeight:"500"}} >
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-center text-dark"
            style={{ maxHeight: '100px',paddingLeft:"13vw",gap:"37px",fontSize:"17px" }}
            navbarScroll
          >
            <Nav.Link href="/"  style={{color:"rgba(58, 100, 59, 1)"}}>Home</Nav.Link>
            <Nav.Link href="/teams"  style={{color:"rgba(58, 100, 59, 1)"}}>find doctors</Nav.Link>
            <Nav.Link href="/mentors" style={{color:"rgba(58, 100, 59, 1)"}}>About us</Nav.Link>
          </Nav>
          <div className='px-4'><Button variant="outline-success">Login</Button></div>
          <Button href="/sign"  variant="success">Sign-up</Button>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default CollapsibleExample;