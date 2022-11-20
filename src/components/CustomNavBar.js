import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';


const CustomNavBar=() => {
    return(
      <>
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dinastia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" a>
              <Nav.Link href="#home">Panes</Nav.Link>
              <Nav.Link href="#link">Pastas</Nav.Link>
              <Nav.Link href="#link">Dulces</Nav.Link>
            </Nav>
            <Nav a>
              <Nav.Link className="justify-content-end"  href="#link"><CartWidget /></Nav.Link>
            </Nav> 
          </Navbar.Collapse>
        </Container> 
      </Navbar>
      </>
    )
}
export default CustomNavBar;