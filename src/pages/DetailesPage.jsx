import { Link, useParams } from "react-router-dom";
import { useProductDetailes } from "../context/ProductProvider";
import Loader from "../components/Loader";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";

import styles from "./DetailesPage.module.css";

function DetailesPage() {
    const { id } = useParams();
    const product = useProductDetailes(id);

    if (!product) return <Loader />;

    return (
        <div className={styles.container}>
            <img src={product.image} alt={product.title} />

            <div className={styles.information}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.category}>
                    <SiOpenproject />
                    {product.category}
                </p>

                <div>
                    <span className={styles.price}>
                        <IoMdPricetag />
                        {product.price}
                    </span>
                    <Link to="/products">
                        <span>Back To Shop</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DetailesPage;
