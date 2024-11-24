import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
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
import { useDispatch } from 'react-redux';
import cartService from './services/cartService';
import { useEffect } from 'react';
import Header from './components/Header';
import ReturnPay from './pages/ReturnPay';
import PendingPay from './pages/PendingPay';

function LayoutWithHeader() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

function LayoutWithoutHeader() {
    return <Outlet />;
}

function App() {
    const dispatch = useDispatch();
    const userId = localStorage.getItem('user') === null ? 2 : localStorage.getItem('user'); // user id tai day

    useEffect(() => {
        const fetchCart = async () => {
            const response = await cartService.getCartByIdUser(userId);
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
                <Routes>
                    <Route element={<LayoutWithHeader />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/category" element={<Category />} />
                        <Route path="/product-list" element={<Product />} />
                        <Route path="/product/:productId" element={<ProductDetail />} />
                        <Route path="/comment/:productId" element={<Comment />} />
                        <Route path="/order/:orderId" element={<Order />} />
                        <Route path="/user/:userId/cart" element={<Cart />} />
                        <Route path="/user/:userId/order" element={<CheckOut />} />
                        <Route path="/user/:userId/info" element={<Info />} />
                    </Route>

                    <Route element={<LayoutWithoutHeader />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/admin" element={<AdminLayout />} />
                        <Route path="/pending-pay/:orderId" element={<PendingPay />} />
                        <Route path="/result-pay" element={<ReturnPay />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
