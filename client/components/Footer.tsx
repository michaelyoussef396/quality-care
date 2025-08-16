import { Link } from 'react-router-dom';

export default function Footer() {
  const mainLinks = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' }
  ];

  const serviceLinks = [
    { text: 'Accommodation Support', path: '/AccommodationTenancy' },
    { text: 'Travel & Transport', path: '/AssistTravelTransport' },
    { text: 'Personal Activities', path: '/AssistPersonalActivities' },
    { text: 'Life Skills Development', path: '/DevelopmentLifeSkills' },
    { text: 'Assistive Products', path: '/AssistiveProducts' },
    { text: 'Community Participation', path: '/CommunityParticipation' },
    { text: 'Shared Living', path: '/SharedLiving' },
    { text: 'Life Transition Support', path: '/AssistLifeStageTransition' }
  ];

  return (
    <footer className="flex py-[30px] flex-col items-center w-full">
      <div className="flex flex-col items-center w-full">
        <div className="flex w-full max-w-[1078px] flex-col justify-center items-center">
          <div className="flex min-w-full flex-col justify-center items-center gap-6">
            {/* Logos */}
            <div className="flex items-center gap-[35px]">
              <div className="flex w-[179px] justify-center items-center">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5485bd83ba3750ad5d72f6e9531811779681422f?width=358" 
                  alt="Quality Care Logo" 
                  className="h-[151.45px] w-full"
                />
              </div>
              <div className="flex w-[100px] justify-center items-center">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5e8c32b443f3c60d2707fe4ca4d9a70d413d3e1d?width=200" 
                  alt="NDIS Logo" 
                  className="h-[100px] w-full"
                />
              </div>
            </div>
            
            {/* ABN */}
            <div className="flex flex-col items-center">
              <p className="text-[#121212] font-[Unna] text-[19px] font-normal leading-[22.8px] tracking-[1.52px] uppercase">
                ABN: 57 663 460 071
              </p>
            </div>
            
            {/* Copyright */}
            <div className="flex justify-center items-center w-full">
              <div className="flex flex-col items-center opacity-80">
                <p className="text-[#121212] font-inter text-sm font-normal leading-[23.1px] tracking-[0.28px]">
                  © 2024 Quality Care. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
