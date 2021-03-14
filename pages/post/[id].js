import {MainLayout} from "../../Components/layouts";

export default function Post({ post }) {
    return (
        <MainLayout title={ post.title }>
            <div>
                <h1>{ post.title }</h1>
                <div>{ post.description }</div>
            </div>
        </MainLayout>
    )
}

Post.getInitialProps = async ctx => {
    const postId = ctx.query.id;
    const response = await fetch(`http://localhost:4200/posts/${ postId }`);
    const post = await response.json();

    return { post }
}