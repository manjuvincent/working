import "./Header.css";
// import accurate from '../images/accurateonline.png';
import accurate from '../../images/accurateonline.png';
import React, { useState } from 'react';
// import {GiHamburgerMenu } from 'react-icons/gi';
// import GiHamburgerMenu from '../images/menu.png'
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from 'react-icons/ai';

export default function Header() {


    const [showClose, setShowclose] = useState(false)


    return (
        <div className="Header" >
            <div className="Header_col1">
                <div className="Header_col1_col1" >
                    <img src={accurate} style={{ height: 100, width: 100 }} />
                </div>
                <div className="Header_col1_col2" >
                    <h1>ACCURATE ONLINE</h1>
                    <span>ERP SOFTWARE</span>
                </div>
                {/* <img src={GiHamburgerMenu} style={{ width: "30px", height: "30px" }} /> */}
                <div className="menuicon" onClick= {() =>setShowclose(!showClose)}>
                    { showClose ?
                     <AiOutlineClose color="grey" size="20px" />:
                  <GiHamburgerMenu color="grey" size="20" />
                    }
                </div>
            </div>
       
            {/* <div className={`Header_col3  ${showNavbar && 'active'}`}> */}
            { showClose &&
            <div className="Header_col3 ">

                <div className="Header_col3_row2_col1">
                    <div className="Header_col3_row2_col1_label">
                        <label>HOME</label>
                    </div>
                    <div className="Header_col3_row2_col1_label">
                        <label>ABOUT US</label>
                    </div>
                    <div className="Header_col3_row2_col1_label">
                        <label>ACCURATE ERP</label>
                    </div>
                    <div className="Header_col3_row2_col1_label">
                        <label>RENT-A-CAR SOFTWARE</label>
                    </div>
                    <div className="Header_col3_row2_col1_label">
                        <label>NETWORKING SERVICES</label>
                    </div>
                    <div className="Header_col3_row2_col1_label">
                        <label>LINUX SOLUTIONS</label>
                    </div>

                </div>
                <div className="Header_col3_row2_col2">
                    <button>Contact Us</button>
                    <button>Customer Login</button>
                    {/* <button></button> */}
                </div>

            </div>
}
            {/* <div className="Header_col3">
                <div className="Header_col3_row1"></div>
                <div className="Header_col3_row2" >
                    <div className="Header_col3_row2_col1">
                        <label>Features</label>
                        <label>Company</label>
                        <label>Pricing</label>
                        <label>Support</label>
                        <label>Support</label>
                        <label>Contact Us</label>
                    </div>
                    <div className="Header_col3_row2_col2">
                        <button>Buy Now</button>
                        <button>Free Trial</button>
                        <button>Login</button>
                    </div>
                </div>
            </div> */}




        </div>
    )

}