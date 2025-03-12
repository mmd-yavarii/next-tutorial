import { PropagateLoader } from "react-spinners";

import styles from "./Loader.module.css";

function Loader() {
    return (
        <div className={styles.loader}>
            <PropagateLoader width="100px" color="#fe5d42" />
        </div>
    );
}

export default Loader;
