import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { OrderState, Order, StatusOrder } from '../interfaces';
import { formatDate, formatDateTime } from '../helpers/utilities';

export const useOrderStore = create<OrderState>()(
  persist(
    (set, get) => ({
      orders: [],
      
      getOrderById: (id: number) => {
        return get().orders.find( f => f.idOrder === id );
      },

      getTotalOrders: (status: StatusOrder) => {
        return get().orders
          .filter(order => order.status === status)
          .reduce((total, order) => total + order.total, 0);
      },

      getCountOrders: (status: StatusOrder) => {
        return get().orders
          .filter(order => order.status === status).length
      },

      confirmOrder: (total, items) => {
        const date = new Date();
        const order: Order = {
          idOrder: get().orders.length + 1,
          date: formatDate(date),
          time: formatDateTime(date),
          status: StatusOrder.OPEN,
          listItems: items,
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
