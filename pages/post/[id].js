import { useState, useEffect } from "react";
import {MainLayout} from "../../Components/layouts";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Post({ post: serverPost }) {
    const [ post, setPost ] = useState( serverPost );
    const router = useRouter();

    useEffect(()=>{
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${ router.query.id }`);
            const data = await response.json();
            setPost(data);
        }

        !serverPost && load();
    }, []);

    if ( !post ) {
        return (
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout title={ post.title }>
            <div>
                <h1>{ post.title }</h1>
                <div>{ post.description }</div>
                <Link href={"/posts"}>
                    <a>Back to all posts</a>
                </Link>
            </div>
        </MainLayout>
    )
}

Post.getInitialProps = async ({ query, req }) => {
    if( !req ) return { post: null }

    const response = await fetch(`http://localhost:4200/posts/${ query.id }`);
    const post = await response.json();

    return { post }
}