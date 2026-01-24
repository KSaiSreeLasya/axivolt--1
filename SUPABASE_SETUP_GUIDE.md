# Supabase Setup Guide for AXIVOLT

## Step 1: Set Up RLS Policies

1. Go to your Supabase Dashboard
2. Click on **SQL Editor** (left sidebar)
3. Click **New Query**
4. Copy the entire content from `RLS_POLICIES.sql` file in your project root
5. Paste it into the SQL Editor
6. Click **Run** button

This will:

- Enable RLS on all tables
- Allow anonymous form submissions
- Create a storage bucket for job resumes
- Set up storage permissions

## Step 2: Verify Environment Variables

Make sure these environment variables are set in your dev environment:

```
VITE_PUBLIC_SUPABASE_URL=https://xtnsdndloplmafsiipgp.supabase.co
VITE_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

These are already configured in the project.

## Step 3: Test the Forms

### Get Quote Form (`/quote`)

1. Navigate to `/quote`
2. Fill in the form:
   - Full Name
   - WhatsApp Number
   - Pin Code
   - Bill Range
   - Capacity (auto-filled)
3. Check "I agree to terms"
4. Click **Submit Details**
5. You should see a success sweet alert
6. Data saved to `quote_requests` table

### Contact Form (`/contact`)

1. Navigate to `/contact`
2. Fill in the form:
   - Full Name
   - Email
   - Phone
   - Company Name (optional)
   - Subject
   - Message
   - Preferred Contact Method
3. Click **Send Message**
4. You should see a success sweet alert
5. Data saved to `contact_form_submissions` table

### Job Application Form (`/careers`)

1. Navigate to `/careers`
2. Click **Apply Now** on any job
3. Fill in the form:
   - Full Name
   - Email
   - Phone
   - Years of Experience
   - LinkedIn Profile (optional)
   - Portfolio/Website (optional)
   - **Resume File Upload** (PDF, DOC, DOCX - Max 5MB)
   - Cover Letter (optional)
4. Click **Submit Application**
5. Resume will be uploaded to Supabase Storage
6. Data saved to `job_applications` table with resume URL

## Step 4: Verify Data Storage

### Check Database Records

1. Go to Supabase Dashboard
2. Click **Table Editor**
3. Select table:
   - `quote_requests` - for quote submissions
   - `contact_form_submissions` - for contact inquiries
   - `job_applications` - for job applications

### Check Resume Files

1. Go to Supabase Dashboard
2. Click **Storage** (left sidebar)
3. Click `job-resumes` bucket
4. You should see uploaded resume files

## Features Implemented

### Sweet Alert Notifications

All forms now use SweetAlert2 for beautiful notifications:

- ✅ Success alerts with custom messages
- ❌ Error alerts with detailed error messages
- 🎨 Teal color (#047F86) branded buttons

### File Upload for Resumes

- Accept PDF, DOC, DOCX files only
- Maximum file size: 5MB
- Files stored in Supabase Storage
- Public access URLs stored in database
- File validation with user feedback

### Form Validation

- Required fields marked with \*
- Email validation
- Phone number validation
- File type and size validation
- Form reset after successful submission

## Database Schema

### quote_requests Table

```
- id (uuid, primary key)
- full_name (varchar)
- whatsapp (varchar)
- pin_code (varchar)
- bill_range (varchar)
- capacity (varchar)
- category (varchar, default: 'residential')
- agree_to_terms (boolean)
- created_at (timestamp)
- updated_at (timestamp)
```

### contact_form_submissions Table

```
- id (uuid, primary key)
- full_name (varchar)
- email (varchar)
- phone (varchar)
- company_name (varchar)
- subject (varchar)
- message (text)
- contact_preference (varchar)
- status (varchar, default: 'new')
- created_at (timestamp)
- updated_at (timestamp)
```

### job_applications Table

```
- id (uuid, primary key)
- job_id (uuid, foreign key)
- full_name (varchar)
- email (varchar)
- phone (varchar)
- years_of_experience (varchar)
- linkedin_profile (varchar)
- portfolio_url (varchar)
- resume_url (varchar)  ← File upload URL
- cover_letter (text)
- application_status (varchar, default: 'pending')
- created_at (timestamp)
```

## Troubleshooting

### Error: "new row violates row-level security policy"

**Solution:** Run the RLS_POLICIES.sql file in SQL Editor

### Error: "Permission denied" for storage

**Solution:** Make sure storage bucket policies are created (included in RLS_POLICIES.sql)

### Error: "File too large"

**Solution:** Ensure resume file is less than 5MB

### Error: "Invalid file type"

**Solution:** Only PDF, DOC, and DOCX files are accepted

## Security Notes

✅ Row-Level Security (RLS) enabled on all tables
✅ Anonymous inserts allowed (form submissions)
✅ File upload restricted by file type and size
✅ Storage bucket has public read/write/delete policies
✅ All form data validated before submission

## Next Steps

1. ✅ Run RLS_POLICIES.sql in Supabase SQL Editor
2. ✅ Test all three forms
3. ✅ Verify data appears in database tables
4. (Optional) Set up email notifications for form submissions
5. (Optional) Create admin dashboard to manage submissions
