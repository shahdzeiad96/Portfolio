import './Footer.css'
import heart from '../assets/redheart.png'
function Footer(){
    return(
        <div className="footer">
            <div className="made-with">
                <h1 className='logo'>Shahd<span>.</span></h1>
                <p className='madewith'>Made with <span className='heart-icon'><img src={heart} alt="love" /></span> by Shahd Fakhouri </p>
                <h5 className='copy-right'>© 2025 All rights reserved.</h5>
            </div>
            <div className="list">
                <ul className='navlist'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Footer