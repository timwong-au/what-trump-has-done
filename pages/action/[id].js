import { useState, useEffect } from 'react'; // Need useEffect again here!
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navigation from '../../components/Navigation'; // Check path: should likely be ../../components/Navigation
import Footer from '../../components/Footer';       // Check path: should likely be ../../components/Footer
// Assuming service is in root src folder
import { getActionById } from '../../src/services/actionService'; 

// Ensure this function is exported as default
export default function ActionDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const [action, setAction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchAction() {
      if (!id) return;
      
      try {
        setLoading(true);
        // Use dummy data for now if API isn't ready
        // const actionData = await getActionById(id); 
        const { dummyActions } = await import('../../data/dummyData'); // Fetch dummy data
        const actionData = dummyActions.find(a => a.id === id);       // Find the action

        if (actionData) {
          setAction(actionData);
          setError(null);
        } else {
          setError('Action not found.');
          setAction(null);
        }
      } catch (err) {
        console.error(`Failed to fetch action with ID ${id}:`, err);
        setError('Failed to load action. Please try again later.');
        setAction(null);
      } finally {
        setLoading(false);
      }
    }
    
    fetchAction();
  }, [id]); // Add id as a dependency
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>{action ? `${action.title} | What Trump Has Done` : error ? 'Action Not Found' : 'Loading Action...'}</title>
        <meta name="description" content={action?.shortDescription || error || 'Loading action details...'} />
        {/* Font link is in _document.js, no need here */}
      </Head>
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500">Loading...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-red-700 text-center">
              {error}
            </div>
          ) : action ? (
            <div className="bg-white rounded-lg shadow p-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{action.title}</h1>
              <p className="text-gray-500 text-sm">{action.date}</p>
              
              <div className="mt-6 prose prose-lg max-w-none">
                {/* Removed potentially problematic extra p tags if they exist */}
                {/* Display longDescription directly if it's just text */}
                <p className="text-gray-700">{action.longDescription}</p> 
              </div>
              
              {/* Sources Section */}
              {/* Ensure sources object exists before trying to access its properties */}
              {action.sources && (
                <div className="mt-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Sources</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Left-leaning Sources */}
                    {action.sources.leftLeaning && action.sources.leftLeaning.length > 0 && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold text-blue-800 mb-2">Left-Leaning Sources</h3>
                        <ul className="space-y-2">
                          {action.sources.leftLeaning.map((source, index) => (
                            <li key={`left-${index}`} className="text-sm">
                              <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                {source.title}
                              </a>
                              <p className="text-gray-600 text-xs">{source.publication}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Centrist Sources */}
                    {action.sources.centrist && action.sources.centrist.length > 0 && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-bold text-gray-800 mb-2">Centrist Sources</h3>
                        <ul className="space-y-2">
                          {action.sources.centrist.map((source, index) => (
                            <li key={`center-${index}`} className="text-sm">
                              <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                                {source.title}
                              </a>
                              <p className="text-gray-600 text-xs">{source.publication}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Right-leaning Sources */}
                     {action.sources.rightLeaning && action.sources.rightLeaning.length > 0 && (
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-bold text-red-800 mb-2">Right-Leaning Sources</h3>
                        <ul className="space-y-2">
                          {action.sources.rightLeaning.map((source, index) => (
                            <li key={`right-${index}`} className="text-sm">
                              <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                                {source.title}
                              </a>
                              <p className="text-gray-600 text-xs">{source.publication}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                     )}
                  </div>
                </div>
              )}
              
              {/* Comments Section (Simplified for now) */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Comments ({action.commentCount})
                </h2>
                {/* Display dummy comments or a link to a separate comments page */}
                <p className="text-gray-600">Comments section placeholder.</p>
                {/* Comment Form */}
                <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-2">Add your comment</h4>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                    placeholder="Share your thoughts..."
                    rows={3}
                  />
                  <button className="mt-3 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors font-medium">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          ) : (
             // This case might not be reached if error handles not found
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-600">Action details could not be loaded.</p>
            </div>
          )}
          
          {/* Back Button */}
          <div className="mt-6">
            <button 
              onClick={() => router.back()} 
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              <span>← Back</span>
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// Removed getServerSideProps or getStaticProps if not being used 