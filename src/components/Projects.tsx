import React, { useState, useEffect, useRef } from 'react';
import { Github, ExternalLink, X, Code, Star, GitBranch } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Secure Scan',
      description: 'A full-stack Vulnerability analyser with React frontend and Node.js backend',
      longDescription: 'Secure Scan is an advanced cybersecurity platform for automated vulnerability analysis and threat detection. It supports scanning of URLs, images, and PDF files, identifying potential exploits, malware, and security weaknesses. Key features include real-time scanning, report generation, scan history tracking, and user authentication. Built with React, TypeScript, Node.js, Express, and MongoDB, it offers a secure, scalable, and intuitive interface for developers and security analysts.',
      image: 'https://i.postimg.cc/sgMJS83D/securescan1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Virustotal API', 'JWT'],
      features: [
        'Multi-Type Vulnerability Scanning',
        'Automated Report Generation',
        'Scan Scheduling & History Tracking',
        'Secure User Authentication & Roles',
        'Admin Dashboard for Scan Oversight'
      ],
      github: 'https://github.com/vishalrajal/Securescann',
      demo: 'https://securescann.vercel.app/',
      color: 'from-blue-500 to-cyan-500',
      stats: { stars: 45, forks: 12, commits: 156 }
    },
    {
      title: 'Real-time Front-end code visualizer',
      description: 'A Web based compiler application for Front-end technology with real-time output visualizer',
      longDescription: 'Code Editor by Vishy is a browser-based code playground that allows users to write and preview HTML, CSS, and JavaScript code in real time. It features a responsive layout, live preview pane, and instant code execution for seamless front-end development. Built with React and TypeScript, it offers a lightweight and intuitive coding environment ideal for rapid prototyping, experimentation, and learning.',
      image: 'https://i.postimg.cc/GhBGtDcZ/editor.jpg',
      technologies: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL', 'Redis'],
      features: [
        'Real-Time Output Rendering',
        'Clean, Responsive UI',
        'Dark Mode Support',
        'Local Code Persistence',
        'Built with React & TypeScript'
      ],
      github: 'https://github.com/vishalrajal/code_editor',
      demo: 'https://code-editor-by-vishy.vercel.app/',
      color: 'from-green-500 to-emerald-500',
      stats: { stars: 32, forks: 8, commits: 89 }
    },
    {
      title: 'Upcoming',
      description: '----',
      longDescription: '----',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'OpenWeather API', 'Chart.js', 'CSS3'],
      features: [
        '-----',
        '-----',
        '-----',
        '-----',
        '------'
      ],
      github: '#',
      demo: '#',
      color: 'from-purple-500 to-pink-500',
      stats: { stars: 28, forks: 6, commits: 67 }
    },
    {
      title: 'Upcoming',
      description: '----',
      longDescription: '----',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Python', 'Flask', 'PostgreSQL', 'Chart.js'],
      features: [
        '----',
        '----',
        '----',
        '----',
        '----'
      ],
      github: '#',
      demo: '#',
      color: 'from-orange-500 to-red-500',
      stats: { stars: 19, forks: 4, commits: 43 }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const openModal = (index: number) => {
    setSelectedProject(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-56 h-56 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-green-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              Featured Projects
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 cursor-pointer transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
                onClick={() => openModal(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Project stats */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 mr-1" />
                      <span className="text-xs text-white">{project.stats.stars}</span>
                    </div>
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                      <GitBranch className="w-3 h-3 text-blue-400 mr-1" />
                      <span className="text-xs text-white">{project.stats.forks}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 text-blue-300 rounded text-sm border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600/50 text-gray-400 rounded text-sm">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </div>
                </div>

                {/* Animated border */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform animate-slideUp">
            <div className="relative">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-64 object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${projects[selectedProject].color} opacity-20`}></div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-900 transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold text-white">
                  {projects[selectedProject].title}
                </h3>
                <div className="flex space-x-4">
                  <div className="flex items-center bg-gray-700 rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-white">{projects[selectedProject].stats.stars}</span>
                  </div>
                  <div className="flex items-center bg-gray-700 rounded-full px-3 py-1">
                    <GitBranch className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-white">{projects[selectedProject].stats.forks}</span>
                  </div>
                  <div className="flex items-center bg-gray-700 rounded-full px-3 py-1">
                    <Code className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-white">{projects[selectedProject].stats.commits}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {projects[selectedProject].longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {projects[selectedProject].features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-3 mt-2 w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 bg-gradient-to-r ${projects[selectedProject].color} bg-opacity-20 text-blue-300 rounded-full text-sm border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={projects[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Code
                </a>
                <a
                  href={projects[selectedProject].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Projects;