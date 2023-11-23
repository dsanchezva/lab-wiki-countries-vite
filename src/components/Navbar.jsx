import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComp() {


return (
    <div>
         <nav className="navbar navbar-dark bg-primary mb-3">
        <div>
          <Link className="navbar-brand" to={"/"}>WikiCountries</Link>
        </div>
      </nav>
      
    </div>
)

}

export default NavbarComp;
