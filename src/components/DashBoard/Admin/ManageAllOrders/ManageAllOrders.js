import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';


// dashboard manage all orders section
const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [status, setStatus] = useState("");
    const { user } = useAuth()


    // input field
    const handleStatus = (e) => {
        setStatus(e.target.value);
    };

    // update button
    const handleUpdate = (id) => {
        const process = window.confirm('Are you want to sure update?')
        if (process) {
            fetch(`https://still-sands-78439.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });
        }
    };

    //api call
    useEffect(() => {
        fetch("https://still-sands-78439.herokuapp.com/myOrders")
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, []);
    
    return (
        <div>
            {
                user.email && <div>
                    <h1 className='m-5 text-center'>All User Orders</h1>
                    <table className="table table-hover table-striped w-75 mx-auto">
                        <thead>
                            <tr>
                                <th scope="col">SL No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        {/* mapping */}
                        {allOrders?.map((pd, index) => (
                            <tbody>
                                <tr>
                                    <td key={pd?._id}>{index + 1}</td>
                                    <td>{pd?.brand_name}</td>
                                    <td>{pd?.email}</td>
                                    <td>
                                    <input
                                        className="w-100 form-control"
                                        onChange={handleStatus}
                                        type="text"
                                        defaultValue={pd.status}
                                        placeholder="type Shipped"
                                    />
                                    </td>
                                    <td>
                                        <button onClick={() => handleUpdate(allOrders[index]?._id)} className="btn btn-secondary">Update</button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            }
        </div>
    );
};



export default ManageAllOrders;