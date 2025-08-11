"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-gray-500">{product.breed}</p>
        <p className="text-blue-600 font-bold">${product.price}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
