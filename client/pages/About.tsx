export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex justify-center items-center py-20 px-4 min-h-[465px]">
        <div className="flex flex-col justify-center items-center gap-[30px] max-w-[1080px] w-full px-4 sm:px-8 lg:px-[290px]">
          {/* About Us Badge */}
          <div className="flex px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
            <div className="text-[#247FBF] font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px]">
              About us
            </div>
          </div>

          {/* Main Heading */}
          <div className="flex max-w-[500px] w-full flex-col items-center">
            <div className="text-center">
              <h1 className="text-[#247FBF] text-center font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px]">
                <div>Your Trusted Partners— in</div>
                <div>Empowering Independence</div>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - How We Started */}
      <section className="flex justify-center items-start py-20 px-4">
        <div className="flex justify-center items-start gap-10 max-w-[1080px] w-full flex-col lg:flex-row">
          {/* Left Side - Content */}
          <div className="flex min-w-[520px] flex-col justify-center items-start gap-[30px] flex-1">
            {/* How We Started Badge */}
            <div className="flex px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
              <div className="text-[#247FBF] font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px]">
                How We Started
              </div>
            </div>

            {/* Title and Description */}
            <div className="flex pr-2 flex-col justify-end items-start gap-[7.385px] w-full">
              {/* Section Heading */}
              <div className="flex min-w-[400px] max-w-[400px] flex-col items-start mb-4">
                <h2 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px]">
                  Committed to Excellence—{" "}
                  <span className="text-[#ADADAD]">How We Started</span>
                </h2>
              </div>

              {/* Content Paragraphs */}
              <div className="flex flex-col items-start w-full space-y-5">
                <div className="w-full">
                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px]">
                    <span className="font-bold">Quality Care</span> was founded with a simple yet powerful vision: to make a positive difference in the lives of individuals living with disabilities. Our journey began when a group of passionate healthcare professionals and community advocates came together, driven by a shared belief that every person, regardless of their abilities, deserves to lead an independent, fulfilling life.
                  </p>
                </div>

                <div className="w-full">
                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px]">
                    Recognizing the gaps in personalized, high-quality support services within the disability sector, our founders set out to create a company that would offer not just care, but true empowerment. They wanted to build a team that would listen, understand, and work alongside each individual to help them achieve their goals.
                  </p>
                </div>

                <div className="w-full">
                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px]">
                    What started as a small team with a handful of clients has now grown into a trusted provider of NDIS services, with a reputation for quality, reliability, and compassion. From our humble beginnings, we've built strong relationships within the community, and today, <span className="font-bold">Quality Care</span> continues to grow—always with the same core values that guided our founders from the start: respect, integrity, and commitment to excellence.
                  </p>
                </div>

                <div className="w-full">
                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px]">
                    We are proud of where we've come from and even more excited about where we're going. Our commitment to delivering personalized, high-quality care remains at the heart of everything we do, and we continue to innovate and adapt our services to meet the evolving needs of those we serve.
                  </p>
                </div>

                <div className="w-full">
                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px]">
                    <span className="font-bold">Quality Care</span> is more than just a service provider—it's a community of support, and we're proud to be a part of your journey to independence and fulfillment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex w-full lg:w-[520px] flex-col justify-center items-center rounded-lg flex-1">
            <div className="w-full h-[889px] lg:w-[520px] rounded-lg overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7ca01cbb3c207b0839c2d60478b78c97b6759d38?width=1040"
                alt="Quality Care team working together"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
