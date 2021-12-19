import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import MySingleOrder from '../MySingleOrder/MySingleOrder';


// dashboard my orders section
const MyOrders = () => {
    const {user} = useAuth()
    const [myOrders, setMyOrders] = useState([])

    //api call
    useEffect(() => {
        fetch(`https://still-sands-78439.herokuapp.com/myOrders`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    }, [])

    //filter email
    const productItem = myOrders?.filter(item => item.email === user.email)

    return (
        <div>
            <h2 className="text-center my-5">My Total Orders: {productItem.length}</h2>
            {
                user.email && <div className='mt-5'>
                {
                    productItem[0] ? <h1 className='my-5 text-center'>Thank you for your orders</h1> 
                    : 
                    <h1 className='my-5 text-center'>You donot have any order</h1>
                }
                <div className="container">
                    <div className="row pb-5">

                        {/* value pass in other componet */}
                        {
                            productItem.map(orders => <MySingleOrder key={orders._id} orders={orders}></MySingleOrder>)
                        }
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default MyOrders;