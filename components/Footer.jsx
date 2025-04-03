export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-700 font-medium">
          &copy; {new Date().getFullYear()} What Trump Has Done | A factual resource with cited references
        </p>
        <p className="text-gray-500 text-sm mt-3 max-w-2xl mx-auto">
          This site aims to provide factual, cited information about Donald Trump's actions.
          We strive for accuracy and balance in our reporting by including sources from across the political spectrum.
        </p>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-700">About</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Contact</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
} 