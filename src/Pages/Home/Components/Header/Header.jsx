import './Header.css';
import { useRef } from 'react';

function Header(){
    
    const navRef = useRef();
    const removeRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsiveNav");
        removeRef.current.classList.toggle("removeBtn");
    }

    return(
        <header>
            <a href="#" className='brand'>
                <img src={require('../../../../Assets/logo.png')} alt="logo" />
                <h1>Game<span id="square">Square</span></h1>
            </a>

            <ul className='navigationList' ref={navRef}>
                <a href=""><li id='currentPage'>Home</li></a>
                <a href=""><li>Pricing</li></a>
                <a href=""><li>About</li></a>
                <a href=""><li>Features</li></a>
                <button className='btnReset' onClick={showNavbar}>
                    <li className='menuIcon' id="closeNav">
                        <img src={require('../../../../Assets/coloredMenu.png')} alt="" />
                        <p>Menu</p>
                    </li>
                </button>
            </ul>

            <img src={require('../../../../Assets/hearts.png')} alt="" id='hearts'/>
            <button className='menuIcon btnReset ' onClick={showNavbar} ref={removeRef}>
                <img src={require('../../../../Assets/Menu.png')} alt="" />
                <p>Menu</p>
            </button>
        </header>
    );
}

export default Header;