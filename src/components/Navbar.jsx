"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiSearch, FiX, FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#FCEED5] shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between md:mx-28 px-4 py-3">
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>

        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Pet Paradise Logo" className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center space-x-16 font-semibold ml-20 text-[#003459]">
          <Link href="/" className="hover:text-yellow-700">Home</Link>
          <Link href="/category" className="hover:text-yellow-700">Category</Link>
          <Link href="/about" className="hover:text-yellow-700">About</Link>
          <Link href="/contact" className="hover:text-yellow-700">Contact</Link>
        </div>

        <div className="hidden md:flex items-center bg-white rounded-4xl px-3 py-1 ml-auto">
          <FiSearch className="text-black mr-2" />
          <input
            type="text"
            placeholder="Search something here!"
            className="outline-none bg-transparent text-md text-black"
          />
        </div>

        <div className="hidden md:flex items-center space-x-4 ml-4 text-sm">
          <button
            className="
              bg-[#003459] text-white px-4 py-2 rounded-full
              border-2 border-[#003459]
              hover:bg-white hover:text-black hover:border-[#003459]
              h-10 hover:cursor-pointer
            "
          >
            Join the Community
          </button>
          <div className="flex items-center space-x-1 cursor-pointer md:mr-34 text-[#003459]">
            <span className="flex items-center space-x-1">
              <img src="vnd.png" alt="" className="w-5 h-5 mr-1" />
              VND
            </span>
            <FiChevronDown />
          </div>

        </div>

        <button className="md:hidden text-2xl text-black">
          <FiSearch />
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full text-black bg-[#FCEED5] flex flex-col items-center py-4 md:hidden">
          <Link href="/" className="py-2" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/category" className="py-2" onClick={() => setMobileOpen(false)}>Category</Link>
          <Link href="/about" className="py-2" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" className="py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
