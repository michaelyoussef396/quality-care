export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex justify-center items-center py-20 px-4 min-h-[465px]">
        <div className="flex flex-col justify-center items-center gap-6 max-w-[1080px] w-full px-4 sm:px-8 lg:px-[190px]">
          <div className="flex max-w-[700px] w-full flex-col justify-center items-center gap-[30px]">
            {/* Quality Care Badge */}
            <div className="flex px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
              <div className="text-[#247FBF] font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px]">
                QUALITY CARE
              </div>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col justify-center items-center gap-2">
              {/* Main Heading */}
              <div className="flex max-w-[600px] w-full flex-col items-center">
                <div className="text-center">
                  <h1 className="text-[#121212] text-center font-inter text-[32px] sm:text-[48px] font-bold leading-[1.1] tracking-[0.48px]">
                    <div>Where Compassion</div>
                    <div>Meets Empowerment</div>
                  </h1>
                </div>
              </div>

              {/* Description */}
              <div className="flex flex-col items-center max-w-[700px]">
                <p className="text-[#121212] text-center font-inter text-base font-normal leading-[24.8px] tracking-[0.32px] px-4">
                  At Quality Care, we are dedicated to supporting individuals with disabilities on their journey to independence and fulfillment. Our compassionate team works closely with you, ensuring personalized, high-quality services that empower you to lead a life of dignity and choice.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="flex items-center gap-4 px-5 py-[6px] pl-5 pr-[10px] rounded-[24px] bg-[#247FBF] hover:bg-[#1e6a9f] transition-colors group">
              <span className="text-white text-center font-inter text-[15px] font-medium leading-6 tracking-[0.15px]">
                Start Your Journey With Us
              </span>
              <div className="flex w-9 h-9 justify-center items-center rounded-[90px] bg-white">
                <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M14.8438 4.78003V12.0925C14.8438 12.3163 14.7549 12.5309 14.5966 12.6891C14.4384 12.8474 14.2238 12.9363 14 12.9363C13.7762 12.9363 13.5616 12.8474 13.4034 12.6891C13.2451 12.5309 13.1562 12.3163 13.1562 12.0925V6.81909L5.59695 14.377C5.43844 14.5355 5.22346 14.6245 4.9993 14.6245C4.77513 14.6245 4.56015 14.5355 4.40164 14.377C4.24313 14.2185 4.15408 14.0035 4.15408 13.7793C4.15408 13.5552 4.24313 13.3402 4.40164 13.1817L11.9609 5.62378H6.6875C6.46372 5.62378 6.24911 5.53488 6.09088 5.37665C5.93264 5.21842 5.84375 5.00381 5.84375 4.78003C5.84375 4.55625 5.93264 4.34164 6.09088 4.18341C6.24911 4.02517 6.46372 3.93628 6.6875 3.93628H14C14.2238 3.93628 14.4384 4.02517 14.5966 4.18341C14.7549 4.34164 14.8438 4.55625 14.8438 4.78003Z" fill="black"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-inter">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#247FBF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-inter">Compassionate Care</h3>
              <p className="text-gray-600 font-inter">
                Dedicated to providing personalized healthcare with empathy and understanding.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#247FBF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-inter">Expert Team</h3>
              <p className="text-gray-600 font-inter">
                Highly qualified healthcare professionals committed to excellence in patient care.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#247FBF] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-inter">Modern Technology</h3>
              <p className="text-gray-600 font-inter">
                State-of-the-art medical equipment and innovative treatment approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#247FBF] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-inter">
            Ready to Experience Quality Care?
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-inter">
            Contact us today to schedule your appointment or learn more about our services.
          </p>
          <button className="bg-white text-[#247FBF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-inter">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
