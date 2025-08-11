"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/redux/slices/productsSlice";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === "loading") return <p className="text-center mt-10">Loading...</p>;
  if (status === "failed") return <p className="text-center mt-10">Failed to load products.</p>;

  return (
    <div className="container mx-auto px-6 py-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((dog) => (
        <ProductCard key={dog.id} product={dog} />
      ))}
    </div>
  );
}
