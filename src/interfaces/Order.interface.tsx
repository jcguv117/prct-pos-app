export enum StatusOrder {
    DONE    = 'done',
    CANCEL  = 'cancel',
    OPEN    = 'open',
} 

export interface Order {
    idOrder: number,
    date: string,
    time: string,
    total: number,
    products: any[],
    status: StatusOrder,
}

export interface OrderState {
    orders: Order[],
    getTotalOrders: (status: StatusOrder) => number,
    getCountOrders: (status: StatusOrder) => number,
    confirmOrder: (total: number, products: any[]) => void,
    updateStatusOrder: (id: number, status: StatusOrder) => void,
    // editOrder
}