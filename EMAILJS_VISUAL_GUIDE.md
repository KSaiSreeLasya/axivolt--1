# EmailJS Integration - Visual Guide

## System Architecture Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                         AXIVOLT WEBSITE                               │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ┌─────────────────┐  ┌──────────────────┐  ┌──────────────────┐    │
│  │  Contact Form   │  │   Quote Form     │  │ Job Application  │    │
│  │   /contact      │  │    /quote        │  │   /careers       │    │
│  └────────┬────────┘  └────────┬─────────┘  └────────┬─────────┘    │
│           │                    │                     │               │
│           └────────┬───────────┴─────────────────────┘               │
│                    │                                                 │
│                    ↓                                                 │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │          client/lib/emailjs.ts                                 │ │
│  │  ┌──────────────────────────────────────────────────────┐     │ │
│  │  │ • initializeEmailJS()                                 │     │ │
│  │  │ • sendContactFormEmail()                              │     │ │
│  │  │ • sendQuoteRequestEmail()                             │     │ │
│  │  │ • sendJobApplicationEmail()                           │     │ │
│  │  └──────────────────────────────────────────────────────┘     │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                    │                                                 │
└────────────────────┼─────────────────────────────────────────────────┘
                     │
         ┌───────────┴───────────┐
         ↓                       ↓
    ┌─────────────┐         ┌─────────────┐
    │ EmailJS     │         │ Supabase    │
    │ Service     │         │ Database    │
    └─────────────┘         └─────────────┘
         │                       │
         ↓                       ↓
    ┌─────────────┐         ┌──────────────┐
    │ User Email  │         │ Data Stored  │
    │ Inbox       │         │ for Analytics│
    └─────────────┘         └──────────────┘
```

---

## Setup Flow Diagram

```
START
  │
  ├─→ Create EmailJS Account (emailjs.com)
  │     │
  │     ├─→ Email verified ✓
  │
  ├─→ Connect Email Service (Gmail)
  │     │
  │     └─→ Copy Service ID ✓
  │
  ├─→ Create 3 Email Templates
  │     │
  │     ├─→ contact_form_template → Copy Template ID ✓
  │     ├─→ quote_request_template → Copy Template ID ✓
  │     └─→ job_application_template → Copy Template ID ✓
  │
  ├─→ Get Public Key from Account
  │     │
  │     └─→ Copy Public Key ✓
  │
  ├─→ Create .env.local file
  │     │
  │     └─→ Add all credentials ✓
  │
  ├─→ Restart Dev Server
  │     │
  │     └─→ pnpm dev ✓
  │
  └─→ Test Forms
        │
        ├─→ Fill /contact form → Submit → Check email ✓
        ├─→ Fill /quote form → Submit → Check email ✓
        └─→ Fill /careers form → Submit → Check email ✓

SUCCESS! All emails are working.
```

---

## Form Submission Flow

### Contact Form Flow
```
┌─────────────────────────┐
│ User visits /contact    │
└────────┬────────────────┘
         │
         ↓
┌─────────────────────────────────────────┐
│ Fills Form:                             │
│ • Full Name                             │
│ • Email                                 │
│ • Phone                                 │
│ • Company                               │
│ • Subject                               │
│ • Message                               │
│ • Preferred Contact Method              │
└────────┬────────────────────────────────┘
         │
         ↓ Clicks "Send Message"
         │
┌────────────────────────────────────────────┐
│ Form Validation                            │
│ • Check required fields                    │
│ • Validate email format                    │
└────────┬─────────────────────────────────┘
         │
         ↓ Valid
         │
┌──────────────────────────┐  ┌──────────────────────┐
│ Email Sent via EmailJS   │  │ Data Saved to DB     │
│                          │  │                      │
│ ✓ To admin inbox         │  │ ✓ contact_form_      │
│ ✓ With all form data     │  │   submissions table  │
└──────────┬───────────────┘  └──────────┬───────────┘
           │                             │
           └──────────┬──────────────────┘
                      │
                      ↓
         ┌─────────────────────────┐
         │ Success Message Shown   │
         │ "Message Sent!"         │
         │ "Check your email"      │
         └─────────────────────────┘
                      │
                      ↓
         ┌─────────────────────────┐
         │ Form Reset              │
         │ All fields cleared      │
         └─────────────────────────┘
```

### Quote Form Flow
```
┌──────────────────────────┐
│ User visits /quote       │
└────────┬─────────────────┘
         │
         ↓
┌──────────────────────────────────┐
│ Select Category:                 │
│ • Residential                    │
│ • Housing Society                │
│ • Commercial                     │
└────────┬─────────────────────────┘
         │
         ↓
┌──────────────────────────────────────────┐
│ Fills Form:                              │
│ • Full Name                              │
│ • WhatsApp Number                        │
│ • Pin Code                               │
│ • Average Monthly Bill                   │
│ • System Capacity                        │
│ • Agree to Terms (checkbox)              │
└────────┬─────────────────────────────────┘
         │
         ↓ Clicks "Submit Details"
         │
┌────────────────────────────────────────────┐
│ Form Validation                            │
│ • Check required fields                    │
│ • Validate phone number                    │
│ • Validate pin code                        │
└────────┬─────────────────────────────────┘
         │
         ↓ Valid
         │
┌──────────────────────────┐  ┌──────────────────────┐
│ Email Sent via EmailJS   │  │ Data Saved to DB     │
│                          │  │                      │
│ ✓ To admin inbox         │  │ ✓ quote_requests     │
│ ✓ Category included      │  │   table              │
│ ✓ Price included         │  │                      │
└──────────┬───────────────┘  └──────────┬───────────┘
           │                             │
           └──────────┬──────────────────┘
                      │
                      ↓
         ┌─────────────────────────┐
         │ Success Message Shown   │
         │ "Quote Submitted!"      │
         │ "Team will call soon"   │
         └─────────────────────────┘
```

### Job Application Flow
```
┌───────────────────────────┐
│ User visits /careers      │
└────────┬──────────────────┘
         │
         ↓
┌───────────────────────────────────┐
│ Sees Open Positions               │
│ • Solar Engineer                  │
│ • Business Analyst                │
│ • Sales Executive                 │
│ (etc.)                            │
└────────┬────────────────────────┘
         │
         ↓ Clicks "Apply"
         │
┌────────────────────────────────────────────┐
│ Application Modal Opens                    │
│ Shows Job Details                          │
│ • Title                                    │
│ • Department                               │
│ • Location                                 │
│ • Experience Required                      │
│ • Job Description                          │
│ • Requirements                             │
└────────┬─────────────────────────────────┘
         │
         ↓
┌──────────────────────────────────────────┐
│ Fills Application Form:                  │
│ • Full Name                              │
│ • Email                                  │
│ • Phone Number                           │
│ • Years of Experience                    │
│ • LinkedIn Profile                       │
│ • Portfolio URL                          │
│ • Resume File (Upload)                   │
│ • Cover Letter                           │
└────────┬─────────────────────────────────┘
         │
         ↓ Clicks "Submit Application"
         │
┌────────────────────────────────────┐
│ Resume File Uploaded to Storage    │
│ Gets Public URL                    │
└────────┬───────────────────────────┘
         │
         ↓
┌────────────────────────────────────────────┐
│ Form Validation                            │
│ • Check all required fields                │
│ • Validate email                           │
│ • Validate file type (PDF/DOC/DOCX)        │
│ • Validate file size (max 5MB)             │
└────────┬─────────────────────────────────┘
         │
         ↓ Valid
         │
┌──────────────────────────┐  ┌──────────────────────────┐
│ Email Sent via EmailJS   │  │ Data Saved to DB         │
│                          │  │                          │
│ ✓ To careers inbox       │  │ ✓ job_applications table │
│ ✓ Resume URL included    │  │ ✓ Resume file uploaded   │
│ ✓ All details included   │  │ ✓ Status: pending        │
└──────────┬───────────────┘  └──────────┬───────────────┘
           │                             │
           └──────────┬──────────────────┘
                      │
                      ↓
         ┌─────────────────────────┐
         │ Success Message Shown   │
         │ "Application Sent!"     │
         │ "Check your email"      │
         └─────────────────────────┘
```

---

## EmailJS Setup Steps Visual

```
Step 1: Create Account
┌─────────────────────────────────────────┐
│ https://emailjs.com                     │
│                                         │
│ Click "Sign Up Free"                    │
│ Enter Email → Password → Create Account │
│ Verify Email                            │
└─────────────────────────────────────────┘
         │
         ↓ ✓ Account Created


Step 2: Connect Email Service
┌──────────────────────────────────────────┐
│ EmailJS Dashboard                        │
│ → Email Services (left sidebar)          │
│ → "Connect New Service"                  │
│ → Select Gmail                           │
│ → Authenticate                           │
│ → Copy Service ID: service_xxxxx         │
└──────────────────────────────────────────┘
         │
         ↓ ✓ Service ID Copied


Step 3: Create Email Templates (Create 3)
┌──────────────────────────────────────────┐
│ EmailJS Dashboard                        │
│ → Email Templates (left sidebar)         │
│                                          │
│ Template 1:                              │
│ Name: contact_form_template              │
│ Copy Template ID: template_xxxxx         │
│                                          │
│ Template 2:                              │
│ Name: quote_request_template             │
│ Copy Template ID: template_xxxxx         │
│                                          │
│ Template 3:                              │
│ Name: job_application_template           │
│ Copy Template ID: template_xxxxx         │
└──────────────────────────────────────────┘
         │
         ↓ ✓ Template IDs Copied


Step 4: Get Public Key
┌──────────────────────────────────────────┐
│ EmailJS Dashboard                        │
│ → Account (left sidebar)                 │
│ → Find "Public Key"                      │
│ → Copy Public Key: abc123def456...       │
└──────────────────────────────────────────┘
         │
         ↓ ✓ Public Key Copied


Step 5: Create .env.local
┌──────────────────────────────────────────┐
│ Project Root Directory                   │
│ → Create file: .env.local                │
│                                          │
│ Content:                                 │
│ VITE_EMAILJS_SERVICE_ID=service_xxxxx    │
│ VITE_EMAILJS_PUBLIC_KEY=abc123...        │
│ VITE_EMAILJS_CONTACT_TEMPLATE_ID=t...   │
│ VITE_EMAILJS_QUOTE_TEMPLATE_ID=t...     │
│ VITE_EMAILJS_JOB_TEMPLATE_ID=t...       │
│                                          │
│ → Save File                              │
└──────────────────────────────────────────┘
         │
         ↓ ✓ Env File Created


Step 6: Restart Dev Server
┌──────────────────────────────────────────┐
│ Terminal                                 │
│ $ pnpm dev                               │
│                                          │
│ Dev server restarted with new env vars   │
└──────────────────────────────────────────┘
         │
         ↓ ✓ Server Running


Step 7: Test Forms
┌──────────────────────────────────────────┐
│ http://localhost:8080                    │
│                                          │
│ → /contact (Fill & Submit)               │
│ → /quote (Fill & Submit)                 │
│ → /careers (Fill & Submit)               │
│                                          │
│ Check email inbox for confirmations      │
└──────────────────────────────────────────┘
         │
         ↓ ✓ All Tests Passed

SETUP COMPLETE!
```

---

## Email Template Variables Reference

### Contact Form Variables
```
{{ form_name }}           → "Contact Form"
{{ full_name }}           → User's name
{{ email }}               → User's email
{{ phone }}               → User's phone
{{ company_name }}        → User's company
{{ subject }}             → Message subject
{{ message }}             → Message content
{{ contact_preference }}  → Email/Phone/Either
{{ submission_date }}     → Current date/time
```

### Quote Request Variables
```
{{ form_name }}           → "Quote Request"
{{ full_name }}           → User's name
{{ whatsapp }}            → WhatsApp number
{{ pin_code }}            → Location pin code
{{ bill_range }}          → Monthly bill range
{{ capacity }}            → System capacity (kW)
{{ category }}            → Residential/Housing/Commercial
{{ submission_date }}     → Current date/time
```

### Job Application Variables
```
{{ form_name }}           → "Job Application"
{{ full_name }}           → Applicant name
{{ email }}               → Applicant email
{{ phone }}               → Applicant phone
{{ job_title }}           → Position applied for
{{ experience }}          → Years of experience
{{ linkedin }}            → LinkedIn profile
{{ portfolio }}           → Portfolio URL
{{ coverletter }}         → Cover letter text
{{ submission_date }}     → Current date/time
```

---

## File Dependency Graph

```
┌─────────────────────────────────────┐
│  .env.local                         │
│  (EmailJS Credentials)              │
└────────────────┬────────────────────┘
                 │
                 ↓
┌────────────────────────────────────────┐
│  client/lib/emailjs.ts                 │
│  (Utility Functions)                   │
└────────────────┬───────────────────────┘
                 │
        ┌────────┼────────┬──────────┐
        ↓        ↓        ↓          ↓
    ┌─────┐  ┌───┐  ┌───┐  ┌─────────┐
    │ C.F │  │G.Q│  │J.A│  │ Others  │
    └─────┘  └───┘  └───┘  └─────────┘
    (Forms that use emailjs.ts)

Legend:
C.F  = ContactForm.tsx
G.Q  = GetQuote.tsx
J.A  = JobApplicationForm.tsx
```

---

## Error Handling Flow

```
Form Submission
        │
        ↓
Validate Form
        │
   ├────┴─────┐
   ↓          ↓
Valid     Invalid
   │          │
   │          ↓
   │     Show Error
   │     "Please fill required fields"
   │
   ↓
Send Email via EmailJS
        │
   ├────┴──────────┐
   ↓               ↓
Success        Failed
   │               │
   │               ↓
   │          Show Error
   │          "Failed to send email"
   │
   ↓
Save to Database
        │
   ├────┴──────────┐
   ↓               ↓
Success        Failed
   │               │
   │               ↓
   │          Log Warning
   │          Continue (Email sent)
   │
   ↓
Show Success Message
"Form Submitted!"
Reset Form
```

---

## Production Checklist

```
Pre-Deployment
├─ [ ] All 3 email templates created in EmailJS
├─ [ ] All credentials added to production .env
├─ [ ] .env.local NOT in git repo
├─ [ ] All forms tested locally
├─ [ ] Email confirmations received
├─ [ ] EmailJS account has paid plan (if volume > 200/month)
├─ [ ] Email forwarding configured in EmailJS
└─ [ ] Admin notified of new email address

Post-Deployment
├─ [ ] Test forms on production URL
├─ [ ] Verify emails received
├─ [ ] Monitor EmailJS usage dashboard
├─ [ ] Update admin team with new email setup
└─ [ ] Set up email notifications in EmailJS
```

---

## Success Indicators

✅ **You'll know it's working when:**
- Form submission shows success message
- Email appears in admin inbox within 2 seconds
- Email contains all form data formatted correctly
- Multiple submissions all arrive without issues
- No errors in browser console

❌ **If something's wrong:**
- Check browser console for errors
- Verify .env.local has all variables
- Confirm credentials in EmailJS match .env.local
- Check EmailJS activity log for failures
- Verify templates are published (not draft)

---

## Summary Diagram

```
YOUR FORMS              EMAILJS              YOUR EMAIL
(3 forms)         (Email Service)         (Admin Inbox)

Contact Form  ──→  emailjs.ts  ──→  service_xxxxx  ──→  admin@axivolt.in
Quote Form    ──→  templates  ──→  Gmail SMTP    ──→  admin@axivolt.in
Job Form      ──→  public_key ──→  template_ids  ──→  admin@axivolt.in
                                                     ✓ Email received
```
