export const  loginToken = (data:any )=>{
    const token = data?.token
    localStorage.setItem("token", token)
}
