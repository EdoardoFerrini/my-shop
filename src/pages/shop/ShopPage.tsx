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
          return (
            <div
              key={p.id}
              className="bg-white text-black rounded-xl shadow-2xl overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.name}
                className="object-cover w-full h-64 "
              />

              <div className="flex justify-between items-center gap-3 p-3 text-2xl font-bold">
                <div>{p.name}</div>
                <div>€ {p.cost}</div>
              </div>

              <p className="p-3">{p.description}</p>

              <button className="text-white bg-sky-600 hover:bg-slate-400 transition w-full text-center font-bold p-3 ">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
