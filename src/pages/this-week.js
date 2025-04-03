import { useState } from 'react';
import Head from 'next/head';
import ActionCard from '../../components/ActionCard';
import Navigation from '../../components/Navigation';
import { dummyActions } from '../data/dummyData';

export default function ThisWeek() {
  const [actions] = useState(dummyActions);
  const [loading] = useState(false);
  
  return (
    <div>
      <Head>
        <title>What Trump Has Done This Week | Factual Information</title>
        <meta name="description" content="Factual, cited information about Donald Trump's actions this week" />
      </Head>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">What Trump Has Done This Week</h1>
        
        {loading ? (
          <p>Loading...</p>
        ) : actions.length > 0 ? (
          <div>
            {actions.map(action => (
              <ActionCard key={action.id} action={action} />
            ))}
          </div>
        ) : (
          <p>No actions recorded this week.</p>
        )}
      </main>
    </div>
  );
} 