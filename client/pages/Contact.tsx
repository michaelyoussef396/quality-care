import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-[60px] pt-16 sm:pt-20 lg:pt-[100px] flex-col justify-center items-center gap-16 sm:gap-20 lg:gap-[100px]">
        {/* Contact Section */}
        <div className="flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-[60px] w-full bg-[#4A4A4A] rounded-2xl py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12">
          {/* Titles */}
          <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-[30px] w-full">
            {/* Contact Us Badge */}
            <div className="flex px-4 sm:px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
              <div className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                Contact Us
              </div>
            </div>

            {/* Main Heading and Description */}
            <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 lg:gap-[10px] w-full">
              <div className="flex max-w-[450px] w-full flex-col items-center">
                <div className="text-center">
                  <h1 className="font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                    <span className="text-[#247FBF]">Get in Touch— </span>
                    <span className="text-[#ADADAD]">Connect with</span>
                    <br />
                    <span className="text-[#ADADAD]">Our Care Experts.</span>
                  </h1>
                </div>
              </div>

              <div className="flex max-w-[800px] w-full flex-col items-center">
                <p className="text-[#121212] text-center font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                  At Quality Care, we're here to assist you with your care
                  needs. Contact us with any questions or to schedule a
                  consultation. We respond within a few hours, ensuring you
                  receive the support and guidance you need promptly. Reach out
                  today!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-end w-full max-w-[1080px] rounded-[20px] bg-[rgba(255,255,255,0.05)] p-6 sm:p-8 lg:p-[40px]">
              <div className="flex flex-col justify-center items-center w-full">
                <form className="flex flex-col justify-center items-start gap-3 w-full">
                  {/* Name and Email Row */}
                  <div className="flex flex-col sm:flex-row justify-center items-start gap-3 w-full">
                    <div className="flex flex-col items-start flex-1 w-full">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-[15px] py-4 rounded-lg bg-[rgba(219,219,219,0.08)] text-white placeholder-[rgba(255,255,255,0.6)] font-inter text-base font-normal border-none outline-none focus:ring-2 focus:ring-[#247FBF] transition-all"
                      />
                    </div>
                    <div className="flex flex-col items-start flex-1 w-full">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-[15px] py-4 rounded-lg bg-[rgba(219,219,219,0.08)] text-white placeholder-[rgba(255,255,255,0.6)] font-inter text-base font-normal border-none outline-none focus:ring-2 focus:ring-[#247FBF] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col items-start w-full">
                    <textarea
                      placeholder="Message"
                      rows={12}
                      className="w-full px-[15px] py-[15px] rounded-lg bg-[rgba(219,219,219,0.08)] text-white placeholder-[rgba(255,255,255,0.6)] font-inter text-base font-normal leading-[1.4] border-none outline-none focus:ring-2 focus:ring-[#247FBF] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col items-start w-full">
                    <button
                      type="submit"
                      className="w-full px-[15px] py-[14.5px] justify-center items-center rounded-lg bg-[#247FBF] hover:bg-[#1e6a9f] transition-colors"
                    >
                      <span className="text-[#121212] text-center font-inter text-base font-bold leading-[1.4]">
                        Let Us Know
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
