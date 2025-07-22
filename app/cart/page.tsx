"use client";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {state.cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border p-4 rounded-md"
              >
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREMENT", payload: item.id })
                    }
                  >
                    ➖
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREMENT", payload: item.id })
                    }
                  >
                    ➕
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", payload: item.id })
                    }
                    className="text-red-500 ml-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right font-bold text-xl">
            Total: ${total.toFixed(2)}
          </div>
          <button
            onClick={() => {
              dispatch({ type: "CLEAR_CART" });
              toast.success("Purchase successful!");
            }}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Purchase
          </button>
        </>
      )}
    </div>
  );
}
