"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/redux/slices/productsSlice";
import ProductCard2 from "@/components/ProductCard2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === "loading")
    return <p className="text-center text-gray-500 mt-10">Loading...</p>;
  if (status === "failed")
    return <p className="text-center text-red-500 mt-10">Failed to load products.</p>;

  return (
    <div className="md:max-w-7xl min-w-[600px] mx-auto px-4 py-10 bg-white">
      <h1 className="text-md md:ml-4 font-bold mb-6 flex items-center gap-2 text-gray-500 mt-10">
        Home
        <FontAwesomeIcon icon={faCaretRight} className="max-w-[6px]" />
        Dog
        <FontAwesomeIcon icon={faCaretRight} className="max-w-[6px]" />
        Small Dog
      </h1>

      <section className="container relative md:right-15 bg-[#FCEED5] px-6 md:mx-15 text-white py-16 overflow-hidden md:rounded-4xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-8">
          <div className="hidden md:flex relative flex-1 justify-center md:justify-end mb-8 md:mb-0">
            <img
              src="/category-hero-main-desktop.png"
              alt=""
              className="relative z-10 w-[220px] sm:w-[260px] md:min-w-[650px] md:left-8 md:top-16"
            />
          </div>
          <div className="hidden md:flex relative flex-1 items-center justify-center md:pl-12">
            <img
              src="/category-hero-overlay-desktop.png"
              alt=""
              className="absolute inset-0 min-w-[870px] h-auto -top-22 -left-62 object-cover "
            />
            <div className="relative z-0 text-center md:text-right">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-white">
                One More Friend
              </h2>
              <h3 className="sm:text-xl md:text-3xl font-bold mb-4 text-white">
                Thousands More Fun!
              </h3>
              <p className="mb-6 text-white text-sm md:text-base max-w-md mx-auto md:mx-0">
                Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center w-full">
                <Link
                  href="/category"
                  className="bg-[#002A48] text-white px-7 py-3 rounded-4xl hover:bg-white border hover:text-[#002A48] border-white hover:border-white transition w-full md:w-auto text-center"
                >
                  View Intro <FontAwesomeIcon icon={faPlay} />
                </Link>
                <Link
                  href="/category"
                  className="bg-white text-[#003459] px-7 py-3 rounded-4xl hover:bg-[#002A48] border hover:text-white border-[#003459] hover:border-white transition w-full md:w-auto text-center"
                >
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:hidden w-full">
            <img
              src="/category-hero-overlay2-mobile.png"
              alt=""
              className="absolute top-27 w-6 right-30 mb-6"
            />
            <h2 className="absolute text-6xl text-[#003459] font-bold mb-4 top-5 left-5 z-10">
              One More Friend
            </h2>
            <h3 className="absolute text-4xl font-bold mb-4 mt-14 text-[#003459] top-8 left-6 z-10">
              Thousands More Fun!
            </h3>
            <p className="absolute mb-6 mt-24  px-4 text-lg text-[#003459] left-2 z-10">
              Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
            </p>
            <div className="flex flex-row gap-4 w-full px-4 z-10 mt-57">
              <Link
                href="/category"
                className="flex-1 bg-transparent hover:bg-[#003459] text-[#003459] hover:text-white border px-4 py-4 rounded-4xl  transition text-center"
              >
                View Intro <FontAwesomeIcon icon={faPlay} />
              </Link>
              <Link
                href="/category"
                className="flex-1 bg-[#003459] hover:bg-[#003459] text-white hover:text-[#003459] border px-4 py-4 rounded-4xl transition text-center"
              >
                Explore Now
              </Link>
            </div>
            <div className="relative">
              <img
                src="/category-hero-overlay-mobile.png"
                alt=""
                className="relative min-w-140 top-20"
              />
              <img
                src="/category-hero-main-mobile.png"
                alt=""
                className="absolute -bottom-19 -right-[22px] min-w-160"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="hidden md:block w-full lg:w-1/4 p-4">
          <h2 className="text-[24px] font-bold text-[#003459] mt-3 mb-4">Filter</h2>
          <div>
            <h3 className="text-[16px] font-bold text-[#003459] mb-2">Gender</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#003459]" />
                <span className="text-[#667479] text-[14px]">Male</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#003459] " />
                <span className="text-[#667479] text-[14px]">Female</span>
              </label>
            </div>
          </div>
          <span className="block w-full h-px bg-gray-300 mt-5"></span>
          <div>
            <h3 className="text-[16px] font-bold text-[#003459] mb-2 mt-5">Color</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#003459]" />
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="text-[#667479] text-[14px]">Red</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#003459]" />
                <span className="w-3 h-3 rounded-full bg-[#FBCEB1]"></span>
                <span className="text-[#667479] text-[14px]">Apricot</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#003459]" />
                <span className="w-3 h-3 rounded-full bg-black"></span>
                <span className="text-[#667479] text-[14px]">Black</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#003459]" />
                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-black to-white border border-gray-300"></span>
                <span className="text-[#667479] text-[14px]">Black & White</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#003459]" />
                <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                <span className="text-[#667479] text-[14px]">Silver</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#003459]" />
                <span className="w-3 h-3 rounded-full bg-amber-700"></span>
                <span className="text-[#667479] text-[14px]">Tan</span>
              </label>
            </div>
          </div>
          <span className="block w-full h-px bg-gray-300 mt-5"></span>
          <div>
            <h3 className="text-[16px] font-bold text-[#003459] mb-2 mt-5">Price</h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min."
                className="w-20 px-2 border border-gray-300 rounded-md text-[14px] text-[#667479] focus:outline-none focus:ring-2 focus:ring-[#003459]"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-20 px-2 border border-gray-300 rounded-md text-[14px] text-[#667479] focus:outline-none focus:ring-2 focus:ring-[#003459]"
              />
            </div>
          </div>
          <span className="block w-full h-px bg-gray-300 mt-5"></span>
          <div>
            <h3 className="text-[16px] font-bold text-[#003459] mb-2 mt-5">Breed</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#003459]" />
                <span className="text-[#667479] text-[14px]">Small</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#003459] " />
                <span className="text-[#667479] text-[14px]">Medium</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3 accent-[#003459] " />
                <span className="text-[#667479] text-[14px]">Large</span>
              </label>
            </div>
          </div>
          <span className="block w-full h-px bg-gray-300 mt-5"></span>
        </aside>

        <main className="w-full lg:w-3/4">
          <div className="flex items-center justify-between mt-6 ml-6 mr-6">
            <h1 className="text-[24px] font-bold text-[#003459]">
              Small Dog{" "}
              <span className="text-[16px] font-normal text-[#667479] ml-1">52 puppies</span>
            </h1>
            <p className="flex items-center text-sm text-gray-400 hover:text-gray-700 cursor-pointer rounded-4xl border px-2 py-2 hover:border-gray-700 border-gray-300">
              Sort by: <span className="ml-1">Popular</span>
              <i className="fas fa-chevron-down ml-2"></i>
            </p>
          </div>
          <div className="rounded-lg p-10 grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {items.map((dog) => (
              <ProductCard2 key={dog.id} product={dog} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-6 space-x-2 text-[#003459]">
            <button className="px-2 py-1 rounded hover:bg-gray-100">
              &larr;
            </button>
            <button className="px-3 py-1 rounded-lg bg-[#003459] text-white font-bold">1</button>
            <button className="px-3 py-1 rounded-lg hover:bg-gray-100 font-bold">2</button>
            <button className="px-3 py-1 rounded-lg hover:bg-gray-100 font-bold">3</button>
            <button className="px-3 py-1 rounded-lg hover:bg-gray-100 font-bold">4</button>
            <span className="px-2 font-bold">...</span>
            <button className="px-3 py-1 rounded-lg hover:bg-gray-100 font-bold">28</button>
            <button className="px-2 py-1 rounded hover:bg-gray-100">
              &rarr;
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
