import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';



// navbar login section
const Login = () => {
    const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();

    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    // email
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    // password
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    // login email
    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();

        loginWithEmailAndPassword(email, password)
            .then((res) => {
                setIsLoading(true)
                setUser(res.user);
                history.push(url)
            })
            .catch((error) => {
                setError('Please correct email or password')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    
    //login google
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };


    return (
        <div className="login__bg">
            <div className="container">
                <div className="row">

                    {/* login form */}
                    <div className="col-md-4 col-12 pt-5 mt-5">
                        <div className="bg-light shadow rounded px-4 py-2 text-center form-color">
                            <form
                                onSubmit={handleLoginWithEmailAndPassword}>
                                <h3 className="pt-3">Login Today</h3>

                                {/* email part */}
                                <div className="my-3">
                                    <input
                                        onBlur={handleEmail}
                                        className="form-control form-control-lg"
                                        type="email"
                                        name=""
                                        id="login_email"
                                        placeholder="Email"
                                    />
                                </div>

                                {/* password part */}
                                <div className="my-3">
                                    <input
                                        onBlur={handlePassword}
                                        className="form-control form-control-lg"
                                        type="password"
                                        name=""
                                        id="login_password"
                                        placeholder="Password"
                                    />
                                </div>

                                {/* error part */}
                                <div className="text-danger">{error}</div>

                                {/* login button */}
                                <div className="my-3">
                                    <input className="btn btn-outline-secondary btn-lg" type="submit" value="Log In" />
                                </div>
                            </form>


                            <p className="pb-1"></p>
                            <hr />

                            {/* google sign in */}
                            <div className="mb-3 mt-4">
                                <button className="btn btn-outline-secondary btn-md" onClick={handleGoogleLogin}>Sign In With Google</button>
                            </div>

                            {/* new register link */}
                            <Link to="/register"><button className="btn btn-secondary btn-md mb-3 mt-1">Create New Account</button></Link>
                        </div>

                    </div>

                    {/* gap section */}
                    <div className="col-md-8 col-12"></div>
                </div>
            </div>
        </div>
    );
};




export default Login;