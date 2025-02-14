import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
  id: string;
  name: string;
  image: string;
  price: number;
}

// Mock search results - replace with actual API call
const mockResults: SearchResult[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 299.99,
  },
  {
    id: '2',
    name: 'Smart Watch Series 5',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    price: 399.99,
  },
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length > 2) {
      setIsSearching(true);
      // Simulate API call
      setTimeout(() => {
        setResults(mockResults.filter(item =>
          item.name.toLowerCase().includes(value.toLowerCase())
        ));
        setIsSearching(false);
      }, 300);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <AnimatePresence>
        {(results.length > 0 || isSearching) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg"
          >
            {isSearching ? (
              <div className="p-4 text-center text-gray-500">Searching...</div>
            ) : (
              <div className="max-h-96 overflow-auto">
                {results.map((result) => (
                  <a
                    key={result.id}
                    href={`/product/${result.id}`}
                    className="flex items-center p-4 hover:bg-gray-50"
                  >
                    <img
                      src={result.image}
                      alt={result.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">
                        {result.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        ${result.price.toFixed(2)}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}