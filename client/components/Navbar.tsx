import { Link, useLocation } from "react-router-dom";
import { ChevronDown, X, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <nav className="bg-[#121212] h-16 flex items-center px-4 sm:px-8 lg:px-[420px] relative w-full">
        <div className="flex w-full max-w-[1920px] mx-auto items-center justify-between">
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

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
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

              {/* Desktop Services Dropdown */}
              <div className="absolute top-full right-0 mt-2 w-64 bg-[#121212] border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <div className="mb-4">
                    <h3 className="text-[#247FBF] text-sm font-semibold mb-2 font-inter">Personal Support</h3>
                    <ul className="space-y-1">
                      <li><a href="#" className="text-white text-sm hover:text-[#247FBF] block py-1 font-inter">Accommodation Tenancy</a></li>
                      <li><a href="#" className="text-white text-sm hover:text-[#247FBF] block py-1 font-inter">Assist-Life Stage, Transition</a></li>
                      <li><a href="#" className="text-white text-sm hover:text-[#247FBF] block py-1 font-inter">Assist-Personal Activities</a></li>
                      <li><a href="#" className="text-white text-sm hover:text-[#247FBF] block py-1 font-inter">Assist-Travel/Transport</a></li>
                      <li><a href="#" className="text-white text-sm hover:text-[#247FBF] block py-1 font-inter">Shared Living</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[#247FBF] text-sm font-semibold mb-2 font-inter">Community Engagement</h3>
                    <ul className="space-y-1">
                      <li><a href="#" className="text-white text-sm hover:text-[#247FBF] block py-1 font-inter">Community Participation</a></li>
                      <li><a href="#" className="text-white text-sm hover:text-[#247FBF] block py-1 font-inter">Development-Life Skills</a></li>
                      <li><a href="#" className="text-white text-sm hover:text-[#247FBF] block py-1 font-inter">Assistive Products</a></li>
                      <li><a href="#" className="text-white text-sm hover:text-[#247FBF] block py-1 font-inter">Participate in Community</a></li>
                      <li><a href="#" className="text-white text-sm hover:text-[#247FBF] block py-1 font-inter">Group/Centre Activities</a></li>
                    </ul>
                  </div>
                </div>
              </div>
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
          <button
            className="lg:hidden text-white z-50 relative"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-[rgba(87,87,87,0.30)]"></div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#121212] z-40 md:hidden">
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Logo in mobile menu */}
            <div className="flex items-center mb-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/03e31ad5f89f5532eb953ff6c5194fd3514e703e?width=144"
                alt="Quality Care Logo"
                className="h-[53.66px] w-[72px]"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-6">
              <Link
                to="/"
                className={`text-xl font-medium font-inter ${
                  isActive('/') ? 'text-[#247FBF]' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`text-xl font-medium font-inter ${
                  isActive('/about') ? 'text-[#247FBF]' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Services Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-xl font-medium text-white font-inter"
                  onClick={toggleServices}
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                {isServicesOpen && (
                  <div className="mt-4 ml-4 space-y-4">
                    <div>
                      <h3 className="text-[#247FBF] text-sm font-semibold mb-2 font-inter">Personal Support</h3>
                      <ul className="space-y-2 ml-4">
                        <li><a href="#" className="text-white text-base hover:text-[#247FBF] block font-inter">Accommodation Tenancy</a></li>
                        <li><a href="#" className="text-white text-base hover:text-[#247FBF] block font-inter">Assist-Life Stage, Transition</a></li>
                        <li><a href="#" className="text-white text-base hover:text-[#247FBF] block font-inter">Assist-Personal Activities</a></li>
                        <li><a href="#" className="text-white text-base hover:text-[#247FBF] block font-inter">Assist-Travel/Transport</a></li>
                        <li><a href="#" className="text-white text-base hover:text-[#247FBF] block font-inter">Shared Living</a></li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[#247FBF] text-sm font-semibold mb-2 font-inter">Community Engagement</h3>
                      <ul className="space-y-2 ml-4">
                        <li><a href="#" className="text-white text-base hover:text-[#247FBF] block font-inter">Community Participation</a></li>
                        <li><a href="#" className="text-white text-base hover:text-[#247FBF] block font-inter">Development-Life Skills</a></li>
                        <li><a href="#" className="text-white text-base hover:text-[#247FBF] block font-inter">Assistive Products</a></li>
                        <li><a href="#" className="text-white text-base hover:text-[#247FBF] block font-inter">Participate in Community</a></li>
                        <li><a href="#" className="text-white text-base hover:text-[#247FBF] block font-inter">Group/Centre Activities</a></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`text-xl font-medium font-inter ${
                  isActive('/contact') ? 'text-[#247FBF]' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
