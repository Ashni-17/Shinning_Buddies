import {createContext,useContext,useState} from 'react';
const Ctx=createContext();export const useAuth=()=>useContext(Ctx);
export function AuthProvider({children}){
  const [user,setUser]=useState(()=>JSON.parse(localStorage.getItem('sb_user')||'null'));
  const login=(email)=>{const u={name:email.split('@')[0]||'Admin',email};localStorage.setItem('sb_user',JSON.stringify(u));setUser(u)};
  const logout=()=>{localStorage.removeItem('sb_user');setUser(null)};
  return <Ctx.Provider value={{user,login,logout}}>{children}</Ctx.Provider>;
}
