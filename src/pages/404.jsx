import { Link } from 'react-router-dom';

function PageNottFound() {
    return (
        <div>
            <h1>Page not found !</h1>
            <Link to="/" replace={true} className="active">
                go to home
            </Link>
        </div>
    );
}

export default PageNottFound;
