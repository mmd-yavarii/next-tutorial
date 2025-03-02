import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductPage';
import Cart from './pages/Cart';
import PageNottFound from './pages/404';
import ProductsDetails from './pages/ProductsDetails';

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/products/:id" element={<ProductsDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/*" element={<PageNottFound />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
