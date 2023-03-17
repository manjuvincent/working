import './NavBar.css';
import { NavLink } from "react-router-dom";
import { Home} from './pages/Home'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from 'react-icons/ai';



export default function NavBar() {
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    CodeBucks
                    <i className="fas fa-code"></i>
                    {/* <FontAwesomeIcon icon="fas fa-code" /> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-bars-staggered" /> */}
                </NavLink>
                <div className={click ? "nav-menu active" : "nav-menu"} >
                    <div className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            About
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink
                            exact
                            to="/blog"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Blog
                        </NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink
                            exact
                            to="/contact"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Contact Us
                        </NavLink>
                    </div>
                </div>
                <div className="nav-icon" onClick={handleClick}>
                    {/* <FontAwesomeIcon icon={click ? "fa fa-times" : "fa-solid fa-bars"} /> */}
                    {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

                    { click ?
                     <AiOutlineClose color="grey" size="20px" />:
                  <GiHamburgerMenu color="grey" size="20" />
                    }
                </div>

            </div>
        </nav>
        </>
    )
}