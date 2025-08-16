import Footer from "../components/Footer";

export default function AssistPersonalActivities() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex justify-center items-center py-20 px-4 min-h-[465px]">
        <div className="flex min-w-full px-4 sm:px-8 lg:px-[262.5px] flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-[30px] max-w-[1080px] w-full">
          {/* Assist-Personal Activities Badge */}
          <div className="flex px-4 sm:px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
            <div className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px] text-center">
              Assist-Personal Activities
            </div>
          </div>

          {/* Main Heading */}
          <div className="flex max-w-[555px] w-full flex-col items-center">
            <div className="text-center">
              <h1 className="text-[#247FBF] text-center font-inter text-lg sm:text-xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                <div>Empowering Your Independence</div>
                <div>Through Daily Support</div>
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
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8186 14.5569C14.7402 14.6356 14.6471 14.698 14.5445 14.7406C14.442 14.7832 14.332 14.8051 14.221 14.8051C14.1099 14.8051 14 14.7832 13.8974 14.7406C13.7949 14.698 13.7017 14.6356 13.6233 14.5569L6.06543 6.99902V12.2725C6.06543 12.4962 5.97653 12.7108 5.8183 12.8691C5.66007 13.0273 5.44546 13.1162 5.22168 13.1162C4.9979 13.1162 4.78329 13.0273 4.62506 12.8691C4.46682 12.7108 4.37793 12.4962 4.37793 12.2725V4.95996C4.37793 4.73618 4.46682 4.52157 4.62506 4.36334C4.78329 4.20511 4.9979 4.11621 5.22168 4.11621H12.5342C12.758 4.11621 12.9726 4.20511 13.1308 4.36334C13.289 4.52157 13.3779 4.73618 13.3779 4.95996C13.3779 5.18374 13.289 5.39835 13.1308 5.55658C12.9726 5.71482 12.758 5.80371 12.5342 5.80371H7.26074L14.8186 13.363C14.8971 13.4414 14.9593 13.5344 15.0018 13.6369C15.0442 13.7393 15.0661 13.8491 15.0661 13.96C15.0661 14.0708 15.0442 14.1806 15.0018 14.2831C14.9593 14.3855 14.8971 14.4786 14.8186 14.5569Z" fill="#4A4A4A"/>
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
                <h2 className="text-[#121212] font-inter text-xl sm:text-2xl lg:text-[28px] font-normal leading-[1.5] tracking-[0.28px] mb-4">
                  Enhancing Your Daily Life with Compassionate Care
                </h2>
              </div>
              <div className="flex w-full max-w-[800px] flex-col items-start">
                <p className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                  Daily personal care is an essential part of living a dignified and fulfilling life. At Quality Care, our
                  Assist-Personal Activities service is designed to provide compassionate, reliable support for your
                  everyday needs. From personal hygiene to meal preparation, our team is here to help you maintain
                  your independence while ensuring your comfort and well-being.
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
            <div className="w-full max-w-[1024px] h-[300px] sm:h-[400px] lg:h-[558px] rounded-lg overflow-hidden border border-gray-300/50">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c576b183d5097886aa8560a6a4e6e6130a9c7814?width=2048"
                alt="Caregiver helping person with daily activities"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Sections */}
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
              {/* Our Approach Section */}
              <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
                <div className="flex w-full max-w-[1024px] flex-col items-start">
                  <h3 className="text-[#247FBF] font-inter text-lg sm:text-xl lg:text-2xl font-bold leading-[1.4] tracking-[0.24px] mb-6">
                    Our Approach to Personal Activities Assistance
                  </h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
                  <div className="flex w-full max-w-[1024px] flex-col justify-center items-start gap-1">
                    <div className="flex flex-col items-start w-full space-y-4 sm:space-y-5 lg:space-y-6">
                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">Tailored Personal Care Plans</span><br />
                          We work with you to create a customized plan that addresses your specific needs and preferences, ensuring you feel empowered and respected in every aspect of your care.
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">Support for Essential Activities</span><br />
                          Our skilled support workers assist with daily tasks such as bathing, dressing, grooming, and toileting, always prioritizing your dignity and independence.
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">Healthy Living Assistance</span><br />
                          We help with meal planning and preparation, ensuring your nutritional needs are met while considering any dietary preferences or restrictions.
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">Encouraging Independence</span><br />
                          While we provide hands-on support, our goal is to help you develop and maintain the skills needed to manage your daily activities with greater autonomy.
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
                        Why Choose Us for Personal Activities Assistance?
                      </h3>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full">
                      <div className="flex flex-col items-start w-full">
                        <div className="flex flex-col items-start w-full space-y-2">
                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">•</div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Compassionate and trained support workers who understand your unique needs.
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">•</div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                A person-centered approach that prioritizes your comfort and independence.
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">•</div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Reliable and consistent care you can count on.
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
                      <h3 className="text-[#247FBF] font-inter text-lg sm:text-xl lg:text-2xl font-normal leading-[1.4] tracking-[0.24px]">
                        Examples of Personal Activities We Assist With:
                      </h3>
                    </div>

                    <div className="flex flex-col justify-center items-center w-full">
                      <div className="flex flex-col items-start w-full">
                        <div className="flex flex-col items-start w-full space-y-2">
                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">•</div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Bathing, showering, and other personal hygiene tasks.
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">•</div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Getting dressed and ready for the day.
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">•</div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Preparing meals and managing household chores.
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-start items-start w-full">
                            <div className="flex w-6 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">•</div>
                            </div>
                            <div className="flex flex-1 flex-col items-start">
                              <div className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                                Support with mobility and transfers.
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
      </section>

      {/* Contact CTA Section */}
      <section className="flex justify-center items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-[240px]">
        <div className="flex h-auto lg:h-[278px] w-full justify-center items-center rounded-lg bg-[rgba(255,255,255,0.05)] py-8 sm:py-12 lg:py-8">
          <div className="flex min-w-full max-w-[600px] flex-col justify-center items-center gap-4 sm:gap-6 lg:gap-[20px]">
            {/* Contact us Badge */}
            <div className="flex px-4 sm:px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
              <div className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                Get Support Today
              </div>
            </div>

            {/* Main Heading */}
            <div className="flex flex-col items-center w-full">
              <div className="text-center">
                <h2 className="font-inter text-lg sm:text-xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                  <span className="text-[#247FBF]">Ready to Enhance Your Daily Living?</span>{" "}
                  <br />
                  <span className="text-[#ADADAD]">Let's Support Your Personal Activities Together</span>
                </h2>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center">
              <button className="flex items-center gap-4 px-5 py-[6px] pl-5 pr-[10px] rounded-[24px] bg-[#247FBF] hover:bg-[#1e6a9f] transition-colors group">
                <span className="text-white text-center font-inter text-[15px] font-medium leading-6 tracking-[0.15px]">
                  Contact Our Support Team
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
