import { Product } from "@/model/product";
import { useEffect, useState } from "react";
import { pb } from "../../pocketbase";

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
