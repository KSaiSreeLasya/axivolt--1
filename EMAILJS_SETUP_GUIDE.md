# EmailJS Integration Setup Guide

This guide will help you set up EmailJS to automatically send form submission emails for the contact, quote, and job application forms.

## Prerequisites

- EmailJS account (free tier available at https://www.emailjs.com)
- Your email service configured (Gmail, Outlook, custom SMTP, etc.)

## Step 1: Create EmailJS Account

1. Visit [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Configure Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add Service** and choose your email provider (Gmail, Outlook, etc.)
3. Follow the setup wizard to connect your email account
4. Save the **Service ID** for later use

Example Service ID: `service_abc123def456`

## Step 3: Create Email Templates

You need to create three email templates for the different forms:

### Template 1: Contact Form Emails

1. Go to **Email Templates** section
2. Click **Create New Template**
3. Name it: `contact_template`
4. Configure the template with the following variables:

**Email to Admin:**
```
Subject: New Contact Form Submission from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company_name}}
Subject: {{subject}}
Contact Preference: {{contact_preference}}

Message:
{{message}}
```

**Email to User (Confirmation):**
```
Subject: We received your message - {{from_name}}

Dear {{from_name}},

Thank you for contacting us! We've received your message and will get back to you shortly.

Your Message:
Subject: {{subject}}
Message: {{message}}

We'll contact you via {{contact_preference}}.

Best regards,
AXIVOLT Team
```

### Template 2: Quote Request Emails

1. Create another template named: `quote_template`
2. Configure with the following variables:

**Email to Admin:**
```
Subject: New Quote Request from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company_name}}
Industry: {{industry}}
Project Type: {{project_type}}
Energy Solution: {{energy_solution}}
Location: {{location}}
Property Type: {{property_type}}
Estimated Energy Need: {{estimated_energy_need}}
Budget Range: {{budget_range}}
Timeline: {{timeline}}

Project Description:
{{description}}
```

**Email to User (Confirmation):**
```
Subject: Quote Request Received - {{from_name}}

Dear {{from_name}},

Thank you for requesting a quote! We've received your inquiry and our team will prepare a personalized quote for you.

Your Request Details:
- Industry: {{industry}}
- Project Type: {{project_type}}
- Budget Range: {{budget_range}}
- Timeline: {{timeline}}

We'll contact you shortly with your customized quote.

Best regards,
AXIVOLT Team
```

### Template 3: Job Application Emails

1. Create another template named: `job_template`
2. Configure with the following variables:

**Email to Admin:**
```
Subject: New Job Application from {{applicant_name}}

Name: {{applicant_name}}
Email: {{applicant_email}}
Phone: {{applicant_phone}}
Experience: {{experience}} years
LinkedIn: {{linkedin}}
Portfolio: {{portfolio}}

Cover Letter:
{{cover_letter}}
```

**Email to Applicant (Confirmation):**
```
Subject: Job Application Received - {{applicant_name}}

Dear {{applicant_name}},

Thank you for applying! We've received your application and will review it carefully.

We appreciate your interest in joining the AXIVOLT team and will get back to you within 5-7 business days.

Best regards,
AXIVOLT Recruitment Team
```

## Step 4: Get Your Credentials

1. Go to **Account** section in EmailJS dashboard
2. Copy your **Public Key** (starts with `key_` or similar)
3. Note your **Service ID** from Step 2

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (same level as `package.json`)
2. Add the following variables:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_from_step_4
VITE_EMAILJS_SERVICE_ID=your_service_id_from_step_2
VITE_EMAILJS_CONTACT_TEMPLATE_ID=contact_template
VITE_EMAILJS_QUOTE_TEMPLATE_ID=quote_template
VITE_EMAILJS_JOB_TEMPLATE_ID=job_template
VITE_ADMIN_EMAIL=your_email@axivolt.in
```

## Step 6: Test the Integration

1. Start your development server: `pnpm dev`
2. Navigate to the Contact form and submit a test message
3. Check your admin email and the test email address you used
4. Verify that both emails were received

## Troubleshooting

### Emails not sending?

1. **Check Service ID**: Verify that your EmailJS Service ID is correct
2. **Check Public Key**: Ensure the public key is properly set in environment variables
3. **Check Template IDs**: Make sure template names match exactly: `contact_template`, `quote_template`, `job_template`
4. **Check EmailJS Dashboard**: Verify that the email service is active and connected
5. **Console Errors**: Check browser console (F12) for any error messages

### Emails going to spam?

1. Add your domain to the "From Name" in templates
2. Make sure your email service is properly verified
3. Consider using a custom domain email instead of Gmail

## Email Flow

### Contact Form
1. User submits contact form
2. Data saved to Supabase database
3. Email sent to admin at `VITE_ADMIN_EMAIL`
4. Confirmation email sent to user's email

### Quote Form
1. User submits quote request
2. Data saved to Supabase database
3. Email sent to admin with quote details
4. Confirmation email sent to user

### Job Application
1. User submits job application
2. Resume uploaded to Supabase storage
3. Data saved to Supabase database
4. Email sent to admin with application details
5. Confirmation email sent to applicant

## Customizing Email Templates

You can customize the email templates in the EmailJS dashboard:

1. Go to **Email Templates**
2. Click on the template you want to edit
3. Modify the subject and content as needed
4. Use `{{variable_name}}` syntax for dynamic fields
5. Click **Save**

## Important Notes

- The integration preserves existing Supabase functionality - all forms still save to the database
- Emails are sent asynchronously, so form submission won't be delayed
- Check EmailJS pricing for your use case (free tier includes 200 emails/month)
- Keep your Public Key private - never commit it to public repositories

## Support

For more help with EmailJS:
- EmailJS Docs: https://www.emailjs.com/docs/
- Email Template Variables: https://www.emailjs.com/docs/user-guide/dynamic-content/
