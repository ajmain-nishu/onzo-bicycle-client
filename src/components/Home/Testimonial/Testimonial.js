import React, { useEffect, useState } from 'react';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';



const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    // api call
    useEffect(() => {
        fetch("https://still-sands-78439.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    return (
        <div className="pb-5">
            <h2 className="text-center display-4 py-5 mt-5">---- Reviews -----</h2>
            
            {/* card */}
            <div className="container">
                <div className="col-12">
                    <div className="row pb-3">

                        {/* value pass in other component */}
                        {
                            reviews.map(review => <SingleTestimonial key={review._id} review={review}></SingleTestimonial>)
                        }

                    </div>
                </div>
            </div>
        </div>














    );
};

export default Testimonial;