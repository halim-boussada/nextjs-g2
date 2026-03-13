
export type NavProps ={
    username : string
}


export default function Navbar({ username } : NavProps){
  return <h1>Hello im a navbar : {username}</h1>
} 