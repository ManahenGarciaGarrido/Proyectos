'use client';

import { useState } from 'react';
import Header from './components/Header';
import CodeInput from './components/CodeInput';
import ExplanationDisplay from './components/ExplanationDisplay';
import { ExplanationResponse } from '@/types';

export default function Home() {
  const [explanation, setExplanation] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleExplain = async (code: string, language: string) => {
    setIsLoading(true);
    setError('');
    setExplanation('');

    try {
      const response = await fetch('/api/explain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, language }),
      });

      const data: ExplanationResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get explanation');
      }

      setExplanation(data.explanation);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Understand Code Instantly with AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Paste any code snippet and get a detailed, easy-to-understand explanation
            powered by Google Gemini AI
          </p>
        </div>

        {/* Main Content */}
        <CodeInput onExplain={handleExplain} isLoading={isLoading} />

        {/* Explanation Display */}
        <ExplanationDisplay explanation={explanation} error={error} />

        {/* Features Section */}
        {!explanation && !isLoading && (
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              How It Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Paste Code</h4>
                <p className="text-gray-600">
                  Copy and paste any code snippet in any programming language
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">2. AI Analysis</h4>
                <p className="text-gray-600">
                  Our AI analyzes the code structure, logic, and patterns
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Get Explanation</h4>
                <p className="text-gray-600">
                  Receive a clear, detailed explanation in seconds
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer Info */}
        <div className="max-w-4xl mx-auto mt-16 text-center text-sm text-gray-500">
          <p>
            CodeExplainer uses Google Gemini AI to provide accurate and helpful code explanations.
            Perfect for learning, code review, and understanding legacy code.
          </p>
        </div>
      </main>
    </div>
  );
}
