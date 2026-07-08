import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          ResumeRoast
        </h1>
        <p className="text-center text-gray-600 mt-2">
          AI-Powered Career Coach & Resume Optimizer
        </p>
        
        <div className="mt-8 flex justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Welcome to ResumeRoast!
            </h2>
            <p className="text-gray-600">
              Upload your resume, paste a job description, and let AI optimize your application.
            </p>
            <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-blue-700">
                🚀 Backend API Status: 
                <a href="http://localhost:5000/api/health" target="_blank" className="ml-2 underline">
                  Check Health
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;