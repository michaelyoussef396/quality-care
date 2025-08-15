export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-inter">
            Welcome to{" "}
            <span className="text-[#247FBF]">Quality Care</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-inter">
            Providing exceptional healthcare services with compassion, expertise, and dedication to improving lives in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#247FBF] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors font-inter">
              Learn More About Us
            </button>
            <button className="border-2 border-[#247FBF] text-[#247FBF] px-8 py-3 rounded-lg font-semibold hover:bg-[#247FBF] hover:text-white transition-colors font-inter">
              Contact Us Today
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
