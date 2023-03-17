import "./Headerbar.css";
import { NavLink } from "react-router-dom";
import accurate from '../../images/accurateonline.png';
import React, { useState } from 'react';
// import {GiHamburgerMenu } from 'react-icons/gi';
// import GiHamburgerMenu from '../images/menu.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from 'react-icons/ai';

export default function Headerbar() {
    const [showClose, setShowclose] = useState(false);
    const handleClick = () => setShowclose(!showClose);

    return (
        <div className="Headerbar" >
            <div className="Headerbar_col1">
                <NavLink exact to="/" className="Headerbar_col1_col1" >
                    <img src={accurate} style={{ height: 100, width: 100 }} />
                </NavLink>
                <div className="Headerbar_col1_col2" >
                    <h1>ACCURATE ONLINE</h1>
                    <span>ERP SOFTWARE</span>
                </div>
                {/* <img src={GiHamburgerMenu} style={{ width: "30px", height: "30px" }} /> */}
                {/* <div className="menuicon" onClick={() => setShowclose(!showClose)}> */}
                <div className="menuicon" onClick={handleClick}>
                    {showClose ?
                        <AiOutlineClose color="grey" size="20px" /> :
                        <GiHamburgerMenu color="grey" size="20" />
                    }
                </div>
            </div>

            {/* <div className={`Headerbar_col3  ${showNavbar && 'active'}`}> */}
            {/* {showClose && */}
            <div className="Headerbar_col3 ">

                <div className={showClose ? "Headerbar_col3_row2_col1 active " : "Headerbar_col3_row2_col1"}>
                    <div className="Headerbar_col3_row2_col1_label">
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            HOME
                        </NavLink>
                    </div>
                    <div className="Headerbar_col3_row2_col1_label">
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            ABOUT US
                        </NavLink>
                    </div>
                    <div className="Headerbar_col3_row2_col1_label">
                        <label>ACCURATE ERP</label>
                    </div>
                    <div className="Headerbar_col3_row2_col1_label">
                        <label>RENT-A-CAR SOFTWARE</label>
                    </div>
                    <div className="Headerbar_col3_row2_col1_label">
                        <label>NETWORKING SERVICES</label>
                    </div>
                    <div className="Headerbar_col3_row2_col1_label">
                        <label>LINUX SOLUTIONS</label>
                    </div>

                </div>
                <div className="Headerbar_col3_row2_col2">
                    <button>Contact Us</button>
                    <button>Customer Login</button>
                    {/* <button></button> */}
                </div>

            </div>
            {/* } */}
           

        </div>
    )

}