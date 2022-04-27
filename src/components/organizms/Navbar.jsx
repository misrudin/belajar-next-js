import styles from '@styles/Organizms.module.css'
import {Search} from "@components/molechules";
import {FiBell} from "react-icons/fi";
import {siteIcon} from "@statics/icons";
import Link from 'next/link'
import Cookies from 'js-cookie'

const Navbar = () => {

    const logout = () => {
        Cookies.remove('token')
        window.location.reload()
    }
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_left}>
                <img src={siteIcon} alt="Post" className={styles.logo}/>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/post">
                            <a>Posts</a>
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link href="/gallery">
                            <a>Gallery</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.navbar_right}>
                <Search/>
                <a href="#" className={styles.notification_button}>
                    <FiBell/>
                </a>
                <span className={styles.divider_vertical}/>
                <a href={void (0)} onClick={logout} className={styles.profile}>
                    <img src="https://i.pravatar.cc/300" alt="Profile"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar