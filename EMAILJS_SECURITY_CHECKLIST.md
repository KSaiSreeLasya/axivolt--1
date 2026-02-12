# EmailJS Security Checklist

## CRITICAL: Protect Your Credentials!

Your EmailJS credentials give access to send emails from your account. **Never commit them to git or share them publicly.**

---

## Step 1: Update .gitignore

Your project should have a `.gitignore` file. Make sure it includes `.env.local`:

### Option A: If .gitignore exists
Open `.gitignore` and verify it contains:
```
.env.local
.env.*.local
.env
```

### Option B: If .gitignore doesn't exist
Create a `.gitignore` file in project root with:
```
# Environment variables
.env
.env.local
.env.*.local

# Dependencies
node_modules
/.pnpm-debug.log

# Build files
/dist
/.next
/build
out/

# IDE
.DS_Store
*.swp
*.swo
*~
.vscode/
.idea/

# OS
Thumbs.db
```

---

## Step 2: Verify Secrets Are Protected

### Check what's in git history
```bash
git log --all --full-history -- ".env.local"
```

If it shows commits, your secrets may be exposed!

### Remove from git history (if accidentally committed)
```bash
git filter-branch --tree-filter 'rm -f .env.local' --prune-empty -f HEAD
git push origin --force-with-lease
```

---

## Step 3: Secure Your Credentials

### Never Share These Values:
❌ VITE_EMAILJS_SERVICE_ID
❌ VITE_EMAILJS_PUBLIC_KEY
❌ VITE_EMAILJS_CONTACT_TEMPLATE_ID
❌ VITE_EMAILJS_QUOTE_TEMPLATE_ID
❌ VITE_EMAILJS_JOB_TEMPLATE_ID

### Where These Should Be:
✅ `.env.local` (local machine only)
✅ Production hosting environment variables
❌ Never in git repository
❌ Never in code comments
❌ Never in documentation
❌ Never in pull requests

---

## Step 4: Environment-Specific Setup

### Local Development
```env
File: .env.local
Location: Project root
Contains: Your test credentials
Git Status: IGNORED (in .gitignore)
```

### Production (Vercel/Netlify/Server)
```
Method 1: Environment Variables Dashboard
- Add variables in hosting platform UI
- Never commit production .env file

Method 2: Infrastructure as Code
- Use tools that handle secrets securely
- Encrypt sensitive data
- Use secret management services
```

---

## Step 5: Credential Rotation

If you suspect your credentials are compromised:

### For EmailJS:
1. Go to EmailJS Dashboard
2. Go to Account → Security
3. Regenerate Public Key
4. Update `.env.local` with new key
5. Redeploy application

### For Service ID:
1. Disconnect service in Email Services
2. Connect new service
3. Copy new Service ID
4. Update `.env.local`
5. Redeploy application

---

## Step 6: Regular Audits

### Monthly Checklist:
- [ ] Verify .env.local is in .gitignore
- [ ] Check no credentials in recent commits
- [ ] Review EmailJS activity log
- [ ] Monitor email volume
- [ ] Check for suspicious activity

### Quarterly:
- [ ] Rotate credentials if not rotated in 6 months
- [ ] Review team members with access
- [ ] Audit git history for secrets
- [ ] Update security practices

---

## Step 7: Team Collaboration

### For Team Members:
1. Don't share .env.local file
2. Each team member gets own local copy
3. Only non-secret config in version control

### Example Process:
```
1. New team member joins
2. They clone the repository
3. They create own .env.local locally
4. They add their own EmailJS credentials
5. They test locally
6. They push code (without .env.local)
```

### .env.local.example File
```
Use .env.local.example (already created for you)
Contains: Structure but no actual values
Purpose: Shows team what variables are needed
Status: Can be committed to git ✓
```

---

## Step 8: Production Deployment

### Vercel Deployment
1. Go to Project Settings → Environment Variables
2. Add each variable separately:
   - VITE_EMAILJS_SERVICE_ID
   - VITE_EMAILJS_PUBLIC_KEY
   - VITE_EMAILJS_CONTACT_TEMPLATE_ID
   - VITE_EMAILJS_QUOTE_TEMPLATE_ID
   - VITE_EMAILJS_JOB_TEMPLATE_ID
3. Mark as "Sensitive" if option available
4. Redeploy

### Netlify Deployment
1. Go to Site Settings → Build & Deploy → Environment
2. Add variables:
   - VITE_EMAILJS_SERVICE_ID
   - VITE_EMAILJS_PUBLIC_KEY
   - VITE_EMAILJS_CONTACT_TEMPLATE_ID
   - VITE_EMAILJS_QUOTE_TEMPLATE_ID
   - VITE_EMAILJS_JOB_TEMPLATE_ID
3. Trigger new deploy

### Self-Hosted Server
1. SSH into server
2. Create .env file with credentials
3. Make sure file permissions are restricted (chmod 600)
4. Start application

---

## Step 9: Monitoring & Alerts

### Monitor EmailJS Account:
- [ ] Set up email notifications for suspicious activity
- [ ] Review activity log weekly
- [ ] Check quota usage
- [ ] Monitor sender reputation

### Monitor Application:
- [ ] Check error logs for failed email sends
- [ ] Monitor form submission rates
- [ ] Track email delivery success rate
- [ ] Set up alerts for quota limits

---

## Step 10: Incident Response Plan

### If Credentials Are Exposed:

1. **Immediate (5 minutes)**
   - Stop using compromised credentials
   - Rotate Public Key in EmailJS
   - Rotate Service ID

2. **Short Term (30 minutes)**
   - Update all environment variables (local + production)
   - Redeploy application
   - Verify new credentials work

3. **Medium Term (Same day)**
   - Review EmailJS activity log
   - Check if unauthorized emails sent
   - Audit team access logs
   - Update security documentation

4. **Long Term (This week)**
   - Implement additional security measures
   - Update team training
   - Document incident
   - Prevent future occurrences

---

## Security Best Practices Checklist

### Code Level
- [ ] No secrets in code comments
- [ ] No credentials in error messages
- [ ] Proper validation of form data
- [ ] Rate limiting on form submissions
- [ ] CORS properly configured

### File Level
- [ ] .env.local in .gitignore
- [ ] .env.local.example committed (no values)
- [ ] No backup files with secrets
- [ ] File permissions set correctly (chmod 600)

### Account Level
- [ ] Strong password for EmailJS
- [ ] Two-factor authentication enabled (if available)
- [ ] Regular credential rotation
- [ ] Activity logs reviewed
- [ ] Team members access controlled

### Deployment Level
- [ ] Secrets in platform env vars only
- [ ] No secrets in build logs
- [ ] Encrypted connections (HTTPS)
- [ ] Regular security updates
- [ ] Monitoring and alerting enabled

---

## What NOT to Do

❌ **DON'T:**
- Commit .env.local to git
- Share credentials via Slack/Email
- Post credentials in code reviews
- Log credentials in console
- Use same credentials for dev and prod
- Leave credentials in uploaded files
- Share .env.local with team
- Use weak passwords
- Ignore suspicious activity

✅ **DO:**
- Keep .env.local local only
- Use environment variables
- Rotate credentials regularly
- Monitor activity logs
- Use different credentials per environment
- Enable 2FA where available
- Review access logs monthly
- Use strong passwords
- Respond quickly to incidents

---

## File Locations Reference

```
Project Root/
├── .gitignore                    (MUST include .env.local)
├── .env.local                    (LOCAL ONLY - never commit)
├── .env.local.example            (Safe to commit - no values)
├── EMAILJS_SECURITY_CHECKLIST.md (This file)
└── ...
```

---

## Git Workflow for Safety

### Before committing:
```bash
# Check for secrets in staged files
git diff --staged | grep -i "service_\|template_\|public_key\|vite_"

# List files about to be committed
git diff --staged --name-only

# If you see .env.local, STOP! Don't commit it!
```

### After adding credentials:
```bash
# Make sure .env.local is ignored
git status

# Should NOT show .env.local in untracked files
# Only .env.local.example should appear
```

### Safe commit:
```bash
# Only commit non-secret files
git add .
git commit -m "Add EmailJS setup (credentials in .env.local)"
```

---

## Verification Commands

### Verify .gitignore is working:
```bash
# Should be empty (no .env.local)
git check-ignore -v .env.local

# Should return: .env.local
```

### Verify no secrets in history:
```bash
# Search for common secret patterns
git log -p | grep -i "service_\|template_\|public_key" || echo "Good - no secrets found"
```

### Verify git ignoring the file:
```bash
# Status should not show .env.local
git status
```

---

## Emergency Contact

If you suspect credentials are exposed:

1. **Immediately rotate in EmailJS:**
   - Generate new Public Key
   - Regenerate Service ID

2. **Update locally:**
   - Update .env.local with new values

3. **Redeploy:**
   - Push new credentials to production
   - Verify forms still work

4. **Monitor:**
   - Check EmailJS activity log
   - Watch for suspicious email sends

---

## Security Resources

- EmailJS Security: https://www.emailjs.com/security
- OWASP Secrets Management: https://owasp.org/
- Git Security: https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage
- Environment Variables Best Practices: https://12factor.net/config

---

## Checklist Summary

Complete these items:

- [ ] .env.local created locally
- [ ] .env.local added to .gitignore
- [ ] .env.local.example in git (no values)
- [ ] Credentials never committed to git
- [ ] Production env vars set in hosting platform
- [ ] No credentials in code or comments
- [ ] EmailJS 2FA enabled (if available)
- [ ] Activity logs monitored regularly
- [ ] Team trained on credential safety
- [ ] Rotation schedule established

✅ **When all items are checked, your credentials are secure!**
