import styles from '@styles/Organizms.module.css'
import {UserCard} from "@components/molechules";

const ListUser = ({users}) => {
    return (
        <div className={styles.list_user}>
            {
                users.map((user, index)=> {
                    return (
                        <UserCard user={user} index={index} key={index.toString()} />
                    )
                })
            }
        </div>
    )
}

export default ListUser