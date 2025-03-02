import { NavLink } from 'react-router-dom';

function Layout({ children }) {
    return (
        <div>
            <ul
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '250px',
                    margin: '1em auto',
                }}
            >
                <li>
                    <NavLink to="/" replace={true}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" replace={true}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" replace={true}>
                        Cart
                    </NavLink>
                </li>
            </ul>

            {children}
        </div>
    );
}

export default Layout;
