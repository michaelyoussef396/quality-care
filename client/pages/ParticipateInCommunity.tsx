import Footer from "../components/Footer";

export default function ParticipateInCommunity() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex justify-center items-center py-20 px-4 min-h-[465px]">
        <div className="flex min-w-full px-4 sm:px-8 lg:px-[262.5px] flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-[30px] max-w-[1080px] w-full">
          {/* Participate in Community Badge */}
          <div className="flex px-4 sm:px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
            <div className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px] text-center">
              Participate in Community
            </div>
          </div>

          {/* Main Heading */}
          <div className="flex max-w-[555px] w-full flex-col items-center">
            <div className="text-center">
              <h1 className="text-[#247FBF] text-center font-inter text-lg sm:text-xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                <div>Connecting You with Opportunities</div>
                <div>to Engage and Belong</div>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Article Section */}
      <section className="flex justify-center items-center py-8 sm:py-12 lg:py-16 px-4 sm:px-8">
        <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 max-w-[1080px] w-full">
          {/* Top Part */}
          <div className="flex flex-col justify-center items-start gap-4 sm:gap-5 lg:gap-[20px] w-full">
            {/* Divider */}
            <div className="flex h-4 lg:h-[17px] flex-col justify-center items-center w-full">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#4A4A4A] to-[#121212]"></div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center gap-0.5">
                <div className="flex w-[18px] h-[18px] flex-col items-start">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7893 14.9378C14.7109 15.0164 14.6178 15.0788 14.5152 15.1214C14.4127 15.164 14.3027 15.1859 14.1917 15.1859C14.0806 15.1859 13.9707 15.164 13.8681 15.1214C13.7656 15.0788 13.6724 15.0164 13.594 14.9378L6.03613 7.37988V12.6533C6.03613 12.8771 5.94724 13.0917 5.789 13.2499C5.63077 13.4082 5.41616 13.4971 5.19238 13.4971C4.96861 13.4971 4.754 13.4082 4.59576 13.2499C4.43753 13.0917 4.34863 12.8771 4.34863 12.6533V5.34082C4.34863 5.11704 4.43753 4.90243 4.59576 4.7442C4.754 4.58597 4.96861 4.49707 5.19238 4.49707H12.5049C12.7287 4.49707 12.9433 4.58597 13.1015 4.7442C13.2597 4.90243 13.3486 5.11704 13.3486 5.34082C13.3486 5.5646 13.2597 5.77921 13.1015 5.93744C12.9433 6.09568 12.7287 6.18457 12.5049 6.18457H7.23145L14.7893 13.7439C14.8678 13.8222 14.93 13.9153 14.9725 14.0177C15.0149 14.1201 15.0368 14.2299 15.0368 14.3408C15.0368 14.4517 15.0149 14.5615 14.9725 14.6639C14.93 14.7664 14.8678 14.8594 14.7893 14.9378Z"
                      fill="#4A4A4A"
                    />
                  </svg>
                </div>
                <div className="flex flex-col justify-center items-start rounded-[74px]">
                  <div className="text-[#121212] font-inter text-base font-bold leading-6 tracking-[0.16px]">
                    Home
                  </div>
                </div>
              </div>
            </div>

            {/* Title Description */}
            <div className="flex w-full flex-col justify-center items-start gap-1">
              <div className="flex w-full max-w-[700px] flex-col items-start">
                <h2 className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-normal leading-[1.5] tracking-[0.28px] mb-4">
                  Building Meaningful Connections Through Community Engagement
                </h2>
              </div>
              <div className="flex w-full max-w-[800px] flex-col items-start">
                <p className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                  At Quality Care, we believe that everyone deserves to feel
                  included and valued in their community. Our Participate in
                  Community service helps you explore, connect, and actively
                  participate in social, educational, and recreational
                  activities that enrich your life. Whether it's joining a local
                  club, attending events, or volunteering, we are here to
                  support your journey toward meaningful engagement.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="flex h-4 lg:h-[17px] flex-col justify-center items-center w-full">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#4A4A4A] to-transparent"></div>
            </div>
          </div>

          {/* Main Content with Image */}
          <div className="flex flex-col justify-center items-center gap-6 sm:gap-7 lg:gap-[30px] w-full rounded-2xl bg-white/5 p-4 sm:p-6 lg:p-7">
            {/* Image */}
            <div className="w-full max-w-[1024px] h-[300px] sm:h-[400px] lg:h-[559px] rounded-lg overflow-hidden border border-gray-300/50">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F650ab5db91e5415fa1f3b5a7621d5123%2F1f734dbf45e34bf487b3988704e65cfc?format=webp&width=800"
                alt="Diverse group of people holding hands in a community circle"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Sections */}
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
              {/* Our Approach Section */}
              <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
                <div className="flex w-full max-w-[1024px] flex-col items-start">
                  <h3 className="text-[#247FBF] font-inter text-lg sm:text-xl lg:text-2xl font-normal leading-[1.4] tracking-[0.24px] mb-6">
                    Our Approach to Community Participation
                  </h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
                  <div className="flex w-full max-w-[1024px] flex-col justify-center items-start gap-1">
                    <div className="flex flex-col items-start w-full space-y-4 sm:space-y-5 lg:space-y-6">
                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">
                            1. Discovering Opportunities
                          </span>
                          <br />
                          We help you identify local events, programs, and
                          activities that align with your interests and goals.
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">
                            2. Guided Engagement
                          </span>
                          <br />
                          Our team provides hands-on support to help you
                          navigate and feel comfortable in new social settings.
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">
                            3. Skill-Building for Social Confidence
                          </span>
                          <br />
                          We offer training and encouragement to develop the
                          social skills needed for meaningful interactions and
                          participation.
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">
                            4. Fostering Long-Term Connections
                          </span>
                          <br />
                          By helping you build lasting relationships and find a
                          sense of belonging, we ensure your community
                          experiences are fulfilling and impactful.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Divider */}
                  <div className="h-px w-full bg-gray-400/30"></div>

                  {/* Why Choose Us Section */}
                  <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 lg:gap-[10px] w-full">
                    <div className="flex w-full max-w-[1024px] flex-col items-start">
                      <h3 className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                        Why Choose Us for Community Engagement?
                      </h3>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full">
                      <div className="flex flex-col items-start w-full">
                        <div className="flex flex-col items-start w-full space-y-2">
                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                •
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Personalized opportunities tailored to your
                                unique interests and needs.
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                •
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Compassionate support to boost your confidence
                                in social settings.
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                •
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Focus on creating meaningful and lasting
                                connections in your community.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Examples Section */}
                  <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 lg:gap-[10px] w-full">
                    <div className="flex w-full max-w-[1024px] flex-col items-start">
                      <h3 className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                        Examples of Community Participation We Support:
                      </h3>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full">
                      <div className="flex flex-col items-start w-full">
                        <div className="flex flex-col items-start w-full space-y-2">
                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                •
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Joining recreational, educational, or cultural
                                programs.
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                •
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Volunteering with local organizations or causes.
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                •
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Participating in workshops, events, or social
                                clubs.
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                •
                              </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Exploring new interests and hobbies in group
                                settings.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                Contact us
              </div>
            </div>

            {/* Main Heading */}
            <div className="flex flex-col items-center w-full">
              <div className="text-center">
                <h2 className="font-inter text-lg sm:text-xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                  <span className="text-[#247FBF]">Book Your Consultation</span>
                  <span className="text-[#ADADAD]">
                    — Take the First Step Towards Quality Care
                  </span>
                </h2>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center">
              <button className="flex items-center gap-4 px-5 py-[6px] pl-5 pr-[10px] rounded-[24px] bg-[#247FBF] hover:bg-[#1e6a9f] transition-colors group">
                <span className="text-white text-center font-inter text-[15px] font-medium leading-6 tracking-[0.15px]">
                  Book Free Consultation
                </span>
                <div className="flex w-9 h-9 justify-center items-center rounded-[90px] bg-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path
                      d="M14.6499 5.23438V12.5469C14.6499 12.7707 14.561 12.9853 14.4027 13.1435C14.2445 13.3017 14.0299 13.3906 13.8061 13.3906C13.5823 13.3906 13.3677 13.3017 13.2095 13.1435C13.0513 12.9853 12.9624 12.7707 12.9624 12.5469V7.27344L5.40307 14.8313C5.24457 14.9898 5.02958 15.0789 4.80542 15.0789C4.58125 15.0789 4.36627 14.9898 4.20776 14.8313C4.04925 14.6728 3.96021 14.4578 3.96021 14.2337C3.96021 14.0095 4.04925 13.7945 4.20776 13.636L11.7671 6.07812H6.49362C6.26985 6.07812 6.05523 5.98923 5.897 5.831C5.73877 5.67276 5.64987 5.45815 5.64987 5.23438C5.64987 5.0106 5.73877 4.79599 5.897 4.63775C6.05523 4.47952 6.26985 4.39063 6.49362 4.39062H13.8061C14.0299 4.39062 14.2445 4.47952 14.4027 4.63775C14.561 4.79599 14.6499 5.0106 14.6499 5.23438Z"
                      fill="black"
                    />
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
