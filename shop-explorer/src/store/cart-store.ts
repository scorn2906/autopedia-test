import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  products: CartItem[];

  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeProduct: (id: number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      products: [],

      addItem: (item) => {
        const items = get().products;
        const existing = items.find((i) => i.id === item.id);

        if (existing) {
          set({
            products: items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({
            products: [...items, { ...item, quantity: 1 }],
          });
        }
      },

      increment: (id) =>
        set({
          products: get().products.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }),

      decrement: (id) =>
        set({
          products: get()
            .products.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter((i) => i.quantity > 0),
        }),

      removeProduct: (id) =>
        set({
          products: get().products.filter((i) => i.id !== id),
        }),

      clearCart: () => set({ products: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);
