import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AccommodationTenancy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex justify-center items-center py-20 px-4 min-h-[465px]">
        <div className="flex min-w-full px-4 sm:px-8 lg:px-[262.5px] flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-[30px] max-w-[1080px] w-full">
          {/* Accommodation Tenancy Badge */}
          <div className="flex px-4 sm:px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
            <div className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px] text-center">
              Accommodation Tenancy
            </div>
          </div>

          {/* Main Heading */}
          <div className="flex max-w-[555px] w-full flex-col items-center">
            <div className="text-center">
              <h1 className="text-[#247FBF] text-center font-inter text-lg sm:text-xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                <div>Navigating Housing with Confidence:</div>
                <div>Tailored Support for Your Needs</div>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section - Placeholder for future content */}
      <section className="flex justify-center items-center py-20 px-4">
        <div className="flex flex-col justify-center items-center gap-[60px] max-w-[1080px] w-full">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-600 text-center">
              <p>
                This service page is currently under development. Please continue prompting to add more content about Accommodation Tenancy services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
