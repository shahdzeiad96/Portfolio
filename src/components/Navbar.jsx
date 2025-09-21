// src/components/Navbar.jsx
import nightMode from '../assets/night-mode.png';
import './Navbar.css'
function Navbar() {
  return (
    <nav className='navbar'>
      <h2>
        <h1>Shahd <span>.</span></h1>
      </h2>
      <ul className='navlist'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <img src={nightMode} alt="darkmode"  className='nightmode-logo'/>

    </nav>
  );
}

export default Navbar;
