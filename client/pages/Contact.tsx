import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { submitContactForm } from "../lib/contact-api";
import type { FormData } from "../components/ContactForm";
import SEO from "../components/SEO";

export default function Contact() {
  const handleFormSubmit = async (formData: FormData) => {
    const result = await submitContactForm(formData);
    if (!result.success) {
      throw new Error(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact Us"
        description="Contact Quality Care for personalized NDIS services. Get in touch with our expert team for accommodation support, personal care, and community participation services. We respond within hours."
        keywords="contact quality care, ndis services contact, get support, consultation, expert team, accommodation support, personal care"
        canonical="https://qualitycareproviders.com.au/contact"
      />
      {/* Main Content */}
      <div className="flex max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-[60px] pt-16 sm:pt-20 lg:pt-[100px] flex-col justify-center items-center gap-16 sm:gap-20 lg:gap-[100px]">
        {/* Contact Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-[60px] w-full bg-[#4A4A4A] rounded-2xl py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12"
        >
          {/* Titles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-[30px] w-full"
          >
            {/* Contact Us Badge */}
            <div className="flex px-4 sm:px-5 py-2 justify-center items-center rounded-md bg-[rgba(227,169,121,0.05)]">
              <div className="text-[#247FBF] font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                Contact Us
              </div>
            </div>

            {/* Main Heading and Description */}
            <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 lg:gap-[10px] w-full">
              <div className="flex max-w-[450px] w-full flex-col items-center">
                <div className="text-center">
                  <h1 className="font-inter text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] tracking-[0.28px]">
                    <span className="text-[#247FBF]">Get in Touch— </span>
                    <span className="text-[#ADADAD]">Connect with</span>
                    <br />
                    <span className="text-[#ADADAD]">Our Care Experts.</span>
                  </h1>
                </div>
              </div>

              <div className="flex max-w-[800px] w-full flex-col items-center">
                <p className="text-[#121212] text-center font-inter text-sm sm:text-base font-normal leading-[1.55] tracking-[0.32px]">
                  At Quality Care, we're here to assist you with your care
                  needs. Contact us with any questions or to schedule a
                  consultation. We respond within a few hours, ensuring you
                  receive the support and guidance you need promptly. Reach out
                  today!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm 
            onSubmit={handleFormSubmit}
            className="flex flex-col items-center w-full"
          />
        </motion.div>

        {/* Footer */}
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
