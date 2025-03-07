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

  return (
    <div>
      <h1 className="title">Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {products.map((p) => {
          return <div key={p.id}>{p.name}</div>;
        })}
      </div>
    </div>
  );
}
