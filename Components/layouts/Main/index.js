import Link from "next/link";

export default ({ children }) => {
    return (
        <>
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