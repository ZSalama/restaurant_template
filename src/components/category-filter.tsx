'use client'
import {
    Grid,
    Coffee,
    Soup,
    UtensilsCrossed,
    ChefHat,
    Sandwich,
} from 'lucide-react'
import { useCategoryContext } from '@/context/CategoryContext'

const categories = [
    { icon: Grid, label: 'All', items: 'cached' },
    { icon: Coffee, label: 'Breakfast', items: 'cached' },
    { icon: Soup, label: 'Soups', items: 'cached' },
    { icon: UtensilsCrossed, label: 'Pasta', items: 'cached' },
    { icon: ChefHat, label: 'Main Course', items: 'cached' },
    { icon: Sandwich, label: 'Burges', items: 'cached' },
]

export function CategoryFilter() {
    const { category, setCategoryItem } = useCategoryContext()

    return (
        <div className='flex gap-3 mb-4 overflow-x-auto pb-2'>
            {categories.map((activecategory) => {
                const isActive = activecategory.label === category.categoryItem
                return (
                    <div
                        key={activecategory.label}
                        className={`flex flex-col items-center p-3 rounded-xl min-w-[100px] ${
                            isActive ? 'bg-green-50 text-green-600' : 'bg-white'
                        } border cursor-pointer hover:bg-green-50`}
                        onClick={() => setCategoryItem(activecategory.label)}
                    >
                        <activecategory.icon className='h-6 w-6 mb-1' />
                        <span className='text-sm font-medium'>
                            {activecategory.label}
                        </span>
                        <span className='text-xs text-gray-500'>
                            {activecategory.items}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

