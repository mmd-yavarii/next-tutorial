import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductProvider";

import styles from "./ProductsPage.module.css";

import { filterProducts, getInitialQuery, searchProducts } from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

function ProductsPage() {
    const products = useProducts();
    const [displayed, setDisplayed] = useState([]);

    const [search, setSearch] = useState("");
    const [query, setQuery] = useState({});

    const [searchParams, setSearchParams] = useSearchParams();

    // link display with products
    useEffect(() => {
        setSearch(query.search || "");
        setDisplayed(products);
        setQuery(getInitialQuery(searchParams));
    }, [products]);

    useEffect(() => {
        let finalProducts = searchProducts(products, query.search);
        finalProducts = filterProducts(finalProducts, query.category);
        setDisplayed(finalProducts);
        setSearchParams(query);
    }, [query]);

    return (
        <>
            <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />

            <div className={styles.container}>
                <div className={styles.products}>
                    {!products.length && <Loader />}

                    {displayed.map((product) => (
                        <Card key={product.id} data={product} />
                    ))}
                </div>

                <SideBar setQuery={setQuery} query={query} />
            </div>
        </>
    );
}

export default ProductsPage;
