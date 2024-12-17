import { CartItem } from "./Cart.interface";

export enum StatusOrder {
    DONE      = 'done',
    CANCEL    = 'cancel',
    CHANGING  = 'changing',
    OPEN      = 'open',
} 

export interface Order {
    idOrder: number,
    date: string,
    time: string,
    total: number,
    listItems: CartItem[],
    status: StatusOrder,
}

export interface OrderState {
    orders: Order[],
    idOrderEditing: number | null,
    getTotalOrders          : (status: StatusOrder) => number,
    getCountOrders          : (status: StatusOrder) => number,
    getOrderById            : (id: number ) => Order | undefined,
    getOrderEditing         : () => number | null | undefined,
    orderEditing            : (id: number | null) => void,
    confirmOrder            : (total: number, listItems: CartItem[]) => void,
    updateOrder             : (idOrder: number, total: number, listItems: CartItem[]) => void,
    updateStatusOrder       : (id: number, status: StatusOrder) => void,
    // editOrder
}