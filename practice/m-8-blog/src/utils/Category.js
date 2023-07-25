import axios from "axios";

export async function Category(){
    const res = await axios.get('https://basic-blog.teamrabbil.com/api/post-categories');

    if(res.status == 200){
        return res;
    }else{
        return [];
    }
}