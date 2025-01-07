import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CCL 2025</h3>
            <p className="text-sm">Celebrity Cricket League - India's biggest entertainment cricket league</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/teams" className="hover:text-gray-300">Teams</a></li>
              <li><a href="/schedule" className="hover:text-gray-300">Schedule</a></li>
              <li><a href="/gallery" className="hover:text-gray-300">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-600">
          <p>&copy; 2025 Celebrity Cricket League. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;