import { Product } from "./Product.interface";

export interface CartItem {
    id: number,
    name: string,
    price: number,
    total: number,
    quantity: number
} 

export interface CartState {
    total: number,
    items: CartItem[],

    addItem: (product: Product) => void,
    cleanItems: () => void,
    removeItem: (id: number) => void,
}