'use client'
import { createContext, useContext, ReactNode } from 'react'
import useCategory from '@/hooks/CategoryHooks'

const CategoryContext = createContext<ReturnType<typeof useCategory> | null>(
    null
)

export function CategoryProvider({ children }: { children: ReactNode }) {
    const category = useCategory()
    return (
        <CategoryContext.Provider value={category}>
            {children}
        </CategoryContext.Provider>
    )
}

export function useCategoryContext() {
    const context = useContext(CategoryContext)
    if (!context)
        throw new Error('useCartContext must be used within a CartProvider')
    return context
}
