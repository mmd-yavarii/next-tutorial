import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartProvider";

function Checkout() {
    const [state, dispatch] = useCart();

    function clickHandler(type, data) {
        dispatch({ type: type, payload: data });
    }

    return (
        <div>
            <div>
                {state.selectedItems.map((i) => (
                    <BasketCard data={i} key={i.id} clickHandler={clickHandler} />
                ))}
            </div>
        </div>
    );
}

export default Checkout;
