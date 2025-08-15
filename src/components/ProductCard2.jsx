"use client";
import { useDispatch } from "react-redux";
import { setSelectedPet } from "@/redux/slices/selectedPetSlice";
import { useRouter } from "next/navigation";

export default function ProductCard2({ product }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(setSelectedPet(product));
    router.push("/cart"); 
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white rounded-xl w-67 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 border-6 border-white overflow-hidden"
    >
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-bold text-md text-[#00171F] truncate">{product.name}</h3>
        <p className="hidden text-sm md:inline text-gray-500">
          Gene: {product.gender} &middot; Age: {product.age} year{product.age > 1 ? "s" : ""}
        </p>
        <p className="md:hidden text-sm text-gray-500">Gene: {product.gender}</p>
        <p className="md:hidden text-sm text-gray-500">
          Age: {product.age} year{product.age > 1 ? "s" : ""}
        </p>
        <p className="text-[#00171F] font-bold text-lg">${product.price}</p>
      </div>
    </div>
  );
}
