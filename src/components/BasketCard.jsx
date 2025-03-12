import { shorternText } from "../helpers/helper";
import { RiDeleteBin6Line } from "react-icons/ri";

import styles from "./BasketCard.module.css";

function BasketCard({ data, clickHandler }) {
    return (
        <div className={styles.card}>
            <img src={data.image} alt={data.title} />

            <p>{shorternText(data.title)}</p>

            <div className={styles.actions}>
                {data.quantity == 1 && (
                    <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
                        <RiDeleteBin6Line />
                    </button>
                )}

                {data.quantity > 1 && <button onClick={() => clickHandler("DECREASE", data)}>-</button>}

                <span>{data.quantity}</span>

                <button onClick={() => clickHandler("INCREASE", data)}>+</button>
            </div>
        </div>
    );
}

export default BasketCard;
