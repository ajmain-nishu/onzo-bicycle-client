import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../Admin/AddProduct/AddProduct';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import MyOrders from '../User/MyOrders/MyOrders';
import Pay from '../User/Pay/Pay';
import Review from '../User/Review/Review';



// navbar dashboard section
const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    // api call
    useEffect(() => {
        fetch(`http://localhost:5000/makeAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-12 bg-dark text-center p-0">

                        {/* <h5>Dashboard</h5> */}
                        
                        {/* default link */}
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-white" to={`${url}`}>
                            </Link>
                        </li>

                        {/* my order link */}
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-white" to={`${url}/myorders`}>
                                My Orders
                            </Link>
                        </li>

                        {/* review link */}
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-white" to={`${url}/review`}>
                                Review
                            </Link>
                        </li>

                        {/* pay link */}
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-white" to={`${url}/pay`}>
                                Pay
                            </Link>
                        </li>

                        {/* log out link */}
                        <li className="nav-item">
                            <button className="text-white btn btn-outline-secondary btn-md mt-2" onClick={logOut}>Log Out</button>
                        </li>


                        {/* admin part */}
                        <div>

                            {isAdmin && (
                                <div>
                                    
                                    {/* add product link */}
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5 text-white" to={`${url}/addproduct`}>
                                            Add Product
                                        </Link>
                                    </li>

                                    {/* make as admin link */}
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5 text-white" to={`${url}/makeadmin`}>
                                            Make Admin
                                        </Link>
                                    </li>

                                    {/* manage products link */}
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5 text-white" to={`${url}/manageproducts`}>
                                            Manage Products
                                        </Link>
                                    </li>

                                    {/* manage all orders link */}
                                    <li className="nav-item">
                                        <Link className="nav-link fs-5 text-white mb-4" to={`${url}/manageallorders`}>
                                            Manage All Orders
                                        </Link>
                                    </li>
                                </div>
                            )}
                        </div>
                    </div>


                    {/* componet part */}
                    <div className="col-lg-10 col-md-9 col-12 p-0 container-fluid">
                        <Switch>
                            <Route exact path={path}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/addproduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route exact path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            <Route exact path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                            <Route exact path={`${path}/manageallorders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default DashBoard;