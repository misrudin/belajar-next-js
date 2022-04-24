import styles from '@styles/Molechules.module.css'
import {BiSearch} from "react-icons/bi";

const Search = () => {
    return (
        <div className={styles.search}>
            <input type="text" placeholder="Search"/>
            <BiSearch/>
        </div>
    )
}

export default Search