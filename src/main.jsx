import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import DataProvider from './Contexts/DataProvider.jsx';
import CartProvider from './Contexts/CartProvider.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <DataProvider>
            <CartProvider>
                {/*  */}
                <StrictMode>
                    <App />
                </StrictMode>
            </CartProvider>
            {/*  */}
        </DataProvider>
    </BrowserRouter>,
);
