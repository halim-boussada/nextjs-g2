import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  images: string[];
};

export default async function Products() {
  const data: { products: Product[] } = await fetch(
    "https://dummyjson.com/products",
    {
      cache: "no-store",
    },
  ).then((res) => res.json());
  const { products } = data;
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <Image src={product.images[0]} alt="" width={300} height={300} />
          </div>
        );
      })}
    </div>
  );
}
