import { useDispatch } from "react-redux";
import { setSelectedPet2 } from "../redux/slices/selectedPetSlice2";
import Link from "next/link";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedPet2(product));
  };

  return (
    <Link href="/cart2">
      <div onClick={handleClick} className="cursor-pointer">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
      </div>
    </Link>
  );
}
