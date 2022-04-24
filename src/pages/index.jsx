import {HomeModule} from "@components/modules";
import axios from "axios";

const HomePage = ({data}) => {

    return (
        <>
            <HomeModule users={data}/>
        </>
    )
}

export async function getServerSideProps(context) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

    const res = await axios.get(baseUrl + "users")
    const data = await res.data


    return {
        props: {
            data: data ?? null
        }
    }
}

export default HomePage