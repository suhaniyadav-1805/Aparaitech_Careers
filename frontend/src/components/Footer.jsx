import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, User, Linkedin, Instagram, Youtube } from 'lucide-react';
import ALogo from "../assets/ALogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-5">
              <img src={ALogo} alt="Logo" className="h-10" />
              <div>
                <h2 className="text-xl font-bold">S Tech</h2>
                <p className="text-xs text-gray-400">Careers & Innovation</p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed">
              We build powerful enterprise solutions using modern technology 
              and skilled developers to shape the future of digital innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">Home</Link>
              </li>
              <li>
                <Link to="/positions" className="hover:text-blue-400 transition">Open Positions</Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-blue-400 transition">Apply Now</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">

              {/* 👤 Name */}
              <li className="flex items-center gap-3">
                <User size={18} className="text-blue-400" />
                <span className="text-gray-400">Suhani Yadav</span>
              </li>

              {/* 📍 Address */}
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <span className="text-gray-400">
                  Mukti Complex, Near Prashaskiya Bhawan, Baramati
                </span>
              </li>

              {/* 📧 Email */}
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:suhaniyadav1805@gmail.com" className="hover:text-blue-400">
                  suhaniyadav1805@gmail.com
                </a>
              </li>

              {/* 📞 Phone */}
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-400">+91 9834610889</span>
              </li>

            </ul>
          </div>

          {/* Social + Map */}
          <div>
            <h3 className="text-lg font-semibold mb-5 border-b border-gray-700 pb-2">
              Find Us
            </h3>

            {/* Map */}
            <div className="w-full h-40 rounded-xl overflow-hidden mb-4 border border-gray-700">
              <iframe
                title="Location"
                src="https://www.google.com/maps?q=Baramati,Maharashtra&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/company/aparaitech/posts/?feedView=all"
                target="_blank" rel="noreferrer"
                className="bg-blue-600 p-3 rounded-full hover:scale-110 transition">
                <Linkedin size={18} />
              </a>

              <a href="https://www.instagram.com/aparaitech_global/"
                target="_blank" rel="noreferrer"
                className="bg-gradient-to-tr from-pink-500 to-yellow-500 p-3 rounded-full hover:scale-110 transition">
                <Instagram size={18} />
              </a>

              <a href="https://www.youtube.com/@aparaitech"
                target="_blank" rel="noreferrer"
                className="bg-red-600 p-3 rounded-full hover:scale-110 transition">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {currentYear} S Tech. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;