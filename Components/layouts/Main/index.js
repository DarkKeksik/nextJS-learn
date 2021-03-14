import Link from "next/link";
import Head from "next/head";

const MainLayout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{` NextJS | ${ title }`}</title>
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                { children }
            </main>
        </>
    )
}

export default MainLayout;