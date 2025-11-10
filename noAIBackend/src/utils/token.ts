import jwt from 'jsonwebtoken';

export const generateAcessToken=(payload:Object)=>{
    try{
       return jwt.sign(payload,'secret',{expiresIn:'1d'})
    } catch (error) {
        console.log(error);
    }
}

export const generateRefreshToken=(payload:Object)=>{
    try {
        return jwt.sign(payload,'ssecrreet',{expiresIn:'5d'})
    } catch (error) {
        console.log(error)
    }
}

export const verifyAcceessToken=(token:string)=>{
    try {
        return jwt.verify(token,'secret')
    } catch (error) {
        console.log(error)
    }
}

export const verifyRefreshToken=(token:string)=>{
    try {
        return jwt.verify(token,'ssecrreet')
    } catch (error) {
        console.log(error)
    }
}