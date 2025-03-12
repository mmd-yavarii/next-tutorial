import { Routes, Route, Navigate } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import DetailesPage from "./pages/DetailesPage";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/404";
import ProductProvider from "./context/ProductProvider";
import CartProvider from "./context/CartProvider";
import Layout from "./layout/Layout";

function App() {
    return (
        <ProductProvider>
            <CartProvider>
                <Layout>
                    <Routes>
                        <Route index element={<Navigate to="/products" replace={true} />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/products/:id" element={<DetailesPage />} />
                        <Route path="/checkout" element={<Checkout />} />

                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Layout>
            </CartProvider>
        </ProductProvider>
    );
}

export default App;
