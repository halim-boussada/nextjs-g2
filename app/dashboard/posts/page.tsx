import Link from "next/link";
type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Posts() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts" , {
        cache : "no-store"
    }
  ).then((res) => res.json());
  return (
    <div>
      <h1>{(new Date).toLocaleString()}</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link href={"/dashboard/posts/" + post.id}>Check details</Link>
          </div>
        );
      })}
    </div>
  );
}
