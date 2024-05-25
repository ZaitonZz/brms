'use client'

import React, { useState } from 'react';

const CertificationTemplate: React.FC = () => {
  const [header, setHeader] = useState('');
  const [content, setContent] = useState('');
  const [footer, setFooter] = useState('');

  const handleSave = () => {
   
    console.log('Header:', header);
    console.log('Content:', content);
    console.log('Footer:', footer);
  };

  return (
    <div className="p-8 max-w-lg mx-auto border border-gray-300 rounded-lg bg-white shadow-md mt-10 mb-24">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Certification Template</h1>
      <div className="mb-6">
        <label htmlFor="header" className="block text-sm font-medium text-gray-700">Header</label>
        <input
          id="header"
          type="text"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-32 resize-none"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="footer" className="block text-sm font-medium text-gray-700">Footer</label>
        <textarea
          id="footer"
          value={footer}
          onChange={(e) => setFooter(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-20 resize-none"
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => console.log('Back')}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3A8D31DE] hover:bg-[#3A8D31DE]"
        >
          Save
        </button>
      </div>
 
    </div>
  );
};

export default CertificationTemplate;
