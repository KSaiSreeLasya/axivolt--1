# EmailJS Service Debugging Guide

## Overview
The application now includes comprehensive debugging tools to help diagnose email service issues. The error "[object Object]" typically indicates an issue with environment variables or EmailJS configuration.

## Quick Diagnostics

### Step 1: Check Console on App Load
1. Open your browser's Developer Tools (F12 or Cmd+Option+I)
2. Go to the Console tab
3. Look for messages starting with "EmailJS Configuration Check" or "EmailJS initialized successfully"

### Step 2: Run Debug Commands in Browser Console

The application provides global debug functions. In your browser console, run:

```javascript
// Get full debug report
window.__debugEmail()

// Check for common issues
window.__emailIssues()

// Get structured report object
window.__emailReport()

// Send a test email (if configured)
window.__sendTestEmail()

// Check email status
window.__emailStatus()
```

## Troubleshooting

### Issue: "EmailJS Configuration Missing"
**Problem:** `VITE_EMAILJS_PUBLIC_KEY` or `VITE_EMAILJS_SERVICE_ID` not found

**Solution:**
1. Verify environment variables are set in your deployment platform:
   - Netlify: Site settings → Build & deploy → Environment
   - Vercel: Settings → Environment Variables
   
2. Required variables:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=service_vx9h7gg
   VITE_EMAILJS_CONTACT_TEMPLATE_ID=template_248u5es
   VITE_EMAILJS_QUOTE_TEMPLATE_ID=template_dsdq974
   VITE_EMAILJS_JOB_TEMPLATE_ID=template_xxxxx
   VITE_ADMIN_EMAIL=kottesaisreelasya@gmail.com
   ```

3. After setting variables, redeploy the application

### Issue: "Failed to send email: Error: Request failed"
**Problem:** Network or EmailJS API error

**Possible causes:**
- EmailJS service is down
- Rate limiting (too many emails sent)
- Invalid template IDs
- CORS issues

**Solutions:**
1. Check EmailJS service status: https://status.emailjs.com/
2. Verify template IDs exist in your EmailJS account
3. Wait a few minutes if rate limited
4. Check browser console for specific error messages

### Issue: Emails sent but user doesn't receive them
**Problem:** Emails reaching EmailJS but not delivered

**Check:**
1. Run `window.__debugEmail()` and verify:
   - `VITE_ADMIN_EMAIL` is correctly set
   - All template IDs are correctly set
   
2. Verify in EmailJS dashboard:
   - Templates exist and are published
   - Email domains are verified (for SPF/DKIM)
   - Recipient email addresses are valid

3. Check spam/junk folder

### Issue: Production environment email fails, development works
**Problem:** Environment variable configuration differs between dev and prod

**Solution:**
1. Ensure ALL environment variables are set on the production platform
2. Variable names must start with `VITE_` (Vite requirement)
3. Rebuild and redeploy after adding variables
4. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

## Common Environment Variable Issues

### Mistake 1: Missing VITE_ prefix
❌ Wrong:
```
EMAILJS_PUBLIC_KEY=xxx
```
✅ Correct:
```
VITE_EMAILJS_PUBLIC_KEY=xxx
```

### Mistake 2: Setting on wrong platform
- If using Netlify: Set in Netlify dashboard, not in .env file
- If using Vercel: Set in Vercel dashboard, not in .env file
- Local development: Use `.env.local` file (not in git)

### Mistake 3: Old values
- Make sure you're using the CURRENT values from EmailJS dashboard
- Don't use old template IDs or service IDs

## Detailed Error Messages

### Expected Success Log (in console)
```
Initializing EmailJS service...
App mounted: Initializing EmailJS service...
EmailJS Configuration Check: {
  hasServiceId: true,
  hasPublicKey: true,
  templateId: "template_248u5es"
}
Sending email with template: template_248u5es
Email parameters keys: (8) ["to_email", "from_name", "from_email", "phone", "company_name", "subject", "message", "contact_preference"]
EmailJS Response: {status: 200, text: "OK"}
Email sent successfully
```

### Common Error Messages
1. **"EmailJS service is not properly configured"**
   - Missing public key or service ID
   - Solution: Set environment variables

2. **"Failed to send email: Request failed"**
   - Network issue or EmailJS API error
   - Solution: Check internet connection, EmailJS status

3. **"Failed to send email: Template not found"**
   - Template ID doesn't exist
   - Solution: Verify template ID in EmailJS dashboard

4. **"Failed to send email: Unauthorized"**
   - Invalid public key or service ID
   - Solution: Get correct values from EmailJS dashboard

## Test Email Function

To test if email service is working:

```javascript
// In browser console
window.__sendTestEmail()
```

This will:
1. Check if configuration is valid
2. Attempt to send a test email
3. Log detailed response
4. Return true/false for success

## Monitoring Email Sending

To monitor email attempts in real-time:

1. Open browser DevTools Console
2. Form fills will log email details:
```
EmailJS Configuration Check: {...}
Sending email with template: template_xxx
Email parameters keys: [...]
EmailJS Response: {...}
Email sent successfully
```

## For Production Debugging

All logs are captured on the server (if using Netlify/Vercel):

1. **Netlify:** Analytics & Logs → Functions (if using serverless)
2. **Vercel:** Settings → Monitoring → Logs

Check these logs for:
- Environment variable initialization
- EmailJS response codes
- Network errors

## Next Steps

1. Run `window.__debugEmail()` and note the output
2. Check if all environment variables are showing as "configured: true"
3. If not, add missing variables to your deployment platform
4. Redeploy the application
5. Test with `window.__sendTestEmail()`
6. Check your email (including spam folder)

## Still Having Issues?

Provide the following information for support:

```javascript
// Copy output from console:
window.__debugEmail()
```

Include:
- Full debug output
- Error message from form submission
- Whether development vs production
- Which form (contact, quote, job application)
- Browser and OS information
