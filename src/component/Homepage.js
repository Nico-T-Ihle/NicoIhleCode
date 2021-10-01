import { Link } from 'react-router-dom';
import Bilder from './Bilder';
import '../App.css';

function Navbar() 
{

  return (
 
<nav>
        <ul className="nav-links">
        <Link className="nav-li"  to='/NicoIhlePortofolio'>
                <li  >Home</li>
        </Link>
        <Link  className="nav-li" to='/NicoIhlePortofolio/Bilder' >
                <li>Images</li>
        </Link>
       
                <li  className="nav-li"  > <a target="_blank"  className="nav-li" href="https://www.instagram.com/nico.yuy/" >Instagram</a></li>
        </ul>
</nav>

  );
}

export default Navbar;
