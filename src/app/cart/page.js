"use client";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/redux/slices/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <h2 className="text-xl font-bold">
              Total: ${total.toFixed(2)}
            </h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
