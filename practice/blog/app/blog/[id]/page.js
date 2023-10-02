import GetBlogPost from "@/app/lib/getBlogPost";


export default async function SingleBlogPost({ params }) {

    const id = params.id;

    const post = await GetBlogPost(id);

    return (
        <>
            <h1>Hell</h1>
        </>
    );
}