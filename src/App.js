import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Product from './components/common/Product';
import Comment from './pages/Comment';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Info from './pages/Info';
import Order from './pages/Order';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import Category from './pages/Category';
import AdminLayout from './admin/AdminLayout';
import { setCart, setItemForOrder, setQuantity } from './redux/actions/CartAction';
import { setSearch } from './redux/actions/SearchAction';
// import { login, logout } from './redux/actions/UserAction';
import { useDispatch } from 'react-redux';
import cartService from './services/cartService';
import { useEffect } from 'react';
import Header from './components/Header';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchCart = async () => {
            const response = await cartService.getCart(2);
            dispatch(setCart(response.data.shoppingCartDetails));
            dispatch(setQuantity(response.data.totalQuantity));
            dispatch(setItemForOrder([]));
            dispatch(setSearch(''));
        };

        fetchCart();
    }, [dispatch]);

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/product-list" element={<Product />} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                    <Route path="/comment/:productId" element={<Comment />} />
                    <Route path="/order/:orderId" element={<Order />} />
                    <Route path="/user/:userId/cart" element={<Cart />} />
                    <Route path="/user/:userId/order" element={<CheckOut />} />
                    <Route path="/user/:userId/info" element={<Info />} />
                    <Route path="/admin" element={<AdminLayout />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
