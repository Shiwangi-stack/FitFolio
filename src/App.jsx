
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import AuthProvider from './Pages/AuthProvider'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import './App.css'
import Layout from './Pages/Layout'
import Women from './Pages/Sub-Pages/Women'
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import Feedback from './admin/Feedback';
import AddBlog from './admin/AddBlog';
import ViewBlog from './admin/ViewBlog';
import Blogs from './Pages/Blog';
import BlogDetail from './Pages/BlogDetail';
import AddCategory from './admin/AddCategory';
import ViewCategory from './admin/ViewCategory';
import AddProduct from './admin/AddProduct';
import ViewProduct from './admin/ViewProduct';
import Men from './Pages/Sub-Pages/Men';
import ProductDetail from './Pages/Sub-Pages/ProductDetail';
import UserLogin from './Pages/UserLogin';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import CartPage from './Pages/Cart';
import { CartProvider } from './Pages/CartContext';
import Checkout from './Pages/Checkout';
import ChangePassword from './Pages/ChangePassword';
import AdminOrder from './admin/AdminOrder';
import AdminOrderDetail from './admin/AdminOrderDetail';
import MyOrders from './Pages/MyOrders';
import OrderDetails from './Pages/OrderDetails';
import WishlistPage from './Pages/Wishlist';
import Kids from './Pages/Sub-Pages/Kids';
import Cosmetics from './Pages/Sub-Pages/Cosmetics';
import Accessories from './Pages/Sub-Pages/Accessories';

function App() {
  return (
    <>
    <BrowserRouter>
    <AuthProvider>
      <CartProvider>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Women" element={<Women />} />
      <Route path="/Men" element={<Men />} />
      <Route path="/Blogs" element={<Blogs/>} />
      <Route path="/blogdetail/:id" element={<BlogDetail/>} />
      <Route path="/productdetail/:id" element={<ProductDetail/>} />
      <Route path="/UserLogin" element={<UserLogin/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/CartPage/:userId" element={<CartPage/>}/>
      <Route path="/Checkout/:userId" element={<Checkout/>}/>
      <Route path="/ChangePassword" element={<ChangePassword/>}/>
      <Route path="/MyOrders/:id" element={<MyOrders/>}/>
      <Route path="/OrderDetails/:orderid" element={<OrderDetails/>}/>
      <Route path="/Wishlist" element={<WishlistPage/>}/>
      <Route path="/Kids" element={<Kids/>}/>
      <Route path="/Cosmetics" element={<Cosmetics/>}/>
      <Route path="/Accessories" element={<Accessories/>}/>
      </Route>

{/* Backend */}

      <Route path="" element={<AdminLayout/>}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
      <Route path="/addblog" element={<AddBlog/>}/>
      <Route path="/viewblog" element={<ViewBlog/>}/>
      <Route path="/addcategory" element={<AddCategory/>}/>
      <Route path="/viewcategory" element={<ViewCategory/>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
      <Route path="/viewproduct" element={<ViewProduct/>}/>
       <Route path="/AdminOrder" element={<AdminOrder/>}/>
      <Route path="/AdminOrderDetails/:orderId" element={<AdminOrderDetail/>}/>
      </Route>

    </Routes>
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
    </>
  )
}
export default App

