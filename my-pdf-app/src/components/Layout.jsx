// src/components/Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* 1. Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
        <h1 className="text-xl font-bold mb-6 text-indigo-600">DocuChat</h1>
        <ul>
          <li className="p-2 bg-indigo-50 text-indigo-700 rounded mb-2 cursor-pointer">Files</li>
          <li className="p-2 hover:bg-gray-50 text-gray-600 rounded cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* 2. Main Content (PDF Viewer) */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-6 shadow-sm z-10">
          <h2 className="font-semibold text-gray-700">Document Viewer</h2>
        </header>
        <main className="flex-1 overflow-auto bg-gray-50 relative p-4">
           {children}
        </main>
      </div>

      {/* 3. Right Chat Sidebar */}
      <div className="w-80 bg-white border-l border-gray-200 flex flex-col h-full">
        <div className="p-4 border-b border-gray-100">
           <h3 className="font-semibold">Chat Assistant</h3>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
           <div className="bg-gray-100 p-3 rounded-lg mb-2 text-sm">Hello! How can I help with this PDF?</div>
        </div>
        <div className="p-4 border-t border-gray-100">
           <input 
             type="text" 
             placeholder="Ask a question..." 
             className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
           />
        </div>
      </div>
    </div>
  );
};

export default Layout;