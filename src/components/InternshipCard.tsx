'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';

const InternshipCard = () => {
  const openMail = () => {
    window.open('mailto:muhammad.hatta18@gmail.com', '_blank');
  };
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="bg-muted h-30 w-30 overflow-hidden rounded-full shadow-md">
            <img
              src="/me2.jpg"
              alt="Hatta's Avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Muhammad Hatta Abdillah
            </h2>
            <p className="text-muted-foreground text-sm">
              Computer Science Graduate | AI & Software Development
            </p>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Live
          </span>
        </div>
      </div>

      {/* Internship Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Duration</p>
            <p className="text-muted-foreground text-sm">
              Available starting August 2025
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Location</p>
            <p className="text-muted-foreground text-sm">
              Medan, Indonesia
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Tech stack</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm">
              <ul className="decoration-none list-disc pl-4">
                <li>AI/Data : LangChain, GraphRAG, LLMs, Neo4j, RAG, Semantic Kernel</li>
                <li>Languages : Python, JavaScript, C#, Go</li>
                <li>Frameworks : FastAPI, ReactJS, .NET, Laravel </li>
                <li>Cloud : Google Cloud, Azure</li> 
                <li>Databases : SQL, MongoDB, Redis</li> 
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <GraduationCap className="mt-1 h-5 w-5 text-red-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Education</p>
            <div className="text-muted-foreground space-y-2 text-sm">
              <div>
                <p className="font-semibold">Universitas Sumatera Utara</p>
                <p className="text-xs">B.Sc. in Comp. Science - GPA: 3.91</p>
              </div>
              <div>
                <p className="font-semibold">Universiti Teknologi Mara</p>
                <p className="text-xs">Student Exchange - GPA: 3.61</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          What I bring
        </p>
        <p className="text-foreground text-sm">
          Real-world experience engineering a sophisticated GraphRAG system for a biomedical chatbot using LLMs, 
          LangChain, and Neo4j. Proven ability to deliver full-stack AI solutions, 
          from building Azure-powered RAG systems to integrating them into .NET and ReactJS applications. 
          Internship-hardened skills in performance optimization, cloud migration (GCP), 
          and database refinement from my time at Telkom Indonesia.
        </p>
      </div>

      {/* Goal */}
      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">Goal</p>
        <p className="text-foreground text-sm">
          Join a bold, innovative team building AI-powered tools that matter. I
          want to improve fast, contribute hard, and leave a mark. I’m fast,
          flexible, and HUNGRYYYYY 🔥
        </p>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Contact me
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;
