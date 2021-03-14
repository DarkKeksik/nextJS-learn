import { useState, useEffect } from 'react';
import {MainLayout} from "../Components/layouts";
import Link from "next/link";

export default function Posts() {
    const [ posts, setPosts ] = useState([]);
    useEffect(()=>{
        async function load() {
            const response = await fetch('http://localhost:4200/posts');
            const json = await response.json();
            setPosts( json );
        }

        load();
    }, []);

    return (
        <MainLayout title='posts page'>
            <h1>Page for all available posts</h1>
            <pre>
                {
                    posts.map( post =>(
                        <Link href={`/post/${ post.id }`}>
                            <a>
                                <h3>Название: { post.title }</h3>
                                <p>{ post.description }</p>
                            </a>
                        </Link>
                    ))
                }
            </pre>
        </MainLayout>
    )
}