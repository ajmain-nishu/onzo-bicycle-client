import React, { useEffect, useState } from 'react';


//dashboard my orders section
const MySingleOrder = (props) => {
    const { _id, product, status } = props?.orders;
    const [singleServices, setSingleServices] = useState([])
    const [cancel, setCencel] = useState(false)

    //api call
    useEffect(() => {
        fetch('http://localhost:5000/exploreProduct')
            .then(response => response.json())
            .then(data => setSingleServices(data))
    }, [cancel])


    const myProducts = singleServices?.filter(item => item?._id === product)

    //delete button
    const itemDelete = id => {
        const proceed = window.confirm('Are you sure want to cancel?');
        if (proceed) {
            const uri = `http://localhost:5000/myOrders/${id}`

            fetch(uri, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount) {
                        alert('Cancel Successfully')
                        setCencel(!cancel);
                    } else {
                        setCencel(false);
                    }
                    window.location.reload()
                })
        }
    }


    return (
        <div className='col-lg-4 col-md-6 col-12 gy-4 gx-5'>
            
                <div className="p-2 card h-100">

                    {/* image part */}
                    <div>
                        <img src={myProducts[0]?.img} className="w-100" alt="" />
                    </div>

                    {/* text part */}
                    <div className="card-body">
                        <h2 className="card-title text-center">{myProducts[0]?.brand_name}</h2>
                        <h6 className="text-center">Price: {myProducts[0]?.price}</h6>
                        <p className="text-center">{myProducts[0]?.description.slice(0, 35)}</p>
                    </div>

                    <button className='btn btn-secondary mb-2'>{status}</button>

                    {/* cancel button */}
                    <button onClick={() => itemDelete(_id)} className='btn btn-outline-secondary'>Cancel</button>
                </div>
            
        </div>
    );
};

export default MySingleOrder;