import Footer from "../components/Footer";

export default function AccommodationTenancy() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Service Description Section */}
      <section className="flex justify-center items-center py-20 px-4">
        <div className="flex flex-col justify-center items-center gap-[60px] max-w-[1080px] w-full">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-600 text-center">
              <h2 className="text-[#247FBF] font-inter text-2xl font-bold mb-8">
                Accommodation Tenancy Support
              </h2>
              <p className="text-lg mb-6">
                Our Accommodation Tenancy services are designed to help individuals with disabilities find, secure, and maintain appropriate housing that meets their unique needs and preferences.
              </p>
              <p className="text-base mb-6">
                We understand that finding the right accommodation can be challenging, which is why our experienced team provides comprehensive support throughout your housing journey. From initial search to ongoing tenancy management, we're here to ensure you have a safe, comfortable, and accessible place to call home.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                <div>
                  <h3 className="text-[#247FBF] font-bold text-xl mb-4">What We Offer</h3>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>Property search assistance</li>
                    <li>Application support and advocacy</li>
                    <li>Lease negotiation guidance</li>
                    <li>Accommodation modifications consultation</li>
                    <li>Ongoing tenancy support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#247FBF] font-bold text-xl mb-4">Our Approach</h3>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>Person-centered planning</li>
                    <li>Collaborative goal setting</li>
                    <li>Individual needs assessment</li>
                    <li>Community integration focus</li>
                    <li>Long-term sustainability planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="flex justify-center items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-[240px]">
        <div className="flex h-auto lg:h-[278px] w-full justify-center items-center rounded-lg bg-[rgba(255,255,255,0.05)] py-8 sm:py-12 lg:py-8">
          <div className="flex min-w-full max-w-[600px] flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-[20px]">
            {/* Contact us Badge */}
            <div className="flex px-4 sm:px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
              <div className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                Get Started Today
              </div>
            </div>

            {/* Main Heading */}
            <div className="flex flex-col items-center w-full">
              <div className="text-center">
                <h2 className="font-inter text-lg sm:text-xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                  <span className="text-[#247FBF]">Ready to Find Your Ideal Home?</span>{" "}
                  <br />
                  <span className="text-[#ADADAD]">Let's Start Your Housing Journey Together</span>
                </h2>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center">
              <button className="flex items-center gap-4 px-5 py-[6px] pl-5 pr-[10px] rounded-[24px] bg-[#247FBF] hover:bg-[#1e6a9f] transition-colors group">
                <span className="text-white text-center font-inter text-[15px] font-medium leading-6 tracking-[0.15px]">
                  Contact Our Housing Team
                </span>
                <div className="flex w-9 h-9 justify-center items-center rounded-[90px] bg-white">
                  <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M14.6499 5.23438V12.5469C14.6499 12.7707 14.561 12.9853 14.4027 13.1435C14.2445 13.3017 14.0299 13.3906 13.8061 13.3906C13.5823 13.3906 13.3677 13.3017 13.2095 13.1435C13.0513 12.9853 12.9624 12.7707 12.9624 12.5469V7.27344L5.40307 14.8313C5.24457 14.9898 5.02958 15.0789 4.80542 15.0789C4.58125 15.0789 4.36627 14.9898 4.20776 14.8313C4.04925 14.6728 3.96021 14.4578 3.96021 14.2337C3.96021 14.0095 4.04925 13.7945 4.20776 13.636L11.7671 6.07812H6.49362C6.26985 6.07812 6.05523 5.98923 5.897 5.831C5.73877 5.67276 5.64987 5.45815 5.64987 5.23438C5.64987 5.0106 5.73877 4.79599 5.897 4.63775C6.05523 4.47952 6.26985 4.39063 6.49362 4.39062H13.8061C14.0299 4.39062 14.2445 4.47952 14.4027 4.63775C14.561 4.79599 14.6499 5.0106 14.6499 5.23438Z" fill="black"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
