import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartSlice, createCartSlice } from "../slices/createCartSlice";

type StoreState = CartSlice;

export const useAppStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createCartSlice(...a),
    }),
    {
      name: "cart",
    }
  )
);
