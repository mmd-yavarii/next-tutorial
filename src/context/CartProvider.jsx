import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helpers/helper";

const CartContext = createContext();

const initialState = {
    selectedItems: [],
    itemsCouner: 0,
    total: 0,
    checkout: false,
};
function reducer(state, action) {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
                const newSelectedItems = [...state.selectedItems, { ...action.payload, quantity: 1 }];
                return {
                    ...state,
                    selectedItems: newSelectedItems,
                    ...sumProducts(newSelectedItems),
                    checkout: false,
                };
            }
            return state;

        case "REMOVE_ITEM":
            const updatedSelectedItems = state.selectedItems.filter((i) => i.id !== action.payload.id);
            return {
                ...state,
                selectedItems: updatedSelectedItems,
                ...sumProducts(updatedSelectedItems),
            };

        case "INCREASE":
            const increasedItems = state.selectedItems.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item,
            );
            return {
                ...state,
                selectedItems: increasedItems,
                ...sumProducts(increasedItems),
            };

        case "DECREASE":
            const decreasedItems = state.selectedItems.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item,
            );
            return {
                ...state,
                selectedItems: decreasedItems,
                ...sumProducts(decreasedItems),
            };

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            };

        default:
            throw new Error("Action is not defined");
    }
}

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

function useCart() {
    const result = useContext(CartContext);
    return [result.state, result.dispatch];
}

export { useCart, CartProvider as default };
