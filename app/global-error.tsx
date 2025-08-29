"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";
interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error, 'ERRRRRRRRRRRRRRRRRRRRRR');
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-primary-50 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-destructive-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg 
                  className="w-8 h-8 text-destructive-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              
              <h1 className="text-3xl font-bold text-primary-900 mb-4">
                Application Error
              </h1>
              
              <p className="text-lg text-primary-600 mb-8">
                A critical error occurred. Please refresh the page or try again later.
              </p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={reset}
                className="w-full bg-primary-600 text-primary-50 px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-all duration-200"
              >
                Try Again
              </button>
              
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full bg-primary-200 text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-primary-300 transition-all duration-200"
              >
                Go Back Home
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-primary-200">
              <p className="text-sm text-primary-500">
                If this problem persists, please contact support.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}