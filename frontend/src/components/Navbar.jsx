import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, Instagram, Send, MessageCircle } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Open Roles", path: "/positions" },
  { name: "Apply", path: "/apply" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-xl py-2 scale-[0.98]"
          : "bg-white/70 backdrop-blur-md py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* 🔥 LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white font-bold text-lg shadow-md 
              group-hover:rotate-12 group-hover:scale-110 transition duration-500">
              S
            </div>

            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent tracking-wide 
                group-hover:tracking-widest transition-all duration-500">
                STech
              </span>
              <span className="block text-xs text-gray-500">
                Careers & Innovation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-5 py-2 rounded-full font-medium transition-all duration-300 group ${
                  location.pathname === item.path
                    ? "text-indigo-700 scale-105"
                    : "text-gray-600 hover:text-indigo-600 hover:scale-105"
                }`}
              >
                {item.name}

                {/* underline animation */}
                <span className="absolute left-1/2 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 w-0 group-hover:w-3/4 -translate-x-1/2"></span>
              </Link>
            ))}

            {/* Social Icons */}
            <div className="flex items-center gap-3 ml-4">

              <a 
                href="https://www.instagram.com/suhani__yadav18/" 
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 text-white 
                hover:scale-125 hover:rotate-6 transition duration-300 shadow-md"
              >
                <Instagram size={16} />
              </a>

              <a 
                href="https://t.me/aparaitech" 
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-blue-500 text-white 
                hover:scale-125 hover:-rotate-6 transition duration-300 shadow-md"
              >
                <Send size={16} />
              </a>

              <a 
                href="https://wa.me/919834610889" 
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-green-500 text-white 
                hover:scale-125 hover:rotate-12 transition duration-300 shadow-md"
              >
                <MessageCircle size={16} />
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/apply"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full 
              hover:scale-110 hover:shadow-xl transition duration-300 animate-pulse"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-96 mt-4 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg p-4 space-y-3">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition hover:translate-x-2"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Social */}
            <div className="flex justify-center gap-4 pt-3">

              <a href="https://www.instagram.com/aparaitech_global/" className="text-pink-500 hover:scale-125 transition">
                <Instagram />
              </a>

              <a href="https://t.me/aparaitech" className="text-blue-500 hover:scale-125 transition">
                <Send />
              </a>

              <a href="https://wa.me/919834610889" className="text-green-500 hover:scale-125 transition">
                <MessageCircle />
              </a>

            </div>

            <Link
              to="/apply"
              className="block text-center bg-indigo-600 text-white py-3 rounded-lg mt-3 hover:scale-105 transition"
            >
              Start Application
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;