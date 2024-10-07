'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Idea } from '../../../types/Idea';
import Navbar from '../../../components/Navbar';

export default function IdeaPage({ params }: { params: { id: string } }) {
  const [idea, setIdea] = useState<Idea | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('details');

  useEffect(() => {
    async function fetchIdea() {
      try {
        const response = await fetch(`/api/ideas/${params.id}`);
        if (!response.ok) {
          notFound();
        }
        const data = await response.json();
        setIdea(data);
      } catch (error) {
        console.error('Failed to fetch idea:', error);
        notFound();
      } finally {
        setIsLoading(false);
      }
    }
    fetchIdea();
  }, [params.id]);

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!idea) {
    return notFound();
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <Link href="/ideas" className="text-indigo-600 hover:underline mb-4 inline-block">
        ← Back to Ideas
      </Link>
      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold mb-4"
      >
        {idea.title}
      </motion.h1>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white shadow-md rounded-lg p-6 mb-6"
      >
        <p className="text-gray-600 mb-4">{idea.description}</p>
        <div className="mb-4">
          <span className="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
            {idea.category}
          </span>
        </div>
        
        {/* Tabs */}
        <div className="mb-4">
          <button 
            onClick={() => setActiveTab('details')}
            className={`mr-4 ${activeTab === 'details' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'}`}
          >
            Details
          </button>
          <button 
            onClick={() => setActiveTab('solutions')}
            className={`mr-4 ${activeTab === 'solutions' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'}`}
          >
            Solutions
          </button>
          <button 
            onClick={() => setActiveTab('market')}
            className={`${activeTab === 'market' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'}`}
          >
            Market
          </button>
        </div>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'details' && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
              <p className="mb-4">{idea.details}</p>
              <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
              <ul className="list-disc list-inside mb-4">
                {idea.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'solutions' && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Potential Solutions</h2>
              <ul className="list-disc list-inside mb-4">
                {idea.potentialSolutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'market' && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Market Potential</h2>
              <p className="mb-4">{idea.marketPotential}</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}