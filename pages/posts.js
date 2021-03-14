import Link from "next/link";
import { useState, useEffect } from 'react';
import {MainLayout} from "../Components/layouts";

export default function Posts({ posts }) {

    return (
        <MainLayout title='posts page'>
            <h1>Page for all available posts</h1>
            <pre>
                {
                    posts.map( post =>(
                        <Link
                            key={post.id}
                            href={`/post/[id]`}
                            as={`/post/${post.id}`}
                        >
                            <a>
                                <p>Название: { post.title }</p>
                            </a>
                        </Link>
                    ))
                }
            </pre>
        </MainLayout>
    )
}

Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts');
    const posts = await response.json();

    return { posts }
}