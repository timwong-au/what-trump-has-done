import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold mb-4 md:mb-0 hover:text-blue-200 transition-colors">
          What Trump Has Done
        </Link>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/" className="font-medium hover:text-blue-200 transition-colors border-b-2 border-transparent hover:border-blue-200 pb-1">
            Today
          </Link>
          <Link href="/this-week" className="font-medium hover:text-blue-200 transition-colors border-b-2 border-transparent hover:border-blue-200 pb-1">
            This Week
          </Link>
          <Link href="/since-elected" className="font-medium hover:text-blue-200 transition-colors border-b-2 border-transparent hover:border-blue-200 pb-1">
            Since Elected
          </Link>
          <Link href="/2025" className="font-medium hover:text-blue-200 transition-colors border-b-2 border-transparent hover:border-blue-200 pb-1">
            2025
          </Link>
        </div>
      </div>
    </nav>
  );
} 