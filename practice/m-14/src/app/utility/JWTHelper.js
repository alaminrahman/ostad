import { SignJWT, jwtVerify } from "jose";

export async function CreateToken(email){

    console.log("JWT Helper")

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    
    let token = await new SignJWT({ email: email })
                .setProtectedHeader({alg: 'HS256'})
                .setIssuedAt()
                .setIssuer(process.env.JWT_ISSUER)
                .setExpirationTime('1h')
                .sign(secret);

    return token;
}

export async function VerifyToken(token){
    const secret = new TextEncoder().encode(process.env.JWT_SECRET );
    try{
        console.log('verifying')
        let decoded = await jwtVerify(token, secret);
        
        console.log(decoded['payload'])

        return decoded['payload'];
    }catch(e){
        return e;
    }

    // try {
    //     // Replace 'your-secret-key' with your actual secret key
    //     const { payload, protectedHeader } = await jwtVerify(token, secret, {
    //       algorithms: ['HS256'], // Specify the algorithm used to sign the token
    //     });

    //     console.log(payload)
    
    //     // The token is valid
    //     return payload;
    //   } catch (error) {
    //     // The token is invalid or expired
    //     return error;
    //   }
}