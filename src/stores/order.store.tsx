import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { OrderState, Order, StatusOrder } from '../interfaces';
import { formatDate, formatDateTime } from '../helpers/utilities';

export const useOrderStore = create<OrderState>()(
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
          status: StatusOrder.OPEN,
          products,
          total,
        }
        set((state) => ({
          orders: [...state.orders, order]
        }))
      },

      updateStatusOrder: (id: number, status: StatusOrder) => {
        set((state) => ({
          orders: state.orders.map((order) => 
            order.idOrder === id 
              ? {...order, status: status}
              : order
          )
        }))
      },

    }),
    { 
      name: 'orders-store'
    }
  )
);
