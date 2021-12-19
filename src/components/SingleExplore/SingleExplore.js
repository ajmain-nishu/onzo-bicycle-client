import React from 'react';
import { Link } from 'react-router-dom';


//navbar explore section
const SingleExplore = (props) => {
    const { _id, brand_name, img, description, price, star } = props.product;
    
        return (
            <div className="col-lg-4 col-sm-6 col-12 gy-4 gx-5">
                <div className="card h-100 shadow-sm ">
    
                    {/* image part */}
                    <div className="text-center mb-3">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
    
                    {/* text part */}
                    <div className="text-center px-4">
                        <h2 className="fs-3">{brand_name}</h2>
                        <h5 className="text-muted">Price: ${price}</h5>
                        <h6>Rating: {star}</h6>
                        <p className="text-muted">{description.slice(0, 70)}....</p>
    
                        {/* button */}
                        <Link to={`/purchase/${_id}`}>
                            <button className="btn homeservice__btn mb-4">Purchase</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
};



export default SingleExplore;