import Head from 'next/head';
import {MainLayout} from "../Components/layouts";

export default function Posts() {
    return (
        <MainLayout>
            <Head>
                <title>NextJS | posts page</title>
            </Head>
            <h1>Page for all available posts</h1>
        </MainLayout>
    )
}