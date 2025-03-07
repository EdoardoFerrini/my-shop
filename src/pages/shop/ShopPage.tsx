import { Product } from "@/model/product";
import { useEffect, useState } from "react";
import { pb } from "../../pocketbase";
import { ProductCard } from "./components/ProductCard";

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

  function addToCart(p: Partial<Product>) {
    console.log(p);
  }

  return (
    <div>
      <h1 className="title">Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {products.map((p) => {
          return (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={() => addToCart(p)}
            />
          );
        })}
      </div>
    </div>
  );
}
