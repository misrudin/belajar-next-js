import styles from '@styles/Molechules.module.css'

const PostCard = ({post}) => {
    return (
        <div className={styles.post_card}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </div>
    )
}

export default PostCard