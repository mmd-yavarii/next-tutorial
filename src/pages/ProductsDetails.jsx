import { useEffect, useReducer, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Contexts/CartProvider';

const initialState = {
    isLoading: false,
    error: '',
    productData: null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return { isLoading: true, error: '', productData: null };
        case 'SUCCESS':
            return { isLoading: false, error: '', productData: action.payload };
        case 'FAILED':
            return {
                isLoading: false,
                error: action.payload,
                productData: null,
            };
        default:
            throw new Error('Action is not defined');
    }
}

function ProductsDetails() {
    const { cartData, dispachCart } = useContext(CartContext);
    const [productInfo, dispatchProduct] = useReducer(reducer, initialState);
    const [countCartAdded, setCountCartAdded] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        dispatchProduct({ type: 'LOADING' });

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch product data');
                return res.json();
            })
            .then((json) => dispatchProduct({ type: 'SUCCESS', payload: json }))
            .catch((err) =>
                dispatchProduct({ type: 'FAILED', payload: err.message }),
            );
    }, [id]);

    function increase() {
        const product = { ...productInfo.productData };
        setCountCartAdded((prev) => prev + 1);
        dispachCart({ type: 'ADD', payload: product });
    }

    function decrease() {
        setCountCartAdded((prev) => Math.max(prev - 1, 0));
        dispachCart({ type: 'REMOVE', payload: id });
    }

    if (productInfo.isLoading) return <h1>Loading...</h1>;
    if (productInfo.error) return <h1>{productInfo.error}</h1>;
    if (!productInfo.productData) return null;

    const { title, image, price, description } = productInfo.productData;

    return (
        <div style={{ padding: '1em', maxWidth: '600px', margin: 'auto' }}>
            <h2>{title}</h2>
            <img src={image} alt={title} style={{ width: '100px' }} />
            <p>{description}</p>
            <h3>${price}</h3>

            <div style={{ display: 'flex', gap: '1em', marginTop: '1em' }}>
                {countCartAdded > 0 ? (
                    <>
                        <button onClick={increase}>Increase</button>
                        <p>{countCartAdded}</p>
                        <button onClick={decrease}>Decrease</button>
                    </>
                ) : (
                    <button onClick={increase}>Add To Cart</button>
                )}
            </div>
        </div>
    );
}

export default ProductsDetails;
