import logo from '../../assets/globe.png'
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className='navbar'>
            <img src={logo} alt="globe" className='globe' />
            <h1 className='title'>my travel journal.</h1>
        </nav>
    )
}