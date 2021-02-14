import {useRouter} from "next/router";
import Head from "next/head";
import {MainLayout} from "../../Components/layouts";

export default function Post() {
    const router = useRouter();
    return (
        <MainLayout>
            <Head>
                <title>NextJS | post №{router.query.id}</title>
            </Head>
            <h1>Post { router.query.id }</h1>
        </MainLayout>
    )
}