import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#121212] h-16 flex items-center justify-center px-4 sm:px-8 lg:px-[420px] relative">
      <div className="flex max-w-[1080px] w-full items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-end">
          <div className="flex items-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/03e31ad5f89f5532eb953ff6c5194fd3514e703e?width=144" 
              alt="Quality Care Logo" 
              className="h-[53.66px] w-[72px]"
            />
            <div className="ml-2">
              <h1 className="text-[#247FBF] text-xl font-bold leading-7 font-inter">
                Quality Care
              </h1>
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          <Link 
            to="/" 
            className={`text-base font-medium leading-8 tracking-[-0.16px] font-inter ${
              isActive('/') ? 'text-[#247FBF]' : 'text-white hover:text-[#247FBF]'
            }`}
          >
            Home
          </Link>
          
          <Link 
            to="/about" 
            className={`text-base font-medium leading-8 tracking-[-0.16px] font-inter ${
              isActive('/about') ? 'text-[#247FBF]' : 'text-white hover:text-[#247FBF]'
            }`}
          >
            About Us
          </Link>
          
          <div className="relative group">
            <button className="flex items-center gap-1 text-base font-medium leading-8 tracking-[-0.16px] font-inter text-white hover:text-[#247FBF]">
              Services
              <div className="w-6 h-6 flex items-center justify-center rounded bg-[rgba(227,169,121,0.05)]">
                <ChevronDown className="w-3 h-3 text-[#247FBF]" />
              </div>
            </button>
          </div>
          
          <Link 
            to="/contact" 
            className={`text-base font-medium leading-8 tracking-[-0.16px] font-inter ${
              isActive('/contact') ? 'text-[#247FBF]' : 'text-white hover:text-[#247FBF]'
            }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[rgba(87,87,87,0.30)]"></div>
    </nav>
  );
}
