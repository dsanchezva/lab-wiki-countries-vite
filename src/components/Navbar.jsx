import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComp() {


return (
    <div>
         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Link to={"/"}>WikiCountries</Link></Navbar.Brand>
        </Container>
      </Navbar>
      
    </div>
)

}

export default NavbarComp;
