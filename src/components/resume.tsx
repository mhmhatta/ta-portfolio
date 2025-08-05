'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Image from 'next/image';

export function Resume() {
  const resumeDetails = {
    title: "Hatta's Resume",
    description: 'Software Developer • AI & Data Enthusiast',
    fileType: 'PDF',
    lastUpdated: 'Aug 2025',
    fileSize: '252 KB',
    previewImageSrc: '/CV-Preview.jpg',
    downloadUrl: '/CV.pdf',
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeDetails.downloadUrl;
    link.download = resumeDetails.downloadUrl.split('/').pop() || 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto w-full py-8 font-sans">
      <motion.div
        onClick={handleDownload}
        className="group relative cursor-pointer overflow-hidden rounded-xl bg-accent transition-all duration-300 aspect-[3/1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileHover={{ scale: 1.01 }}
      >
        <Image
          src={resumeDetails.previewImageSrc}
          alt="Resume Preview"
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 transition-all duration-300 group-hover:bg-black/60" />

        <div className="relative z-10 p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-primary-foreground">
                {resumeDetails.title}
              </h3>
              <p className="text-sm text-muted-foreground transition-colors group-hover:text-muted">
                {resumeDetails.description}
              </p>
              <div className="mt-1 flex text-xs text-muted-foreground transition-colors group-hover:text-muted">
                <span>{resumeDetails.fileType}</span>
                <span className="mx-2">•</span>
                <span>Updated {resumeDetails.lastUpdated}</span>
                <span className="mx-2">•</span>
                <span>{resumeDetails.fileSize}</span>
              </div>
            </div>

            {/* Download Indicator */}
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-primary-foreground transition-colors group-hover:bg-black"
              initial={{ scale: 1 }}
            >
              <Download className="h-5 w-5" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resume;