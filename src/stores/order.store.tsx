import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { OrderState } from '../interfaces';

//* status: 'open' | 'success' | 'cancel';

export const useOrdeStore = create<OrderState>()(
  persist(
    (set, get) => ({
      totalSales: 0,
      orders: [],

      confirmOrder: () => {

      }

    }),
    { 
      name: 'orders-store'
    }
  )
);
