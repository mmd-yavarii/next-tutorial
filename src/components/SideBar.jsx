import { FaListUl } from "react-icons/fa";

import { createQueryObject } from "../helpers/helper";
import styles from "./SideBar.module.css";
import { categories } from "../constant/categoryList";

function SideBar({ setQuery, query }) {
    // caegories
    function categoryHandler(event) {
        const { tagName } = event.target;
        const category = event.target.innerText.toLowerCase();

        setQuery((prev) => createQueryObject(prev, { category }));

        if (tagName != "LI") return;
    }

    return (
        <div className={styles.sidebar}>
            <div>
                <FaListUl />
                <p>Caegories</p>
            </div>

            <ul onClick={categoryHandler}>
                {categories.map((i) => (
                    <li key={i.id} className={query.category == i.type.toLowerCase() ? styles.selected : null}>
                        {i.type}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideBar;
