"use client";

import { useEffect, useState } from "react";
type User = {
  image: string;
  firstName: string;
};

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    async function getUserData() {
      const token = localStorage.getItem("token");
      const data: User = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }).then((res) => res.json());
      setUser(data);
    }
    getUserData();
  }, []);

  return <div style={{ background: "lightblue" }} className="flex pb-4 pr-8"> <h1>{user?.firstName} </h1> <h2>hajajajaj</h2></div>;
}
