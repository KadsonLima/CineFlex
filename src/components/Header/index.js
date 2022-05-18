import "./styles.css";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link style={{textDecoration:'none'}}to="/">
            <h3>CINEFLEX</h3>
            </Link>
        </header>
    )
}

export default Header;