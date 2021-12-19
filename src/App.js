import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound'
import Explore from './components/Explore/Explore';
import Purchase from './components/Purchase/Purchase';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import MyOrders from './components/DashBoard/User/MyOrders/MyOrders';
import Pay from './components/DashBoard/User/Pay/Pay';
import Review from './components/DashBoard/User/Review/Review';
import AddProduct from './components/DashBoard/Admin/AddProduct/AddProduct';
import MakeAdmin from './components/DashBoard/Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from './components/DashBoard/Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from './components/DashBoard/Admin/ManageProducts/ManageProducts';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';





function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/pay">
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/addproduct">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manageallorders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path="/manageproducts">
            <ManageProducts></ManageProducts>
          </PrivateRoute>
          <PrivateRoute exact path="/purchase/:serviceId">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/register">
            <Registration></Registration>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}



export default App;