import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xtnsdndloplmafsiipgp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0bnNkbmRsb3BsbWFmc2lpcGdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxODQ2NzksImV4cCI6MjA4NDc2MDY3OX0.5NDK3BxgQ9fL1WvkaWR9ns2QV8N34CE2NZAmPkCZH1s";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for forms
export interface ContactSubmission {
  id?: string;
  full_name: string;
  email: string;
  phone?: string;
  company_name?: string;
  subject: string;
  message: string;
  contact_preference?: string;
  status?: string;
  created_at?: string;
}

export interface QuoteRequest {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  company_name?: string;
  industry?: string;
  project_type: string;
  energy_solution?: string;
  location?: string;
  property_type?: string;
  estimated_energy_need?: string;
  budget_range?: string;
  timeline?: string;
  description?: string;
  status?: string;
  created_at?: string;
}

export interface JobApplication {
  id?: string;
  job_id: string;
  full_name: string;
  email: string;
  phone: string;
  years_of_experience: string;
  linkedin_profile?: string;
  portfolio_url?: string;
  resume_url: string;
  cover_letter?: string;
  application_status?: string;
  created_at?: string;
}
