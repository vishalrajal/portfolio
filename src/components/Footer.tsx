import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/vishalrajal',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/vishalrajal',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:vishal@example.com',
      label: 'Email',
      color: 'hover:text-green-400'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800/50 border-t border-gray-700 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
              Vishal Raja L
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Development passionate about creating innovative solutions 
              and building exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-400 transition-all duration-300 hover:transform hover:scale-110 hover:-translate-y-1 ${link.color}`}
                  aria-label={link.label}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.icon}
                  <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p className="hover:text-blue-400 transition-colors duration-300">Karaikal, IN</p>
              <a
                href="mailto:official.vishalraja.org@gmail.com"
                className="block hover:text-blue-400 transition-colors duration-300"
              >
                official.vishalraja.org@gmail.com
              </a>
              <a
                href="tel:+919865471727"
                className="block hover:text-blue-400 transition-colors duration-300"
              >
                +91 9865471727
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              © {currentYear} Vishal Raja. Made with{' '}
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" fill="currentColor" />
              using React & TypeScript
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;