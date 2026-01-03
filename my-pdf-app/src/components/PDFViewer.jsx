// src/components/PDFViewer.jsx
import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="h-full w-full bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Matches the version installed in package.json */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer
          fileUrl="/sample.pdf" 
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;
