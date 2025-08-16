import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  ndisNumber: string;
  serviceInterest: string;
  preferredContact: 'phone' | 'email';
  message: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
  className?: string;
}

const SERVICE_OPTIONS = [
  'General Inquiry',
  'Accommodation Tenancy',
  'Assist-Life Stage, Transition',
  'Assist-Personal Activities',
  'Assist-Travel/Transport',
  'Shared Living',
  'Community Participation',
  'Development-Life Skills',
  'Assistive Products',
  'Participate in Community',
  'Group/Centre Activities'
];

export default function ContactForm({ onSubmit, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    ndisNumber: '',
    serviceInterest: '',
    preferredContact: 'email',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(\+61|0)[2-9]\d{8}$/.test(formData.phone.replace(/\s|-/g, ''))) {
      newErrors.phone = 'Please enter a valid Australian phone number';
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = 'Please select a service of interest';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message must be at least 20 characters';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the terms to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default submission logic
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
      }

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        ndisNumber: '',
        serviceInterest: '',
        preferredContact: 'email',
        message: '',
        consent: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-[15px] py-4 rounded-lg bg-[rgba(219,219,219,0.08)] text-white placeholder-[rgba(255,255,255,0.6)] font-inter text-base font-normal border-none outline-none focus:ring-2 focus:ring-[#247FBF] transition-all";
  const errorClasses = "text-red-400 text-sm mt-1 font-inter";

  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-end w-full max-w-[1080px] rounded-[20px] bg-[rgba(255,255,255,0.05)] p-6 sm:p-8 lg:p-[40px]">
        <div className="flex flex-col justify-center items-center w-full">
          
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
            >
              <p className="text-green-400 text-center font-inter">
                Thank you! Your message has been sent successfully. We'll respond within a few hours.
              </p>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
            >
              <p className="text-red-400 text-center font-inter">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-start gap-4 w-full">
            
            {/* Name and Email Row */}
            <div className="flex flex-col sm:flex-row justify-center items-start gap-4 w-full">
              <div className="flex flex-col items-start flex-1 w-full">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name *"
                  className={inputClasses}
                  required
                />
                {errors.fullName && <p className={errorClasses}>{errors.fullName}</p>}
              </div>
              <div className="flex flex-col items-start flex-1 w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address *"
                  className={inputClasses}
                  required
                />
                {errors.email && <p className={errorClasses}>{errors.email}</p>}
              </div>
            </div>

            {/* Phone and NDIS Number Row */}
            <div className="flex flex-col sm:flex-row justify-center items-start gap-4 w-full">
              <div className="flex flex-col items-start flex-1 w-full">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number *"
                  className={inputClasses}
                  required
                />
                {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
              </div>
              <div className="flex flex-col items-start flex-1 w-full">
                <input
                  type="text"
                  name="ndisNumber"
                  value={formData.ndisNumber}
                  onChange={handleInputChange}
                  placeholder="NDIS Number (Optional)"
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Service Interest and Preferred Contact Row */}
            <div className="flex flex-col sm:flex-row justify-center items-start gap-4 w-full">
              <div className="flex flex-col items-start flex-1 w-full">
                <select
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleInputChange}
                  className={`${inputClasses} cursor-pointer`}
                  required
                >
                  <option value="">Select Service Interest *</option>
                  {SERVICE_OPTIONS.map(service => (
                    <option key={service} value={service} className="bg-[#2a2a2a] text-white">
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceInterest && <p className={errorClasses}>{errors.serviceInterest}</p>}
              </div>
              <div className="flex flex-col items-start flex-1 w-full">
                <div className="w-full">
                  <p className="text-[rgba(255,255,255,0.6)] text-sm mb-3 font-inter">Preferred Contact Method *</p>
                  <div className="flex gap-6">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-[#247FBF] focus:ring-[#247FBF]"
                      />
                      <span className="text-white font-inter text-base">Email</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-[#247FBF] focus:ring-[#247FBF]"
                      />
                      <span className="text-white font-inter text-base">Phone</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col items-start w-full">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your care needs or ask any questions... *"
                rows={8}
                className="w-full px-[15px] py-[15px] rounded-lg bg-[rgba(219,219,219,0.08)] text-white placeholder-[rgba(255,255,255,0.6)] font-inter text-base font-normal leading-[1.4] border-none outline-none focus:ring-2 focus:ring-[#247FBF] transition-all resize-none"
                required
              />
              {errors.message && <p className={errorClasses}>{errors.message}</p>}
              <p className="text-[rgba(255,255,255,0.4)] text-xs mt-1 font-inter">
                Minimum 20 characters ({formData.message.length}/20)
              </p>
            </div>

            {/* Consent Checkbox */}
            <div className="flex flex-col items-start w-full">
              <label className="flex items-start cursor-pointer gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 text-[#247FBF] focus:ring-[#247FBF] rounded"
                  required
                />
                <span className="text-[rgba(255,255,255,0.8)] text-sm font-inter leading-relaxed">
                  I consent to Quality Care collecting and using my personal information to respond to my inquiry. 
                  I understand my information will be handled in accordance with privacy laws and will not be 
                  shared with third parties without my consent. *
                </span>
              </label>
              {errors.consent && <p className={errorClasses}>{errors.consent}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-start w-full pt-2">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-[15px] py-[14.5px] justify-center items-center rounded-lg transition-all ${
                  isSubmitting 
                    ? 'bg-[#1e6a9f] cursor-not-allowed' 
                    : 'bg-[#247FBF] hover:bg-[#1e6a9f]'
                }`}
              >
                <span className="text-[#121212] text-center font-inter text-base font-bold leading-[1.4]">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </motion.button>
            </div>

            {/* Required Fields Note */}
            <div className="w-full pt-2">
              <p className="text-[rgba(255,255,255,0.4)] text-xs text-center font-inter">
                * Required fields
              </p>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export type { FormData, ContactFormProps };