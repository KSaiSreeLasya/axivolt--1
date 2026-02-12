# EmailJS Setup Checklist (5 Simple Steps)

## What's Already Done
✅ EmailJS package installed (`@emailjs/browser`)
✅ Email utility file created (`client/lib/emailjs.ts`)
✅ ContactForm updated with EmailJS
✅ GetQuote form updated with EmailJS
✅ JobApplicationForm updated with EmailJS

---

## What YOU Need to Do (5 Steps)

### STEP 1: Create EmailJS Account
- [ ] Go to https://www.emailjs.com/
- [ ] Click "Sign Up Free"
- [ ] Complete signup (use Gmail/GitHub for quick signup)
- [ ] Verify your email

### STEP 2: Connect Email Service
- [ ] Log in to EmailJS Dashboard
- [ ] Click "Email Services" in left sidebar
- [ ] Click "Connect New Service"
- [ ] Select "Gmail" (or your email provider)
- [ ] Follow the authentication steps
- [ ] **Copy your Service ID** (format: `service_xxxxx`)
- [ ] Save it somewhere temporary

### STEP 3: Create Email Templates
Create 3 templates (one for each form):

**Template 1 - Contact Form**
- [ ] Go to "Email Templates"
- [ ] Click "Create New Template"
- [ ] Set name: `contact_form_template`
- [ ] **Copy Template ID** (format: `template_xxxxx`)

**Template 2 - Quote Request**
- [ ] Click "Create New Template" again
- [ ] Set name: `quote_request_template`
- [ ] **Copy Template ID**

**Template 3 - Job Application**
- [ ] Click "Create New Template" again
- [ ] Set name: `job_application_template`
- [ ] **Copy Template ID**

### STEP 4: Get Your Public Key
- [ ] Go to "Account" in left sidebar
- [ ] Find "Public Key" section
- [ ] **Copy your Public Key** (long alphanumeric string)

### STEP 5: Add Credentials to Project
- [ ] Open `.env.local` file in your project root (create if doesn't exist)
- [ ] Add these lines:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_QUOTE_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_JOB_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxx
```

- [ ] Replace the `xxxxx` values with your actual credentials
- [ ] Save the file
- [ ] Restart your dev server

---

## Test It Works

1. [ ] Start dev server: `pnpm dev`
2. [ ] Go to `/contact` page
3. [ ] Fill out the contact form
4. [ ] Click "Send Message"
5. [ ] Check your email inbox
6. [ ] Verify you received the email

---

## Email Template Variables Reference

When creating templates in EmailJS, use these variables:

### Contact Form Template
```
Form Type: {{form_name}}
Submitted: {{submission_date}}
---
Name: {{full_name}}
Email: {{email}}
Phone: {{phone}}
Company: {{company_name}}
Subject: {{subject}}
Message: {{message}}
Preferred Contact: {{contact_preference}}
```

### Quote Request Template
```
Form Type: {{form_name}}
Submitted: {{submission_date}}
---
Name: {{full_name}}
WhatsApp: {{whatsapp}}
Pin Code: {{pin_code}}
Bill Range: {{bill_range}}
Capacity: {{capacity}} kW
Category: {{category}}
```

### Job Application Template
```
Form Type: {{form_name}}
Submitted: {{submission_date}}
---
Name: {{full_name}}
Email: {{email}}
Phone: {{phone}}
Position: {{job_title}}
Experience: {{experience}}
LinkedIn: {{linkedin}}
Portfolio: {{portfolio}}
Cover Letter:
{{coverletter}}
```

---

## Common Mistakes & Solutions

### Issue: Env variables not loading
**Solution:**
- Make sure file is named `.env.local` (not `.env`)
- Check there are no spaces around `=` sign
- Restart dev server completely
- Delete any `.env` files that might conflict

### Issue: "Service ID not found" error
**Solution:**
- Verify Service ID is correct from EmailJS Account page
- Make sure you copied the entire ID
- No extra spaces before/after

### Issue: "Template not found" error
**Solution:**
- Check template name matches exactly (case-sensitive)
- Template must be published (not draft)
- Copy exact Template ID

### Issue: Emails not arriving
**Solution:**
- Check EmailJS service is connected properly
- If using Gmail, enable "Less Secure Apps" or use App Passwords
- Check spam folder
- Check EmailJS activity log for errors

---

## File Structure

```
project/
├── .env.local (CREATE THIS - add your credentials)
├── client/
│   ├── lib/
│   │   └── emailjs.ts (CREATED - utility functions)
│   ├── pages/
│   │   ├── ContactUs.tsx (UPDATED)
│   │   └── GetQuote.tsx (UPDATED)
│   └── components/
│       ├── ContactForm.tsx (UPDATED)
│       └── JobApplicationForm.tsx (UPDATED)
└── ...
```

---

## What Happens When Form is Submitted

1. User fills form and clicks submit
2. **EmailJS sends email to your inbox** ✉️
3. Form data also saved to Supabase (existing feature)
4. User sees success message
5. User receives email confirmation

---

## Pricing

- **Free Plan**: 200 emails/month (perfect for testing)
- **Growth Plan**: $2.99/month for 5,000 emails
- Upgrade anytime as your business grows

---

## Need Help?

- EmailJS Docs: https://www.emailjs.com/docs/
- FAQ: https://www.emailjs.com/faq
- Support: https://www.emailjs.com/support

---

## Summary

After completing these 5 steps, your AXIVOLT website will:

✅ Send contact form submissions via email
✅ Send quote request details via email
✅ Send job application details via email
✅ Still save all data to Supabase database
✅ Show success messages to users
✅ Include all form data in emails

Total setup time: ~15 minutes
