import { motion } from "framer-motion";
import Footer from "../components/Footer";
import SEO, { createServiceSchema } from "../components/SEO";

export default function AccommodationTenancy() {
  const serviceSchema = createServiceSchema(
    "Accommodation and Tenancy Support - NDIS Services",
    "Professional accommodation support services helping individuals with disabilities find and maintain housing, develop independent living skills, and manage tenancy responsibilities.",
    "https://qualitycareproviders.com.au/AccommodationTenancy"
  );

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Accommodation & Tenancy Support"
        description="Professional NDIS accommodation and tenancy support services. Help with housing, independent living skills, and tenancy management. Expert support workers across Australia."
        keywords="accommodation support, tenancy support, independent living, housing assistance, ndis accommodation, supported living, tenancy management"
        canonical="https://qualitycareproviders.com.au/AccommodationTenancy"
        schemaMarkup={serviceSchema}
      />
      {/* Hero Section */}
      <motion.section 
        className="flex justify-center items-center py-20 px-4 min-h-[465px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
      </motion.section>

      {/* Article Section */}
      <motion.section 
        className="flex justify-center items-center py-8 sm:py-12 lg:py-16 px-4 sm:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
                      d="M15.0557 14.8235C14.9773 14.9022 14.8842 14.9646 14.7816 15.0072C14.679 15.0498 14.5691 15.0717 14.458 15.0717C14.347 15.0717 14.237 15.0498 14.1345 15.0072C14.0319 14.9646 13.9388 14.9022 13.8604 14.8235L6.30249 7.26562V12.5391C6.30249 12.7628 6.2136 12.9774 6.05536 13.1357C5.89713 13.2939 5.68252 13.3828 5.45874 13.3828C5.23496 13.3828 5.02035 13.2939 4.86212 13.1357C4.70388 12.9774 4.61499 12.7628 4.61499 12.5391V5.22656C4.61499 5.00279 4.70388 4.78817 4.86212 4.62994C5.02035 4.47171 5.23496 4.38281 5.45874 4.38281H12.7712C12.995 4.38281 13.2096 4.47171 13.3679 4.62994C13.5261 4.78817 13.615 5.00279 13.615 5.22656C13.615 5.45034 13.5261 5.66495 13.3679 5.82318C13.2096 5.98142 12.995 6.07031 12.7712 6.07031H7.4978L15.0557 13.6296C15.1341 13.708 15.1964 13.801 15.2388 13.9035C15.2813 14.0059 15.3032 14.1157 15.3032 14.2266C15.3032 14.3374 15.2813 14.4472 15.2388 14.5497C15.1964 14.6521 15.1341 14.7452 15.0557 14.8235Z"
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
                <h2 className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px] mb-4">
                  Empowering Your Path to a Safe and Comfortable Home
                </h2>
              </div>
              <div className="flex w-full max-w-[800px] flex-col items-start">
                <p className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                  Finding and maintaining a suitable home is a fundamental step
                  toward independence and well-being. At Quality Care, our
                  Accommodation Tenancy service is designed to assist
                  individuals in securing and sustaining housing that meets
                  their specific needs, preferences, and circumstances. From
                  understanding tenancy rights to setting up a safe and
                  comfortable living environment, we are here to guide you every
                  step of the way.
                </p>
              </div>
            </div>

            {/* Divider with opacity */}
            <div className="flex h-4 lg:h-[17px] flex-col justify-center items-center w-full opacity-80">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#4A4A4A] to-transparent"></div>
            </div>
          </div>

          {/* Main Content with Image */}
          <div className="flex flex-col justify-center items-center gap-6 sm:gap-7 lg:gap-[30px] w-full rounded-2xl bg-white/5 p-4 sm:p-6 lg:p-7">
            {/* Image */}
            <div className="w-full max-w-[1024px] h-[300px] sm:h-[400px] lg:h-[558px] rounded-lg overflow-hidden border border-gray-300/50">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9f9395882df4b6450bfda4cdbdd053d693f897d0?width=2048"
                alt="Person in wheelchair working in modern kitchen"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Sections */}
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
              {/* Our Approach Section */}
              <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
                <div className="flex w-full max-w-[1024px] flex-col items-start">
                  <h3 className="text-[#247FBF] font-inter text-lg sm:text-xl lg:text-2xl font-bold leading-[1.4] tracking-[0.24px] mb-6">
                    Our Approach to Accommodation Tenancy
                  </h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
                  <div className="flex w-full max-w-[1024px] flex-col justify-center items-start gap-1">
                    <div className="flex flex-col items-start w-full space-y-4 sm:space-y-5 lg:space-y-6">
                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">
                            Personalized Housing Plans
                          </span>
                          <br />
                          We work with you to identify your unique housing
                          requirements and preferences, ensuring that the
                          options explored align with your lifestyle and goals.
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">
                            Tenancy Support and Guidance
                          </span>
                          <br />
                          Our team provides clear advice on tenancy agreements,
                          legal rights, and responsibilities, helping you feel
                          empowered and informed throughout the process.
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">
                            Home Setup Assistance
                          </span>
                          <br />
                          Once housing is secured, we assist with setting up
                          your new home, from organizing utilities to ensuring
                          accessibility and safety.
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">Ongoing Support</span>
                          <br />
                          We remain by your side, offering continued assistance
                          to help you maintain your living situation and address
                          any challenges that arise.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Divider */}
                  <div className="h-px w-full bg-gray-400/30"></div>

                  {/* Why Choose Us Section */}
                  <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 lg:gap-[10px] w-full">
                    <div className="flex w-full max-w-[1024px] flex-col items-start">
                      <h3 className="text-[#247FBF] font-inter text-lg sm:text-xl lg:text-2xl font-bold leading-[1.4] tracking-[0.24px]">
                        Why Choose Us for Accommodation Tenancy?
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
                                Expertise in navigating the housing process for
                                individuals with disabilities
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
                                A compassionate, person-centered approach
                                tailored to your needs.
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
                                Ongoing support to ensure long-term housing
                                stability and comfort.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Divider */}
                  <div className="h-px w-full bg-gray-400/30"></div>
                </div>
              </div>

              {/* Quick Tips Section */}
              <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
                <div className="flex flex-col justify-center items-center w-full">
                  <div className="flex flex-col items-start w-full">
                    <h3 className="text-[#247FBF] font-inter text-lg sm:text-xl lg:text-2xl font-normal leading-[1.4] tracking-[0.24px]">
                      Quick Tips for a Successful Transition:
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
                  <div className="flex flex-col justify-center items-center w-full">
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
                                Be clear about your housing needs and
                                preferences.
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
                                Understand your tenancy rights and
                                responsibilities.
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
                                Reach out for support—our team is here to help
                                every step of the way.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Final Horizontal Divider */}
                  <div className="h-px w-full bg-gray-400/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <motion.section 
        className="flex justify-center items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-[240px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
                  <span className="text-[#247FBF]">
                    Ready to Find Your Ideal Home?
                  </span>{" "}
                  <br />
                  <span className="text-[#ADADAD]">
                    Let's Start Your Housing Journey Together
                  </span>
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
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
