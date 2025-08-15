"use client";
import Link from "next/link";
import pets from "@/data/pets";
import product from "@/data/product";
import knowledge from "@/data/knowledge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      <section className="relative bg-[#FCEED5] pt-24 md:pt-32 pb-16 overflow-hidden">
        <img
          src="/hero-rectangle-below-2.png"
          alt=""
          className="hidden md:block absolute bottom-[1px] -left-[10px] w-[800px]"
        />
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          <div className="flex-1 relative text-center md:text-left md:ml-20 md:max-w-130 md:mt-8 md:mb-26">
            <div className="text-left md:text-left">
              <h1 className="text-5xl relative z-10 md:text-5xl font-[750] mb-4 font-[Helvetica] text-[#002A48]">
                One More Friend
              </h1>
              <h2 className="text-2xl md:text-3xl font-[800] md:font-[750] mb-4 tracking-widest font-[Helvetica] text-[#002A48]">
                Thousands More Fun!
              </h2>
              <p className="text-lg text-[#242B33] font-[Helvetica] mt-10 mb-6">
                Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
              </p>
              <div className="flex flex-row gap-4 justify-start">
                <Link
                  href="/category"
                  className="bg-transparent border border-[#003459] text-[#003459] px-5 py-3 rounded-4xl hover:bg-[#003459] hover:border-[#003459] hover:border hover:text-white transition"
                >
                  View Intro <FontAwesomeIcon icon={faPlay} />
                </Link>
                <Link
                  href="/category"
                  className="bg-[#003459] text-white px-5 py-3 rounded-4xl hover:bg-transparent hover:border-[#003459] hover:border hover:text-[#003459] transition"
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
              className="absolute min-w-180 top-[20px] -left-[380px] z-10 md:absolute md:w-400 md:h-120 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:mt-20 md:z-10"
            />
            <img
              src="/hero-rectangle-down-2.png"
              alt=""
              className="absolute min-w-150 -bottom-[65px] -left-[215px] md:absolute md:-top-[33px] md:-left-[13px] md:w-[500px] md:z-0"
            />
            <img
              src="/hero-rectangle-down-1.png"
              alt=""
              className="absolute min-w-170 -bottom-[65px] -left-[180px] md:absolute md:-top-[97px] md:-left-[1px] md:w-[600px] md:z-0"
            />
            <img
              src="/hero-rectangle-center-1.png"
              alt=""
              className="absolute min-w-5 -top-[250px] -right-[170px] md:absolute md:-top-32 md:right-109 md:w-5"
            />
            <img
              src="/hero-rectangle-center-2.png"
              alt=""
              className="absolute min-w-4 -top-[244px] -right-[164px] md:absolute md:-top-30 md:right-110 md:w-5"
            />
            <img
              src="/hero-rectangle-center-1.png"
              alt=""
              className="absolute min-w-3 -top-[277px] -right-[180px] md:absolute md:-top-50 md:right-104 md:w-3"
            />
          </div>
        </div>
      </section>

      <section className="container md:mx-15 px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm">What's new?</p>
            <h2 className="text-[20px] font-bold text-[#003459] font-[Helvetica]">
              Take A Look At Some Of Our Pets
            </h2>
          </div>
          <Link
            href="/category"
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
          {pets.slice(0, 8).map((dog) => (
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
            href="/category"
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

      <section className="container relative md:right-5 bg-[#003459] px-6 md:mx-15 text-white py-16 overflow-hidden md:rounded-4xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 ">
          <div className="hidden md:flex relative flex-1 justify-center md:justify-end mb-8 md:mb-0">
            <img
              src="/hero2-below-left.png"
              alt=""
              className="absolute top-10 -left-26 min-w-[900px] z-0"
            />
            <img
              src="/hero-img2.png"
              alt=""
              className="relative z-10 w-[220px] sm:w-[260px] md:min-w-[530px] md:top-16"
            />
          </div>

          <div className="hidden md:flex relative flex-1 items-center justify-center md:pl-12">
            <img
              src="/hero2-below-right.png"
              alt=""
              className="absolute inset-0 min-w-[868px] h-auto -top-32 -left-17 object-cover z-0"
            />
            <div className="relative z-10 text-center md:text-right">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#003459]">
                One More Friend
              </h2>
              <h3 className="sm:text-xl md:text-3xl font-bold mb-4 text-[#003459]">
                Thousands More Fun!
              </h3>
              <p className="mb-6 text-[#003459] text-sm md:text-base max-w-md mx-auto md:mx-0">
                Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
                <Link
                  href="/category"
                  className="bg-transparent text-[#003459] px-7 py-3 rounded-4xl hover:bg-[#003459] border hover:text-white border-[#003459] transition w-full md:w-auto text-center"
                >
                  View Intro <FontAwesomeIcon icon={faPlay} />
                </Link>
                <Link
                  href="/category"
                  className="bg-[#003459] text-white px-7 py-3 rounded-4xl hover:bg-transparent border hover:text-[#003459] border-[#003459] transition w-full md:w-auto text-center"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:hidden w-full">
            <img
              src="/hero2-mobile-top.png"
              alt=""
              className="absolute -top-20 w-140 mb-6"
            />
            <h2 className="absolute text-4xl sm:text-3xl text-[#003459] font-bold mb-4 top-5 text-center z-10">
              One more friend
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 mt-3 text-[#003459] text-center z-10">
              Thousands More Fun!
            </h3>
            <p className="mb-6 text-center px-4 text-sm text-[#003459] z-10">
              Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
            </p>
            <div className="flex flex-row gap-4 mb-8 w-full px-4 z-10">
              <Link
                href="/category"
                className="flex-1 bg-transparent hover:bg-[#003459] text-[#003459] hover:text-white border px-4 py-2 rounded-4xl  transition text-center"
              >
                View More <FontAwesomeIcon icon={faPlay} />
              </Link>
              <Link
                href="/category"
                className="flex-1 bg-[#003459] hover:bg-[#003459] text-white hover:text-[#003459] border px-4 py-2 rounded-4xl transition text-center"
              >
                Explore Now
              </Link>
            </div>
            <div className="relative">
              <img
                src="/hero2-mobile-below.png"
                alt=""
                className="relative min-w-135 top-20"
              />
              <img
                src="/hero-img2.png"
                alt=""
                className="absolute -top-4 left-3 min-w-140"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="hidden md:block container md:mx-15 px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm">Hard to choose right products for your pets?</p>
            <h2 className="text-[20px] font-bold text-[#003459] font-[Helvetica]">
              Our Products
            </h2>
          </div>
          <Link
            href="/category"
            className="hidden md:flex items-center gap-2 bg-transparent text-[#003459] px-4 py-2 rounded-4xl border hover:bg-[#003459] hover:text-white transition"
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
          {product.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow rounded-lg border-4 border-white overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full md:h-80 object-cover rounded-xl"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-[#00171F]">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  <span className="hidden md:inline">
                    Product: {product.product} &middot; Size: {product.size}
                  </span>
                </p>
                <p className="text-[#00171F] font-bold mt-2">
                  {product.price.toLocaleString("vi-VN")} VND
                </p>
                <p className="text-[#002A48] font-bold mt-4 bg-[#FCEED5] rounded-md pt-[6px] pb-[4px] pl-[10px] pr-[10px]">🎁 &middot; Free Cat Food</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="hidden md:block container md:mx-15 px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm">
              Proud to be part of
              <span className="absolute top-870 text-[20px] font-bold text-[#003459] font-[Helvetica] ml-[6px]">
                Pet Sellers
              </span>
            </p>
          </div>
          <Link
            href="/category"
            className="hidden md:flex items-center gap-2 bg-transparent text-[#003459] px-4 py-2 rounded-4xl border hover:bg-[#003459] hover:text-white transition"
          >
            View all our sellers
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
        <div className="min-w-[200px]">
          <div
            className="flex gap-6"
            style={{ height: "120px" }}
          >
            <img src="/ps1.png" alt="Seller 1" className="h-[100px] object-cover rounded-lg w-[130px]" />
            <img src="/ps2.png" alt="Seller 2" className="h-[160px] object-cover rounded-lg w-[130px] relative -top-6" />
            <img src="/ps3.png" alt="Seller 3" className="h-[100px] object-cover rounded-lg w-[230px]" />
            <img src="/ps4.png" alt="Seller 4" className="h-[100px] object-cover rounded-lg w-[135px]" />
            <img src="/ps5.png" alt="Seller 5" className="h-[130px] object-cover rounded-lg w-[130px]" />
            <img src="/ps6.png" alt="Seller 6" className="h-[100px] object-cover rounded-lg w-[190px]" />
            <img src="/ps7.png" alt="Seller 7" className="h-[100px] object-cover rounded-lg w-[162px]" />
          </div>
        </div>
      </section>

      <section className="hidden md:block container md:left-5 md:mx-5 relative bg-[#FFB775] text-white py-16 rounded-4xl overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
          <div className="hidden md:flex relative flex-1 items-center justify-center md:pl-12">
            <img
              src="/hero3-left.png"
              alt=""
              className="absolute inset-0 min-w-[840px] h-auto -top-32 -left-27 object-cover z-0"
            />
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#003459]">
                One More Friend
              </h2>
              <h3 className="sm:text-xl md:text-3xl font-bold mb-4 text-[#003459]">
                Thousands More Fun!
              </h3>
              <p className="mb-6 text-[#003459] text-sm md:text-base max-w-md mx-auto md:mx-0">
                Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
              </p>
              <div className="flex flex-col md:flex-row gap-4 align-left w-full">
                <Link
                  href="/category"
                  className="bg-[#003459] text-white px-7 py-3 rounded-4xl hover:bg-transparent border hover:text-[#003459] border-[#003459] transition w-full md:w-auto text-center"
                >
                  Explore Now
                </Link>
                <Link
                  href="/category"
                  className="bg-transparent text-[#003459] px-7 py-3 rounded-4xl hover:bg-[#003459] border hover:text-white border-[#003459] transition w-full md:w-auto text-center"
                >
                  View Intro <FontAwesomeIcon icon={faPlay} />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex relative flex-1 justify-center md:justify-end mb-8 md:mb-0">
            <img
              src="/hero3-right.png"
              alt=""
              className="absolute -top-25 -left-106 min-w-[1100px] z-0"
            />
            <img
              src="/hero3-img.png"
              alt=""
              className="absolute z-10 w-[370px] h-[440px] -bottom-50"
            />
          </div>
        </div>
      </section>

      <section className="container md:mx-15 px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm">You already know ?</p>
            <h2 className="text-[20px] font-bold text-[#003459] font-[Helvetica]">
              Useful Pet Knowledge
            </h2>
          </div>
          <Link
            href="/category"
            className="hidden md:flex items-center gap-2 bg-transparent text-[#003459] px-4 py-2 rounded-4xl border hover:bg-[#003459] hover:text-white transition"
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
        <div className="grid gap-6 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
          {knowledge.map((knowledge, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-shadow border-4 border-white"
            >
              <img
                src={knowledge.image}
                alt={knowledge.name}
                className="w-full h-56 object-cover rounded-lg"
              />
              <div className="p-5">
                <p className="relative inline-block bg-[#00A7E7] px-3 py-1 rounded-4xl text-sm text-[#FDFDFD] right-1">Pet knowledge</p>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{knowledge.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{knowledge.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center md:hidden">
          <Link
            href="/category"
            className="flex items-center gap-2 w-full text-center justify-center bg-white text-[#003459] px-4 py-2 rounded-4xl border hover:bg-[#003459] hover:text-white transition"
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
