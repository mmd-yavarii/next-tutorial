import React, { use } from "react";
import { Link } from "react-router-dom";

import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import styles from "./Card.module.css";

import { productQuantity, shorternText } from "../helpers/helper.js";
import { useCart } from "../context/CartProvider.jsx";

function Card({ data }) {
    const { id, title, price, image } = data;

    // cart context
    const [state, dispatch] = useCart();
    const qty = productQuantity(state, id);

    function clickHandler(type) {
        dispatch({ type: type, payload: data });
    }

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3>{shorternText(title)}</h3>
            <p>{price} $</p>

            <div className={styles.actions}>
                <Link to={`/products/${id}`}>
                    <TbListDetails />
                </Link>

                <div>
                    {qty == 1 && (
                        <button onClick={() => clickHandler("REMOVE_ITEM")}>
                            <MdDeleteOutline />
                        </button>
                    )}
                    {qty > 1 && <button onClick={() => clickHandler("DECREASE")}>-</button>}

                    {!!qty && <span>{qty}</span>}

                    {qty == 0 ? (
                        <button onClick={() => clickHandler("ADD_ITEM")}>
                            <TbShoppingBagCheck />
                        </button>
                    ) : (
                        <button onClick={() => clickHandler("INCREASE")}>+</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;
