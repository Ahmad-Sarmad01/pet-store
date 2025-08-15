"use client";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Link from "next/link";
import pets from "@/data/pets";

export default function CartPage() {
  const pet = useSelector((state) => state.selectedPet.pet);
  if (!pet) return <p className="text-center mt-10">No pet selected.</p>;

  const customerImages = [
    "/customer1.png",
    "/customer2.png",
    "/customer3.png",
    "/customer4.png",
    "/customer5.png",
  ]; 

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-10 bg-white">
      <div className="px-6 md:px-10 md:mt-15">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <img
              src={pet.image}
              alt={pet.name}
              className="w-[560px] h-[476px] rounded-xl object-cover mb-4"
            />
            <div className="flex gap-2">
              {[...Array(5)].map((_, idx) => (
                <img
                  key={idx}
                  src={pet.image}
                  alt={`${pet.name}-${idx}`}
                  className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                />
              ))}
            </div>
            <div className="flex px-1 py-2 gap-4 rounded-lg mt-4 items-center font-bold text-md text-gray-600 bg-[#FCEED5]">
              <p>❤️ 100% health guarantee for pets <span className="ml-1">🐾 100% guarantee of pet identification</span></p>
            </div>
            <div className="flex gap-4 mt-4 text-gray-500 text-lg">
              <p className="text-md font-semibold mt-[3px]"><FontAwesomeIcon icon={faShareAlt} className="max-w-[16px] mx-2" />Share:</p>
              <i className="fab fa-facebook-f mt-2"></i>
              <i className="fab fa-twitter mt-2"></i>
              <i className="fab fa-instagram mt-2"></i>
              <i className="fab fa-youtube mt-2"></i>
            </div>
          </div>

          <div className="flex-1 md:pt-4">
            <p className="text-sm text-gray-400 mb-2">
              Home <FontAwesomeIcon icon={faCaretRight} className="max-w-[6px] mx-2" /> Dog <FontAwesomeIcon icon={faCaretRight} className="max-w-[6px] mx-2" /> Large Dog <FontAwesomeIcon icon={faCaretRight} className="max-w-[6px] mx-2" /> <span className="text-sm text-gray-400">{pet.name}</span>
            </p>
            <p className="text-xs text-gray-400 mt-6">SKU #{pet.id?.toString().padStart(6, "0") ?? "000000"}</p>

            <h1 className="text-3xl md:text-4xl font-bold text-[#00171F] mb-2">{pet.name}</h1>
            <p className="text-2xl font-bold text-[#002A48] mb-6">{pet.price} VND</p>

            <div className="flex gap-4 my-6">
              <button className="px-9 py-3 bg-[#002A48] text-white rounded-4xl border-2 hover:bg-white hover:border-[#002A48] hover:text-black transition">
                Contact us
              </button>
              <button className="px-9 py-3 border-2 border-[#002A48] rounded-4xl hover:bg-[#002A48] hover:text-white transition">
                <FontAwesomeIcon icon={faMessage} className="max-w-[19px] mr-3" />Chat with Monito
              </button>
            </div>

            <div className="grid grid-cols-2 gap-x-4 text-sm text-gray-600">
              {[
                ["SKU", `#${pet.id?.toString().padStart(6, "0") ?? "000000"}`],
                ["Gender", pet.gender],
                ["Age", `${pet.age} ${pet.age > 1 ? "years" : "year"}`],
                ["Size", "Small"],
                ["Color", "Apricot & Tan"],
                ["Vaccinated", "Yes"],
                ["Dewormed", "Yes"],
                ["Cart", "Yes (MKA)"],
                ["Microchip", "Yes"],
                ["Location", "Vietnam"],
                ["Published Date", "12-Oct-2022"],
                ["Additional Information", "Pure breed Shih Tzu. Good body structure. With MKA cert and Microchip. Father from champion lineage."]
              ].map(([label, value], idx) => (
                <div
                  key={idx}
                  className="col-span-2 grid grid-cols-2 gap-x-4 py-2 border-b border-[#EBEEEF]"
                >
                  <p className="font-semibold">{label}</p>
                  <p>: {value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 px-6 md:px-20">
        <h2 className="text-xl font-bold mb-6">Our lovely customer</h2>
        <Slider {...sliderSettings}>
          {customerImages.map((src, idx) => (
            <div key={idx} className="px-2">
              <img
                src={src}
                alt={`Customer ${idx + 1}`}
                className="rounded-xl object-cover w-[248px] h-[340px]"
              />
            </div>
          ))}
        </Slider>
      </div>

      <section className="px-6 md:px-10 md:mt-15">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm">What's new?</p>
            <h2 className="text-[20px] font-bold text-[#003459] font-[Helvetica]">
              See More Puppies
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 bg-trasparent text-[#003459] px-4 py-2 rounded-4xl border border-[#003459] hover:bg-[#003459] hover:text-white transition"
          >
            View more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pets.slice(0, 4).map((dog) => (
            <div
              key={dog.id}
              className="bg-white shadow rounded-lg border-4 border-white overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={dog.image}
                alt={dog.name}
                className="w-full md:h-80 object-cover rounded-xl"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-[#00171F]">
                  {dog.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  <span className="hidden md:inline">
                    Gene: {dog.gender} &middot; Age: {dog.age}
                  </span>
                  <span className="block md:hidden">
                    {dog.gender}
                    <br />
                    {dog.age}
                  </span>
                </p>
                <p className="text-[#00171F] font-bold mt-2">
                  {dog.price.toLocaleString("vi-VN")} VND
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center md:hidden">
          <Link
            href="/products"
            className="flex items-center gap-2 w-full text-center justify-center bg-white text-[#003459] px-4 py-2 rounded-4xl border border-[#003459] hover:bg-[#003459] hover:text-white transition"
          >
            View more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative h-4 w-4 top-[2px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
