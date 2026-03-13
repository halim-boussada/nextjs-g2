import Link from "next/link";
type Props = {
  params: {
    id: string;
  };
};

type Post = {
  id: number;
  title: string;
  body: string;
};

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
  ).then((res) => res.json());
  return posts.slice(1 , 10).map((post) => {
    return { id: post.id.toString() };
  });
}

export default async function PostDetails({ params }: Props) {
  new Error("this is example");
  const { id } = await params;
  const post: Post = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
    {
      cache: "no-store",
    },
  ).then((res) => res.json());
  return (
    <div>
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
      <Link href={"/dashboard/posts"}>Back to all posts</Link>
    </div>
  );
}
