import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Download, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Full Stack Developer', 'Python Developer', 'Problem Solver', 'Tech Enthusiast'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const timer = setTimeout(() => {
      if (currentIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentIndex(0);
          setDisplayText('');
          setTitleIndex((titleIndex + 1) % titles.length);
        }, 2000);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [currentIndex, titleIndex, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FloatingIcon = ({ icon: Icon, delay }: { icon: any, delay: number }) => (
    <div 
      className="absolute animate-bounce"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      <Icon className="w-8 h-8 text-blue-400/30" />
    </div>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20">
          <FloatingIcon icon={Code} delay={0} />
        </div>
        <div className="absolute top-40 right-32">
          <FloatingIcon icon={Sparkles} delay={1} />
        </div>
        <div className="absolute bottom-40 left-40">
          <FloatingIcon icon={Github} delay={2} />
        </div>
        <div className="absolute bottom-20 right-20">
          <FloatingIcon icon={Linkedin} delay={0.5} />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with staggered animation */}
          <div className="overflow-hidden">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              Vishal Raja
            </h1>
          </div>
          
          {/* Typing animation */}
          <div className={`text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <span className="mr-2">I'm a</span>
            <span className="text-blue-400 font-semibold relative">
              {displayText}
              <span className="animate-pulse ml-1 text-blue-500">|</span>
              <span className="absolute -inset-1 bg-blue-400/20 blur-sm rounded animate-pulse"></span>
            </span>
          </div>

          {/* Description */}
          <p className={`text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            Passionate Python Developer with expertise in full-stack development, 
            creating innovative solutions that bridge technology and user experience.
          </p>

          {/* Social links with hover animations */}
          <div className={`flex justify-center space-x-6 mb-12 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {[
              { icon: Github, href: 'https://github.com/vishalrajal', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/vishalrajal', label: 'LinkedIn' },
              { icon: Mail, href: 'official.vishalraja.org@gmail.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon size={24} className="transition-colors duration-300 group-hover:text-blue-400" />
                <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* Action buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Code className="w-5 h-5 mr-2" />
                View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-gray-600 hover:border-blue-400 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-400/10 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </span>
            </button>
            
            <a
              href="/resume.pdf"
              download
              className="group px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-green-400 rounded-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center">
                <Download className="w-5 h-5 mr-2 group-hover:text-green-400 transition-colors duration-300" />
                Download CV
              </span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
          >
            <ChevronDown size={32} className="group-hover:scale-110 transition-transform duration-300" />
            <div className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Scroll Down
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;