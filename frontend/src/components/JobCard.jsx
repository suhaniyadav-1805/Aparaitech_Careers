import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';
import ALogo from "../assets/ALogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="hover:translate-y-[-5px] transition duration-300">
            <Link to="/" className="flex items-center space-x-2 mb-5">
              <img src={ALogo} alt="Logo" className="h-10" />
              <div>
                <h2 className="text-xl font-bold">Aparaitech</h2>
                <p className="text-xs text-gray-400">Innovating Tomorrow</p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              We build powerful enterprise solutions using modern technology 
              and skilled developers to shape the future of digital innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="hover:translate-y-[-5px] transition duration-300">
            <h3 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 hover:pl-2 transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/positions" className="hover:text-blue-400 hover:pl-2 transition-all duration-300">
                  Open Positions
                </Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-blue-400 hover:pl-2 transition-all duration-300">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="hover:translate-y-[-5px] transition duration-300">
            <h3 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              
              <li className="flex items-start gap-3 group">
                <MapPin size={18} className="text-blue-400 mt-1 group-hover:scale-110 transition" />
                <span className="text-gray-400 group-hover:text-white transition">
                  Mukti Complex, Near Prashaskiya Bhawan, Baramati
                </span>
              </li>

              <li className="flex items-center gap-3 group">
                <Mail size={18} className="text-blue-400 group-hover:scale-110 transition" />
                <a 
                  href="mailto:info@aparaitech.org" 
                  className="text-gray-400 group-hover:text-blue-400 transition"
                >
                  info@aparaitech.org
                </a>
              </li>

              <li className="flex items-center gap-3 group">
                <Phone size={18} className="text-blue-400 group-hover:scale-110 transition" />
                <span className="text-gray-400 group-hover:text-white transition">
                  +91 63643 26342
                </span>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div className="hover:translate-y-[-5px] transition duration-300">
            <h3 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">
              Follow Us
            </h3>

            <div className="flex gap-4 mt-4">
              
              <a href="https://www.linkedin.com/company/aparaitech/posts/?feedView=all"
                target="_blank" rel="noreferrer"
                className="bg-blue-600 p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-blue-500/50 transition duration-300">
                <Linkedin size={18} />
              </a>

              <a href="https://www.instagram.com/aparaitech_global/"
                target="_blank" rel="noreferrer"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-pink-500/50 transition duration-300">
                <Instagram size={18} />
              </a>

              <a href="https://www.youtube.com/@aparaitech"
                target="_blank" rel="noreferrer"
                className="bg-red-600 p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-red-500/50 transition duration-300">
                <Youtube size={18} />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500 hover:text-gray-300 transition">
          © {currentYear} Aparaitech Technologies. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;