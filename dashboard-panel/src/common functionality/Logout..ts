export const useLogout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("username")
}
