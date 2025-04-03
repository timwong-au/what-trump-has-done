import { useState } from 'react';
import Head from 'next/head';
import ActionCard from '../../components/ActionCard';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { dummyActions } from '../data/dummyData';

export default function Home() {
  const [actions] = useState(dummyActions);
  const [loading] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>What Trump Has Done Today | Factual Information</title>
        <meta name="description" content="Factual, cited information about Donald Trump's recent actions" />
      </Head>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6">What Trump Has Done Today</h1>
        
        {loading ? (
          <p>Loading...</p>
        ) : actions.length > 0 ? (
          <div>
            {actions.map(action => (
              <ActionCard key={action.id} action={action} />
            ))}
          </div>
        ) : (
          <p>No actions recorded today.</p>
        )}
      </main>
      
      <Footer />
    </div>
  );
} 