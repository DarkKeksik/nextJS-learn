import {useRouter} from "next/router";
import Head from "next/head";

export default function Post() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>NextJS | post №{router.query.id}</title>
            </Head>
            <h1>Post { router.query.id }</h1>
        </>
    )
}