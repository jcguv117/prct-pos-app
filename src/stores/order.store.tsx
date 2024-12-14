import { create } from 'zustand'
import { persist } from 'zustand/middleware';

//* status: 'open' | 'success' | 'cancel';

interface OrderState {
    total: number,
    items: any[],

    addItemOrder: (item: any) => void,
    getList: () => any,
    summarizedItems: () => any[],
    // removeItemOrder
    // confirmOrder
    // cancelOrder
    // editOrder
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({

      total: 0,
      items: [],
      listItems: [],

      addItemOrder: (item:any) => set(state => ({
        items: [ ...state.items, { ...item } ]
      })),

      getList: () => {
        console.log(get().items)
        return get().items
      },

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

    }),
    { 
      name: 'orders-store'
    }
  )
);
