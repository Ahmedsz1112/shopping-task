'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

export default function Header() {
  const { state } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-solid border-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between gap-2">
        <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
          Shopping
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/cart" className="relative flex items-center gap-1 text-gray-700 hover:text-blue-600 transition">
            <ShoppingCart size={20} />
            <span>Cart</span>
            {state.cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full shadow-md">
                {state.cart.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
