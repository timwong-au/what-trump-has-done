import { useState } from 'react';
import { FaComment, FaTwitter, FaFacebook, FaShare, FaLink } from 'react-icons/fa';

export default function ActionCard({ action }) {
  const [expanded, setExpanded] = useState(false);
  const [showComments, setShowComments] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg p-5 mb-6 shadow-sm hover:shadow-md transition-shadow bg-white">
      {/* Collapsed View */}
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 hover:text-blue-700 cursor-pointer" onClick={() => setExpanded(!expanded)}>
            {action.title}
          </h2>
          <p className="text-gray-500 text-sm mt-1">{action.date}</p>
          <p className="mt-3 text-gray-700">{action.shortDescription}</p>
        </div>
        <div className="flex flex-col items-end space-y-3 ml-4">
          <div className="flex items-center space-x-3">
            <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
              <FaComment className="mr-1" /> {action.commentCount}
            </button>
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-blue-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                <FaTwitter />
              </button>
              <button className="text-gray-500 hover:text-blue-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                <FaFacebook />
              </button>
              <button className="text-gray-500 hover:text-blue-600 transition-colors p-1 rounded-full hover:bg-gray-100">
                <FaLink />
              </button>
            </div>
          </div>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
          >
            {expanded ? 'Collapse' : 'Read More'}
          </button>
        </div>
      </div>
      
      {/* Expanded View */}
      {expanded && (
        <div className="mt-6 border-t pt-4">
          <p className="mb-6 text-gray-700 leading-relaxed">{action.longDescription}</p>
          
          {/* Sources */}
          <div className="mb-6 bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="font-bold mb-4 text-gray-800">Sources:</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Left-leaning sources */}
              {action.sources.leftLeaning.length > 0 && (
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2 pb-1 border-b border-blue-200">Left-leaning Sources:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {action.sources.leftLeaning.slice(0, 5).map((source, index) => (
                      <li key={index}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {source.title} <span className="text-gray-500 text-sm">- {source.publication}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Centrist sources */}
              {action.sources.centrist.length > 0 && (
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2 pb-1 border-b border-purple-200">Centrist Sources:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {action.sources.centrist.slice(0, 5).map((source, index) => (
                      <li key={index}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                          {source.title} <span className="text-gray-500 text-sm">- {source.publication}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Right-leaning sources */}
              {action.sources.rightLeaning.length > 0 && (
                <div>
                  <h4 className="font-semibold text-red-600 mb-2 pb-1 border-b border-red-200">Right-leaning Sources:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {action.sources.rightLeaning.slice(0, 5).map((source, index) => (
                      <li key={index}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                          {source.title} <span className="text-gray-500 text-sm">- {source.publication}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          
          {/* Comments Section */}
          <div>
            <button 
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium" 
              onClick={() => setShowComments(!showComments)}
            >
              <FaComment className="mr-2" /> 
              {showComments ? 'Hide Comments' : `Show Comments (${action.commentCount})`}
            </button>
            
            {showComments && (
              <div className="mt-4">
                {/* Dummy comments */}
                <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
                  <div className="flex justify-between">
                    <p className="font-semibold text-gray-800">Anonymous User</p>
                    <p className="text-sm text-gray-500">Posted on {action.date}</p>
                  </div>
                  <p className="mt-2 text-gray-700">This is an interesting development. I wonder how this will affect the economy.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
                  <div className="flex justify-between">
                    <p className="font-semibold text-gray-800">Jane Smith</p>
                    <p className="text-sm text-gray-500">Posted on {action.date}</p>
                  </div>
                  <p className="mt-2 text-gray-700">I disagree with this policy. Here's why I think it won't work as intended...</p>
                </div>
                
                {/* Comment form */}
                <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
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
            )}
          </div>
        </div>
      )}
    </div>
  );
} 