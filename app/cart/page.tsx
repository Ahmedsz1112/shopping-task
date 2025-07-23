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
                className="flex justify-between items-center border border-amber-400 p-4 rounded-md shadow hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-24" />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p>
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="space-x-2">
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREMENT", payload: item.id })
                    }
                    className="bg-gray-300 w-5 rounded cursor-pointer hover:bg-gray-200"
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREMENT", payload: item.id })
                    }
                    className="bg-gray-300 w-5 rounded cursor-pointer hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
                  className="text-red-500 ml-2 cursor-pointer border border-red-500 p-2 rounded-3xl hover:bg-red-500 hover:text-white transition-colors duration-200"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-right font-bold text-xl">
            Total: ${total.toFixed(2)}
          </div>
          <button
            onClick={() => {
              dispatch({ type: "CLEAR_CART" });
              toast.success("successful!");
            }}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            purchasing
          </button>
        </>
      )}
    </div>
  );
}
