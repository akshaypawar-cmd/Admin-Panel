export const useLogout = () => {
  return () => {  
     localStorage.removeItem("token")
   localStorage.removeItem("username")
  };
};
