import { v4 as uuidv4 } from 'uuid';

import { createContext, useReducer } from 'react';

export const CartContext = createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, { ...action.payload, cartId: uuidv4() }];

        case 'REMOVE':
            return state.filter((item) => item.cartId !== action.payload);

        default:
            throw new Error('Action is not defined');
    }
}

function CartProvider({ children }) {
    const [cartData, dispachCart] = useReducer(reducer, []);

    return (
        <CartContext.Provider value={{ cartData, dispachCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
