import { useState } from 'react'
export type ActiveCategoryItem = {
    categoryItem: string
}

export default function useCategory() {
    const [category, setCategory] = useState<ActiveCategoryItem>({
        categoryItem: 'All',
    })
    const setCategoryItem = (label: string) => {
        console.log('category', category)
        setCategory({ categoryItem: label })
        // localStorage.removeItem('cart')
    }
    return { category, setCategoryItem }
}
