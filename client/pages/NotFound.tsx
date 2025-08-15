import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-[#247FBF] font-inter">404</h1>
        <p className="text-xl text-gray-600 mb-8 font-inter">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="bg-[#247FBF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors font-inter inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
