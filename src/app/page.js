"use client";
import Link from "next/link";
import pets from "@/data/pets";
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <section className="relative bg-[#FCEED5] pt-24 md:pt-32 pb-16 overflow-hidden">
        <img
              src="/hero-rectangle-below-2.png"
              alt=""
              className="hidden md:block absolute bottom-[1px] -left-[10px] w-[800px]"
            />
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          <div className="flex-1 relative text-center md:text-left md:ml-20 md:max-w-130 md:mt-8 md:mb-26">
            <div className="text-left md:text-left">
              <h1 className="text-4xl relative z-10 md:text-5xl font-[750] mb-4 font-[Helvetica] text-[#002A48]">
                One More Friend
              </h1>
              <h2 className="text-2xl md:text-3xl font-[750] mb-4 tracking-widest font-[Helvetica] text-[#002A48]">
                Thousands More Fun!
              </h2>
              <p className="text-lg text-[#242B33] font-[Helvetica] mt-10 mb-6">
                Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
              </p>
              <div className="flex flex-row gap-4 justify-start">
                <Link
                  href="/products"
                  className="bg-[#003459] text-white px-5 py-3 rounded-4xl hover:bg-white hover:border-[#003459] hover:border hover:text-[#003459] transition"
                >
                  View Intro <FontAwesomeIcon icon={faPlay} />
                </Link>
                <Link
                  href="/products"
                  className="bg-[#003459] text-white px-5 py-3 rounded-4xl hover:bg-white hover:border-[#003459] hover:border hover:text-[#003459] transition"
                >
                  Explore Now
                </Link>
              </div>
            </div>

            <img
              src="/hero-rectangle-top-1.png"
              alt=""
              className="
                absolute 
                top-[-130px] -left-[30px] min-w-[500px]
                md:top-[-163px] md:left-[-150px] md:w-[450px] 
              "
            />

            <img
              src="/hero-rectangle-top-2.png"
              alt=""
              className="hidden md:block absolute -top-[10px] -left-[10px] w-[60px]"
            />
          </div>
            

          <div className="flex-1 relative min-h-[400px] md:min-h-0">
            <img
              src="/hero-img.png"
              alt="Happy dog"
              className="md:absolute w-60 h-auto md:w-400 md:h-120 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:mt-20 md:z-10"
            />

            <img
              src="/hero-rectangle-down-2.png"
              alt=""
              className="absolute top-[20px] right-[10px] w-60 md:-top-[13px] md:right-[63px] md:w-[500px] z-0"
            />

            <img
              src="/hero-rectangle-down-1.png"
              alt=""
              className="absolute top-[50px] right-[0px] w-72 md:-top-[60px] md:-right-[40px] md:w-[600px] z-0"
            />

            <img
              src="/hero-rectangle-center-1.png"
              alt=""
              className="absolute -top-32 right-109 w-5"
            />
            <img
              src="/hero-rectangle-center-2.png"
              alt=""
              className="absolute -top-30 right-110 w-5"
            />
            <img
              src="/hero-rectangle-center-1.png"
              alt=""
              className="absolute -top-50 right-104 w-3"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Dogs</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pets.slice(0, 4).map((dog) => (
            <div
              key={dog.id}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={dog.image}
                alt={dog.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{dog.name}</h3>
                <p className="text-gray-500">${dog.price}</p>
                <Link
                  href={`/products/${dog.id}`}
                  className="inline-block mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
