import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    console.warn('EmailJS public key not found in environment variables');
    return;
  }

  try {
    emailjs.init(publicKey);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};

interface SendEmailParams {
  templateId: string;
  templateParams: Record<string, any>;
}

interface ContactFormData {
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  subject: string;
  message: string;
  contact_preference?: string;
}

interface QuoteFormData {
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  industry: string;
  project_type: string;
  energy_solution: string;
  location: string;
  property_type: string;
  estimated_energy_need: string;
  budget_range: string;
  timeline: string;
  description: string;
}

interface JobApplicationData {
  fullName: string;
  email: string;
  phone: string;
  coverletter: string;
  experience: string;
  linkedIn?: string;
  portfolio?: string;
}

// Generic function to send emails
export const sendEmail = async (params: SendEmailParams): Promise<boolean> => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !publicKey) {
      console.error('EmailJS configuration missing: serviceId or publicKey not found');
      throw new Error('Email service is not properly configured');
    }

    const response = await emailjs.send(
      serviceId,
      params.templateId,
      params.templateParams
    );

    if (response.status === 200) {
      console.log('Email sent successfully', response);
      return true;
    }

    console.warn('Email sent with unexpected status:', response.status);
    return false;
  } catch (error) {
    console.error('Failed to send email:', error);
    // Log more details in production for debugging
    if (import.meta.env.PROD) {
      console.error('Email error details:', {
        templateId: params.templateId,
        hasServiceId: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
        hasPublicKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        error: error instanceof Error ? error.message : String(error)
      });
    }
    return false;
  }
};

// Send contact form submission email
export const sendContactFormEmail = async (
  formData: ContactFormData,
  recipientEmail: string
): Promise<boolean> => {
  const templateParams = {
    to_email: recipientEmail,
    from_name: formData.full_name,
    from_email: formData.email,
    phone: formData.phone,
    company_name: formData.company_name,
    subject: formData.subject,
    message: formData.message,
    contact_preference: formData.contact_preference || 'email',
  };

  return sendEmail({
    templateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'contact_template',
    templateParams,
  });
};

// Send quote request email
export const sendQuoteFormEmail = async (
  formData: QuoteFormData,
  recipientEmail: string
): Promise<boolean> => {
  const templateParams = {
    to_email: recipientEmail,
    from_name: formData.full_name,
    from_email: formData.email,
    phone: formData.phone,
    company_name: formData.company_name,
    industry: formData.industry,
    project_type: formData.project_type,
    energy_solution: formData.energy_solution,
    location: formData.location,
    property_type: formData.property_type,
    estimated_energy_need: formData.estimated_energy_need,
    budget_range: formData.budget_range,
    timeline: formData.timeline,
    description: formData.description,
  };

  return sendEmail({
    templateId: import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID || 'quote_template',
    templateParams,
  });
};

// Send job application email
export const sendJobApplicationEmail = async (
  formData: JobApplicationData,
  recipientEmail: string
): Promise<boolean> => {
  const templateParams = {
    to_email: recipientEmail,
    applicant_name: formData.fullName,
    applicant_email: formData.email,
    applicant_phone: formData.phone,
    cover_letter: formData.coverletter,
    experience: formData.experience,
    linkedin: formData.linkedIn || 'Not provided',
    portfolio: formData.portfolio || 'Not provided',
  };

  return sendEmail({
    templateId: import.meta.env.VITE_EMAILJS_JOB_TEMPLATE_ID || 'job_template',
    templateParams,
  });
};
