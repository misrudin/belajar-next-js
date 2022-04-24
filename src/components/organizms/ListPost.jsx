import styles from '@styles/Organizms.module.css'
import {PostCard} from "@components/molechules";

const ListPost = ({posts}) => {
    return (
        <div className={styles.list_posts}>
            {
                posts.map((post, index) => {
                    return (
                        <PostCard post={post} key={index.toString()}/>
                    )
                })
            }
        </div>
    )
}

export default ListPost