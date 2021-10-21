import { Link } from 'react-router-dom';
import Bilder from './Bilder';
import '../App.css';
import { FaAlignJustify } from 'react-icons/fa';

function Navbar() 
{

const test = () => {
        console.log("test");
}

  return (

<header className="header">
  <a href="" className="logo">Logo</a>
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" for="menu-btn">
    <span className="navicon"></span>
  </label>
        <ul className="menu">
          <li><a target="_blank" href="#">Linkedin</a></li>
          <li><a target="_blank" href="https://www.instagram.com/nico.yuy/">Instagram</a></li>
          <li><a target="_blank"  href="https://github.com/Nico-T-Ihle">Github</a></li>

        </ul>
   
</header>
  );
}

export default Navbar;
