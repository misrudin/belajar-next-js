import {Footer, Navbar} from "@components/organizms";
import styles from '@styles/Templates.module.css'
import {Spacer} from "@components/atoms";

const AppContainer = ({children}) => {
    return (
        <main className={styles.main}>
            <Navbar/>
            <Spacer space={30}/>
            {children}
            <Spacer space={30}/>
            <Footer/>
        </main>
    )
}

export default AppContainer