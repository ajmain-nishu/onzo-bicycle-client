import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';
import logo from '../../../Images/Logo/logo.png'



// navbar section
const Header = () => {
    const { logOut, user } = useAuth()

    return (
        <div>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className="container">

                    {/* header logo */}
                    <Link className="navbar-brand" to="/home">
                        <img className="navbar__img" src={logo} alt="Website Logo" />
                    </Link>


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* header link */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            {/* home link */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link fs-5 text-white"
                                    to="/home">
                                    Home
                                </Link>
                            </li>


                            {/* explore part */}
                            <li className="nav-item">
                                <Link className="text-white nav-link fs-5" to="/explore">
                                    Explore
                                </Link>
                            </li>


                            {user?.email ?
                                <div className="d-md-flex">


                                    {/* dashboard part */}
                                    <li className="nav-item">
                                        <Link className="nav-link text-white fs-5" to="/dashboard">
                                            DashBoard
                                        </Link>
                                    </li>


                                    <div>
                                        {/* log out button */}
                                        <div>
                                            <button className="text-white btn btn-outline-secondary btn-md mt-2" onClick={logOut}>Log Out</button>

                                            {/*sign in user name */}
                                            <span className="text-white"> Signed: {user?.displayName}</span>
                                        </div>
                                        
                                        
                                    </div>
                                </div>

                                :

                                <div className="d-md-inline-flex">

                                    {/* registration link */}
                                    <li className="nav-item text-white">
                                        <Link className="nav-link fs-5 text-white" to="/register">
                                            Register
                                        </Link>
                                    </li>

                                    {/* login link */}
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5 text-white" to="/login">
                                            Login
                                        </Link>
                                    </li>
                                </div>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};



export default Header;