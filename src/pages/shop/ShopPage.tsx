import { Product } from "@/model/product";
import { useEffect, useState } from "react";
import { pb } from "../../pocketbase";
import { ProductCard } from "./components/ProductCard";
import { ServerError } from "@/shared/";

export function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    setError(false);
    setPending(true);
    pb.collection("products")
      .getList<Product>()
      .then((res) => {
        setError(false);
        setProducts(res.items);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setPending(false);
      });
  }

  function addToCart(p: Partial<Product>) {
    console.log(p);
  }

  return (
    <div>
      <h1 className="title">Shop</h1>

      {error && <ServerError />}
      {pending && <div>loading...</div>}

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
