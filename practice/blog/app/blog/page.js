
import Link from "next/link";
import getAllPosts from "../lib/getAllPosts";

export default async function Blogs(){

    const posts = await getAllPosts();

    return (
        <>
            <h1>Blogs</h1>

            {
                posts.map(post => {
                    return (
                        <p key={ post.id }>
                            <Link href={`blog/${post.id}` }>{ post.id } - { post.title }</Link>
                        </p>
                    );
                })
            }
        </>
    );
}