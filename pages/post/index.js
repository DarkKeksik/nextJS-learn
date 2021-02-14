import Head from 'next/head';
import {MainLayout} from "../../Components/layouts";

export default function Post () {
    return (
        <MainLayout>
            <Head>
                <title> NextJS | post page default </title>
            </Head>
            <h1>Default page for post without id</h1>
        </MainLayout>
    )
}