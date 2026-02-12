# Jobs Fetch Error - Debugging & Fix Guide

## Error Message
```
Failed to fetch jobs: [object Object]
```

## What We Fixed

✅ **Improved error logging** - Now shows actual error messages instead of `[object Object]`
✅ **Fixed Job interface** - Corrected property names to match database schema
✅ **Better fallback handling** - Gracefully falls back to default jobs if fetch fails

---

## Common Causes & Solutions

### Issue 1: Jobs Table Doesn't Exist in Supabase

**Symptoms:**
- Error mentioning "relation does not exist" 
- Error mentioning "jobs" table not found
- Blank console error

**Solution:**

1. **Check if table exists:**
   - Go to Supabase dashboard
   - Select your project
   - Go to SQL Editor
   - Run this query:
   ```sql
   SELECT table_name FROM information_schema.tables 
   WHERE table_schema = 'public';
   ```
   - Look for "jobs" table in results

2. **If table doesn't exist, create it:**
   ```sql
   CREATE TABLE jobs (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     title TEXT NOT NULL,
     department TEXT NOT NULL,
     job_type TEXT NOT NULL,
     location TEXT NOT NULL,
     experience_required TEXT NOT NULL,
     description TEXT NOT NULL,
     requirements TEXT[] DEFAULT '{}',
     benefits TEXT[] DEFAULT '{}',
     is_active BOOLEAN DEFAULT true,
     created_at TIMESTAMPTZ DEFAULT NOW(),
     updated_at TIMESTAMPTZ DEFAULT NOW()
   );
   ```

3. **Insert sample data:**
   ```sql
   INSERT INTO jobs (title, department, job_type, location, experience_required, description, requirements, benefits, is_active)
   VALUES (
     'Solar Engineer',
     'Engineering',
     'Full-time',
     'Remote/On-site',
     '3+ years',
     'Lead the design and implementation of utility-scale solar projects...',
     ARRAY['Bachelor degree', '3+ years experience', 'PV system design expertise'],
     ARRAY['Health Insurance', 'Flexible Hours', 'Remote Work'],
     true
   );
   ```

---

### Issue 2: Permissions Issues

**Symptoms:**
- Error mentioning "permission denied"
- Error mentioning "unauthorized"
- Works for some users but not others

**Solution:**

1. **Check RLS (Row Level Security):**
   - Go to Supabase Dashboard
   - Select "jobs" table
   - Click "Policies" tab
   - Verify policies allow public read access

2. **If no policies exist, create one:**
   ```sql
   CREATE POLICY "Allow public read access" ON jobs
     FOR SELECT
     USING (true);
   ```

3. **If RLS is causing issues, disable it temporarily:**
   - Go to Jobs table
   - Click "Policies"
   - Click "Disable RLS" (only for testing)
   - Re-enable when policies are configured

---

### Issue 3: Database is Empty (No Jobs)

**Symptoms:**
- No error messages
- "No open positions at this time" message appears
- Jobs aren't loading from database

**Solution:**

1. **Check if jobs table has data:**
   ```sql
   SELECT COUNT(*) FROM jobs WHERE is_active = true;
   ```

2. **If count is 0, insert sample jobs:**
   See "Insert sample data" section above

3. **Or verify fallback is working:**
   - Should show default jobs defined in code
   - Check browser console for warning: "No active jobs found in database, using fallback jobs"

---

### Issue 4: Field Name Mismatch

**Symptoms:**
- Error mentioning undefined properties
- Jobs display with missing information
- Specific fields not showing

**Solution:**

✅ **Already fixed!** We've updated the Job interface to match the database schema:
```typescript
interface Job {
  id?: string;
  title: string;
  department: string;
  job_type: string;        // NOT "type"
  location: string;
  experience_required: string;  // NOT "experience"
  description: string;
  requirements: string[];
  benefits: string[];
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}
```

---

## Step-by-Step Debugging Process

### Step 1: Check Browser Console
```
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for error messages
4. Copy the full error message
5. Use it to identify the specific issue
```

### Step 2: Verify Supabase Connection
```javascript
// Add this to browser console to test:
const { supabase } = await import('/src/lib/supabase.js');
const { data, error } = await supabase.from('jobs').select('*').limit(1);
console.log('Data:', data);
console.log('Error:', error);
```

### Step 3: Check Supabase Project
```
1. Go to https://supabase.com
2. Login to your project
3. Check:
   - ✅ Project is active
   - ✅ Database is running
   - ✅ Jobs table exists
   - ✅ Has data
   - ✅ RLS policies configured
```

### Step 4: Review Network Requests
```
1. Open DevTools Network tab
2. Reload page
3. Look for requests to "supabase"
4. Check response status (should be 200)
5. Check response data
```

---

## New Error Messages (More Detailed)

After our fix, errors will now show actual messages like:

```
✅ "relation \"jobs\" does not exist"
  → Solution: Create jobs table

✅ "JWT invalid or expired"
  → Solution: Check Supabase API key

✅ "permission denied for schema public"
  → Solution: Check RLS policies

✅ "No active jobs found in database, using fallback jobs"
  → Solution: Add jobs to database or use fallback (which is working)
```

Instead of:
```
❌ "Failed to fetch jobs: [object Object]"
  → Unclear what the actual problem is
```

---

## Complete Checklist

After implementing these fixes, verify:

- [ ] Browser console shows detailed error messages (not `[object Object]`)
- [ ] Jobs table exists in Supabase
- [ ] Jobs table has `is_active = true` records
- [ ] RLS policies allow public read access
- [ ] Careers page loads without errors
- [ ] Default jobs display if database fetch fails
- [ ] Job application modal opens correctly
- [ ] Job properties display correctly (title, department, type, experience)

---

## Verification Test

After fixes, test this scenario:

1. **Clear database of all jobs:**
   ```sql
   DELETE FROM jobs;
   ```

2. **Reload careers page:**
   - Should show "No open positions at this time"
   - Console should show: "No active jobs found in database, using fallback jobs"

3. **Add one job back:**
   ```sql
   INSERT INTO jobs (title, department, job_type, location, experience_required, description, requirements, benefits, is_active)
   VALUES ('Test Job', 'Engineering', 'Full-time', 'Remote', '2+ years', 'Test description', ARRAY[], ARRAY[], true);
   ```

4. **Reload page:**
   - Should show the one job from database
   - Should NOT show default fallback jobs

5. **Try to apply:**
   - Click "Apply Now"
   - Modal should open
   - Job details should display correctly

---

## What Was Fixed in Code

### File: `client/pages/Careers.tsx`

**Before:**
```typescript
catch (err) {
  console.error("Failed to fetch jobs:", err);
  setJobs(defaultJobs);
}
```

**After:**
```typescript
catch (err) {
  const errorMsg =
    err instanceof Error
      ? err.message
      : typeof err === "object"
        ? JSON.stringify(err)
        : String(err);
  console.error("Failed to fetch jobs:", errorMsg);
  setJobs(defaultJobs);
}
```

### File: `client/components/JobApplicationForm.tsx`

**Before:**
```typescript
interface Job {
  type: string;
  experience: string;
}
```

**After:**
```typescript
interface Job {
  job_type: string;
  experience_required: string;
}
```

---

## If Error Persists

1. **Hard refresh page:**
   ```
   Ctrl+Shift+R (Windows/Linux)
   Cmd+Shift+R (Mac)
   ```

2. **Clear browser cache:**
   - DevTools → Application → Clear Site Data
   - Reload page

3. **Restart dev server:**
   ```bash
   Ctrl+C to stop
   pnpm dev to restart
   ```

4. **Verify git commit:**
   ```bash
   git log --oneline | head -5
   # Should show recent commit with "JobApplicationForm" and "Job interface"
   ```

5. **Check for file changes:**
   ```bash
   git status
   # Should be clean or show only your own .env.local
   ```

---

## Production Deployment

Before deploying to production:

1. **Ensure database is set up:**
   - Jobs table exists
   - Has at least 1 active job
   - RLS policies configured

2. **Test fallback mechanism:**
   - Temporarily break database connection
   - Verify default jobs display
   - No user-facing error messages

3. **Monitor error logs:**
   - Check for detailed error messages
   - Not just `[object Object]`

4. **Have backup data:**
   - Keep default jobs in code
   - Ensures page works even if database fails

---

## Support

If you continue to see errors:

1. **Check console for exact error:**
   - Copy full error message
   - Include it in bug reports

2. **Verify Supabase connection:**
   - Use Supabase SQL editor
   - Run `SELECT * FROM jobs LIMIT 1;`
   - Confirm table and data exist

3. **Review logs:**
   - Supabase Dashboard → Logs
   - Look for database errors
   - Check API authentication

---

## Summary

✅ **Error Logging Improved** - Now shows actual error messages
✅ **Job Interface Fixed** - Correct property names
✅ **Fallback Works** - Uses default jobs if fetch fails
✅ **Better Debugging** - Detailed error messages in console

The page will now work even if the database fails, showing default jobs to users while providing detailed error information for debugging.
