import { Product } from "@/model/product";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";

export const pb = new PocketBase(import.meta.env.VITE_POCKET_BASE_URL);

export function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    pb.collection("products")
      .getList<Product>()
      .then((res) => {
        setProducts(res.items);
      });
  }

  console.log(products);
  return (
    <div>
      <h1 className="title">Shop</h1>

      {products.map((p) => {
        return <li key={p.id}>{p.name}</li>;
      })}
    </div>
  );
}
