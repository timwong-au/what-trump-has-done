import { useState } from 'react';
import Head from 'next/head';
import ActionCard from '../components/ActionCard';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { dummyActions } from '../data/dummyData';

export default function ThisWeek() {
  const [actions] = useState(dummyActions);
  const [loading] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>What Trump Has Done This Week | Factual Information</title>
        <meta name="description" content="Factual, cited information about Donald Trump&apos;s actions this week" />
      </Head>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">What Trump Has Done This Week</h1>
          <p className="text-gray-600 mb-8">A summary of Donald Trump&apos;s actions from the past 7 days</p>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500">Loading...</p>
            </div>
          ) : actions.length > 0 ? (
            <div>
              {actions.map(action => (
                <ActionCard key={action.id} action={action} />
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-600">No actions recorded this week.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 