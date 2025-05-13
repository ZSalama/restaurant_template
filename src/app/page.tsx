import { SidebarNav } from '../components/sidebar-nav'
import { Header } from '../components/header'
import { CategoryFilter } from '../components/category-filter'
import { FoodGrid } from '../components/food-grid'
import { Cart } from '../components/cart'
import { Footer } from '../components/footer'
import { CategoryProvider } from '@/context/CategoryContext'

export default function Home() {
    return (
        <div className='flex h-screen bg-gray-100'>
            <SidebarNav />
            <div className='flex-1 flex flex-col overflow-hidden'>
                <Header />
                <div className='flex-1 flex overflow-hidden'>
                    <main className='flex-1 overflow-y p-4'>
                        <CategoryProvider>
                            <CategoryFilter />
                            <FoodGrid />
                        </CategoryProvider>
                    </main>
                    <Cart />
                </div>
                <Footer />
            </div>
        </div>
    )
}
