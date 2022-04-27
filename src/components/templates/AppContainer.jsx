import {Footer, Navbar} from "@components/organizms";
import styles from '@styles/Templates.module.css'
import {Spacer} from "@components/atoms";

const AppContainer = ({children, route}) => {
    return (
        <main className={styles.main}>
            {
                route !== "/login" &&
                <Navbar/>
            }
            <Spacer space={30}/>
            {children}
            <Spacer space={30}/>
            <Footer/>
        </main>
    )
}

export default AppContainer