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

      {/* Content Section - Placeholder for future content */}
      <section className="flex justify-center items-center py-20 px-4">
        <div className="flex flex-col justify-center items-center gap-[60px] max-w-[1080px] w-full">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-600 text-center">
              <p>
                This page is currently under development. Please continue prompting to add more content to this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
