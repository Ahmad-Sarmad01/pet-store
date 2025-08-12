export default function Footer() {
  return (
    <footer className="bg-[#FCEED5] text-[#003459] pt-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Newsletter */}
        <div className="bg-[#003459] rounded-xl p-6 flex flex-col gap-6 md:mt-8 md:w-250 md:ml-32 md:flex-row md:items-center md:justify-between">
          <h3 className="text-white font-bold text-lg leading-snug text-left">
            Register Now So You Don’t Miss <br />
            Our Programs
          </h3>
          <div className="bg-white rounded-lg w-full md:w-auto">
            <div className="flex flex-col gap-2 md:flex-row md:items-center bg-white px-2 py-2 rounded-lg overflow-hidden w-full md:w-[400px]">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 md:px-5 md:py-2 py-3 px-6 outline-none rounded-lg text-gray-700 border border-gray-400 text-sm"
              />
              <button className="bg-[#003459] rounded-lg text-white md:px-5 md:py-2 py-4 text-sm font-semibold hover:bg-[#00253b] transition-colors w-full md:w-auto">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Middle Row: Social + Nav */}
        <div className="hidden md:flex flex-col md:gap-100 gap-4 mt-8 md:flex-row md:items-center md:justify-around text-black">
          
          {/* Navigation */}
          <nav className="flex justify-center gap-6 text-sm font-medium order-2 md:order-1">
            <a href="#">Home</a>
            <a href="#">Category</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6 text-lg justify-center order-1 md:order-2">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="md:hidden flex flex-col md:gap-100 gap-4 mt-8 md:flex-row md:items-center md:justify-around text-black">
          <div className="flex gap-9 mt-3 text-lg justify-center order-2">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>

          <nav className="flex justify-center gap-15 text-sm font-medium order-1">
            <a href="#">Home</a>
            <a href="#">Category</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-[#CCD1D2] mt-8 mb-8"></div>

        {/* Bottom Row */}
        <div className="hidden md:flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between text-xs text-gray-600">
          <p className="text-center md:text-left md:mb-6">© 2025 Ahmad. All rights reserved.</p>
          <img src="/logo.png" alt="Monito Logo" className="h-8 md:h-6 md:mb-6" />
          <div className="flex items-center gap-6 md:mb-6">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div className="md:hidden flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between text-xs text-gray-600">
          <img src="/logo.png" alt="Monito Logo" className="h-8 md:h-6 md:mb-6" />
          <div className="flex items-center gap-6 mt-3 md:mb-6">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
          </div>
          <p className="text-center mt-2 mb-6">© 2025 Ahmad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
