import { Link } from "react-router-dom";

import styles from "./Layout.module.css";

import { PiShoppingCartFill } from "react-icons/pi";
import { useCart } from "../context/CartProvider";

function Layout({ children }) {
    const [state] = useCart();

    return (
        <>
            <header className={styles.header}>
                <Link to="/products">Online Shop</Link>
                <Link to="/checkout">
                    <div>
                        <PiShoppingCartFill />
                        {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
                    </div>
                </Link>
            </header>

            {children}
        </>
    );
}

export default Layout;
