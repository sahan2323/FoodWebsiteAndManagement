import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo">
          <span>Foodie</span>
          <span className="text-gradient"> Delight</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-link">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/menu" className="nav-link">
                <span>Menu</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link">
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link relative">
                <span>Cart</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--primary-dark)] border-t border-[var(--accent-gold)]/20">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-white hover:text-[var(--accent-gold)] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className="block text-white hover:text-[var(--accent-gold)] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="block text-white hover:text-[var(--accent-gold)] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block text-white hover:text-[var(--accent-gold)] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="block text-white hover:text-[var(--accent-gold)] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cart ({cart.length})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}