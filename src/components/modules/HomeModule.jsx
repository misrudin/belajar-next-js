import styles from '@styles/modules/Home.module.css'
import {ListUser} from "@components/organizms";
import {Spacer} from "@components/atoms";

const HomeModule = ({users}) => {
    return (
        <div className={styles.content}>
            <h2>Team Information</h2>
            <Spacer space={20} />
            <ListUser users={users}/>
        </div>
    )
}
export default HomeModule