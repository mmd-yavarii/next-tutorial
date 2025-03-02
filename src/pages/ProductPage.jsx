import { useContext } from 'react';
import { DataContext } from '../Contexts/DataProvider';
import { Link } from 'react-router-dom';

function ProductsPage() {
    const { data } = useContext(DataContext);

    const itemStyle = {
        padding: '1em',
        border: '1px solid #ccc',
        borderRadius: '10px',
        margin: '1em',
        display: 'flex',
        gap: '1em',
    };

    return (
        <div>
            <h1>Products</h1>
            {data.data.map((item) => (
                <Link to={`/products/${item.id}`} key={item.id}>
                    <div style={itemStyle}>
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: '60px' }}
                        />
                        <p>{item.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ProductsPage;
