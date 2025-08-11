import axios from "axios";

export async function fetchDogs() {
  const res = await axios.get("https://dog.ceo/api/breeds/image/random/10");
  return res.data.message.map((img, index) => ({
    id: index,
    name: `Dog ${index + 1}`,
    breed: "Mixed Breed",
    price: Math.floor(Math.random() * 200) + 50,
    image: img
  }));
}
