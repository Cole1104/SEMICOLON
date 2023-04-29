"use client"
import { GoogleLogin,LogOut,getUserInfo } from "@/app/api/fbase";





function front() {

   function Googlelogin(){
    GoogleLogin()
    
   }

   function handleLogout(){
    LogOut();
    
   }
   
   
    return(
    <div>
        <button onClick={Googlelogin}>Google로 로그인</button>
        
        <button onClick={handleLogout}>log out</button>
    </div>
    )
}
export default front;