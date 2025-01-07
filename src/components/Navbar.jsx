import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl">CCL</Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/teams" className="hover:text-gray-300">Teams</Link>
            <Link to="/schedule" className="hover:text-gray-300">Schedule</Link>
            <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <Link to="/teams" className="hover:text-gray-300">Teams</Link>
              <Link to="/schedule" className="hover:text-gray-300">Schedule</Link>
              <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;