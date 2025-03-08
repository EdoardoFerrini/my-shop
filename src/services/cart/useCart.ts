import { create } from "zustand";
import { Product } from "@/model/product";
import { CartItem } from "@/model/cart-item";

export interface CartState {
  list: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQty: (productId: string) => void;
  decreaseQty: (productId: string) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>((set, get) => ({
  list: [],
  addToCart: (product: Product) => {
    const item: CartItem = { product, qty: 1 };
    // set({ list: [...get().list, item] });
    set((state) => ({ list: [...state.list, item] }));
  },
  removeFromCart: (productId: string) => {},
  increaseQty: (productId: string) => {},
  decreaseQty: (productId: string) => {},
  clearCart: () => {},
}));
