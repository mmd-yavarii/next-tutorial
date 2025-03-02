import { useContext } from 'react';
import { CartContext } from '../Contexts/CartProvider';

function Cart() {
    const { cartData, dispachCart } = useContext(CartContext);

    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '1em',
        margin: '1em',
        border: '1px solid #ccc',
        padding: '1em',
        borderRadius: '10px',
    };

    const deleteHandler = (id) => {
        dispachCart({ type: 'REMOVE', payload: id });
    };

    const totalPrice = cartData
        .reduce((acc, item) => acc + item.price, 0)
        .toFixed(2);

    return (
        <div>
            <h1>Cart</h1>

            {cartData.length ? (
                <>
                    <h1 style={{ margin: '1em', textAlign: 'center' }}>
                        Total Price: ${totalPrice}
                    </h1>

                    {cartData.map((item) => (
                        <div key={item.cartId} style={cardStyle}>
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{ width: '60px' }}
                            />
                            <p>{item.title}</p>
                            <button onClick={() => deleteHandler(item.cartId)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </>
            ) : (
                <p style={{ textAlign: 'center', margin: '2em auto' }}>
                    Cart is empty
                </p>
            )}
        </div>
    );
}

export default Cart;
