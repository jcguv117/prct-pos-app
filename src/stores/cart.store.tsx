import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { CartState, CartItem, Product } from '../interfaces';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({

      total: 0,
      items: [],

      addItem: (item: Product) =>  
        set((state) => {
          const itemIndex = state.items.findIndex((i) => i.id === item.id);
          let items = [...state.items];

          if(itemIndex !== -1) {
            items[itemIndex] = {
              ...items[itemIndex],
              total: items[itemIndex].total + item.price,
              quantity: items[itemIndex].quantity + 1,
            };
          } else {
            // Si el artículo no existe, lo agregamos.
            const newItem: CartItem = {
              id: item.id,
              name: item.label,
              price: item.price,
              total: item.price,
              quantity: 1,
            };
            items.push(newItem)
          }
          state.total = state.total + item.price;
          return { items }
      }),

      updateItem: ( total: number, items: CartItem[] ) => {
        set(() => ({ total, items}))
      },

      cleanItems: () => set(() => ({
          total: 0,
          items: []
      })),

      removeItem: (id) => set((state) => {
        const itemIndex = state.items.findIndex(item => item.id === id);
        
        if (itemIndex !== -1) {
          const items = [...state.items];
          const removedItem = items[itemIndex];
          state.total = state.total - removedItem.total;
          items.splice(itemIndex, 1);
          return { items };
        }

        return state;
      })

    }),
    { 
      name: 'cart-store'
    }
  )
);