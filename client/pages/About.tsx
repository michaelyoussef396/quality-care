import Divider from "../components/Divider";
import Footer from "../components/Footer";

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
      <section className="flex justify-center items-start py-12 sm:py-16 lg:py-20 px-4">
        <div className="flex justify-center items-start gap-6 sm:gap-8 lg:gap-10 max-w-[1080px] w-full flex-col lg:flex-row">
          {/* Left Side - Content */}
          <div className="flex w-full flex-col justify-center items-start gap-6 sm:gap-8 lg:gap-[30px] flex-1">
            {/* How We Started Badge */}
            <div className="flex px-4 sm:px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)] w-full sm:w-auto">
              <div className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px] text-center sm:text-left">
                How We Started
              </div>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col justify-start items-start gap-4 sm:gap-6 lg:gap-[7.385px] w-full">
              {/* Section Heading */}
              <div className="flex w-full flex-col items-start mb-2 sm:mb-4">
                <h2 className="text-[#247FBF] font-inter text-lg sm:text-xl lg:text-2xl font-bold leading-[1.4] tracking-[0.24px]">
                  Committed to Excellence—{" "}
                  <span className="text-[#ADADAD]">How We Started</span>
                </h2>
              </div>

              {/* Content Paragraphs */}
              <div className="flex flex-col items-start w-full space-y-4 sm:space-y-5">
                <div className="w-full">
                  <p className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                    <span className="font-bold">Quality Care</span> was founded with a simple yet powerful vision: to make a positive difference in the lives of individuals living with disabilities. Our journey began when a group of passionate healthcare professionals and community advocates came together, driven by a shared belief that every person, regardless of their abilities, deserves to lead an independent, fulfilling life.
                  </p>
                </div>

                <div className="w-full">
                  <p className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                    Recognizing the gaps in personalized, high-quality support services within the disability sector, our founders set out to create a company that would offer not just care, but true empowerment. They wanted to build a team that would listen, understand, and work alongside each individual to help them achieve their goals.
                  </p>
                </div>

                <div className="w-full">
                  <p className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                    What started as a small team with a handful of clients has now grown into a trusted provider of NDIS services, with a reputation for quality, reliability, and compassion. From our humble beginnings, we've built strong relationships within the community, and today, <span className="font-bold">Quality Care</span> continues to grow—always with the same core values that guided our founders from the start: respect, integrity, and commitment to excellence.
                  </p>
                </div>

                <div className="w-full">
                  <p className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                    We are proud of where we've come from and even more excited about where we're going. Our commitment to delivering personalized, high-quality care remains at the heart of everything we do, and we continue to innovate and adapt our services to meet the evolving needs of those we serve.
                  </p>
                </div>

                <div className="w-full">
                  <p className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                    <span className="font-bold">Quality Care</span> is more than just a service provider—it's a community of support, and we're proud to be a part of your journey to independence and fulfillment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex w-full lg:w-[520px] flex-col justify-center items-center rounded-lg flex-1">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-lg overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7ca01cbb3c207b0839c2d60478b78c97b6759d38?width=1040"
                alt="Quality Care team working together"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="flex justify-center items-start py-12 sm:py-16 lg:py-20 px-4">
        <div className="flex justify-center items-start gap-6 sm:gap-8 lg:gap-10 max-w-[1080px] w-full flex-col lg:flex-row">
          {/* Left Side - Image */}
          <div className="flex w-full lg:w-[520px] flex-col justify-center items-center rounded-lg flex-1 order-2 lg:order-1">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[442px] lg:w-[520px] lg:h-[442px] rounded-lg overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4fd12800c9f749ee4abe5d8f5b4ccc53cb4eb62e?width=1040"
                alt="Hands reaching out showing support and care"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex w-full flex-col justify-center items-start gap-6 sm:gap-8 lg:gap-[30px] flex-1 order-1 lg:order-2">
            {/* Our Vision Badge */}
            <div className="flex px-4 sm:px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)] w-full sm:w-auto">
              <div className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px] text-center sm:text-left">
                Our Vision
              </div>
            </div>

            {/* Title and Description */}
            <div className="flex flex-col justify-start items-start gap-4 sm:gap-6 lg:gap-[7.275px] w-full">
              {/* Section Heading */}
              <div className="flex w-full flex-col items-start mb-2 sm:mb-4">
                <h2 className="text-[#247FBF] font-inter text-lg sm:text-xl lg:text-2xl font-bold leading-[1.4] tracking-[0.24px]">
                  Empowering Your Future—{" "}
                  <span className="text-[#ADADAD]">The Mission That Guides Us</span>
                </h2>
              </div>

              {/* Vision Content */}
              <div className="flex flex-col items-start w-full">
                <div className="w-full">
                  <p className="text-[#121212] font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                    At Quality Care, our vision is to be a leading provider of disability support services, driven by a deep commitment to empowering individuals to achieve their fullest potential. We believe in a world where everyone, regardless of their abilities, has access to opportunities that promote independence, dignity, and personal growth. Our goal is to foster a supportive and inclusive environment that celebrates individuality while offering the resources and encouragement needed to navigate life's challenges. By combining compassion with innovation, we aim to redefine the standard of care, ensuring that every person we support feels valued, respected, and inspired to live a fulfilling life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <Divider />

      {/* Our Mission Section */}
      <section className="flex justify-center items-start py-12 sm:py-16 lg:py-20 px-4">
        <div className="flex justify-center items-start gap-6 sm:gap-8 lg:gap-10 max-w-[1080px] w-full flex-col lg:flex-row">
          {/* Left Side - Content */}
          <div className="flex w-full flex-col justify-center items-start gap-6 sm:gap-8 lg:gap-[60px] flex-1">
            {/* Title and Button with Divider */}
            <div className="flex w-full flex-col justify-center items-start gap-2 sm:gap-4 lg:gap-[10px]">
              {/* Title and Button */}
              <div className="flex flex-col justify-center items-start gap-6 sm:gap-8 lg:gap-[30px] w-full">
                {/* Our Mission Badge */}
                <div className="flex px-4 sm:px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)] w-full sm:w-auto">
                  <div className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px] text-center sm:text-left">
                    Our Mission
                  </div>
                </div>

                {/* Section Heading */}
                <div className="flex w-full max-w-[500px] flex-col items-start">
                  <h2 className="text-[#247FBF] font-inter text-lg sm:text-xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                    Delivering Empowerment Through Compassionate Care
                  </h2>
                </div>
              </div>

              {/* Horizontal Divider */}
              <div className="h-px w-full bg-[rgba(87,87,87,0.30)]"></div>
            </div>

            {/* Description */}
            <div className="flex w-full justify-center items-center">
              <div className="flex w-full flex-col items-start gap-6 sm:gap-8 lg:gap-[39px]">
                <div className="w-full">
                  <p className="text-[rgba(18,18,18,0.72)] font-inter text-base sm:text-lg font-bold leading-[1.4]">
                    At Quality Care, our mission is to transform lives by providing exceptional support that empowers individuals to live with independence, dignity, and confidence. We are dedicated to breaking barriers and creating opportunities for people with disabilities, ensuring they have the tools and resources needed to thrive in every aspect of their lives.
                  </p>
                </div>

                <div className="w-full">
                  <p className="text-[rgba(18,18,18,0.72)] font-inter text-base sm:text-lg font-bold leading-[1.4]">
                    We aim to provide not just services but a lasting impact—cultivating meaningful relationships with our clients and the community. Through a person-centered approach, we listen, understand, and respond to the unique needs and aspirations of each individual
                  </p>
                </div>

                {/* Bottom Border */}
                <div className="w-full h-px border-b border-[rgba(87,87,87,0.30)]"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex w-full lg:w-[449px] flex-col justify-center items-center rounded-lg flex-1">
            <div className="w-full h-[400px] sm:h-[500px] lg:w-[449px] lg:h-[542px] rounded-lg overflow-hidden relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/20bb09de5fed6309adec03347fe8b457641195a4?width=898"
                alt="Person in wheelchair having a conversation showing independence and empowerment"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Border Overlay */}
              <div className="absolute inset-0 w-full h-full rounded-lg border border-[rgba(119,119,119,0.47)]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
