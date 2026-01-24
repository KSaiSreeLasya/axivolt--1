-- ===== QUOTE REQUESTS RLS =====
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anonymous insert" ON public.quote_requests;
DROP POLICY IF EXISTS "Allow select" ON public.quote_requests;

CREATE POLICY "Allow anonymous insert" ON public.quote_requests
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow select" ON public.quote_requests
  FOR SELECT
  USING (true);

-- ===== CONTACT FORM SUBMISSIONS RLS =====
ALTER TABLE public.contact_form_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anonymous insert" ON public.contact_form_submissions;
DROP POLICY IF EXISTS "Allow select" ON public.contact_form_submissions;

CREATE POLICY "Allow anonymous insert" ON public.contact_form_submissions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow select" ON public.contact_form_submissions
  FOR SELECT
  USING (true);

-- ===== JOB APPLICATIONS RLS =====
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anonymous insert" ON public.job_applications;
DROP POLICY IF EXISTS "Allow select" ON public.job_applications;

CREATE POLICY "Allow anonymous insert" ON public.job_applications
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow select" ON public.job_applications
  FOR SELECT
  USING (true);

-- ===== CONTACT RESPONSES RLS =====
ALTER TABLE public.contact_responses ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow select" ON public.contact_responses;

CREATE POLICY "Allow select" ON public.contact_responses
  FOR SELECT
  USING (true);

-- ===== JOBS RLS (for reading job listings) =====
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow select" ON public.jobs;

CREATE POLICY "Allow select" ON public.jobs
  FOR SELECT
  USING (true);

-- ===== QUOTE FOLLOW UPS RLS =====
ALTER TABLE public.quote_follow_ups ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow select" ON public.quote_follow_ups;

CREATE POLICY "Allow select" ON public.quote_follow_ups
  FOR SELECT
  USING (true);

-- ===== STORAGE BUCKET RLS (for job resumes) =====
-- Create bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('job-resumes', 'job-resumes', true)
ON CONFLICT (id) DO NOTHING;

ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Allow public uploads to job-resumes bucket
CREATE POLICY "Allow public uploads to job-resumes" ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'job-resumes');

-- Allow public read access to job-resumes bucket
CREATE POLICY "Allow public read job-resumes" ON storage.objects
  FOR SELECT
  USING (bucket_id = 'job-resumes');

-- Allow public delete from job-resumes bucket
CREATE POLICY "Allow public delete job-resumes" ON storage.objects
  FOR DELETE
  USING (bucket_id = 'job-resumes');
