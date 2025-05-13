'use client'
import { useCategoryContext } from '@/context/CategoryContext'
import { FoodCard } from './food-card'

export const foodItems = [
    {
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg',
        title: 'Tasty Vegetable Salad Healthy Diet',
        price: 17.99,
        discount: 20,
        category: 'Soups',
        type: 'Veg',
    },
    {
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg',
        title: 'Original Chess Meat Burger With Chips',
        price: 23.99,
        category: 'Soups',
        type: 'Non Veg',
    },
    {
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg',
        title: 'Tacos Salsa With Chickens Grilled',
        price: 14.99,
        category: 'Soups',
        type: 'Non Veg',
    },
    {
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg',
        title: 'Fresh Orange Juice With Basil Seed',
        price: 12.99,
        category: 'Soups',
        type: 'Veg',
    },
    {
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg',
        title: 'Meat Sushi Maki With Tuna, Ship And Other',
        price: 9.99,
        category: 'Soups',
        type: 'Non Veg',
    },
    {
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg',
        title: 'Original Chess Burger With French Fries',
        price: 10.59,
        discount: 20,
        category: 'Soups',
        type: 'Non Veg',
    },
]

export function FoodGrid() {
    const { category } = useCategoryContext()
    console.log(foodItems[0].category)

    const filteredItems =
        category.categoryItem === 'All'
            ? foodItems
            : foodItems.filter(
                  (item) => item.category === category.categoryItem
              )

    return (
        <div className='grid grid-cols-3 gap-4'>
            {filteredItems.map((item, index) => (
                <FoodCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    discount={item.discount}
                    type={item.type}
                    category={item.category}
                />
            ))}
        </div>
    )
}
