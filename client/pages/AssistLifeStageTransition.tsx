import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function AssistLifeStageTransition() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        className="flex justify-center items-center py-20 px-4 min-h-[465px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex min-w-full px-4 sm:px-8 lg:px-[262.5px] flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-[30px] max-w-[1080px] w-full">
          {/* Assist-Life Stage, Transition Badge */}
          <motion.div 
            className="flex px-4 sm:px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px] text-center">
              Assist-Life Stage, Transition
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div 
            className="flex max-w-[555px] w-full flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <div className="text-center">
              <h1 className="text-[#247FBF] text-center font-inter text-lg sm:text-xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                <div>Guiding You Through Life's Important</div>
                <div>Milestones with Care and Expertise</div>
              </h1>
            </div>
          </motion.div>
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
                      d="M14.1756 14.3694C14.0972 14.4481 14.004 14.5105 13.9015 14.5531C13.7989 14.5957 13.689 14.6176 13.5779 14.6176C13.4669 14.6176 13.3569 14.5957 13.2543 14.5531C13.1518 14.5105 13.0586 14.4481 12.9803 14.3694L5.42236 6.81152V12.085C5.42236 12.3087 5.33347 12.5233 5.17523 12.6816C5.017 12.8398 4.80239 12.9287 4.57861 12.9287C4.35484 12.9287 4.14023 12.8398 3.98199 12.6816C3.82376 12.5233 3.73486 12.3087 3.73486 12.085V4.77246C3.73486 4.54868 3.82376 4.33407 3.98199 4.17584C4.14023 4.01761 4.35484 3.92871 4.57861 3.92871H11.8911C12.1149 3.92871 12.3295 4.01761 12.4877 4.17584C12.646 4.33407 12.7349 4.54868 12.7349 4.77246C12.7349 4.99624 12.646 5.21085 12.4877 5.36908C12.3295 5.52732 12.1149 5.61621 11.8911 5.61621H6.61768L14.1756 13.1755C14.254 13.2539 14.3162 13.3469 14.3587 13.4494C14.4012 13.5518 14.423 13.6616 14.423 13.7725C14.423 13.8833 14.4012 13.9931 14.3587 14.0956C14.3162 14.198 14.254 14.2911 14.1756 14.3694Z"
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
                  Supporting Your Journey Through Life's Transformative Moments
                </h2>
              </div>
              <div className="flex w-full max-w-[800px] flex-col items-start">
                <p className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                  Life is full of transitions, and navigating significant
                  changes can feel overwhelming. At Quality Care, our
                  Assist-Life Stage, Transition service is designed to provide
                  the guidance, resources, and support you need to move through
                  these critical moments with confidence and ease. Whether
                  transitioning from school to work, relocating to a new living
                  situation, or adjusting to other life changes, we are here to
                  help you every step of the way.
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
                src="https://api.builder.io/api/v1/image/assets/TEMP/01cfeb7495711bf2f5be068c82783489b336fe5e?width=2048"
                alt="Hands touching in support"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Sections */}
            <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
              {/* Our Approach Section */}
              <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
                <div className="flex w-full max-w-[1024px] flex-col items-start">
                  <h3 className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px] mb-6">
                    Our Approach to Life Stage Transitions
                  </h3>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 lg:gap-[20px] w-full">
                  <div className="flex w-full max-w-[1024px] flex-col justify-center items-start gap-1">
                    <div className="flex flex-col items-start w-full space-y-4 sm:space-y-5 lg:space-y-6">
                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">Planning for Change</span>
                          <br />
                          We work with you to create a personalized plan that
                          outlines your goals and the steps needed to achieve
                          them. From career development to independent living
                          skills, we ensure you're prepared for every aspect of
                          the transition.
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">Skill Development</span>
                          <br />
                          Our team helps you build the essential skills needed
                          to navigate new stages of life, such as time
                          management, budgeting, communication, and
                          problem-solving.
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">
                            Emotional and Practical Support
                          </span>
                          <br />
                          We understand that change can be both exciting and
                          challenging. Our compassionate team provides emotional
                          support while addressing the practical aspects of your
                          transition.
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="text-[#000] font-inter text-sm sm:text-base font-normal leading-[1.2]">
                          <span className="font-bold">Ongoing Guidance</span>
                          <br />
                          Life's transitions are rarely linear. We offer
                          continued support to help you adapt, refine your
                          goals, and succeed in your new environment.
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
                        Why Choose Us for Life Stage Transitions?
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
                                Personalized planning tailored to your unique
                                needs and aspirations.
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
                                A team of experienced professionals to guide and
                                support you.
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
                                Practical resources and skills development to
                                ensure long-term success.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Common Life Transitions Section */}
                  <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 lg:gap-[10px] w-full">
                    <div className="flex w-full max-w-[1024px] flex-col items-start">
                      <h3 className="text-[#ADADAD] font-inter text-lg sm:text-xl lg:text-xl font-bold leading-[1.4]">
                        Common Life Transitions We Support:
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
                                Moving from school to employment or further
                                education.
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
                                Transitioning into independent or supported
                                living arrangements.
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
                                Adjusting to new social or community
                                environments.
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
                                Navigating major life changes such as retirement
                                or caregiving shifts.
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
                Begin Your Journey
              </div>
            </div>

            {/* Main Heading */}
            <div className="flex flex-col items-center w-full">
              <div className="text-center">
                <h2 className="font-inter text-lg sm:text-xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                  <span className="text-[#247FBF]">
                    Ready to Navigate Your Next Life Stage?
                  </span>{" "}
                  <br />
                  <span className="text-[#ADADAD]">
                    Let's Create Your Transition Plan Together
                  </span>
                </h2>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col items-center">
              <button className="flex items-center gap-4 px-5 py-[6px] pl-5 pr-[10px] rounded-[24px] bg-[#247FBF] hover:bg-[#1e6a9f] transition-colors group">
                <span className="text-white text-center font-inter text-[15px] font-medium leading-6 tracking-[0.15px]">
                  Contact Our Transition Team
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
