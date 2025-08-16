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
      <nav className="bg-[#121212] h-16 flex items-center sticky top-0 w-full border-b border-[rgba(87,87,87,0.30)] z-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section - Always far left */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/03e31ad5f89f5532eb953ff6c5194fd3514e703e?width=144"
                alt="Quality Care Logo"
                className="h-12 w-auto"
              />
              <div className="ml-3">
                <h1 className="text-[#247FBF] text-xl font-bold leading-tight font-inter">
                  Quality Care
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation Links - Centered with proper spacing */}
            <div className="hidden lg:flex items-center gap-8 ml-auto">
              <Link
                to="/"
                className={`text-base font-medium transition-colors duration-200 font-inter ${
                  isActive("/")
                    ? "text-[#247FBF]"
                    : "text-white hover:text-[#247FBF]"
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`text-base font-medium transition-colors duration-200 font-inter ${
                  isActive("/about")
                    ? "text-[#247FBF]"
                    : "text-white hover:text-[#247FBF]"
                }`}
              >
                About Us
              </Link>

              <div className="relative group">
                <button className="flex items-center gap-2 text-base font-medium transition-colors duration-200 font-inter text-white hover:text-[#247FBF]">
                  Services
                  <div className="w-5 h-5 flex items-center justify-center">
                    <ChevronDown className="w-4 h-4 text-[#247FBF] group-hover:text-[#247FBF] transition-transform duration-200 group-hover:rotate-180" />
                  </div>
                </button>

                {/* Desktop Services Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-5">
                    <div className="mb-5">
                      <h3 className="text-[#247FBF] text-sm font-semibold mb-3 uppercase tracking-wider font-inter">
                        Personal Support
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/AccommodationTenancy"
                            className="text-white/80 text-sm hover:text-[#247FBF] block py-1 transition-colors font-inter"
                          >
                            Accommodation Tenancy
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/AssistLifeStageTransition"
                            className="text-white/80 text-sm hover:text-[#247FBF] block py-1 transition-colors font-inter"
                          >
                            Assist-Life Stage, Transition
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/AssistPersonalActivities"
                            className="text-white/80 text-sm hover:text-[#247FBF] block py-1 transition-colors font-inter"
                          >
                            Assist-Personal Activities
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/AssistTravelTransport"
                            className="text-white/80 text-sm hover:text-[#247FBF] block py-1 transition-colors font-inter"
                          >
                            Assist-Travel/Transport
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/SharedLiving"
                            className="text-white/80 text-sm hover:text-[#247FBF] block py-1 transition-colors font-inter"
                          >
                            Shared Living
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <h3 className="text-[#247FBF] text-sm font-semibold mb-3 uppercase tracking-wider font-inter">
                        Community Engagement
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/CommunityParticipation"
                            className="text-white/80 text-sm hover:text-[#247FBF] block py-1 transition-colors font-inter"
                          >
                            Community Participation
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/DevelopmentLifeSkills"
                            className="text-white/80 text-sm hover:text-[#247FBF] block py-1 transition-colors font-inter"
                          >
                            Development-Life Skills
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/AssistiveProducts"
                            className="text-white/80 text-sm hover:text-[#247FBF] block py-1 transition-colors font-inter"
                          >
                            Assistive Products
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ParticipateInCommunity"
                            className="text-white/80 text-sm hover:text-[#247FBF] block py-1 transition-colors font-inter"
                          >
                            Participate in Community
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/GroupCentreActivities"
                            className="text-white/80 text-sm hover:text-[#247FBF] block py-1 transition-colors font-inter"
                          >
                            Group/Centre Activities
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className={`text-base font-medium transition-colors duration-200 font-inter ${
                  isActive("/contact")
                    ? "text-[#247FBF]"
                    : "text-white hover:text-[#247FBF]"
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button - Always far right on mobile/tablet */}
            <button
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#121212] z-40 lg:hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-[rgba(87,87,87,0.30)]">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/03e31ad5f89f5532eb953ff6c5194fd3514e703e?width=144"
                  alt="Quality Care Logo"
                  className="h-12 w-auto"
                />
                <div className="ml-3">
                  <h1 className="text-[#247FBF] text-xl font-bold leading-tight font-inter">
                    Quality Care
                  </h1>
                </div>
              </Link>
              <button
                className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-4 sm:px-6 py-6 overflow-y-auto">
              <div className="space-y-1">
                <Link
                  to="/"
                  className={`block px-3 py-3 text-lg font-medium rounded-md transition-colors font-inter ${
                    isActive("/")
                      ? "text-[#247FBF] bg-[#247FBF]/10"
                      : "text-white hover:text-[#247FBF] hover:bg-white/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className={`block px-3 py-3 text-lg font-medium rounded-md transition-colors font-inter ${
                    isActive("/about")
                      ? "text-[#247FBF] bg-[#247FBF]/10"
                      : "text-white hover:text-[#247FBF] hover:bg-white/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                {/* Mobile Services Menu */}
                <div className="space-y-1">
                  <button
                    className="flex items-center justify-between w-full px-3 py-3 text-lg font-medium text-white rounded-md hover:bg-white/5 transition-colors font-inter"
                    onClick={toggleServices}
                  >
                    Services
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isServicesOpen && (
                    <div className="px-3 py-2 space-y-4">
                      <div>
                        <h3 className="text-[#247FBF] text-sm font-semibold mb-2 px-3 uppercase tracking-wider font-inter">
                          Personal Support
                        </h3>
                        <div className="space-y-1">
                          <Link
                            to="/AccommodationTenancy"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Accommodation Tenancy
                          </Link>
                          <Link
                            to="/AssistLifeStageTransition"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Assist-Life Stage, Transition
                          </Link>
                          <Link
                            to="/AssistPersonalActivities"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Assist-Personal Activities
                          </Link>
                          <Link
                            to="/AssistTravelTransport"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Assist-Travel/Transport
                          </Link>
                          <Link
                            to="/SharedLiving"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Shared Living
                          </Link>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-[#247FBF] text-sm font-semibold mb-2 px-3 uppercase tracking-wider font-inter">
                          Community Engagement
                        </h3>
                        <div className="space-y-1">
                          <Link
                            to="/CommunityParticipation"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Community Participation
                          </Link>
                          <Link
                            to="/DevelopmentLifeSkills"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Development-Life Skills
                          </Link>
                          <Link
                            to="/AssistiveProducts"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Assistive Products
                          </Link>
                          <Link
                            to="/ParticipateInCommunity"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Participate in Community
                          </Link>
                          <Link
                            to="/GroupCentreActivities"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Group/Centre Activities
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  to="/contact"
                  className={`block px-3 py-3 text-lg font-medium rounded-md transition-colors font-inter ${
                    isActive("/contact")
                      ? "text-[#247FBF] bg-[#247FBF]/10"
                      : "text-white hover:text-[#247FBF] hover:bg-white/5"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
