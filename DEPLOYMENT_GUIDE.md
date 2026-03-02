# Deployment Guide - Render

This guide will help you deploy the Axivolt application to Render with full backend authentication and Supabase integration.

## Prerequisites

- A Render account (https://render.com)
- A GitHub repository with this project
- Supabase project and credentials
- EmailJS credentials
- Admin emails for dashboard access

## Step 1: Prepare Your Environment Variables

You'll need the following environment variables. Get them from your respective services:

### Supabase Variables
- `VITE_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `VITE_PUBLIC_SUPABASE_ANON_KEY` - Supabase public anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (keep this secret!)

### EmailJS Variables
- `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key
- `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `VITE_EMAILJS_CONTACT_TEMPLATE_ID` - Template ID for contact form emails
- `VITE_EMAILJS_QUOTE_TEMPLATE_ID` - Template ID for quote request emails
- `VITE_EMAILJS_JOB_TEMPLATE_ID` - Template ID for job application emails

### Application Variables
- `VITE_ADMIN_EMAIL` - Email address to receive form submissions (e.g., admin@axivolt.in)
- `ADMIN_EMAILS` - Comma-separated list of email addresses with admin dashboard access (e.g., admin@example.com,user@example.com)
- `JWT_SECRET` - A secure random string for signing session tokens (generate one with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)
- `PING_MESSAGE` - Server ping response (default: "pong")

## Step 2: Create a Web Service on Render

1. Go to https://dashboard.render.com
2. Click "New +"
3. Select "Web Service"
4. Connect your GitHub repository
5. In the settings, configure:

   **Name:** axivolt-app (or your preferred name)
   
   **Environment:** Node
   
   **Build Command:** 
   ```
   npm install && npm run build
   ```
   
   **Start Command:**
   ```
   npm start
   ```
   
   **Plan:** Standard (recommended for production)

## Step 3: Add Environment Variables

In the "Environment" section of your Render service:

1. Click "Add Environment Variable" for each variable
2. Enter the key and value from the list in Step 1
3. For sensitive variables (SUPABASE_SERVICE_ROLE_KEY, JWT_SECRET), ensure they're marked as protected

**Important:** Make sure variables starting with `VITE_` are added correctly - these will be built into the frontend.

## Step 4: Configure Admin Access

Before deploying, ensure you:

1. Have Supabase Authentication enabled
2. Created at least one admin user account with an email you want to grant access
3. Added that email to the `ADMIN_EMAILS` environment variable

## Step 5: Deploy

1. Make sure all environment variables are set
2. Click "Create Web Service"
3. Render will automatically build and deploy your application
4. Once deployment is complete, you'll get a live URL

## Step 6: Test the Deployment

1. Visit your deployment URL
2. Navigate to `/login` or `/signup`
3. Create an account with an email listed in `ADMIN_EMAILS`
4. You should be able to access the admin dashboard at `/admin`

## Backend Proxy for ISP Blocked Regions

Since Supabase direct access may be blocked by some ISPs, all authentication requests are routed through your backend server:

- **Client Endpoints:** `/api/auth/*` (all requests go to your backend)
- **Backend Proxy:** Forwards requests to Supabase using the service role key
- **Session Management:** Uses secure HTTP-only cookies (cannot be accessed by JavaScript)

## Troubleshooting

### Authentication Not Working
- Check that `SUPABASE_SERVICE_ROLE_KEY` is set correctly
- Verify `JWT_SECRET` is set
- Clear browser cookies and try again

### Admin Dashboard Shows "Access Denied"
- Verify the email you used to sign up is in the `ADMIN_EMAILS` list
- Make sure `ADMIN_EMAILS` environment variable is set correctly

### Forms Not Sending Emails
- Verify EmailJS credentials are correct
- Check that template IDs exist in your EmailJS project
- Ensure `VITE_ADMIN_EMAIL` is set

### Database Connection Issues
- Verify `VITE_PUBLIC_SUPABASE_URL` is correct
- Check that RLS (Row Level Security) policies allow the operations
- Ensure service role key has proper permissions

## Updating the Application

To deploy updates:

1. Make changes to your repository
2. Push to GitHub
3. Render will automatically redeploy if "Auto-Deploy" is enabled
4. Monitor deployment logs at https://dashboard.render.com

## Production Security Best Practices

1. Use strong `JWT_SECRET` (min 32 characters)
2. Keep `SUPABASE_SERVICE_ROLE_KEY` secret (never commit to git)
3. Regularly rotate JWT_SECRET and admin passwords
4. Enable HTTPS (Render does this by default)
5. Monitor admin dashboard access logs
6. Use environment-specific Supabase projects if possible

## Support

For issues with:
- **Render:** Check https://render.com/docs
- **Supabase:** Visit https://supabase.com/docs
- **EmailJS:** See https://www.emailjs.com/docs
