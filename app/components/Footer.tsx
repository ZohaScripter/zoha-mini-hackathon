// components/Footer.js
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Car Company. All Rights Reserved.</p>
        <div className="mt-4">
            Created by <br />
          <Link
            href="https://www.linkedin.com/in/zoha-nadeem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            Zoha Nadeem
          </Link>
        </div>
      </div>
    </footer>
  );
}
