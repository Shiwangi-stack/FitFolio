// import { useContext,createContext,useState }from "react";
// import { useNavigate } from "react-router-dom";
// const Authcontext = createContext();

// export default function AuthProvider({children}){

//     const[user,setuser]=useState(null);
//     const[token, settoken]=useState(localStorage.getItem("site")||"");
//     const navigate=useNavigate();


//     const loginAction=async(data)=>{
//         try{
//             const response=await fetch("https://fitfolio-9u7p.onrender.com/api/login",{
//                 method:"post",
//                 headers: {
//                     "Content-type":"application/json",
//                 },
//                 body:JSON.stringify(data),
//             })
//             const res=await response.json();
//             if(res.data){
//                 setuser(res.data.user);
//                 settoken(res.token);
//                 localStorage.setItem("site", res.token);
//                 navigate("/dashboard");
//                 return;
//             }
//             throw new Error(res.message);
//         }
//         catch (err){
//             console.error(err);
//             alert(err);
//         }
//     };
//     const logOut=()=>{
//         setuser(null);
//         settoken("");
//         localStorage.removeItem("site");
//         navigate("/login");
//     }

//     return(
//         <Authcontext.Provider value={{token,user,loginAction,logOut}}>
//             {children}
//             </Authcontext.Provider>
//     );
// };



// export const useAuth =()=>{
//     return useContext(Authcontext);
// };


import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Authcontext = createContext();

export default function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setuser] = useState(null);
  const [token, settoken] = useState(localStorage.getItem("site") || "");

  // ✅ Restore user on page refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    const storedToken = localStorage.getItem("site");

    if (storedUser) setuser(JSON.parse(storedUser));
    if (storedToken) settoken(storedToken);
  }, []);

  const loginAction = async (data) => {
    try {
      const response = await fetch("https://fitfolio-9u7p.onrender.com/api/login", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.data) {
        setuser(res.data.user);
        settoken(res.token);

        // ✅ store both
        localStorage.setItem("site", res.token);
        localStorage.setItem("userInfo", JSON.stringify(res.data.user));

        navigate("/dashboard");
        return;
      }

      throw new Error(res.message);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logOut = () => {
    setuser(null);
    settoken("");

    localStorage.removeItem("site");
    localStorage.removeItem("userInfo");

    navigate("/login");
  };

  return (
    <Authcontext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </Authcontext.Provider>
  );
}

export const useAuth = () => useContext(Authcontext);