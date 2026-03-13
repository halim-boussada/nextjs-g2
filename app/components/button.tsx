"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Flex, Text, Button, Box, HoverCard, Avatar, Heading } from "@radix-ui/themes";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

 async function login() {
    console.log({ username, password });
    const data = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) =>res.json())

    localStorage.setItem("token" , data.accessToken)
    router.push("/dashboard/posts")
    
  }
  return (
    <div style={{ width : "400px" , margin : "0 auto" , marginTop : "200px" , padding : "20px"}}>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />

      <button onClick={login}>Login</button>

    </div>
  );
}
