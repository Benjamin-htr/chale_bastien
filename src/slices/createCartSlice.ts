import { StateCreator } from "zustand";
import { IProduct } from "../utils/IProduct";

export interface CartSlice {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, action: "increase" | "decrease") => void;
  showCart: boolean;
  toggleCart: () => void;
}

export const createCartSlice: StateCreator<CartSlice> = (set, get) => ({
  cart: [],
  addToCart: (product: IProduct) => {
    const cart = get().cart;
    const findProduct = cart.find((p) => p.id === product.id);
    if (findProduct) {
      findProduct.quantity! += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    set({ cart });
    console.log(cart);
  },
  removeFromCart: (productId: number) => {
    set({ cart: get().cart.filter((product) => product.id !== productId) });
  },
  updateQuantity: (productId: number, action: "increase" | "decrease") => {
    const cart = get().cart;
    const findProduct = cart.find((p) => p.id === productId);
    if (findProduct) {
      if (action === "decrease") {
        findProduct.quantity = findProduct.quantity! > 1 ? findProduct.quantity! - 1 : findProduct.quantity!;
      } else {
        findProduct.quantity! += 1;
      }
    }
    set({ cart });
  },
  showCart: false,
  toggleCart: () => {
    set({ showCart: !get().showCart });
    console.log("oue");
  },
});
