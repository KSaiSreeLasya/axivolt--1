# EmailJS Integration Guide for AXIVOLT

## Overview
This guide explains how to integrate EmailJS with your AXIVOLT website to send form submissions via email.

## Forms That Will Send Emails
1. **Contact Form** (`client/pages/ContactUs.tsx`) - Sends contact inquiries
2. **Quote Request Form** (`client/pages/GetQuote.tsx`) - Sends quote requests
3. **Job Application Form** (`client/pages/Careers.tsx`) - Sends job applications

---

## STEP 1: Install EmailJS Package

Run this command in your project terminal:

```bash
npm install @emailjs/browser
# OR if using pnpm
pnpm add @emailjs/browser
# OR if using yarn
yarn add @emailjs/browser
```

---

## STEP 2: Create EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up Free"** button
3. Create your account (you can use Gmail/GitHub for quick signup)
4. Verify your email address

---

## STEP 3: Get Your EmailJS Credentials

After logging in to EmailJS:

### Get Service ID
1. Go to **Email Services** (left sidebar)
2. Click **"Connect New Service"**
3. Select **Gmail** (or your preferred email provider)
4. Follow the authentication steps
5. Once connected, copy your **Service ID** (format: `service_xxxxx`)

### Get Template IDs
You need to create email templates for each form:

#### For Contact Form Template:
1. Go to **Email Templates** (left sidebar)
2. Click **"Create New Template"**
3. Set Template Name: `contact_form_template`
4. Copy the **Template ID** (format: `template_xxxxx`)

#### For Quote Form Template:
1. Create another template with name: `quote_request_template`
2. Copy the **Template ID**

#### For Job Application Template:
1. Create another template with name: `job_application_template`
2. Copy the **Template ID**

### Get Public Key
1. Go to **Account** (left sidebar)
2. Find your **Public Key** (format: `xxxxxxxxxxxxxxxxxxxxxxxx`)
3. Copy it

---

## STEP 4: Add EmailJS Credentials to Environment Variables

Create or update your `.env.local` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_QUOTE_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_JOB_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
```

Replace the `xxxxx` values with your actual credentials from EmailJS.

---

## STEP 5: Create EmailJS Utility File

The file `client/lib/emailjs.ts` has been created and provides utility functions for:
- Initializing EmailJS
- Sending contact form emails
- Sending quote request emails
- Sending job application emails

---

## STEP 6: Update Form Components

### Contact Form Update
The `client/components/ContactForm.tsx` now includes:
- EmailJS integration
- Sends email when form is submitted
- Email includes: Name, Email, Phone, Company, Subject, Message, Preference
- Shows success message with Swal alerts

### Quote Request Form Update
The `client/pages/GetQuote.tsx` now includes:
- EmailJS integration
- Sends email when quote form is submitted
- Email includes: Name, WhatsApp, Pin Code, Bill Range, Capacity, Category
- Shows success message with Swal alerts

### Job Application Form Update
The `client/components/JobApplicationForm.tsx` now includes:
- EmailJS integration
- Sends email when application is submitted
- Email includes: Name, Email, Phone, Resume, Cover Letter, Experience, LinkedIn, Portfolio
- Shows success message with Swal alerts

---

## STEP 7: Email Template Setup in EmailJS

For each template, set the email content structure.

### Contact Form Email Template Variables:
```
{{full_name}}
{{email}}
{{phone}}
{{company_name}}
{{subject}}
{{message}}
{{contact_preference}}
{{form_name}} (will be "Contact Form")
{{submission_date}}
```

### Quote Request Email Template Variables:
```
{{full_name}}
{{whatsapp}}
{{pin_code}}
{{bill_range}}
{{capacity}}
{{category}}
{{form_name}} (will be "Quote Request")
{{submission_date}}
```

### Job Application Email Template Variables:
```
{{full_name}}
{{email}}
{{phone}}
{{job_title}}
{{experience}}
{{linkedin}}
{{portfolio}}
{{coverletter}}
{{form_name}} (will be "Job Application")
{{submission_date}}
```

---

## STEP 8: Test the Setup

1. Start your dev server: `pnpm dev`
2. Navigate to `/contact` page
3. Fill out the contact form completely
4. Click "Send Message"
5. Check your email inbox for the received email

Repeat for Quote and Job Application forms.

---

## Email Flow Diagram

```
User Fills Form
        ↓
Form Validation
        ↓
EmailJS Initialized
        ↓
Email Template Selected (based on form type)
        ↓
Form Data Converted to Email Variables
        ↓
Email Sent via SMTP
        ↓
Success/Error Alert Shown
        ↓
Form Data Also Saved to Supabase (existing functionality)
```

---

## Troubleshooting

### Issue: "Service ID not found"
- Verify you're using the correct Service ID from EmailJS Account
- Make sure it's in the `.env.local` file, not `.env`
- Restart the dev server after adding env variables

### Issue: "Template not found"
- Verify Template IDs are correct in `.env.local`
- Check that templates are published in EmailJS dashboard
- Ensure template names match exactly

### Issue: "Public Key invalid"
- Copy the exact Public Key from EmailJS Account page
- No spaces or extra characters

### Issue: Emails not receiving
- Check EmailJS service status (Email Services page)
- Verify email address in template configuration
- Check Gmail "Less Secure Apps" is enabled if using Gmail
- Check spam/junk folder

### Issue: Environment variables not loading
- Delete `node_modules` and run `pnpm install` again
- Restart dev server completely
- Verify `.env.local` syntax is correct

---

## Best Practices

1. **Always validate form data** before sending (already done)
2. **Use environment variables** for sensitive data (Service ID, Public Key, Template IDs)
3. **Test templates** before deploying to production
4. **Monitor EmailJS usage** to stay within free tier limits
5. **Set up email forwarding** in EmailJS to receive emails on your address
6. **Keep sensitive data** in `.env.local` and add it to `.gitignore`

---

## EmailJS Pricing

- **Free Plan**: 200 emails/month
- **Paid Plans**: Starting from $2.99/month for 5,000 emails

Upgrade as needed based on your form submission volume.

---

## Summary of Changes Made

### Files Created:
- `client/lib/emailjs.ts` - EmailJS utility functions

### Files Modified:
- `client/components/ContactForm.tsx` - Added EmailJS integration
- `client/pages/GetQuote.tsx` - Added EmailJS integration
- `client/components/JobApplicationForm.tsx` - Added EmailJS integration

### Environment Variables Required:
```
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_CONTACT_TEMPLATE_ID
VITE_EMAILJS_QUOTE_TEMPLATE_ID
VITE_EMAILJS_JOB_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
```

---

## Next Steps

1. Create EmailJS account and get credentials
2. Add credentials to `.env.local`
3. Create email templates in EmailJS dashboard
4. Test each form submission
5. Monitor email delivery in EmailJS dashboard
6. Deploy to production when ready

For more help, visit: https://www.emailjs.com/docs/
