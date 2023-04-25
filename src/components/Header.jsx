import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

function ColorSchemesExample() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">A&B</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Главное</Nav.Link>
            <Nav.Link href="#features">Избранное</Nav.Link>
            <Nav.Link href="#pricing">Корзина</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="primary">
                Войти
            </Button>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default ColorSchemesExample;