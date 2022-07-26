import './header.css'
import { Link } from 'react-router-dom';
function Header(){
    return(
        <header>
            <Link to='/' className='logo'>CINELIST</Link>
            <Link to='/favoritos' className='meus-favoritos'>Meus filmes</Link>


        </header>
    );
}


export default Header;