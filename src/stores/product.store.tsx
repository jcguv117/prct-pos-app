import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface ProductState {}

export const useProductStore = create<ProductState>()(
  persist(
    () => ({

    }),
    { 
      name: 'products-store'
    }
  )
);