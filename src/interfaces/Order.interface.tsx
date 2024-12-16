export interface Order {
    idOrder: number,
    date: string,
    time: string,
    total: number,
    products: any[],
    state: 'done' | 'cancel' | 'open',
}

export interface OrderState {
    totalSales: number,
    orders: Order[],
    confirmOrder: (total: number, products: any[]) => void,
    // cancelOrder
    // editOrder
}