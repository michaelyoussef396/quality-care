import Divider from "../components/Divider";

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

      {/* Divider */}
      <Divider />

      {/* Services Section */}
      <section className="flex justify-center items-center py-20 px-4">
        <div className="flex flex-col justify-center items-center gap-[60px] max-w-[1080px] w-full">
          {/* Section Header */}
          <div className="flex flex-col justify-center items-center gap-[30px] w-full">
            {/* Services Badge */}
            <div className="flex px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
              <div className="text-[#247FBF] font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px]">
                Services
              </div>
            </div>

            {/* Main Heading */}
            <div className="flex max-w-[600px] w-full flex-col items-center">
              <div className="text-center">
                <h2 className="text-[#121212] text-center font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px]">
                  Our Tailored Solutions— <span className="text-[#247FBF]">to Your Unique</span>
                </h2>
                <h2 className="text-[#247FBF] text-center font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px]">
                  Needs.
                </h2>
              </div>
            </div>
          </div>

          {/* Services Content */}
          <div className="flex flex-col justify-center items-center gap-[60px] w-full">
            {/* Personal Support Services */}
            <div className="flex flex-col lg:flex-row items-start gap-20 w-full">
              <div className="flex flex-col justify-center items-start gap-5 flex-1">
                <div className="flex flex-col justify-center items-start gap-[-0.5px] w-full">
                  <div className="flex flex-col items-start">
                    <h3 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px]">
                      Personal Support Services
                    </h3>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px]">
                      Our Personal Support Services are designed to assist individuals with day-to-day activities and transitions, helping them maintain independence and dignity. From finding the right accommodation to assisting with personal care and transportation, our dedicated team is here to provide reliable and compassionate support every step of the way.
                    </p>
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="flex justify-center items-center gap-0.5">
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-[#121212] font-inter text-base font-semibold leading-6 tracking-[0.16px]">
                      Learn More
                    </span>
                    <div className="w-[89px] h-1 border-b border-white"></div>
                  </div>
                  <div className="w-[18px] h-[18px]">
                    <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2087 5.28003V12.5925C15.2087 12.8163 15.1198 13.0309 14.9616 13.1891C14.8034 13.3474 14.5888 13.4363 14.365 13.4363C14.1412 13.4363 13.9266 13.3474 13.7684 13.1891C13.6101 13.0309 13.5212 12.8163 13.5212 12.5925V7.31909L5.96194 14.877C5.80343 15.0355 5.58845 15.1245 5.36429 15.1245C5.14012 15.1245 4.92514 15.0355 4.76663 14.877C4.60812 14.7185 4.51907 14.5035 4.51907 14.2793C4.51907 14.0552 4.60812 13.8402 4.76663 13.6817L12.3259 6.12378H7.05249C6.82871 6.12378 6.6141 6.03488 6.45587 5.87665C6.29763 5.71842 6.20874 5.50381 6.20874 5.28003C6.20874 5.05625 6.29763 4.84164 6.45587 4.68341C6.6141 4.52517 6.82871 4.43628 7.05249 4.43628H14.365C14.5888 4.43628 14.8034 4.52517 14.9616 4.68341C15.1198 4.84164 15.2087 5.05625 15.2087 5.28003Z" fill="#4A4A4A"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Personal Support Services List */}
              <div className="flex flex-col justify-center items-center gap-6 flex-1">
                <div className="flex items-start gap-1 w-full pb-2 border-b border-[rgba(87,87,87,0.30)]">
                  <span className="text-[#ADADAD] font-inter text-xl font-bold leading-7 flex-1">
                    Accommodation Tenancy
                  </span>
                  <div className="w-6 h-6">
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.26 6.28003V16.03C19.26 16.3284 19.1415 16.6145 18.9305 16.8255C18.7195 17.0365 18.4334 17.155 18.135 17.155C17.8366 17.155 17.5505 17.0365 17.3395 16.8255C17.1285 16.6145 17.01 16.3284 17.01 16.03V8.99878L6.93094 19.076C6.71959 19.2873 6.43295 19.406 6.13406 19.406C5.83518 19.406 5.54853 19.2873 5.33719 19.076C5.12584 18.8646 5.00711 18.578 5.00711 18.2791C5.00711 17.9802 5.12584 17.6936 5.33719 17.4822L15.4162 7.40503H8.385C8.08663 7.40503 7.80048 7.2865 7.5895 7.07552C7.37853 6.86455 7.26 6.5784 7.26 6.28003C7.26 5.98166 7.37853 5.69551 7.5895 5.48453C7.80048 5.27356 8.08663 5.15503 8.385 5.15503H18.135C18.4334 5.15503 18.7195 5.27356 18.9305 5.48453C19.1415 5.69551 19.26 5.98166 19.26 6.28003Z" fill="#247FBF"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start gap-1 w-full pb-2 border-b border-[rgba(87,87,87,0.30)]">
                  <span className="text-[#ADADAD] font-inter text-xl font-bold leading-7 flex-1">
                    Assist-Life Stage, Transition
                  </span>
                  <div className="w-6 h-6">
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.65 6.28003V16.03C19.65 16.3284 19.5315 16.6145 19.3205 16.8255C19.1095 17.0365 18.8234 17.155 18.525 17.155C18.2266 17.155 17.9405 17.0365 17.7295 16.8255C17.5185 16.6145 17.4 16.3284 17.4 16.03V8.99878L7.32092 19.076C7.10958 19.2873 6.82293 19.406 6.52405 19.406C6.22516 19.406 5.93852 19.2873 5.72717 19.076C5.51583 18.8646 5.39709 18.578 5.39709 18.2791C5.39709 17.9802 5.51583 17.6936 5.72717 17.4822L15.8062 7.40503H8.77498C8.47662 7.40503 8.19047 7.2865 7.97949 7.07552C7.76851 6.86455 7.64998 6.5784 7.64998 6.28003C7.64998 5.98166 7.76851 5.69551 7.97949 5.48453C8.19047 5.27356 8.47662 5.15503 8.77498 5.15503H18.525C18.8234 5.15503 19.1095 5.27356 19.3205 5.48453C19.5315 5.69551 19.65 5.98166 19.65 6.28003Z" fill="#247FBF"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start gap-1 w-full pb-2 border-b border-[rgba(87,87,87,0.30)]">
                  <span className="text-[#ADADAD] font-inter text-xl font-bold leading-7 flex-1">
                    Assist-Personal Activities
                  </span>
                  <div className="w-6 h-6">
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.99 6.28003V16.03C19.99 16.3284 19.8715 16.6145 19.6605 16.8255C19.4495 17.0365 19.1633 17.155 18.865 17.155C18.5666 17.155 18.2805 17.0365 18.0695 16.8255C17.8585 16.6145 17.74 16.3284 17.74 16.03V8.99878L7.66092 19.076C7.44957 19.2873 7.16293 19.406 6.86404 19.406C6.56516 19.406 6.27851 19.2873 6.06717 19.076C5.85582 18.8646 5.73709 18.578 5.73709 18.2791C5.73709 17.9802 5.85582 17.6936 6.06717 17.4822L16.1462 7.40503H9.11498C8.81661 7.40503 8.53046 7.2865 8.31948 7.07552C8.10851 6.86455 7.98998 6.5784 7.98998 6.28003C7.98998 5.98166 8.10851 5.69551 8.31948 5.48453C8.53046 5.27356 8.81661 5.15503 9.11498 5.15503H18.865C19.1633 5.15503 19.4495 5.27356 19.6605 5.48453C19.8715 5.69551 19.99 5.98166 19.99 6.28003Z" fill="#247FBF"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start gap-1 w-full pb-2 border-b border-[rgba(87,87,87,0.30)]">
                  <span className="text-[#ADADAD] font-inter text-xl font-bold leading-7 flex-1">
                    Assist-Travel/Transport
                  </span>
                  <div className="w-6 h-6">
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.65 6.28003V16.03C19.65 16.3284 19.5315 16.6145 19.3205 16.8255C19.1095 17.0365 18.8234 17.155 18.525 17.155C18.2266 17.155 17.9405 17.0365 17.7295 16.8255C17.5185 16.6145 17.4 16.3284 17.4 16.03V8.99878L7.32092 19.076C7.10958 19.2873 6.82293 19.406 6.52405 19.406C6.22516 19.406 5.93852 19.2873 5.72717 19.076C5.51583 18.8646 5.39709 18.578 5.39709 18.2791C5.39709 17.9802 5.51583 17.6936 5.72717 17.4822L15.8062 7.40503H8.77498C8.47662 7.40503 8.19047 7.2865 7.97949 7.07552C7.76851 6.86455 7.64998 6.5784 7.64998 6.28003C7.64998 5.98166 7.76851 5.69551 7.97949 5.48453C8.19047 5.27356 8.47662 5.15503 8.77498 5.15503H18.525C18.8234 5.15503 19.1095 5.27356 19.3205 5.48453C19.5315 5.69551 19.65 5.98166 19.65 6.28003Z" fill="#247FBF"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start gap-1 w-full pb-2 border-b border-[rgba(87,87,87,0.30)]">
                  <span className="text-[#ADADAD] font-inter text-xl font-bold leading-7 flex-1">
                    Assistance with Tasks – Shared Living
                  </span>
                  <div className="w-6 h-6">
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.01 6.28003V16.03C20.01 16.3284 19.8915 16.6145 19.6805 16.8255C19.4695 17.0365 19.1834 17.155 18.885 17.155C18.5867 17.155 18.3005 17.0365 18.0895 16.8255C17.8786 16.6145 17.76 16.3284 17.76 16.03V8.99878L7.68097 19.076C7.46962 19.2873 7.18298 19.406 6.88409 19.406C6.58521 19.406 6.29856 19.2873 6.08722 19.076C5.87587 18.8646 5.75714 18.578 5.75714 18.2791C5.75714 17.9802 5.87587 17.6936 6.08722 17.4822L16.1663 7.40503H9.13503C8.83666 7.40503 8.55051 7.2865 8.33953 7.07552C8.12856 6.86455 8.01003 6.5784 8.01003 6.28003C8.01003 5.98166 8.12856 5.69551 8.33953 5.48453C8.55051 5.27356 8.83666 5.15503 9.13503 5.15503H18.885C19.1834 5.15503 19.4695 5.27356 19.6805 5.48453C19.8915 5.69551 20.01 5.98166 20.01 6.28003Z" fill="#247FBF"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex h-[17px] flex-col justify-center items-center w-full">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#4A4A4A] to-transparent"></div>
            </div>

            {/* Community Engagement Services */}
            <div className="flex flex-col lg:flex-row items-start gap-20 w-full">
              <div className="flex flex-col justify-center items-start gap-5 flex-1">
                <div className="flex flex-col justify-center items-start gap-[-0.5px] w-full">
                  <div className="flex flex-col items-start">
                    <h3 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px]">
                      Community Engagement Services
                    </h3>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px]">
                      Our Community Engagement Services focus on fostering meaningful connections and empowering individuals to actively participate in their communities. Whether it's developing life skills, joining group activities, or accessing adaptive tools for independence, we help clients build confidence and lead fulfilling lives.
                    </p>
                  </div>
                </div>

                {/* Learn More Link */}
                <div className="flex justify-center items-center gap-0.5">
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-[#121212] font-inter text-base font-semibold leading-6 tracking-[0.16px]">
                      Learn More
                    </span>
                    <div className="w-[89px] h-1 border-b border-white"></div>
                  </div>
                  <div className="w-[18px] h-[18px]">
                    <svg width="18" height="18" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.3438 5.28003V12.5925C14.3438 12.8163 14.2549 13.0309 14.0966 13.1891C13.9384 13.3474 13.7238 13.4363 13.5 13.4363C13.2762 13.4363 13.0616 13.3474 12.9034 13.1891C12.7451 13.0309 12.6562 12.8163 12.6562 12.5925V7.31909L5.09695 14.877C4.93844 15.0355 4.72346 15.1245 4.4993 15.1245C4.27513 15.1245 4.06015 15.0355 3.90164 14.877C3.74313 14.7185 3.65408 14.5035 3.65408 14.2793C3.65408 14.0552 3.74313 13.8402 3.90164 13.6817L11.4609 6.12378H6.1875C5.96372 6.12378 5.74911 6.03488 5.59088 5.87665C5.43264 5.71842 5.34375 5.50381 5.34375 5.28003C5.34375 5.05625 5.43264 4.84164 5.59088 4.68341C5.74911 4.52517 5.96372 4.43628 6.1875 4.43628H13.5C13.7238 4.43628 13.9384 4.52517 14.0966 4.68341C14.2549 4.84164 14.3438 5.05625 14.3438 5.28003Z" fill="#4A4A4A"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Community Engagement Services List */}
              <div className="flex flex-col justify-center items-center gap-6 flex-1">
                <div className="flex items-start gap-1 w-full pb-2 border-b border-[rgba(87,87,87,0.30)]">
                  <span className="text-[#ADADAD] font-inter text-xl font-bold leading-7 flex-1">
                    Innovative Community Participation
                  </span>
                  <div className="w-6 h-6">
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.265 6.28003V16.03C19.265 16.3284 19.1465 16.6145 18.9355 16.8255C18.7246 17.0365 18.4384 17.155 18.14 17.155C17.8417 17.155 17.5555 17.0365 17.3445 16.8255C17.1336 16.6145 17.015 16.3284 17.015 16.03V8.99878L6.93597 19.076C6.72463 19.2873 6.43798 19.406 6.1391 19.406C5.84021 19.406 5.55357 19.2873 5.34222 19.076C5.13088 18.8646 5.01215 18.578 5.01215 18.2791C5.01215 17.9802 5.13088 17.6936 5.34222 17.4822L15.4213 7.40503H8.39003C8.09167 7.40503 7.80552 7.2865 7.59454 7.07552C7.38356 6.86455 7.26503 6.5784 7.26503 6.28003C7.26503 5.98166 7.38356 5.69551 7.59454 5.48453C7.80552 5.27356 8.09167 5.15503 8.39003 5.15503H18.14C18.4384 5.15503 18.7246 5.27356 18.9355 5.48453C19.1465 5.69551 19.265 5.98166 19.265 6.28003Z" fill="#247FBF"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start gap-1 w-full pb-2 border-b border-[rgba(87,87,87,0.30)]">
                  <span className="text-[#ADADAD] font-inter text-xl font-bold leading-7 flex-1">
                    Development-Life Skills
                  </span>
                  <div className="w-6 h-6">
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.365 6.28003V16.03C19.365 16.3284 19.2465 16.6145 19.0355 16.8255C18.8245 17.0365 18.5383 17.155 18.24 17.155C17.9416 17.155 17.6555 17.0365 17.4445 16.8255C17.2335 16.6145 17.115 16.3284 17.115 16.03V8.99878L7.03592 19.076C6.82457 19.2873 6.53793 19.406 6.23904 19.406C5.94016 19.406 5.65351 19.2873 5.44217 19.076C5.23082 18.8646 5.11209 18.578 5.11209 18.2791C5.11209 17.9802 5.23082 17.6936 5.44217 17.4822L15.5212 7.40503H8.48998C8.19161 7.40503 7.90546 7.2865 7.69448 7.07552C7.48351 6.86455 7.36498 6.5784 7.36498 6.28003C7.36498 5.98166 7.48351 5.69551 7.69448 5.48453C7.90546 5.27356 8.19161 5.15503 8.48998 5.15503H18.24C18.5383 5.15503 18.8245 5.27356 19.0355 5.48453C19.2465 5.69551 19.365 5.98166 19.365 6.28003Z" fill="#247FBF"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start gap-1 w-full pb-2 border-b border-[rgba(87,87,87,0.30)]">
                  <span className="text-[#ADADAD] font-inter text-xl font-bold leading-7 flex-1">
                    Assistive Products for Household Tasks
                  </span>
                  <div className="w-6 h-6">
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.32 6.28003V16.03C19.32 16.3284 19.2015 16.6145 18.9905 16.8255C18.7795 17.0365 18.4934 17.155 18.195 17.155C17.8967 17.155 17.6105 17.0365 17.3995 16.8255C17.1886 16.6145 17.07 16.3284 17.07 16.03V8.99878L6.99096 19.076C6.77962 19.2873 6.49298 19.406 6.19409 19.406C5.8952 19.406 5.60856 19.2873 5.39722 19.076C5.18587 18.8646 5.06714 18.578 5.06714 18.2791C5.06714 17.9802 5.18587 17.6936 5.39722 17.4822L15.4763 7.40503H8.44503C8.14666 7.40503 7.86051 7.2865 7.64953 7.07552C7.43855 6.86455 7.32003 6.5784 7.32003 6.28003C7.32003 5.98166 7.43855 5.69551 7.64953 5.48453C7.86051 5.27356 8.14666 5.15503 8.44503 5.15503H18.195C18.4934 5.15503 18.7795 5.27356 18.9905 5.48453C19.2015 5.69551 19.32 5.98166 19.32 6.28003Z" fill="#247FBF"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start gap-1 w-full pb-2 border-b border-[rgba(87,87,87,0.30)]">
                  <span className="text-[#ADADAD] font-inter text-xl font-bold leading-7 flex-1">
                    Participate in Community
                  </span>
                  <div className="w-6 h-6">
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.685 6.28003V16.03C19.685 16.3284 19.5665 16.6145 19.3555 16.8255C19.1445 17.0365 18.8584 17.155 18.56 17.155C18.2616 17.155 17.9755 17.0365 17.7645 16.8255C17.5535 16.6145 17.435 16.3284 17.435 16.03V8.99878L7.35592 19.076C7.14458 19.2873 6.85794 19.406 6.55905 19.406C6.26016 19.406 5.97352 19.2873 5.76217 19.076C5.55083 18.8646 5.4321 18.578 5.4321 18.2791C5.4321 17.9802 5.55083 17.6936 5.76217 17.4822L15.8412 7.40503H8.80999C8.51162 7.40503 8.22547 7.2865 8.01449 7.07552C7.80351 6.86455 7.68499 6.5784 7.68499 6.28003C7.68499 5.98166 7.80351 5.69551 8.01449 5.48453C8.22547 5.27356 8.51162 5.15503 8.80999 5.15503H18.56C18.8584 5.15503 19.1445 5.27356 19.3555 5.48453C19.5665 5.69551 19.685 5.98166 19.685 6.28003Z" fill="#247FBF"/>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start gap-1 w-full pb-2 border-b border-[rgba(87,87,87,0.30)]">
                  <span className="text-[#ADADAD] font-inter text-xl font-bold leading-7 flex-1">
                    Group/Centre Activities
                  </span>
                  <div className="w-6 h-6">
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.24 6.28003V16.03C19.24 16.3284 19.1215 16.6145 18.9105 16.8255C18.6995 17.0365 18.4133 17.155 18.115 17.155C17.8166 17.155 17.5305 17.0365 17.3195 16.8255C17.1085 16.6145 16.99 16.3284 16.99 16.03V8.99878L6.91092 19.076C6.69957 19.2873 6.41293 19.406 6.11404 19.406C5.81516 19.406 5.52851 19.2873 5.31717 19.076C5.10582 18.8646 4.98709 18.578 4.98709 18.2791C4.98709 17.9802 5.10582 17.6936 5.31717 17.4822L15.3962 7.40503H8.36498C8.06661 7.40503 7.78046 7.2865 7.56948 7.07552C7.35851 6.86455 7.23998 6.5784 7.23998 6.28003C7.23998 5.98166 7.35851 5.69551 7.56948 5.48453C7.78046 5.27356 8.06661 5.15503 8.36498 5.15503H18.115C18.4133 5.15503 18.6995 5.27356 18.9105 5.48453C19.1215 5.69551 19.24 5.98166 19.24 6.28003Z" fill="#247FBF"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <Divider />

      {/* Why Choose Us Section */}
      <section className="flex justify-center items-center py-20 px-4">
        <div className="flex flex-col justify-center items-center gap-[60px] max-w-[1080px] w-full">
          {/* Section Header */}
          <div className="flex min-w-full px-4 lg:px-[290px] flex-col justify-center items-center gap-[30px]">
            {/* Why Choose Us Badge */}
            <div className="flex px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
              <div className="text-[#247FBF] font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px]">
                WHY CHOOSE US
              </div>
            </div>

            {/* Main Heading */}
            <div className="flex max-w-[500px] w-full flex-col items-center">
              <div className="text-center">
                <h2 className="text-[#247FBF] text-center font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px]">
                  <div>Guiding You Through</div>
                  <div>Personalized Care</div>
                </h2>
              </div>
            </div>
          </div>

          {/* Section Content */}
          <div className="flex max-w-[1000px] items-start gap-10 w-full flex-col lg:flex-row">
            {/* Left Side - Description */}
            <div className="flex max-w-[500px] flex-col justify-center items-center gap-[19.3px] flex-1">
              {/* Image */}
              <div className="w-full max-w-[480px] h-[235px] rounded-lg relative">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/69781f86c6d92bfff5f5ff74a844f1ec700aa6fe?width=960"
                  alt="Quality Care Team"
                  className="h-[235px] w-full rounded-lg object-cover"
                />
                <div className="absolute inset-0 w-full h-full rounded-lg border-b border-[#4A4A4A]"></div>
              </div>

              {/* Title and Description */}
              <div className="flex max-w-[500px] flex-col items-start w-full">
                <h3 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px] mb-4">
                  Navigating Life's Most Personal Challenges
                </h3>

                <div className="flex flex-col justify-center items-start gap-[9.58px] w-full">
                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px]">
                    At Quality Care, we understand that navigating life's challenges can be overwhelming. Our services are designed to provide compassionate and impactful support to individuals and families facing unique circumstances. From personal care to community engagement, our approach centers on empowering independence and promoting well-being.
                  </p>

                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px]">
                    Our team recognizes the emotional and practical complexities of these challenges and approaches each situation with sensitivity, respect, and expertise. We are dedicated to delivering personalized solutions that align with your goals and needs, ensuring you feel supported every step of the way. At Quality Care, your dignity, independence, and aspirations remain our top priorities.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="flex flex-col justify-center items-center gap-4 flex-1">
              {/* Expanded Item - Person-Centered Approach */}
              <div className="flex p-5 flex-col justify-center items-center gap-[19.4px] rounded-lg w-full">
                <div className="flex h-[42px] justify-between items-center w-full">
                  <div className="flex items-center gap-4">
                    <span className="text-[#ADADAD] font-inter text-[19px] font-bold leading-7">01</span>
                    <h4 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px]">
                      Person-Centered Approach
                    </h4>
                  </div>
                  <div className="flex w-10 h-10 justify-center items-start">
                    <div className="flex-1 h-full rounded-lg bg-[rgba(227,169,121,0.05)] relative">
                      <div className="w-5 h-0.5 rounded-[20px] bg-[#247FBF] absolute left-2.5 top-[19px]"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start gap-5 w-full">
                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px]">
                    We listen to you and craft personalized plans tailored to your needs, preferences, and aspirations.
                  </p>

                  <div className="flex w-full max-w-[440px] justify-center items-center rounded-md">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/7f1c960dab230571ad721d2110c0842f8d33f59b?width=880"
                      alt="Person-centered care"
                      className="h-[158px] w-full rounded-md object-cover"
                    />
                  </div>
                </div>

                <div className="w-full h-px rounded-lg border-b border-[#4A4A4A]"></div>
              </div>

              {/* Collapsed Items */}
              <div className="flex p-5 justify-center items-center rounded-lg bg-[rgba(255,255,255,0.05)] w-full">
                <div className="flex h-[42px] justify-between items-center w-full">
                  <div className="flex items-center gap-4">
                    <span className="text-[#4A4A4A] font-inter text-2xl font-bold leading-[42px] tracking-[0.28px]">02</span>
                    <h4 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px]">
                      Experienced Team
                    </h4>
                  </div>
                  <div className="flex w-10 h-10 justify-center items-start">
                    <div className="flex-1 h-full rounded-lg bg-[rgba(227,169,121,0.05)] relative">
                      <div className="w-5 h-0.5 rounded-[20px] bg-[#247FBF] absolute left-2.5 top-[19px]"></div>
                      <div className="w-5 h-0.5 rounded-[20px] bg-[#247FBF] absolute left-2.5 top-[19px] rotate-90"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex p-5 justify-center items-center rounded-lg bg-[rgba(255,255,255,0.05)] w-full">
                <div className="flex h-[42px] justify-between items-center w-full">
                  <div className="flex items-center gap-4">
                    <span className="text-[#4A4A4A] font-inter text-2xl font-bold leading-[42px] tracking-[0.28px]">03</span>
                    <h4 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px]">
                      Flexibility and Reliability
                    </h4>
                  </div>
                  <div className="flex w-10 h-10 justify-center items-start">
                    <div className="flex-1 h-full rounded-lg bg-[rgba(227,169,121,0.05)] relative">
                      <div className="w-5 h-0.5 rounded-[20px] bg-[#247FBF] absolute left-2.5 top-[19px]"></div>
                      <div className="w-5 h-0.5 rounded-[20px] bg-[#247FBF] absolute left-2.5 top-[19px] rotate-90"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex p-5 justify-center items-center rounded-lg bg-[rgba(255,255,255,0.05)] w-full">
                <div className="flex h-[42px] justify-between items-center w-full">
                  <div className="flex items-center gap-4">
                    <span className="text-[#4A4A4A] font-inter text-2xl font-bold leading-[42px] tracking-[0.28px]">04</span>
                    <h4 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px]">
                      Commitment to Excellence
                    </h4>
                  </div>
                  <div className="flex w-10 h-10 justify-center items-start">
                    <div className="flex-1 h-full rounded-lg bg-[rgba(227,169,121,0.05)] relative">
                      <div className="w-5 h-0.5 rounded-[20px] bg-[#247FBF] absolute left-2.5 top-[19px]"></div>
                      <div className="w-5 h-0.5 rounded-[20px] bg-[#247FBF] absolute left-2.5 top-[19px] rotate-90"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <Divider />

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
