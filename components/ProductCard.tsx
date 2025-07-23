"use client";
import React, { useState, useCallback } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { state, dispatch } = useCart();
  const [adding, setAdding] = useState(false);

  const handleAdd = useCallback(() => {
    const exists = state.cart.some((item) => item.id === product.id);
    if (exists) {
      toast.error(`${product.name} is already in the cart`);
      return;
    }

    setAdding(true);
    dispatch({ type: "ADD", payload: product });
    toast.success(`${product.name} add to cart`);

    setTimeout(() => setAdding(false), 300);
  }, [state.cart, dispatch, product]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="border border-amber-400 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md"
        />
        <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
          {product.category}
        </span>
      </div>

      <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.name}</h2>
      <p className="text-2xl font-bold text-green-600 mb-4">${product.price}</p>

      <button
        onClick={handleAdd}
        disabled={adding}
        aria-label={`Add ${product.name} to cart`}
        className={`w-full px-4 py-2 rounded transition-colors duration-200 focus:outline-none cursor-pointer ${
          adding
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {adding ? "Adding...!" : "Add to Cart"}
      </button>
    </motion.div>
  );
}
