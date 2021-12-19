import React from 'react';
import Rating from 'react-rating';
import './SingleTestimonial.css';

const SingleTestimonial = (props) => {

    const { rating, email, displayName, photoURL, comments} = props.review;

    return (
        <div className="col-lg-4 col-sm-6 col-12 gy-4 gx-5">
                <div className="card h-100 shadow-sm ">
    
                    {/* image part */}
                    <div className="mx-auto review__photo m-3">
                        <img className="review__photo__img w-100" src={photoURL} alt="no img" />
                    </div>
    
                    {/* text part */}
                    <div className="text-center px-4">
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly>
                        </Rating>
                        <h6 className="fs-5">{displayName}</h6>
                        <h5 className="text-muted fs-6">${email}</h5>
                        <p>{comments.slice(0, 50)}</p>
                    </div>
                </div>
            </div>
    );
};



export default SingleTestimonial;