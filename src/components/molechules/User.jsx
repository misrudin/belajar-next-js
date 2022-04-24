import styles from '@styles/Molechules.module.css'

const UserCard = ({user, index}) => {
    return (
        <div className={styles.user_card}>
            <img src={`https://i.pravatar.cc/150?img=${index}`} alt=""/>
            <h5>{user.name}</h5>
            <p>{user.email}</p>
        </div>
    )
}

export default UserCard