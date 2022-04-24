import styles from '@styles/modules/Home.module.css'
import {Spacer} from "@components/atoms";
import {ListPost} from "@components/organizms";

const PostModule = ({posts}) => {
    return (
        <div className={styles.content}>
            <h2>Post</h2>
            <Spacer space={20}/>
            <ListPost posts={posts}/>
        </div>
    )
}
export default PostModule