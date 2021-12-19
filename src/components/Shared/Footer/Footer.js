import React from "react";
import { NavLink } from "react-router-dom";
import footerLogo from '../../../Images/Logo/logo.png'


// footer section
const Footer = () => {
    return (
        <div>
            <div className="text-center bg-dark">
                
                <div className="py-4">
                    <img src={footerLogo} alt="" />
                </div>

                {/* footer text */}
                <p className="fs-5 text-white">Copyright &copy; 2021</p>
                <p className="fs-6 text-white">
                    Designed By:
                    <span className="text-white fw-bold text-secondary"> Ajmain Iqtidar Rahman</span>
                </p>

                {/* footer button */}
                <NavLink
                    className="text-white text-decoration-none btn btn-secondary mb-4"
                    to="/home"
                >
                    Home
                </NavLink>
            </div>
        </div>
    );
};



export default Footer;