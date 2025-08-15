import Divider from "../components/Divider";
import Footer from "../components/Footer";

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
          <div className="flex flex-col justify-center items-center gap-[60px] w-full lg:justify-center lg:items-center">
            {/* Personal Support Services */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20 w-full">
              <div className="flex flex-col justify-center items-center lg:items-start gap-5 flex-1">
                <div className="flex flex-col justify-center items-center lg:items-start gap-[-0.5px] w-full">
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
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20 w-full">
              <div className="flex flex-col justify-center items-center lg:items-start gap-5 flex-1">
                <div className="flex flex-col justify-center items-center lg:items-start gap-[-0.5px] w-full">
                  <div className="flex flex-col items-start">
                    <h3 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px] text-center sm:text-left">
                      Community Engagement Services
                    </h3>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px] text-center sm:text-left">
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
          <div className="flex min-w-full px-4 sm:px-8 lg:px-[290px] flex-col justify-center items-center gap-[30px]">
            {/* Why Choose Us Badge */}
            <div className="flex px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
              <div className="text-[#247FBF] font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px] text-center sm:text-center">
                WHY CHOOSE US
              </div>
            </div>

            {/* Main Heading */}
            <div className="flex max-w-[500px] w-full flex-col items-center">
              <div className="text-center">
                <h2 className="text-[#247FBF] text-center font-inter text-[28px] font-normal leading-[42px] tracking-[0.28px]">
                  <div className="text-center sm:text-center">Guiding You Through</div>
                  <div>Personalized Care</div>
                </h2>
              </div>
            </div>
          </div>

          {/* Section Content */}
          <div className="flex max-w-[1000px] items-start gap-10 w-full flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center">
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
              <div className="flex max-w-[500px] flex-col items-start w-full justify-center items-center sm:justify-start sm:items-start">
                <h3 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px] mb-4 text-center sm:text-left">
                  Navigating Life's Most Personal Challenges
                </h3>

                <div className="flex flex-col justify-center items-start gap-[9.58px] w-full">
                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px] text-center sm:text-left">
                    At Quality Care, we understand that navigating life's challenges can be overwhelming. Our services are designed to provide compassionate and impactful support to individuals and families facing unique circumstances. From personal care to community engagement, our approach centers on empowering independence and promoting well-being.
                  </p>

                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px] text-center sm:text-left">
                    Our team recognizes the emotional and practical complexities of these challenges and approaches each situation with sensitivity, respect, and expertise. We are dedicated to delivering personalized solutions that align with your goals and needs, ensuring you feel supported every step of the way. At Quality Care, your dignity, independence, and aspirations remain our top priorities.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="flex flex-col justify-center items-center gap-4 flex-1 w-full sm:w-auto">
              {/* Expanded Item - Person-Centered Approach */}
              <div className="flex p-5 flex-col justify-center items-center gap-[19.4px] rounded-lg w-full">
                <div className="flex h-[42px] justify-between items-center w-full">
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-[#ADADAD] font-inter text-[19px] font-bold leading-7">01</span>
                  </div>
                  <div className="flex flex-col justify-center items-start flex-1 ml-4">
                    <h4 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px] text-center sm:text-left">
                      Person-Centered Approach
                    </h4>
                  </div>
                  <div className="flex w-10 h-10 justify-center items-center">
                    <div className="flex-1 h-full rounded-lg bg-[rgba(227,169,121,0.05)] relative">
                      <div className="w-5 h-0.5 rounded-[20px] bg-[#247FBF] absolute left-2.5 top-[19px]"></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start gap-5 w-full lg:justify-center lg:items-start justify-center items-center">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px] text-center sm:text-left">
                      We listen to you and craft personalized plans tailored to your needs, preferences, and aspirations.
                    </p>
                  </div>

                  <div className="flex w-full max-w-[440px] justify-center items-center rounded-md">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/7f1c960dab230571ad721d2110c0842f8d33f59b?width=880"
                      alt="Person-centered care"
                      className="h-[158px] w-full rounded-md object-cover"
                    />
                  </div>
                </div>

                <div className="w-[483px] h-px rounded-lg border-b border-[#4A4A4A]"></div>
              </div>

              {/* Collapsed Items */}
              <div className="flex p-5 justify-center items-center rounded-lg bg-[rgba(255,255,255,0.05)] w-full">
                <div className="flex h-[42px] justify-between items-center w-full">
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-[#4A4A4A] font-inter text-2xl font-bold leading-[42px] tracking-[0.28px]">02</span>
                  </div>
                  <div className="flex flex-col justify-center items-start flex-1 ml-4">
                    <h4 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px]">
                      Experienced Team
                    </h4>
                  </div>
                  <div className="flex w-10 h-10 justify-center items-center">
                    <div className="flex-1 h-full rounded-lg bg-[rgba(227,169,121,0.05)] relative">
                      <div className="w-5 h-0.5 rounded-[20px] bg-[#247FBF] absolute left-2.5 top-[19px]"></div>
                      <div className="w-5 h-0.5 rounded-[20px] bg-[#247FBF] absolute left-2.5 top-[19px] rotate-90"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex p-5 justify-center items-center rounded-lg bg-[rgba(255,255,255,0.05)] w-full">
                <div className="flex h-[42px] justify-between items-center w-full">
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-[#4A4A4A] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.28px]">03</span>
                  </div>
                  <div className="flex flex-col justify-center items-start flex-1 ml-4">
                    <h4 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px]">
                      Flexibility and Reliability
                    </h4>
                  </div>
                  <div className="flex w-10 h-10 justify-center items-center">
                    <div className="flex-1 h-full rounded-lg bg-[rgba(227,169,121,0.05)] relative">
                      <div className="w-5 h-0.5 rounded-[20px] bg-[#247FBF] absolute left-2.5 top-[19px]"></div>
                      <div className="w-5 h-0.5 rounded-[20px] bg-[#247FBF] absolute left-2.5 top-[19px] rotate-90"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex p-5 justify-center items-center rounded-lg bg-[rgba(255,255,255,0.05)] w-full">
                <div className="flex h-[42px] justify-between items-center w-full">
                  <div className="flex flex-col justify-center items-start">
                    <span className="text-[#4A4A4A] font-inter text-[23px] font-bold leading-[42px] tracking-[0.28px]">04</span>
                  </div>
                  <div className="flex flex-col justify-center items-start flex-1 ml-4">
                    <h4 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px]">
                      Commitment to Excellence
                    </h4>
                  </div>
                  <div className="flex w-10 h-10 justify-center items-center">
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

      {/* Process Section */}
      <section className="flex justify-center items-center py-20 px-4 w-full sm:w-auto">
        <div className="flex flex-col items-center gap-[60px] max-w-[1080px] w-full justify-center items-center text-center sm:justify-start sm:items-center sm:text-left">
          {/* Section Header */}
          <div className="flex min-w-full px-4 lg:px-[190px] flex-col justify-center items-center gap-[30px]">
            {/* Process Badge */}
            <div className="flex px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
              <div className="text-[#247FBF] font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px] text-center sm:text-center">
                Process
              </div>
            </div>

            {/* Main Heading */}
            <div className="flex max-w-[700px] w-full flex-col items-center">
              <div className="text-center">
                <h2 className="text-[#247FBF] text-center font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px] mb-2">
                  Our Methodology
                </h2>
                <h2 className="text-[#ADADAD] text-center font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px]">
                  Supporting Your Path to Independence with Care and Precision
                </h2>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="flex max-w-[501px] flex-col justify-center items-center gap-[60px] relative w-full max-w-[721px] sm:max-w-[501px]">
            {/* Vertical Line */}
            <div className="absolute left-10 top-[71px] w-0.5 h-[344px] bg-[#4A4A4A] z-0"></div>

            {/* Step 01 */}
            <div className="flex justify-center items-start gap-4 w-full relative z-10">
              <div className="flex w-20 p-[22px] justify-center items-center rounded-[60px] bg-[rgba(217,217,217,0.05)] backdrop-blur-[2.5px]">
                <div className="w-9 h-9">
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.75 5.12988H26.375V4.00488C26.375 3.70651 26.2565 3.42037 26.0455 3.20939C25.8345 2.99841 25.5484 2.87988 25.25 2.87988C24.9516 2.87988 24.6655 2.99841 24.4545 3.20939C24.2435 3.42037 24.125 3.70651 24.125 4.00488V5.12988H12.875V4.00488C12.875 3.70651 12.7565 3.42037 12.5455 3.20939C12.3345 2.99841 12.0484 2.87988 11.75 2.87988C11.4516 2.87988 11.1655 2.99841 10.9545 3.20939C10.7435 3.42037 10.625 3.70651 10.625 4.00488V5.12988H7.25C6.65326 5.12988 6.08097 5.36694 5.65901 5.78889C5.23705 6.21085 5 6.78315 5 7.37988V29.8799C5 30.4766 5.23705 31.0489 5.65901 31.4709C6.08097 31.8928 6.65326 32.1299 7.25 32.1299H29.75C30.3467 32.1299 30.919 31.8928 31.341 31.4709C31.7629 31.0489 32 30.4766 32 29.8799V7.37988C32 6.78315 31.7629 6.21085 31.341 5.78889C30.919 5.36694 30.3467 5.12988 29.75 5.12988ZM10.625 7.37988V8.50488C10.625 8.80325 10.7435 9.0894 10.9545 9.30038C11.1655 9.51136 11.4516 9.62988 11.75 9.62988C12.0484 9.62988 12.3345 9.51136 12.5455 9.30038C12.7565 9.0894 12.875 8.80325 12.875 8.50488V7.37988H24.125V8.50488C24.125 8.80325 24.2435 9.0894 24.4545 9.30038C24.6655 9.51136 24.9516 9.62988 25.25 9.62988C25.5484 9.62988 25.8345 9.51136 26.0455 9.30038C26.2565 9.0894 26.375 8.80325 26.375 8.50488V7.37988H29.75V11.8799H7.25V7.37988H10.625ZM29.75 29.8799H7.25V14.1299H29.75V29.8799ZM23 22.0049C23 22.3033 22.8815 22.5894 22.6705 22.8004C22.4595 23.0114 22.1734 23.1299 21.875 23.1299H19.625V25.3799C19.625 25.6783 19.5065 25.9644 19.2955 26.1754C19.0845 26.3864 18.7984 26.5049 18.5 26.5049C18.2016 26.5049 17.9155 26.3864 17.7045 26.1754C17.4935 25.9644 17.375 25.6783 17.375 25.3799V23.1299H15.125C14.8266 23.1299 14.5405 23.0114 14.3295 22.8004C14.1185 22.5894 14 22.3033 14 22.0049C14 21.7065 14.1185 21.4204 14.3295 21.2094C14.5405 20.9984 14.8266 20.8799 15.125 20.8799H17.375V18.6299C17.375 18.3315 17.4935 18.0454 17.7045 17.8344C17.9155 17.6234 18.2016 17.5049 18.5 17.5049C18.7984 17.5049 19.0845 17.6234 19.2955 17.8344C19.5065 18.0454 19.625 18.3315 19.625 18.6299V20.8799H21.875C22.1734 20.8799 22.4595 20.9984 22.6705 21.2094C22.8815 21.4204 23 21.7065 23 22.0049Z" fill="#247FBF"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-[-0.92px] flex-1 justify-center items-center w-full sm:justify-start sm:items-start sm:w-auto">
                <div className="flex min-w-[405px] flex-col items-start mb-4 sm:min-w-[405px] min-w-full">
                  <h3 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px] text-center sm:text-left">
                    Initial Consultation and Needs Assessment
                  </h3>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px] text-center sm:text-left">
                    Our journey begins with a one-on-one consultation to understand your unique needs, goals, and preferences. This allows us to craft a tailored care plan that aligns with your vision for independence.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex justify-center items-start gap-4 w-full relative z-10">
              <div className="flex w-20 p-[22px] justify-center items-center rounded-[60px] bg-[rgba(217,217,217,0.05)] backdrop-blur-[2.5px]">
                <div className="w-9 h-9">
                  <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1875 21.3848C10.1862 21.3848 9.20745 21.6817 8.37493 22.238C7.5424 22.7942 6.89353 23.5849 6.51036 24.5099C6.12719 25.435 6.02694 26.4529 6.22227 27.4349C6.41761 28.4169 6.89977 29.319 7.60777 30.027C8.31577 30.735 9.21783 31.2172 10.1999 31.4125C11.1819 31.6078 12.1998 31.5076 13.1248 31.1244C14.0499 30.7412 14.8405 30.0924 15.3968 29.2598C15.9531 28.4273 16.25 27.4485 16.25 26.4473C16.25 25.1046 15.7166 23.8169 14.7672 22.8675C13.8178 21.9181 12.5302 21.3848 11.1875 21.3848ZM11.1875 29.2598C10.6312 29.2598 10.0875 29.0948 9.62496 28.7858C9.16245 28.4767 8.80196 28.0375 8.58909 27.5236C8.37622 27.0096 8.32052 26.4441 8.42904 25.8986C8.53756 25.353 8.80543 24.8519 9.19876 24.4585C9.5921 24.0652 10.0932 23.7973 10.6388 23.6888C11.1844 23.5803 11.7499 23.636 12.2638 23.8489C12.7777 24.0617 13.217 24.4222 13.526 24.8847C13.8351 25.3472 14 25.891 14 26.4473C14 26.8166 13.9273 27.1823 13.7859 27.5236C13.6446 27.8648 13.4374 28.1748 13.1762 28.436C12.9151 28.6972 12.605 28.9043 12.2638 29.0457C11.9226 29.187 11.5568 29.2598 11.1875 29.2598ZM6.45406 14.9638L8.47203 12.9473L6.45406 10.9307C6.24297 10.7196 6.12437 10.4333 6.12437 10.1348C6.12437 9.83623 6.24297 9.54992 6.45406 9.33883C6.66516 9.12773 6.95147 9.00914 7.25 9.00914C7.54853 9.00914 7.83484 9.12773 8.04594 9.33883L10.0625 11.3568L12.0791 9.33883C12.2902 9.12773 12.5765 9.00914 12.875 9.00914C13.1735 9.00914 13.4598 9.12773 13.6709 9.33883C13.882 9.54992 14.0006 9.83623 14.0006 10.1348C14.0006 10.4333 13.882 10.7196 13.6709 10.9307L11.653 12.9473L13.6709 14.9638C13.882 15.1749 14.0006 15.4612 14.0006 15.7598C14.0006 16.0583 13.882 16.3446 13.6709 16.5557C13.4598 16.7668 13.1735 16.8854 12.875 16.8854C12.5765 16.8854 12.2902 16.7668 12.0791 16.5557L10.0625 14.5377L8.04594 16.5557C7.83484 16.7668 7.54853 16.8854 7.25 16.8854C6.95147 16.8854 6.66516 16.7668 6.45406 16.5557C6.24297 16.3446 6.12437 16.0583 6.12437 15.7598C6.12437 15.4612 6.24297 15.1749 6.45406 14.9638ZM32.7959 28.4638C32.9005 28.5684 32.9834 28.6924 33.0399 28.829C33.0965 28.9656 33.1256 29.1119 33.1256 29.2598C33.1256 29.4076 33.0965 29.554 33.0399 29.6905C32.9834 29.8271 32.9005 29.9512 32.7959 30.0557C32.6914 30.1602 32.5673 30.2431 32.4308 30.2997C32.2942 30.3563 32.1478 30.3854 32 30.3854C31.8522 30.3854 31.7058 30.3563 31.5692 30.2997C31.4327 30.2431 31.3086 30.1602 31.2041 30.0557L29.1875 28.0377L27.1709 30.0557C26.9598 30.2668 26.6735 30.3854 26.375 30.3854C26.0765 30.3854 25.7902 30.2668 25.5791 30.0557C25.368 29.8446 25.2494 29.5583 25.2494 29.2598C25.2494 28.9612 25.368 28.6749 25.5791 28.4638L27.597 26.4473L25.5791 24.4307C25.368 24.2196 25.2494 23.9333 25.2494 23.6348C25.2494 23.3362 25.368 23.0499 25.5791 22.8388C25.7902 22.6277 26.0765 22.5091 26.375 22.5091C26.6735 22.5091 26.9598 22.6277 27.1709 22.8388L29.1875 24.8568L31.2041 22.8388C31.4152 22.6277 31.7015 22.5091 32 22.5091C32.2985 22.5091 32.5848 22.6277 32.7959 22.8388C33.007 23.0499 33.1256 23.3362 33.1256 23.6348C33.1256 23.9333 33.007 24.2196 32.7959 24.4307L30.778 26.4473L32.7959 28.4638ZM26.4411 15.8765C25.572 19.0166 22.8805 21.7307 19.8978 22.476C19.8086 22.4982 19.717 22.5095 19.625 22.5098C19.3507 22.5093 19.086 22.4085 18.8807 22.2265C18.6755 22.0445 18.5438 21.7938 18.5104 21.5215C18.4771 21.2492 18.5444 20.9741 18.6997 20.748C18.8549 20.5218 19.0875 20.3602 19.3536 20.2935C21.5516 19.7437 23.6216 17.6343 24.2755 15.276C24.7241 13.6588 24.7283 11.1979 22.2069 8.6807L21.875 8.35023V11.2598C21.875 11.5581 21.7565 11.8443 21.5455 12.0553C21.3345 12.2662 21.0484 12.3848 20.75 12.3848C20.4516 12.3848 20.1655 12.2662 19.9545 12.0553C19.7435 11.8443 19.625 11.5581 19.625 11.2598V5.63477C19.625 5.3364 19.7435 5.05025 19.9545 4.83927C20.1655 4.62829 20.4516 4.50977 20.75 4.50977H26.375C26.6734 4.50977 26.9595 4.62829 27.1705 4.83927C27.3815 5.05025 27.5 5.3364 27.5 5.63477C27.5 5.93313 27.3815 6.21928 27.1705 6.43026C26.9595 6.64124 26.6734 6.75977 26.375 6.75977H23.4655L23.7959 7.08883C26.3609 9.65523 27.3003 12.7757 26.4411 15.8765Z" fill="#247FBF"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-[-0.805px] flex-1 justify-center items-center w-full sm:justify-start sm:items-start sm:w-auto">
                <div className="flex min-w-[405px] flex-col items-start mb-4 sm:min-w-[405px] min-w-full">
                  <h3 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px] text-center sm:text-left">
                    Personalized Plan Development
                  </h3>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px] text-center sm:text-left">
                    Once we've assessed your needs, we develop a personalized support plan. This plan outlines the services, resources, and steps needed to empower you to achieve your goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex justify-center items-start gap-4 w-full relative z-10">
              <div className="flex w-20 p-[22px] justify-center items-center rounded-[60px] bg-[rgba(217,217,217,0.05)] backdrop-blur-[2.5px]">
                <div className="w-9 h-9">
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.2609 15.3796L32.6722 8.19927C32.54 7.93499 32.357 7.69934 32.1337 7.50577C31.9104 7.31221 31.6512 7.16453 31.3708 7.07116C31.0905 6.97779 30.7945 6.94057 30.4997 6.96161C30.205 6.98265 29.9172 7.06155 29.653 7.1938L26.1556 8.94177L18.7883 6.99271C18.5992 6.94351 18.4008 6.94351 18.2117 6.99271L10.8444 8.94177L7.34703 7.1938C7.08277 7.06155 6.79505 6.98265 6.50029 6.96161C6.20554 6.94057 5.90952 6.97779 5.62916 7.07116C5.34879 7.16453 5.08956 7.31221 4.86628 7.50577C4.64299 7.69934 4.46002 7.93499 4.32781 8.19927L0.739062 15.3782C0.606813 15.6424 0.527914 15.9302 0.506872 16.2249C0.485829 16.5197 0.523055 16.8157 0.616424 17.096C0.709792 17.3764 0.857474 17.6356 1.05104 17.8589C1.2446 18.0822 1.48025 18.2652 1.74453 18.3974L5.54141 20.2972L13.3447 25.8702C13.4597 25.952 13.5889 26.0116 13.7258 26.046L22.7258 28.296C22.9143 28.3433 23.1118 28.3409 23.2991 28.2891C23.4864 28.2374 23.6571 28.138 23.7945 28.0007L31.5387 20.255L35.2541 18.3974C35.7874 18.1304 36.193 17.6625 36.3815 17.0966C36.57 16.5307 36.5262 15.9131 36.2595 15.3796H36.2609ZM28.542 20.0722L23.7031 16.1966C23.4863 16.023 23.213 15.9357 22.9357 15.9516C22.6585 15.9674 22.3969 16.0852 22.2013 16.2824C19.6967 18.8052 16.9053 18.486 15.125 17.361L21.2056 11.4547H25.6789L29.5053 19.1061L28.542 20.0722ZM6.34016 9.20474L9.21875 10.6419L5.62297 17.8208L2.75 16.385L6.34016 9.20474ZM22.6527 25.9574L14.4809 23.9155L7.56219 18.974L11.4997 11.099L18.5 9.24411L19.8781 9.60833L13.55 15.7508L13.5387 15.7635C13.3005 16.0017 13.1189 16.2904 13.0071 16.6082C12.8954 16.926 12.8564 17.2648 12.8931 17.5997C12.9298 17.9346 13.0413 18.2569 13.2192 18.543C13.3972 18.829 13.6371 19.0715 13.9213 19.2524C16.8125 21.0988 20.3014 20.7993 23.0492 18.5493L26.9375 21.6725L22.6527 25.9574ZM31.3714 17.8194L27.7827 10.6475L30.6598 9.20474L34.25 16.385L31.3714 17.8194ZM19.0316 30.8511C18.9708 31.0943 18.8306 31.3102 18.6331 31.4646C18.4357 31.6189 18.1923 31.703 17.9417 31.7033C17.8493 31.7032 17.7572 31.6919 17.6675 31.6696L11.8077 30.2043C11.6706 30.1705 11.5413 30.1108 11.4266 30.0285L7.72109 27.3819C7.49325 27.203 7.3432 26.9432 7.30218 26.6564C7.26115 26.3696 7.33232 26.0781 7.50086 25.8425C7.66941 25.6069 7.92233 25.4454 8.20697 25.3916C8.49161 25.3379 8.78602 25.3959 9.02891 25.5538L12.56 28.0766L18.2188 29.4885C18.5081 29.5609 18.7569 29.7453 18.9104 30.001C19.0639 30.2568 19.1095 30.5631 19.0372 30.8526L19.0316 30.8511Z" fill="#247FBF"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start gap-[-0.915px] flex-1 justify-center items-center w-full sm:justify-start sm:items-start sm:w-auto">
                <div className="flex min-w-[405px] flex-col items-start mb-4 sm:min-w-[405px] min-w-full">
                  <h3 className="text-[#247FBF] font-inter text-2xl font-bold leading-[33.6px] tracking-[0.24px] text-center sm:text-left">
                    Implementation and Ongoing Support
                  </h3>
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-[#121212] font-inter text-base font-normal leading-[24.8px] tracking-[0.32px] text-center sm:text-left">
                    Our team works closely with you to implement the care plan, providing hands-on support and guidance. We continuously assess and adapt our services to meet your evolving needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <Divider />

      {/* FAQ Section */}
      <section className="flex justify-center items-start py-20 px-4">
        <div className="flex items-start gap-5 max-w-[1080px] w-full lg:flex-row flex-col lg:items-start items-stretch">
          {/* Left Side - Headers */}
          <div className="flex w-[400px] max-w-[400px] flex-col justify-center items-start gap-[30px] lg:justify-center lg:items-start lg:w-[400px] lg:max-w-[400px] justify-center items-center w-full max-w-[675px]">
            {/* FAQ Badge */}
            <div className="flex px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
              <div className="text-[#247FBF] font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px]">
                FAQ
              </div>
            </div>

            {/* Main Heading */}
            <div className="min-w-[300px] max-w-[300px] text-[#247FBF] font-inter text-[28px] font-normal leading-[42px] tracking-[0.28px] lg:text-left text-center">
              Insights & Clarifications
            </div>
          </div>

          {/* Right Side - Q&A */}
          <div className="flex w-[660px] flex-col items-start gap-2 rounded-xl lg:w-[660px] w-full">
            {/* Expanded Question 1 */}
            <div className="flex p-5 flex-col items-start rounded-xl bg-[#247FBF] w-full">
              <div className="flex justify-center items-start gap-2.5 w-full">
                <div className="flex w-8 p-2 justify-center items-center rounded-[32px] bg-white">
                  <div className="w-4 h-4">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.96938 8.62951C3.03905 8.55959 3.12185 8.50411 3.21301 8.46625C3.30417 8.4284 3.40192 8.40891 3.50063 8.40891C3.59934 8.40891 3.69707 8.4284 3.78824 8.46625C3.8794 8.50411 3.9622 8.55959 4.03188 8.62951L7.25 11.8476V2.66013C7.25 2.46122 7.32902 2.27045 7.46967 2.1298C7.61032 1.98915 7.80109 1.91013 8 1.91013C8.19891 1.91013 8.38968 1.98915 8.53033 2.1298C8.67098 2.27045 8.75 2.46122 8.75 2.66013V11.8476L11.9694 8.62951C12.1103 8.48861 12.3014 8.40946 12.5006 8.40946C12.6999 8.40946 12.891 8.48861 13.0319 8.62951C13.1728 8.7704 13.2519 8.9615 13.2519 9.16076C13.2519 9.36001 13.1728 9.55111 13.0319 9.69201L8.53188 14.192C8.4622 14.2619 8.3794 14.3174 8.28824 14.3553C8.19708 14.3931 8.09934 14.4126 8.00063 14.4126C7.90192 14.4126 7.80417 14.3931 7.71301 14.3553C7.62185 14.3174 7.53905 14.2619 7.46938 14.192L2.96938 9.69201C2.89946 9.62233 2.84398 9.53953 2.80612 9.44837C2.76827 9.35721 2.74878 9.25947 2.74878 9.16076C2.74878 9.06205 2.76827 8.96431 2.80612 8.87314C2.84398 8.78198 2.89946 8.69918 2.96938 8.62951Z" fill="#121212"/>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[7.39px] flex-1">
                  <div className="flex items-center">
                    <h3 className="text-[#121212] font-inter text-xl font-semibold leading-7 tracking-[0.2px]">
                      How do I get started with Quality Care services?
                    </h3>
                  </div>
                  <div className="flex flex-col items-start">
                    <p className="text-white font-inter text-base font-normal leading-[26.4px] tracking-[0.32px]">
                      Simply visit our "Contact" page and fill out the inquiry form, or give us a call. Our team will promptly get in touch to schedule an initial consultation and assess your needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-px rounded-xl border-b border-[rgba(118,118,118,0.46)] mt-4"></div>
            </div>

            {/* Collapsed Questions */}
            <div className="flex p-5 flex-col items-start rounded-xl bg-[#474747] w-full">
              <div className="flex justify-center items-center gap-2.5 w-full">
                <div className="flex w-8 p-2 justify-center items-center rounded-[32px] bg-[#247FBF]">
                  <div className="w-4 h-4">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0306 8.08094C12.9609 8.15086 12.8782 8.20634 12.787 8.24419C12.6958 8.28205 12.5981 8.30153 12.4994 8.30153C12.4007 8.30153 12.3029 8.28205 12.2118 8.24419C12.1206 8.20634 12.0378 8.15086 11.9681 8.08094L8.75 4.86282V14.0503C8.75 14.2492 8.67098 14.44 8.53033 14.5806C8.38968 14.7213 8.19891 14.8003 8 14.8003C7.80109 14.8003 7.61032 14.7213 7.46967 14.5806C7.32902 14.44 7.25 14.2492 7.25 14.0503V4.86282L4.03062 8.08094C3.88973 8.22184 3.69863 8.30099 3.49937 8.30099C3.30012 8.30099 3.10902 8.22184 2.96812 8.08094C2.82723 7.94005 2.74807 7.74895 2.74807 7.54969C2.74807 7.35044 2.82723 7.15934 2.96812 7.01844L7.46812 2.51844C7.5378 2.44852 7.6206 2.39305 7.71176 2.35519C7.80292 2.31734 7.90066 2.29785 7.99937 2.29785C8.09808 2.29785 8.19583 2.31734 8.28699 2.35519C8.37815 2.39305 8.46095 2.44852 8.53062 2.51844L13.0306 7.01844C13.1005 7.08812 13.156 7.17092 13.1939 7.26208C13.2317 7.35324 13.2512 7.45098 13.2512 7.54969C13.2512 7.6484 13.2317 7.74614 13.1939 7.83731C13.156 7.92847 13.1005 8.01127 13.0306 8.08094Z" fill="#121212"/>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-start flex-1">
                  <h3 className="text-white font-inter text-xl font-semibold leading-7 tracking-[0.2px]">
                    What services does Quality Care provide?
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex p-5 flex-col items-start rounded-xl bg-[#474747] w-full">
              <div className="flex justify-center items-center gap-2.5 w-full">
                <div className="flex w-8 p-2 justify-center items-center rounded-[32px] bg-[#247FBF]">
                  <div className="w-4 h-4">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0306 8.08094C12.9609 8.15086 12.8782 8.20634 12.787 8.24419C12.6958 8.28205 12.5981 8.30153 12.4994 8.30153C12.4007 8.30153 12.3029 8.28205 12.2118 8.24419C12.1206 8.20634 12.0378 8.15086 11.9681 8.08094L8.75 4.86282V14.0503C8.75 14.2492 8.67098 14.44 8.53033 14.5806C8.38968 14.7213 8.19891 14.8003 8 14.8003C7.80109 14.8003 7.61032 14.7213 7.46967 14.5806C7.32902 14.44 7.25 14.2492 7.25 14.0503V4.86282L4.03062 8.08094C3.88973 8.22184 3.69863 8.30099 3.49937 8.30099C3.30012 8.30099 3.10902 8.22184 2.96812 8.08094C2.82723 7.94005 2.74807 7.74895 2.74807 7.54969C2.74807 7.35044 2.82723 7.15934 2.96812 7.01844L7.46812 2.51844C7.5378 2.44852 7.6206 2.39305 7.71176 2.35519C7.80292 2.31734 7.90066 2.29785 7.99937 2.29785C8.09808 2.29785 8.19583 2.31734 8.28699 2.35519C8.37815 2.39305 8.46095 2.44852 8.53062 2.51844L13.0306 7.01844C13.1005 7.08812 13.156 7.17092 13.1939 7.26208C13.2317 7.35324 13.2512 7.45098 13.2512 7.54969C13.2512 7.6484 13.2317 7.74614 13.1939 7.83731C13.156 7.92847 13.1005 8.01127 13.0306 8.08094Z" fill="#121212"/>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-start flex-1">
                  <h3 className="text-white font-inter text-xl font-semibold leading-7 tracking-[0.2px]">
                    Who is eligible for your services?
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex p-5 flex-col items-start rounded-xl bg-[#474747] w-full">
              <div className="flex justify-center items-center gap-2.5 w-full">
                <div className="flex w-8 p-2 justify-center items-center rounded-[32px] bg-[#247FBF]">
                  <div className="w-4 h-4">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0306 8.08094C12.9609 8.15086 12.8782 8.20634 12.787 8.24419C12.6958 8.28205 12.5981 8.30153 12.4994 8.30153C12.4007 8.30153 12.3029 8.28205 12.2118 8.24419C12.1206 8.20634 12.0378 8.15086 11.9681 8.08094L8.75 4.86282V14.0503C8.75 14.2492 8.67098 14.44 8.53033 14.5806C8.38968 14.7213 8.19891 14.8003 8 14.8003C7.80109 14.8003 7.61032 14.7213 7.46967 14.5806C7.32902 14.44 7.25 14.2492 7.25 14.0503V4.86282L4.03062 8.08094C3.88973 8.22184 3.69863 8.30099 3.49937 8.30099C3.30012 8.30099 3.10902 8.22184 2.96812 8.08094C2.82723 7.94005 2.74807 7.74895 2.74807 7.54969C2.74807 7.35044 2.82723 7.15934 2.96812 7.01844L7.46812 2.51844C7.5378 2.44852 7.6206 2.39305 7.71176 2.35519C7.80292 2.31734 7.90066 2.29785 7.99937 2.29785C8.09808 2.29785 8.19583 2.31734 8.28699 2.35519C8.37815 2.39305 8.46095 2.44852 8.53062 2.51844L13.0306 7.01844C13.1005 7.08812 13.156 7.17092 13.1939 7.26208C13.2317 7.35324 13.2512 7.45098 13.2512 7.54969C13.2512 7.6484 13.2317 7.74614 13.1939 7.83731C13.156 7.92847 13.1005 8.01127 13.0306 8.08094Z" fill="#121212"/>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-start flex-1">
                  <h3 className="text-white font-inter text-xl font-semibold leading-7 tracking-[0.2px]">
                    How are services personalized to my needs?
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <Divider />

      {/* Contact CTA Section */}
      <section className="flex justify-center items-center bg-[#4A4A4A] w-full">
        <div className="flex flex-col items-center max-w-[1080px] w-full min-h-[471px]">
          <div className="flex p-10 items-end gap-10 rounded-[20px] w-full lg:flex-row flex-col lg:items-end items-stretch">
            {/* Left Side - Title and Info */}
            <div className="flex flex-col justify-center items-start flex-1 lg:justify-center lg:items-start justify-center items-center">
              <div className="flex flex-col justify-center items-start gap-[6px] w-full lg:flex-col lg:items-start lg:justify-center flex-col items-center justify-center">
                <div className="flex pr-20 flex-col justify-center items-start gap-[30px] lg:justify-center lg:items-start justify-center items-center">
                  {/* Contact Us Badge */}
                  <div className="flex px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)] lg:text-left text-center lg:mx-0 mx-auto">
                    <div className="text-[#247FBF] font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px]">
                      Contact Us
                    </div>
                  </div>

                  {/* Main Heading */}
                  <div className="flex max-w-[320px] flex-col items-start lg:max-w-[320px] max-w-[317px]">
                    <h2 className="text-white font-inter text-[28px] font-bold leading-[42px] tracking-[0.28px] text-center sm:text-left">
                      Get in Touch Let Us Support Your Journey to Independence
                    </h2>
                  </div>

                  {/* Description */}
                  <div className="flex min-w-[398px] max-w-[398px] flex-col items-start w-full text-center px-0 sm:px-0 sm:text-left sm:w-auto">
                    <p className="text-white font-inter text-xl font-bold leading-7 text-center sm:text-left">
                      We're here to answer your questions and help you get started with personalized care services. Contact us today, and let's begin working together toward your goals.
                    </p>
                  </div>
                </div>

                {/* Separator Line */}
                <div className="w-[480px] h-px bg-[rgba(87,87,87,0.30)]"></div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex flex-col justify-center items-center w-full flex-1">
              <form className="flex flex-col justify-center items-start gap-3 w-full">
                {/* Name and Email Fields */}
                <div className="flex flex-col justify-center items-start gap-3 w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className="flex p-4 flex-col items-start w-full rounded-lg bg-[rgba(219,219,219,0.08)] text-white placeholder-[rgba(255,255,255,0.6)] font-inter text-base border-none outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex p-4 flex-col items-start w-full rounded-lg bg-[rgba(219,219,219,0.08)] text-white placeholder-[rgba(255,255,255,0.6)] font-inter text-base border-none outline-none"
                  />
                </div>

                {/* Message Textarea */}
                <textarea
                  placeholder="Message"
                  rows={8}
                  className="flex p-4 flex-col items-start w-full rounded-lg bg-[rgba(219,219,219,0.08)] text-white placeholder-[rgba(255,255,255,0.6)] font-inter text-base leading-[22.4px] border-none outline-none resize-none"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex p-4 justify-center items-center w-full rounded-lg bg-[#247FBF] hover:bg-[#1e6a9f] transition-colors"
                >
                  <span className="text-[#121212] text-center font-inter text-base font-semibold leading-[22.4px]">
                    Let Us Know
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="w-full h-px rounded-[20px] border-b border-[#4A4A4A]"></div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
