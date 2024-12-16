import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { OrderState, Order } from '../interfaces';
import { formatDate, formatDateTime } from '../helpers/utilities';

//* status: 'open' | 'success' | 'cancel';

export const useOrdeStore = create<OrderState>()(
  persist(
    (set, get) => ({
      totalSales: 0,
      orders: [],

      confirmOrder: (total, products) => {
        const date = new Date();
        const order: Order = {
          idOrder: get().orders.length + 1,
          date: formatDate(date),
          time: formatDateTime(date),
          status: 'open',
          products,
          total,
        }
        set((state) => ({
          orders: [...state.orders, order]
        }))
      },

    }),
    { 
      name: 'orders-store'
    }
  )
);
