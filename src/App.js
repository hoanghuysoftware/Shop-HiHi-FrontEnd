import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import Product from './components/common/Product';
import Comment from './pages/Comment';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product-list" element={<Product />} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                    <Route path="/comment/:productId" element={<Comment />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
