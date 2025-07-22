'use client';
import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || product.category === category;
      const min = minPrice ? parseFloat(minPrice) : 0;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;
      return matchesSearch && matchesCategory && product.price >= min && product.price <= max;
    });
  }, [search, minPrice, maxPrice, category]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Landing Page</h1>

      {/* 🔘 التصنيفات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded border ${
              category === cat
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🔍 البحث والسعر */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border px-4 py-2 rounded"
        />
        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border px-4 py-2 rounded"
        />
      </div>

      {/* 🛒 المنتجات */}
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
