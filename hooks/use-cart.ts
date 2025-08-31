import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import toast from "react-hot-toast";

interface useCartStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

// export const useCart = create<useCartStore>((set) => ({
//   items: [],
//   onOpen: (data: Product) => set({ isOpen: true, data }),
//   onClose: () => set({ isOpen: false }),
// }));

export const useCart = create(
  persist<useCartStore>((set, get) => ({
    items: [],
    addItem: (item: Product) => {
      // Check if the item is already added to cart
      const currentItems = get().items;
      const exists = currentItems.find((i) => i.id === item.id);

      if (exists) {
        return toast.error("Item already in cart");
      }

      set((state) => ({ items: [...state.items, item] }));
      toast.success("Added to cart");
    },
    removeItem: (id: string) => {
      const currentItems = get().items;
      const exists = currentItems.find((i) => i.id === id);

      if (!exists) {
        return toast.error("Item not found in cart");
      }

      set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
      toast.success("Removed from cart");
    },
    removeAll: () => set({ items: [] }),
  }),
  {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
  })
);
