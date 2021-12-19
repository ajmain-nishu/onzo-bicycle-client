import React, { useEffect, useState } from 'react';
import ManageSingleProduct from '../ManageSingleProduct/ManageSingleProduct';


// dashboard manage products section
const ManageProducts = () => {
    const [products, setProducts] = useState([])

    // api call
    useEffect(() => {
        fetch("http://localhost:5000/exploreProduct")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    
    return (
        <div className="homeservices__bg py-5">

            {/* text section */}
            <h2 className="text-center display-4 fw-bold pt-5 pb-4 mt-5">Products We Offer</h2>
            <p className="text-center text-muted fs-6 pb-5">This is our products. You can find any product what you want</p>
            <div className="container">
                <div className="col-12">
                    <div className="row pb-3">

                        {/* value pass in other component */}
                        {
                            products.map(product => <ManageSingleProduct key={product._id} product={product}></ManageSingleProduct>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;