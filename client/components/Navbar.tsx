import { Link, useLocation } from "react-router-dom";
import { ChevronDown, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useEscapeKey } from "@/hooks/use-escape-key";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [shouldShowMenu, setShouldShowMenu] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setShouldShowMenu(true);
      setTimeout(() => setIsMobileMenuOpen(true), 10);
    } else {
      setIsMobileMenuOpen(false);
      setTimeout(() => setShouldShowMenu(false), 300);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setTimeout(() => setShouldShowMenu(false), 300);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  // Focus trap and escape key handling for mobile menu
  const mobileMenuRef = useFocusTrap<HTMLDivElement>(isMobileMenuOpen);
  useEscapeKey(closeMobileMenu, isMobileMenuOpen);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Track scroll position for enhanced navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`${
          isScrolled 
            ? "bg-[#121212]/98 backdrop-blur-md shadow-xl" 
            : "bg-[#121212]/95 backdrop-blur-sm shadow-lg"
        } h-16 flex items-center sticky top-0 w-full border-b border-[rgba(87,87,87,0.30)] z-[100] overflow-visible transition-all duration-300`}
      >
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 min-w-0">
            {/* Logo Section - Always far left */}
            <Link to="/" className="flex items-center flex-shrink-0 min-w-0 max-w-[70%] sm:max-w-none">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/03e31ad5f89f5532eb953ff6c5194fd3514e703e?width=144"
                alt="Quality Care Logo"
                className="h-10 sm:h-12 w-auto flex-shrink-0"
              />
              <div className="ml-2 sm:ml-3 min-w-0 overflow-hidden">
                <h1 className="text-[#247FBF] text-lg sm:text-xl font-bold leading-tight font-inter truncate">
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

              <div 
                className="relative"
                onMouseEnter={() => setIsDesktopServicesOpen(true)}
                onMouseLeave={() => setIsDesktopServicesOpen(false)}
              >
                <button className="flex items-center gap-2 text-base font-medium transition-colors duration-200 font-inter text-white hover:text-[#247FBF]">
                  Services
                  <motion.div 
                    className="w-5 h-5 flex items-center justify-center"
                    animate={{ rotate: isDesktopServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 text-[#247FBF]" />
                  </motion.div>
                </button>

                {/* Desktop Services Dropdown with Framer Motion */}
                <AnimatePresence>
                  {isDesktopServicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#1a1a1a] border border-gray-700 rounded-lg shadow-2xl"
                      style={{ zIndex: 99999 }}
                    >
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
                    </motion.div>
                  )}
                </AnimatePresence>
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
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {shouldShowMenu && (
          <>
            {/* Backdrop overlay for click-to-close */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            
            {/* Mobile Menu Panel */}
            <motion.div 
              id="mobile-menu"
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: isMobileMenuOpen ? "0%" : "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 w-full bg-[#121212] z-40 lg:hidden overflow-x-hidden"
            >
            <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between h-16 px-2 sm:px-4 border-b border-[rgba(87,87,87,0.30)] min-w-0">
              <Link
                to="/"
                className="flex items-center flex-shrink-0 min-w-0 max-w-[70%]"
                onClick={closeMobileMenu}
              >
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/03e31ad5f89f5532eb953ff6c5194fd3514e703e?width=144"
                  alt="Quality Care Logo"
                  className="h-10 sm:h-12 w-auto flex-shrink-0"
                />
                <div className="ml-2 sm:ml-3 min-w-0 overflow-hidden">
                  <h1 className="text-[#247FBF] text-lg sm:text-xl font-bold leading-tight font-inter truncate">
                    Quality Care
                  </h1>
                </div>
              </Link>
              <button
                className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-2 sm:px-4 py-6 overflow-y-auto overflow-x-hidden">
              <div className="space-y-1">
                <Link
                  to="/"
                  className={`block px-3 py-3 text-lg font-medium rounded-md transition-colors font-inter ${
                    isActive("/")
                      ? "text-[#247FBF] bg-[#247FBF]/10"
                      : "text-white hover:text-[#247FBF] hover:bg-white/5"
                  }`}
                  onClick={closeMobileMenu}
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
                  onClick={closeMobileMenu}
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
                    <motion.div
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                    <div className="px-3 py-2 space-y-4">
                      <div>
                        <h3 className="text-[#247FBF] text-sm font-semibold mb-2 px-3 uppercase tracking-wider font-inter">
                          Personal Support
                        </h3>
                        <div className="space-y-1">
                          <Link
                            to="/AccommodationTenancy"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={closeMobileMenu}
                          >
                            Accommodation Tenancy
                          </Link>
                          <Link
                            to="/AssistLifeStageTransition"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={closeMobileMenu}
                          >
                            Assist-Life Stage, Transition
                          </Link>
                          <Link
                            to="/AssistPersonalActivities"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={closeMobileMenu}
                          >
                            Assist-Personal Activities
                          </Link>
                          <Link
                            to="/AssistTravelTransport"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={closeMobileMenu}
                          >
                            Assist-Travel/Transport
                          </Link>
                          <Link
                            to="/SharedLiving"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={closeMobileMenu}
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
                            onClick={closeMobileMenu}
                          >
                            Community Participation
                          </Link>
                          <Link
                            to="/DevelopmentLifeSkills"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={closeMobileMenu}
                          >
                            Development-Life Skills
                          </Link>
                          <Link
                            to="/AssistiveProducts"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={closeMobileMenu}
                          >
                            Assistive Products
                          </Link>
                          <Link
                            to="/ParticipateInCommunity"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={closeMobileMenu}
                          >
                            Participate in Community
                          </Link>
                          <Link
                            to="/GroupCentreActivities"
                            className="block px-6 py-2 text-white/80 text-base hover:text-[#247FBF] hover:bg-white/5 rounded transition-colors font-inter"
                            onClick={closeMobileMenu}
                          >
                            Group/Centre Activities
                          </Link>
                        </div>
                      </div>
                    </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/contact"
                  className={`block px-3 py-3 text-lg font-medium rounded-md transition-colors font-inter ${
                    isActive("/contact")
                      ? "text-[#247FBF] bg-[#247FBF]/10"
                      : "text-white hover:text-[#247FBF] hover:bg-white/5"
                  }`}
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
            </motion.div>
        </>
      )}
      </AnimatePresence>

    </>
  );
}
