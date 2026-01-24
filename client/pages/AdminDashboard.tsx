import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Briefcase,
  Eye,
  Trash2,
  Download,
  Plus,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import { supabase } from "@/lib/supabase";
import { toast, Toaster } from "sonner";
import Swal from "sweetalert2";

type SubmissionType = "contact" | "quote" | "application" | "jobs";

interface ContactSubmission {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}

interface QuoteRequest {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  company_name: string;
  project_type: string;
  budget_range: string;
  status: string;
  created_at: string;
}

interface JobApplication {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  job_id: string;
  application_status: string;
  created_at: string;
}

interface Job {
  id?: string;
  title: string;
  department: string;
  location: string;
  job_type: string;
  experience_required: string;
  description: string;
  requirements: string[];
  benefits: string[];
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<SubmissionType>("contact");
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [viewDetailModal, setViewDetailModal] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [jobForm, setJobForm] = useState<Job>({
    title: "",
    department: "",
    location: "",
    job_type: "",
    experience_required: "",
    description: "",
    requirements: [],
    benefits: [],
    is_active: true,
  });

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === "contact") {
        const { data, error } = await supabase
          .from("contact_form_submissions")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        setContacts(data || []);
      } else if (activeTab === "quote") {
        const { data, error } = await supabase
          .from("quote_requests")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        setQuotes(data || []);
      } else if (activeTab === "application") {
        const { data, error } = await supabase
          .from("job_applications")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        setApplications(data || []);
      } else if (activeTab === "jobs") {
        const { data, error } = await supabase
          .from("jobs")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;
        setJobs(data || []);
      }
    } catch (err) {
      toast.error("Failed to fetch data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (id: string, table: string) => {
    if (!confirm("Are you sure you want to delete this?")) return;

    try {
      const { error } = await supabase.from(table).delete().eq("id", id);
      if (error) throw error;
      toast.success("Deleted successfully");
      fetchData();
    } catch (err) {
      toast.error("Failed to delete");
      console.error(err);
    }
  };

  const updateStatus = async (id: string, table: string, newStatus: string) => {
    try {
      const statusField =
        table === "job_applications" ? "application_status" : "status";
      const { error } = await supabase
        .from(table)
        .update({ [statusField]: newStatus })
        .eq("id", id);
      if (error) throw error;
      toast.success("Status updated");
      fetchData();
    } catch (err) {
      toast.error("Failed to update status");
      console.error(err);
    }
  };

  const handleSaveJob = async () => {
    if (!jobForm.title || !jobForm.department || !jobForm.location) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in all required fields',
        confirmButtonColor: '#047F86',
      });
      return;
    }

    try {
      if (editingJob?.id) {
        // Update existing job
        const { error } = await supabase
          .from("jobs")
          .update(jobForm)
          .eq("id", editingJob.id);
        if (error) throw error;
        toast.success("Job updated successfully");
      } else {
        // Create new job
        const { error } = await supabase.from("jobs").insert([jobForm]);
        if (error) throw error;
        toast.success("Job created successfully");
      }
      setShowJobModal(false);
      setEditingJob(null);
      setJobForm({
        title: "",
        department: "",
        location: "",
        job_type: "",
        experience_required: "",
        description: "",
        requirements: [],
        benefits: [],
        is_active: true,
      });
      fetchData();
    } catch (err) {
      toast.error("Failed to save job");
      console.error(err);
    }
  };

  const handleEditJob = (job: Job) => {
    setEditingJob(job);
    setJobForm(job);
    setShowJobModal(true);
  };

  const handleOpenNewJobModal = () => {
    setEditingJob(null);
    setJobForm({
      title: "",
      department: "",
      location: "",
      job_type: "",
      experience_required: "",
      description: "",
      requirements: [],
      benefits: [],
      is_active: true,
    });
    setShowJobModal(true);
  };

  const exportToCSV = () => {
    let data: any[] = [];
    let filename = "";

    if (activeTab === "contact") {
      data = contacts;
      filename = "contacts.csv";
    } else if (activeTab === "quote") {
      data = quotes;
      filename = "quotes.csv";
    } else {
      data = applications;
      filename = "applications.csv";
    }

    if (data.length === 0) {
      toast.error("No data to export");
      return;
    }

    const csv = [
      Object.keys(data[0]).join(","),
      ...data.map((item) =>
        Object.values(item)
          .map((v) => `"${v}"`)
          .join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    toast.success("Exported successfully");
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: "bg-blue-500/20 text-blue-400",
      pending: "bg-yellow-500/20 text-yellow-400",
      responded: "bg-green-500/20 text-green-400",
      reviewed: "bg-green-500/20 text-green-400",
      quoted: "bg-cyan/20 text-cyan",
      won: "bg-green-500/20 text-green-400",
      lost: "bg-red-500/20 text-red-400",
    };
    return colors[status] || "bg-gray-500/20 text-gray-400";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">
            Manage all contact forms, quotes, and job applications
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border overflow-x-auto">
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
              activeTab === "contact"
                ? "border-cyan text-cyan"
                : "border-transparent text-gray-400 hover:text-foreground"
            }`}
          >
            <Mail className="inline-block mr-2 w-5 h-5" />
            Contact Forms ({contacts.length})
          </button>
          <button
            onClick={() => setActiveTab("quote")}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
              activeTab === "quote"
                ? "border-cyan text-cyan"
                : "border-transparent text-gray-400 hover:text-foreground"
            }`}
          >
            <MessageSquare className="inline-block mr-2 w-5 h-5" />
            Quote Requests ({quotes.length})
          </button>
          <button
            onClick={() => setActiveTab("application")}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
              activeTab === "application"
                ? "border-cyan text-cyan"
                : "border-transparent text-gray-400 hover:text-foreground"
            }`}
          >
            <Briefcase className="inline-block mr-2 w-5 h-5" />
            Applications ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab("jobs")}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 whitespace-nowrap ${
              activeTab === "jobs"
                ? "border-cyan text-cyan"
                : "border-transparent text-gray-400 hover:text-foreground"
            }`}
          >
            <Briefcase className="inline-block mr-2 w-5 h-5" />
            Jobs ({jobs.length})
          </button>
        </div>

        {/* Export and Action Buttons */}
        <div className="mb-6 flex gap-4">
          <button
            onClick={exportToCSV}
            className="bg-cyan text-background px-4 py-2 rounded-lg font-semibold hover:bg-cyan/90 transition-all flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Export to CSV
          </button>
          {activeTab === "jobs" && (
            <button
              onClick={handleOpenNewJobModal}
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add New Job
            </button>
          )}
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading...</p>
          </div>
        ) : activeTab === "contact" ? (
          <ContactsTable
            contacts={contacts}
            onView={(item) => {
              setSelectedItem(item);
              setViewDetailModal(true);
            }}
            onDelete={(id) => deleteItem(id, "contact_form_submissions")}
            onUpdateStatus={(id, status) =>
              updateStatus(id, "contact_form_submissions", status)
            }
            getStatusColor={getStatusColor}
          />
        ) : activeTab === "quote" ? (
          <QuotesTable
            quotes={quotes}
            onView={(item) => {
              setSelectedItem(item);
              setViewDetailModal(true);
            }}
            onDelete={(id) => deleteItem(id, "quote_requests")}
            onUpdateStatus={(id, status) =>
              updateStatus(id, "quote_requests", status)
            }
            getStatusColor={getStatusColor}
          />
        ) : activeTab === "application" ? (
          <ApplicationsTable
            applications={applications}
            onView={(item) => {
              setSelectedItem(item);
              setViewDetailModal(true);
            }}
            onDelete={(id) => deleteItem(id, "job_applications")}
            onUpdateStatus={(id, status) =>
              updateStatus(id, "job_applications", status)
            }
            getStatusColor={getStatusColor}
          />
        ) : (
          <JobsTable
            jobs={jobs}
            onEdit={handleEditJob}
            onDelete={(id) => deleteItem(id, "jobs")}
            onToggleActive={(id, active) =>
              updateStatus(id, "jobs", active ? "true" : "false")
            }
          />
        )}
      </div>

      {/* Detail Modal */}
      {viewDetailModal && selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold">Details</h2>
              <button
                onClick={() => setViewDetailModal(false)}
                className="text-gray-400 hover:text-foreground"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              {Object.entries(selectedItem).map(([key, value]) => (
                <div key={key} className="border-b border-border pb-3">
                  <p className="text-sm text-gray-400 capitalize">
                    {key.replace(/_/g, " ")}
                  </p>
                  <p className="font-medium text-foreground break-words">
                    {String(value || "-")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Job Modal */}
      {showJobModal && (
        <JobModal
          job={jobForm}
          isEditing={!!editingJob}
          onChange={(field, value) =>
            setJobForm((prev) => ({ ...prev, [field]: value }))
          }
          onSave={handleSaveJob}
          onClose={() => setShowJobModal(false)}
        />
      )}
    </div>
  );
}

function ContactsTable({
  contacts,
  onView,
  onDelete,
  onUpdateStatus,
  getStatusColor,
}: any) {
  if (contacts.length === 0) {
    return <p className="text-gray-400 text-center py-8">No contacts yet</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-semibold">Name</th>
            <th className="text-left py-3 px-4 font-semibold">Email</th>
            <th className="text-left py-3 px-4 font-semibold">Subject</th>
            <th className="text-left py-3 px-4 font-semibold">Status</th>
            <th className="text-left py-3 px-4 font-semibold">Date</th>
            <th className="text-left py-3 px-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="border-b border-border hover:bg-card/50">
              <td className="py-3 px-4">{contact.full_name}</td>
              <td className="py-3 px-4">{contact.email}</td>
              <td className="py-3 px-4 truncate">{contact.subject}</td>
              <td className="py-3 px-4">
                <select
                  value={contact.status}
                  onChange={(e) => onUpdateStatus(contact.id, e.target.value)}
                  className={`px-3 py-1 rounded text-sm font-medium ${getStatusColor(contact.status)} bg-transparent border-0 cursor-pointer`}
                >
                  <option value="new">New</option>
                  <option value="responded">Responded</option>
                  <option value="in_progress">In Progress</option>
                </select>
              </td>
              <td className="py-3 px-4 text-sm text-gray-400">
                {new Date(contact.created_at).toLocaleDateString()}
              </td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => onView(contact)}
                    className="text-cyan hover:text-cyan/80"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDelete(contact.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function QuotesTable({
  quotes,
  onView,
  onDelete,
  onUpdateStatus,
  getStatusColor,
}: any) {
  if (quotes.length === 0) {
    return <p className="text-gray-400 text-center py-8">No quote requests yet</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-semibold">Name</th>
            <th className="text-left py-3 px-4 font-semibold">Email</th>
            <th className="text-left py-3 px-4 font-semibold">Project Type</th>
            <th className="text-left py-3 px-4 font-semibold">Budget</th>
            <th className="text-left py-3 px-4 font-semibold">Status</th>
            <th className="text-left py-3 px-4 font-semibold">Date</th>
            <th className="text-left py-3 px-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote) => (
            <tr key={quote.id} className="border-b border-border hover:bg-card/50">
              <td className="py-3 px-4">{quote.full_name}</td>
              <td className="py-3 px-4">{quote.email}</td>
              <td className="py-3 px-4">{quote.project_type}</td>
              <td className="py-3 px-4">{quote.budget_range}</td>
              <td className="py-3 px-4">
                <select
                  value={quote.status}
                  onChange={(e) => onUpdateStatus(quote.id, e.target.value)}
                  className={`px-3 py-1 rounded text-sm font-medium ${getStatusColor(quote.status)} bg-transparent border-0 cursor-pointer`}
                >
                  <option value="pending">Pending</option>
                  <option value="quoted">Quoted</option>
                  <option value="won">Won</option>
                  <option value="lost">Lost</option>
                </select>
              </td>
              <td className="py-3 px-4 text-sm text-gray-400">
                {new Date(quote.created_at).toLocaleDateString()}
              </td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => onView(quote)}
                    className="text-cyan hover:text-cyan/80"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDelete(quote.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ApplicationsTable({
  applications,
  onView,
  onDelete,
  onUpdateStatus,
  getStatusColor,
}: any) {
  if (applications.length === 0) {
    return <p className="text-gray-400 text-center py-8">No applications yet</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-semibold">Name</th>
            <th className="text-left py-3 px-4 font-semibold">Email</th>
            <th className="text-left py-3 px-4 font-semibold">Phone</th>
            <th className="text-left py-3 px-4 font-semibold">Status</th>
            <th className="text-left py-3 px-4 font-semibold">Date</th>
            <th className="text-left py-3 px-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id} className="border-b border-border hover:bg-card/50">
              <td className="py-3 px-4">{app.full_name}</td>
              <td className="py-3 px-4">{app.email}</td>
              <td className="py-3 px-4">{app.phone}</td>
              <td className="py-3 px-4">
                <select
                  value={app.application_status}
                  onChange={(e) => onUpdateStatus(app.id, e.target.value)}
                  className={`px-3 py-1 rounded text-sm font-medium ${getStatusColor(app.application_status)} bg-transparent border-0 cursor-pointer`}
                >
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="shortlisted">Shortlisted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
              <td className="py-3 px-4 text-sm text-gray-400">
                {new Date(app.created_at).toLocaleDateString()}
              </td>
              <td className="py-3 px-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => onView(app)}
                    className="text-cyan hover:text-cyan/80"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDelete(app.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
