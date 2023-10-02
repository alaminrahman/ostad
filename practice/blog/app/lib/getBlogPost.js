export default function GetBlogPost(id){
    const res = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(res)

    // if(!res.ok){
    //     throw new Error('Single post not fetched!');
    // }

    // return res.json();
}