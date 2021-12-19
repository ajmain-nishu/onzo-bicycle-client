import React from "react";
import perfectImg from "../../../Images/Perfect/perfect.jpg";


// home about section
const About = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                <h2 className="text-center display-4 pt-3 pb-5 mt-5">Discover ONZO</h2>
                    
                    {/* image part */}
                    <div className="col-md-6 col-12 mt-4">
                        <img className="w-100" src={perfectImg} alt="" />
                    </div>

                    {/* description part */}
                    <div className="col-md-6 col-12">
                        <div className="pt-5 px-4">
                            <h2>Choose your Bicycle</h2>
                            <p>
                            A bicycle (or bike) is a small, human powered land vehicle with a seat, two wheels, two pedals, and a metal chain connected to cogs on the pedals and rear wheel. A frame gives the bike strength, and the other parts are attached to the frame. The name comes from these two words - the prefix.
                            </p>
                            <ul>
                                <li>7-25 days on delivary</li>
                                <li>human powered land vehicle with a seat</li>
                                <li>two wheels, two pedals</li>
                                <li>metal chain connected to cogs on the pedals and rear wheel</li>
                                <li>Leak-proof design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default About;