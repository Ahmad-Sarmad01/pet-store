"use client";
import { useSelector } from "react-redux";
import pets from "@/data/pets";

export default function SearchPage({ searchParams }) {
  const query = searchParams.query?.toLowerCase() || "";

  const results = pets.filter((pet) =>
    pet.name.toLowerCase().includes(query)
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 mt-20 ml-10">
        Search Results for "{query}"
      </h2>

      {results.length === 0 ? (
        <p>No pets found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((pet) => (
            <div
              key={pet.id}
              className="bg-white w-62 shadow rounded-lg overflow-hidden p-4"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-62 h-62 object-cover rounded"
              />
              <h3 className="mt-2 font-bold">{pet.name}</h3>
              <p className="text-gray-600">{pet.gender} · {pet.age}</p>
              <p className="text-[#003459] font-bold">
                {pet.price.toLocaleString("vi-VN")} VND
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
