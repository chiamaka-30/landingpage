import React from 'react';
import { BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-teal-700 rounded flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-medium text-gray-800">Tech book club</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;