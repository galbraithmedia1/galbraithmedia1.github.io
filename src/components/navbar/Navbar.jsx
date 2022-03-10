import React, {useState} from 'react'
import {RiMenu3Line, RiCloseLine,} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/icon.png'

const Menu = () => (
   <>
                    <p>
                        <a className='a-tag' href="#home">Home </a>
                    </p>
                    <p>
                        <a href="#wgpt3">Portfolio</a>
                    </p>
                    <p>
                        <a href="#possibility">About Me </a>
                    </p>
                    <p>
                        <a href="#features">Contact </a>
                    </p>
                    <p>
                        <a href="#blog">Passion Projects</a>
                    </p>
</>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className ='gpt3__navbar-links_logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div >
            <div className="gpt3__navbar-sign">
                <p></p>
                <button type="button">
                Github
                </button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" size= {27} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line color="fff" size= {27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links"><Menu /></div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                <p></p>
                <button type="button">
                
                <a href="https://github.com/galbraithmedia1">Github</a>
                </button>
            </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
