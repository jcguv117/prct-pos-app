export interface Order {
    id: number,
    date: Date,
    time: string,
    total: number,
    products: any[],
    state: 'done' | 'cancel' | 'open',
}

export interface OrderState {
    totalSales: number,
    orders: Order[],
    confirmOrder: () => void,
    // cancelOrder
    // editOrder
}