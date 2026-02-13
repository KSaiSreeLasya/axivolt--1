import emailjs from '@emailjs/browser';

// Diagnostic function to check EmailJS setup
export const checkEmailJSStatus = () => {
  const diagnostics = {
    publicKeyConfigured: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    serviceIdConfigured: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
    contactTemplateConfigured: !!import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
    quoteTemplateConfigured: !!import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID,
    jobTemplateConfigured: !!import.meta.env.VITE_EMAILJS_JOB_TEMPLATE_ID,
    adminEmailConfigured: !!import.meta.env.VITE_ADMIN_EMAIL,
    allRequired: !!(
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY &&
      import.meta.env.VITE_EMAILJS_SERVICE_ID
    ),
    environment: import.meta.env.PROD ? 'production' : 'development',
  };

  console.log('EmailJS Diagnostic Report:', diagnostics);

  if (!diagnostics.allRequired) {
    console.error('EmailJS Configuration Missing:', {
      missingPublicKey: !diagnostics.publicKeyConfigured,
      missingServiceId: !diagnostics.serviceIdConfigured,
    });
  }

  return diagnostics;
};

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!publicKey) {
    console.error('CRITICAL: EmailJS public key not found in environment variables (VITE_EMAILJS_PUBLIC_KEY)');
    checkEmailJSStatus();
    return;
  }

  try {
    emailjs.init(publicKey);
    console.log('EmailJS initialized successfully with public key:', publicKey.substring(0, 8) + '...');
    checkEmailJSStatus();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Failed to initialize EmailJS:', errorMessage);
    if (error instanceof Error) {
      console.error('Stack:', error.stack);
    }
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

    // Log configuration check
    console.log('EmailJS Configuration Check:', {
      hasServiceId: !!serviceId,
      serviceId: serviceId ? `${serviceId.substring(0, 8)}...` : 'MISSING',
      hasPublicKey: !!publicKey,
      publicKey: publicKey ? `${publicKey.substring(0, 8)}...` : 'MISSING',
      templateId: params.templateId,
    });

    if (!serviceId || !publicKey) {
      const configError = `Email service is not properly configured. ServiceID: ${!serviceId ? 'MISSING' : 'OK'}, PublicKey: ${!publicKey ? 'MISSING' : 'OK'}`;
      console.error(configError);
      throw new Error(configError);
    }

    // Validate template parameters - check for required fields
    const toEmail = params.templateParams.to_email;
    if (!toEmail || !toEmail.trim()) {
      const paramError = `Cannot send email: recipient email (to_email) is empty. Parameters: ${JSON.stringify(params.templateParams)}`;
      console.error(paramError);
      throw new Error(paramError);
    }

    console.log('Sending email with template:', params.templateId);
    console.log('Email parameters keys:', Object.keys(params.templateParams));
    console.log('Target recipient:', toEmail);

    const response = await emailjs.send(
      serviceId,
      params.templateId,
      params.templateParams
    );

    console.log('EmailJS Response:', {
      status: response.status,
      text: response.text,
    });

    // EmailJS returns status 200 on success
    if (response.status === 200) {
      console.log('Email sent successfully to:', toEmail);
      return true;
    }

    console.warn('Email sent with unexpected response:', {
      status: response.status,
      text: response.text,
    });
    return false;
  } catch (error) {
    // Properly extract error information
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorDetails = error instanceof Error ? error.stack : JSON.stringify(error);

    console.error('Failed to send email:', errorMessage);
    console.error('Error Details:', errorDetails);
    console.error('Email Debug Info:', {
      templateId: params.templateId,
      hasServiceId: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
      hasPublicKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      recipientEmail: params.templateParams.to_email || 'NOT SET',
      parameterKeys: Object.keys(params.templateParams),
      errorMessage,
    });

    // Log even more details in production
    if (import.meta.env.PROD) {
      console.error('Production Error Details:', {
        timestamp: new Date().toISOString(),
        templateId: params.templateId,
        serviceIdLength: import.meta.env.VITE_EMAILJS_SERVICE_ID?.length || 0,
        publicKeyLength: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.length || 0,
        errorType: error instanceof Error ? error.constructor.name : typeof error,
        errorMessage,
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
  // Validate recipient email
  if (!recipientEmail || !recipientEmail.trim()) {
    console.error('Cannot send email: recipient email is empty');
    return false;
  }

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

  console.log('Sending contact email to:', recipientEmail);
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
  // Validate recipient email
  if (!recipientEmail || !recipientEmail.trim()) {
    console.error('Cannot send email: recipient email is empty');
    return false;
  }

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

  console.log('Sending quote email to:', recipientEmail);
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
  // Validate recipient email
  if (!recipientEmail || !recipientEmail.trim()) {
    console.error('Cannot send email: recipient email is empty');
    return false;
  }

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

  console.log('Sending job application email to:', recipientEmail);
  return sendEmail({
    templateId: import.meta.env.VITE_EMAILJS_JOB_TEMPLATE_ID || 'job_template',
    templateParams,
  });
};

// Test email function for debugging
export const sendTestEmail = async (): Promise<boolean> => {
  console.log('Sending test email...');
  const testEmail = import.meta.env.VITE_ADMIN_EMAIL || 'test@example.com';

  const testParams = {
    to_email: testEmail,
    from_name: 'Test User',
    from_email: 'test@axivolt.in',
    phone: '+91-0000000000',
    company_name: 'Test Company',
    subject: 'Test Email',
    message: 'This is a test email from AXIVOLT EmailJS service to verify configuration.',
  };

  return sendEmail({
    templateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'contact_template',
    templateParams: testParams,
  });
};

// Make test function available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).__sendTestEmail = sendTestEmail;
  (window as any).__emailStatus = checkEmailJSStatus;
  console.log('Email test tools available: window.__sendTestEmail(), window.__emailStatus()');
}
