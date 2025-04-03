import { useState } from 'react';
import Head from 'next/head';
import ActionCard from '../components/ActionCard';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { dummyActions } from '../src/data/dummyData';

export default function Home() {
  const [actions] = useState(dummyActions);
  const [loading] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>What Trump Has Done Today | Factual Information</title>
        <meta name="description" content="Factual, cited information about Donald Trump's recent actions" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">What Trump Has Done Today</h1>
          <p className="text-gray-600 mb-8">Factual, cited information about Donald Trump's recent actions</p>
          
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
              <p className="text-gray-600">No actions recorded today.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 