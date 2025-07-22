'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { state } = useCart();
  const itemCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ShopEase
        </Link>
        <nav className="flex flex-wrap items-center gap-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/cart" className="text-gray-700 hover:text-blue-600 relative">
            Cart
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
