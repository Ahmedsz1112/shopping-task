"use client";
import React from "react";

type FilterProps = {
  search: string;
  setSearch: (value: string) => void;
  minPrice: string;
  setMinPrice: (value: string) => void;
  maxPrice: string;
  setMaxPrice: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  categories: string[];
};

export default function ProductFilters({
  search,
  setSearch,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  category,
  setCategory,
  categories,
}: FilterProps) {
  return (
    <div>
      <div className="border border-amber-400 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl text-blue-600 font-semibold mb-6 flex items-center">
          Search & Filter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-0"
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-0"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-0"
          />
        </div>
      </div>

      <div className="m-8 flex justify-center">
        <div className="flex flex-wrap gap-3">
          {categories.map((cart) => (
            <button
              key={cart}
              onClick={() => setCategory(cart)}
              className={`px-5 py-2 rounded-full border-2 transition-all duration-200 font-medium pointer-events-auto ${
                category === cart
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg transform scale-105"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:scale-105"
              }`}
            >
              {cart}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
