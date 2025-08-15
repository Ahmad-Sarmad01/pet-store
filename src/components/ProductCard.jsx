"use client";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl w-67 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 border-6 border-white overflow-hidden">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-lg text-gray-800 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.breed}</p>
        <p className="text-blue-600 font-bold text-lg">${product.price}</p>
      </div>
    </div>
  );
}
