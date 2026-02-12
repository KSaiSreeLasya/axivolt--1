/**
 * Email Service Debugging Utility
 * Use this to diagnose EmailJS configuration issues
 * Call window.__debugEmail() in browser console for full diagnostics
 */

export const emailDebugReport = () => {
  const report = {
    timestamp: new Date().toISOString(),
    environment: import.meta.env.PROD ? 'production' : 'development',
    
    // Check environment variables
    environmentVariables: {
      VITE_EMAILJS_PUBLIC_KEY: {
        configured: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        value: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 
          `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY.substring(0, 8)}...` : 'NOT SET',
        type: typeof import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      },
      VITE_EMAILJS_SERVICE_ID: {
        configured: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
        value: import.meta.env.VITE_EMAILJS_SERVICE_ID ? 
          `${import.meta.env.VITE_EMAILJS_SERVICE_ID.substring(0, 8)}...` : 'NOT SET',
        type: typeof import.meta.env.VITE_EMAILJS_SERVICE_ID,
      },
      VITE_EMAILJS_CONTACT_TEMPLATE_ID: {
        configured: !!import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        value: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'NOT SET (default: contact_template)',
        type: typeof import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
      },
      VITE_EMAILJS_QUOTE_TEMPLATE_ID: {
        configured: !!import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID,
        value: import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID || 'NOT SET (default: quote_template)',
        type: typeof import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID,
      },
      VITE_EMAILJS_JOB_TEMPLATE_ID: {
        configured: !!import.meta.env.VITE_EMAILJS_JOB_TEMPLATE_ID,
        value: import.meta.env.VITE_EMAILJS_JOB_TEMPLATE_ID || 'NOT SET (default: job_template)',
        type: typeof import.meta.env.VITE_EMAILJS_JOB_TEMPLATE_ID,
      },
      VITE_ADMIN_EMAIL: {
        configured: !!import.meta.env.VITE_ADMIN_EMAIL,
        value: import.meta.env.VITE_ADMIN_EMAIL || 'NOT SET (default: contac@axivolt.in)',
        type: typeof import.meta.env.VITE_ADMIN_EMAIL,
      },
    },

    // Check critical configuration
    criticalCheck: {
      publicKeySet: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      serviceIdSet: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
      bothConfigured: !!(
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY && 
        import.meta.env.VITE_EMAILJS_SERVICE_ID
      ),
      status: !!(
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY && 
        import.meta.env.VITE_EMAILJS_SERVICE_ID
      ) ? '✅ READY TO SEND EMAILS' : '❌ MISSING CONFIGURATION',
    },

    // Browser info
    browser: {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    },

    // Local storage check (for any cached values)
    localStorage: {
      keys: Object.keys(localStorage),
      size: new Blob(Object.values(localStorage)).size,
    },
  };

  return report;
};

// Print formatted debug info
export const printEmailDebug = () => {
  const report = emailDebugReport();
  console.clear();
  console.log('='.repeat(80));
  console.log('EMAIL SERVICE DEBUG REPORT');
  console.log('='.repeat(80));
  console.log('Timestamp:', report.timestamp);
  console.log('Environment:', report.environment);
  console.log('');
  console.log('CRITICAL STATUS:', report.criticalCheck.status);
  console.log('');
  console.log('Environment Variables:');
  console.table(report.environmentVariables);
  console.log('');
  console.log('Critical Check Details:');
  console.table(report.criticalCheck);
  console.log('');
  console.log('Full Report:');
  console.log(report);
  console.log('='.repeat(80));
  
  // Return report for further inspection
  return report;
};

// Specific checks for common issues
export const checkCommonIssues = () => {
  const issues: string[] = [];

  if (!import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
    issues.push('❌ VITE_EMAILJS_PUBLIC_KEY is not set');
  }
  if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
    issues.push('❌ VITE_EMAILJS_SERVICE_ID is not set');
  }
  if (!import.meta.env.VITE_ADMIN_EMAIL) {
    issues.push('⚠️ VITE_ADMIN_EMAIL is not set (will use default)');
  }
  if (!import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID) {
    issues.push('⚠️ VITE_EMAILJS_CONTACT_TEMPLATE_ID is not set (will use default)');
  }

  if (issues.length === 0) {
    issues.push('✅ All critical configuration appears to be set');
  }

  console.log('Common Issues Check:');
  issues.forEach(issue => console.log(issue));

  return issues;
};

// Make debug functions available globally
if (typeof window !== 'undefined') {
  (window as any).__debugEmail = () => printEmailDebug();
  (window as any).__emailIssues = () => checkCommonIssues();
  (window as any).__emailReport = () => emailDebugReport();
  
  console.log('EmailJS Debug tools available:');
  console.log('- window.__debugEmail() : Full debug report');
  console.log('- window.__emailIssues() : Check for common issues');
  console.log('- window.__emailReport() : Get structured report');
}
