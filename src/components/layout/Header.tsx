import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "What We Do", href: "/what-we-do" },
    { name: "Who Are We", href: "/who-are-we" },
    { name: "Reports", href: "/reports" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-lg py-1" 
          : "bg-white py-2"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/logoyapd_transparent.png" 
              alt="YAPD4Africa Logo" 
              className={cn(
                "transition-all duration-300",
                isScrolled ? "h-14 md:h-16" : "h-16 md:h-20"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "font-medium text-base transition-all duration-200 hover:text-[#006400] relative",
                  location.pathname === item.href
                    ? "text-[#008000] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#008000]"
                    : "text-[#008000]"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary ml-4 px-6 py-2 rounded-full hover:bg-[#006400] transition-all duration-300"
            >
              Get Involved
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#008000] hover:text-[#006400] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="container-custom py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block py-2.5 font-medium text-lg transition-colors",
                  location.pathname === item.href
                    ? "text-[#008000]"
                    : "text-[#008000] hover:text-[#006400]"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary block text-center mt-6 w-full py-3 rounded-full hover:bg-[#006400] transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
