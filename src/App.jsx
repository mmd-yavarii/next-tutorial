import { Routes, Route, Navigate } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import DetailesPage from "./pages/DetailesPage";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/404";
import ProductProvider from "./context/ProductProvider";

function App() {
    return (
        <>
            <ProductProvider>
                <Routes>
                    <Route index element={<Navigate to="/products" replace={true} />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/products/:id" element={<DetailesPage />} />
                    <Route path="/checkout" element={<Checkout />} />

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </ProductProvider>
        </>
    );
}

export default App;
