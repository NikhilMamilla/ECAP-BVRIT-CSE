import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const externalUrl = searchParams.get('url');
  const [countdown, setCountdown] = useState(10);
  const [autoRedirect, setAutoRedirect] = useState(true);

  // Auto-redirect countdown
  useEffect(() => {
    if (!externalUrl || !autoRedirect) return;
    
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = externalUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [externalUrl, autoRedirect]);

  // Basic security check: if no URL, don't render a link
  if (!externalUrl) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full border border-gray-200">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Redirect</h1>
            <p className="text-gray-600 mb-6">No destination URL was provided.</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full border border-gray-200">
        <div className="text-center">
          {/* Warning Icon */}
          <div className="mx-auto w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            You're Leaving Our Website
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            You are being redirected to an external website. Please verify the destination before proceeding.
          </p>

          {/* Destination URL */}
          <div className="bg-gray-50 rounded-lg p-4 mb-8 border border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-2">Destination:</p>
            <div className="bg-white rounded-md p-3 border border-gray-300">
              <p className="text-gray-800 break-all font-mono text-sm">{externalUrl}</p>
            </div>
          </div>

          {/* Auto-redirect section */}
          {autoRedirect && (
            <div className="bg-teal-50 rounded-lg p-4 mb-6 border border-blue-200">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-blue-700 font-medium">Auto-redirecting in {countdown} seconds</span>
              </div>
              <button
                onClick={() => setAutoRedirect(false)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium underline"
              >
                Cancel auto-redirect
              </button>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Continue to External Site</span>
            </a>
            
            <button
              onClick={() => navigate('/')}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Return to Home</span>
            </button>
          </div>

          {/* Security Note */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-700">Security Notice</p>
                <p className="text-xs text-gray-600 mt-1">
                  Always verify that you trust the destination website before proceeding. We are not responsible for external content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RedirectPage;