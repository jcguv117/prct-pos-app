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
    totalSales: number,
    orders: Order[],
    confirmOrder: (total: number, products: any[]) => void,
    updateStatusOrder: (id: number, status: StatusOrder) => void,
    // editOrder
}