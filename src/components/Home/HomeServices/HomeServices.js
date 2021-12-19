import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomeService from '../HomeService/HomeService';
import './HomeServices.css'



// home service section
const HomeServices = () => {
    const [homeservices, setHomeServices] = useState([])

    // api call
    useEffect(() => {
        fetch("http://localhost:5000/homepageProduct")
            .then((res) => res.json())
            .then((data) => setHomeServices(data));
    }, []);
    
    
    return (
        <div className="py-5">

            {/* text section */}
            <h2 className="text-center display-4 pt-5 pb-1 mt-5">---- Products -----</h2>
            {/* <p className="text-center text-muted fs-6 pb-5">This is our Products. You can find any product what you want</p> */}
            <div className="container">
                <div className="col-12">
                    <div className="row pb-3">

                        {/* value pass in other component */}
                        {
                            homeservices.map(homeservice => <HomeService key={homeservice._id} homeservice={homeservice}></HomeService>)
                        }

                    </div>
                    
                </div>
            </div>

            <NavLink className="text-center d-block" to="/explore">
                    <button className="btn homeservice__btn__outline">More Explores</button>
            </NavLink>
                    
        </div>
    );
};




export default HomeServices;