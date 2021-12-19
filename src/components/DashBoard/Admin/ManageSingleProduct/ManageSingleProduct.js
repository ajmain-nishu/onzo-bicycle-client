import React, { useState } from 'react';
import Rating from 'react-rating';


// dashboard manage products section
const ManageSingleProduct = (props) => {
    const { _id, brand_name, img, description, price, star } = props.product;
    const [cancel, setCencel] = useState(false)

    // delete button
    const itemDelete = id => {
        const proceed = window.confirm('Are you sure want to delete ?');
        if (proceed) {
            const uri = `http://localhost:5000/exploreProduct/${id}`

            fetch(uri, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount) {
                        alert('Delete Successfully')
                        setCencel(!cancel);
                    } else {
                        setCencel(false);
                    }
                    window.location.reload()
                })
        }
    }

    return (
        <div className="col-lg-4 col-md-6 col-12 gy-4 gx-5">
                <div className="card h-100 shadow-sm ">
    
                    {/* image part */}
                    <div className="text-center mb-3">
                        <img className="w-100" src={img} alt="" />
                    </div>
    
                    {/* text part */}
                    <div className="text-center px-4">
                        <h2 className="fs-3">{brand_name}</h2>
                        <h5 className="text-muted">Price: ${price}</h5>
                        <Rating
                            initialRating={star}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly>
                        </Rating>
                        <p>{star} / 5</p>
                        <p className="text-muted">{description.slice(0, 70)}....</p>
    
                        {/* button */}
                        <button onClick={() => itemDelete(_id)} className='btn btn-secondary mb-4'>Delete</button>
                    </div>
                </div>
            </div>
    );
};

export default ManageSingleProduct;