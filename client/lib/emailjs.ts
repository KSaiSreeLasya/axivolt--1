import emailjs from "@emailjs/browser";

// Initialize EmailJS with your Public Key
export const initializeEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    console.warn(
      "EmailJS Public Key not found. Please add VITE_EMAILJS_PUBLIC_KEY to .env.local",
    );
    return;
  }
  emailjs.init(publicKey);
};

// Send Contact Form Email
export const sendContactFormEmail = async (
  contactData: {
    full_name: string;
    email: string;
    phone: string;
    company_name: string;
    subject: string;
    message: string;
    contact_preference: string;
  },
) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error(
        "EmailJS Service ID or Template ID not configured. Check .env.local",
      );
      return false;
    }

    const templateParams = {
      form_name: "Contact Form",
      full_name: contactData.full_name,
      email: contactData.email,
      phone: contactData.phone || "Not provided",
      company_name: contactData.company_name || "Not provided",
      subject: contactData.subject,
      message: contactData.message,
      contact_preference: contactData.contact_preference,
      submission_date: new Date().toLocaleString(),
      to_email: contactData.email, // Recipient email
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
    );

    console.log("Contact email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return false;
  }
};

// Send Quote Request Email
export const sendQuoteRequestEmail = async (
  quoteData: {
    fullName: string;
    whatsapp: string;
    pinCode: string;
    billRange: string;
    capacity: string;
    category: string;
  },
) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error(
        "EmailJS Service ID or Template ID not configured. Check .env.local",
      );
      return false;
    }

    const templateParams = {
      form_name: "Quote Request",
      full_name: quoteData.fullName,
      whatsapp: quoteData.whatsapp,
      pin_code: quoteData.pinCode,
      bill_range: quoteData.billRange,
      capacity: quoteData.capacity,
      category: quoteData.category,
      submission_date: new Date().toLocaleString(),
      to_email: "contact@axivolt.in", // Your company email
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
    );

    console.log("Quote email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send quote email:", error);
    return false;
  }
};

// Send Job Application Email
export const sendJobApplicationEmail = async (
  applicationData: {
    fullName: string;
    email: string;
    phone: string;
    jobTitle: string;
    experience: string;
    linkedIn: string;
    portfolio: string;
    coverletter: string;
  },
) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_JOB_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      console.error(
        "EmailJS Service ID or Template ID not configured. Check .env.local",
      );
      return false;
    }

    const templateParams = {
      form_name: "Job Application",
      full_name: applicationData.fullName,
      email: applicationData.email,
      phone: applicationData.phone,
      job_title: applicationData.jobTitle,
      experience: applicationData.experience,
      linkedin: applicationData.linkedIn || "Not provided",
      portfolio: applicationData.portfolio || "Not provided",
      coverletter: applicationData.coverletter,
      submission_date: new Date().toLocaleString(),
      to_email: "careers@axivolt.in", // Your careers email
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
    );

    console.log("Job application email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send job application email:", error);
    return false;
  }
};

// Generic email sender (can be used for any form)
export const sendGenericEmail = async (
  templateId: string,
  templateParams: Record<string, any>,
) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;

    if (!serviceId || !templateId) {
      console.error(
        "EmailJS Service ID or Template ID not configured. Check .env.local",
      );
      return false;
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
    );

    console.log("Email sent successfully:", response);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};
