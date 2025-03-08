import { selectTotalCartCost, useCart } from "@/services/cart";
import { ChangeEvent, useState } from "react";

export function CheckoutPage() {
  const [user, setUser] = useState({ name: "", email: "" });
  const totalCartCost = useCart(selectTotalCartCost);

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setUser((state) => ({ ...state, [name]: value }));
  }

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="title">CHECKOUT</h1>

      <div className="text-xl my-3 border-b">€ {totalCartCost}</div>

      <form className="flex flex-col gap-3">
        Your name:
        <input
          type="text"
          placeholder="your name"
          name="name"
          value={user.name}
          onChange={changeHandler}
        />
        Your email
        <input
          type="email"
          placeholder="Your email"
          name="email"
          value={user.email}
          onChange={changeHandler}
        />
        <button className="btn primary">CONFIRM ORDER</button>
      </form>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
