import React from 'react';
import { Link } from 'react-router-dom';
import './HomeService.css';
import Rating from 'react-rating';



// home service card section
const HomeService = (props) => {
    //destructuring
    const { _id, brand_name, img, description, price, star } = props.homeservice;
    return (
        <div className="col-lg-4 col-sm-6 col-12 gy-4 gx-5">
            <div className="card__hover h-100">

                {/* image part */}
                <div className="text-center mb-3 homeservice__img">
                    <img className="img-fluid" src={img} alt="" />
                </div>

                {/* text part */}
                <div className="text-center px-4">
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly>
                </Rating>
                    <h2 className="fs-4"><i>{brand_name}</i></h2>
                    <p className="text-muted">{description.slice(0, 60)}....</p>
                    <h6 className="text-muted">Price: ${price}</h6>

                    {/* button */}
                    <Link to={`/purchase/${_id}`}>
                        <button className="btn homeservice__btn mb-3">Purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};




export default HomeService;