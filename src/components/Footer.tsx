import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#022d38] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-sm">
          © 2024 - Tech Book Club
        </div>
        
        <div className="flex items-center space-x-4">
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;