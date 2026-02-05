import { api } from './Login.endpoints';

export const login = async (data: {username:string; password:string}) => {
    const res = await api.post("/auth/login",data)
    console.log(res.data)
    return res.data
}