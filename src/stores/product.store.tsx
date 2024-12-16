import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { CartItemProps } from '../interfaces/Cart.interface';

interface ProductState {
    total: number,
    items: any[],
    listItems: CartItemProps[],

    addItem: (item: any) => void,
    summarizedItems: () => any[],
    cleanItems: () => void,
    removeItem: (id: number) => void,
}

export const useProductStore = create<ProductState>()(
  persist(
    (set, get) => ({

      total: 0,
      items: [],
      listItems: [],

      addItem: (item:any) =>  
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
            const newItem: CartItemProps = {
              id: item.id,
              name: item.label,
              total: item.price,
              quantity: 1,
            };
            items.push(newItem)
          }
          state.total = state.total + item.price;
          return { items }
        }),

      summarizedItems: () => {
        const items = get().items;
        const groupedItems = items.reduce((grouped, item) => {
          const existingItem = grouped[item.id] || {
            name: item.label,
            quantity: 0,
            total: 0
          };

          return {
            ...grouped,
            [item.id]: {
              ...existingItem,
              quantity: existingItem.quantity + 1,
              total: existingItem.total + item.price
            }
          };
        }, {});

        return Object.values(groupedItems);
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
      name: 'products-store'
    }
  )
);