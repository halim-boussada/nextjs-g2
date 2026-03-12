"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function Login(){
    const router = useRouter()
   const [username , setUsername] = useState("")
   const [password , setpassword] = useState("")
   
   function login(){
    console.log({username , password})
    router.push("/posts")
   }
   return <div>
    <input type="text" value={username} onChange={(e)=>{ setUsername(e.target.value)}}/>
    <input type="password" value={password} onChange={(e)=>{ setpassword(e.target.value)}}/>

    <button onClick={login}>Login</button>
   </div>
} 