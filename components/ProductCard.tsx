'use client';
import React from 'react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
    const { dispatch } = useCart();

  const handleAdd = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 font-bold mb-4">${product.price}</p>
      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
