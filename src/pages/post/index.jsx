import React from "react";
import {PostModule} from "@components/modules";
import axios from "axios";

const Post = ({posts}) => {
    return (
        <>
            <PostModule posts={posts}/>
        </>
    )
}

export async function getServerSideProps(context) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const res = await axios.get(baseUrl + "posts")
    const data = await res.data


    return {
        props: {
            posts: data ?? null
        }
    }
}

export default Post