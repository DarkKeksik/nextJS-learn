import Head from 'next/head';
import { MainLayout } from '../Components/layouts';

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <title>NextJS | main page</title>
            </Head>
            <h1>Starting page</h1>
        </MainLayout>
    )
}