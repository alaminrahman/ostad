import { CreateToken } from "./JWTHelper";

export async function TokenCookie(email){
    const token = await CreateToken(email);

    return {"Set-Cookie": `token=${token}; Max-Age=3600; Secure, HttpOnly; path=/; SameSite=Strict`};
}