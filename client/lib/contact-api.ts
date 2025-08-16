import type { FormData } from '../components/ContactForm';

interface EmailTemplate {
  to: string;
  subject: string;
  html: string;
  text: string;
}

interface SubmissionResponse {
  success: boolean;
  message: string;
  id?: string;
}

/**
 * Contact form submission handler
 * Handles form validation, email sending, and response formatting
 */
export class ContactFormAPI {
  private static readonly ADMIN_EMAIL = 'contact@qualitycareproviders.com.au';
  private static readonly FROM_EMAIL = 'noreply@qualitycareproviders.com.au';

  /**
   * Submit contact form data
   */
  static async submitForm(formData: FormData): Promise<SubmissionResponse> {
    try {
      // Server-side validation
      const validationResult = this.validateFormData(formData);
      if (!validationResult.isValid) {
        return {
          success: false,
          message: validationResult.error || 'Form validation failed'
        };
      }

      // Generate email templates
      const adminEmail = this.generateAdminEmail(formData);
      const autoReplyEmail = this.generateAutoReplyEmail(formData);

      // Send emails (in a real implementation, this would use a service like SendGrid, AWS SES, etc.)
      const emailResults = await Promise.allSettled([
        this.sendEmail(adminEmail),
        this.sendEmail(autoReplyEmail)
      ]);

      // Check if admin email was sent successfully
      const adminEmailSent = emailResults[0].status === 'fulfilled';
      
      if (!adminEmailSent) {
        console.error('Failed to send admin notification email');
        return {
          success: false,
          message: 'Failed to send your message. Please try again or contact us directly.'
        };
      }

      // Log submission for analytics/tracking
      this.logSubmission(formData);

      return {
        success: true,
        message: 'Thank you for your message! We will respond within a few hours.',
        id: this.generateSubmissionId()
      };

    } catch (error) {
      console.error('Contact form submission error:', error);
      return {
        success: false,
        message: 'An unexpected error occurred. Please try again or contact us directly.'
      };
    }
  }

  /**
   * Validate form data on the server side
   */
  private static validateFormData(formData: FormData): { isValid: boolean; error?: string } {
    // Required fields check
    if (!formData.fullName?.trim()) {
      return { isValid: false, error: 'Name is required' };
    }

    if (!formData.email?.trim()) {
      return { isValid: false, error: 'Email is required' };
    }

    if (!formData.phone?.trim()) {
      return { isValid: false, error: 'Phone number is required' };
    }

    if (!formData.serviceInterest) {
      return { isValid: false, error: 'Service interest is required' };
    }

    if (!formData.message?.trim()) {
      return { isValid: false, error: 'Message is required' };
    }

    if (!formData.consent) {
      return { isValid: false, error: 'Consent is required' };
    }

    // Format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { isValid: false, error: 'Invalid email format' };
    }

    const phoneRegex = /^(\+61|0)[2-9]\d{8}$/;
    const cleanPhone = formData.phone.replace(/\s|-/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return { isValid: false, error: 'Invalid Australian phone number' };
    }

    if (formData.message.trim().length < 20) {
      return { isValid: false, error: 'Message must be at least 20 characters' };
    }

    return { isValid: true };
  }

  /**
   * Generate email template for admin notification
   */
  private static generateAdminEmail(formData: FormData): EmailTemplate {
    const preferredContactIcon = formData.preferredContact === 'email' ? '📧' : '📞';
    
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #247FBF; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #247FBF; }
        .value { margin-top: 5px; }
        .footer { background: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        .urgent { background: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; border-radius: 5px; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🏥 New Contact Form Submission</h1>
        <p>Quality Care NDIS Website</p>
      </div>
      
      <div class="content">
        <div class="urgent">
          <strong>⚡ Priority: ${formData.serviceInterest === 'General Inquiry' ? 'Standard' : 'Service Request'}</strong><br>
          Preferred Contact: ${preferredContactIcon} ${formData.preferredContact.toUpperCase()}
        </div>
        
        <div class="field">
          <div class="label">👤 Full Name:</div>
          <div class="value">${formData.fullName}</div>
        </div>
        
        <div class="field">
          <div class="label">📧 Email:</div>
          <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
        </div>
        
        <div class="field">
          <div class="label">📞 Phone:</div>
          <div class="value"><a href="tel:${formData.phone}">${formData.phone}</a></div>
        </div>
        
        ${formData.ndisNumber ? `
        <div class="field">
          <div class="label">🆔 NDIS Number:</div>
          <div class="value">${formData.ndisNumber}</div>
        </div>
        ` : ''}
        
        <div class="field">
          <div class="label">🏥 Service Interest:</div>
          <div class="value"><strong>${formData.serviceInterest}</strong></div>
        </div>
        
        <div class="field">
          <div class="label">💬 Message:</div>
          <div class="value" style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${formData.message}</div>
        </div>
        
        <div class="field">
          <div class="label">⏰ Submission Time:</div>
          <div class="value">${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })} (AEDT)</div>
        </div>
      </div>
      
      <div class="footer">
        <p>This message was sent via the Quality Care website contact form.</p>
        <p>Please respond within 4 hours during business hours.</p>
      </div>
    </body>
    </html>
    `;

    const text = `
NEW CONTACT FORM SUBMISSION - Quality Care NDIS

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.ndisNumber ? `NDIS Number: ${formData.ndisNumber}` : ''}
Service Interest: ${formData.serviceInterest}
Preferred Contact: ${formData.preferredContact}

Message:
${formData.message}

Submitted: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })} (AEDT)
    `;

    return {
      to: this.ADMIN_EMAIL,
      subject: `🏥 New ${formData.serviceInterest} Inquiry - ${formData.fullName}`,
      html,
      text
    };
  }

  /**
   * Generate auto-reply email template for user
   */
  private static generateAutoReplyEmail(formData: FormData): EmailTemplate {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #247FBF; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .highlight { background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .footer { background: #f5f5f5; padding: 15px; text-align: center; }
        .contact-info { background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Thank You for Contacting Quality Care</h1>
        <p>Your message has been received</p>
      </div>
      
      <div class="content">
        <p>Dear ${formData.fullName},</p>
        
        <div class="highlight">
          <strong>✅ Your inquiry has been successfully submitted!</strong><br>
          We typically respond within <strong>2-4 hours</strong> during business hours.
        </div>
        
        <p>Here's a summary of your submission:</p>
        <ul>
          <li><strong>Service Interest:</strong> ${formData.serviceInterest}</li>
          <li><strong>Preferred Contact:</strong> ${formData.preferredContact === 'email' ? 'Email' : 'Phone'}</li>
          <li><strong>Submission Time:</strong> ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}</li>
        </ul>
        
        <div class="contact-info">
          <h3>Need immediate assistance?</h3>
          <p><strong>📞 Phone:</strong> <a href="tel:+61234567890">+61 2 3456 7890</a></p>
          <p><strong>📧 Email:</strong> <a href="mailto:${this.ADMIN_EMAIL}">${this.ADMIN_EMAIL}</a></p>
          <p><strong>🕒 Business Hours:</strong> Monday-Friday 8:00 AM - 6:00 PM (AEDT)</p>
        </div>
        
        <p>At Quality Care, we're committed to providing compassionate, personalized support that empowers individuals with disabilities to live with dignity and independence. We look forward to discussing how we can support your needs.</p>
        
        <p>Best regards,<br>
        <strong>The Quality Care Team</strong></p>
      </div>
      
      <div class="footer">
        <p>This is an automated response. Please do not reply directly to this email.</p>
        <p>Quality Care Providers | NDIS Services Australia</p>
        <p><a href="https://qualitycareproviders.com.au">qualitycareproviders.com.au</a></p>
      </div>
    </body>
    </html>
    `;

    const text = `
Thank You for Contacting Quality Care

Dear ${formData.fullName},

Your inquiry has been successfully submitted! We typically respond within 2-4 hours during business hours.

Submission Summary:
- Service Interest: ${formData.serviceInterest}
- Preferred Contact: ${formData.preferredContact}
- Submission Time: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}

Need immediate assistance?
Phone: +61 2 3456 7890
Email: ${this.ADMIN_EMAIL}
Business Hours: Monday-Friday 8:00 AM - 6:00 PM (AEDT)

Best regards,
The Quality Care Team

---
This is an automated response. Please do not reply directly to this email.
Quality Care Providers | NDIS Services Australia
qualitycareproviders.com.au
    `;

    return {
      to: formData.email,
      subject: '✅ Thank you for contacting Quality Care - We\'ll respond soon!',
      html,
      text
    };
  }

  /**
   * Mock email sending function
   * In production, this would integrate with SendGrid, AWS SES, etc.
   */
  private static async sendEmail(emailTemplate: EmailTemplate): Promise<boolean> {
    try {
      // Mock email sending - replace with actual email service
      console.log(`📧 Sending email to: ${emailTemplate.to}`);
      console.log(`📧 Subject: ${emailTemplate.subject}`);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Mock successful send
      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  }

  /**
   * Log form submission for analytics
   */
  private static logSubmission(formData: FormData): void {
    const logData = {
      timestamp: new Date().toISOString(),
      serviceInterest: formData.serviceInterest,
      preferredContact: formData.preferredContact,
      hasNdisNumber: !!formData.ndisNumber,
      messageLength: formData.message.length,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server'
    };
    
    console.log('📊 Contact form submission logged:', logData);
    
    // In production, send to analytics service
    // analytics.track('contact_form_submitted', logData);
  }

  /**
   * Generate unique submission ID
   */
  private static generateSubmissionId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `QC-${timestamp}-${random}`.toUpperCase();
  }
}

/**
 * Client-side form submission helper
 */
export async function submitContactForm(formData: FormData): Promise<SubmissionResponse> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    };
  }
}

export type { SubmissionResponse, EmailTemplate };