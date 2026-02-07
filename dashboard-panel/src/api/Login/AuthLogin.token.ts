export const  authHelper = {
    getToken : ()=>{
        return localStorage.getItem("token")
    }
}
