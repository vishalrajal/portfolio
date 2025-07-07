import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Award, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full Stack Development',
      description: 'Proficient in both frontend and backend technologies',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Design',
      description: 'Experienced in SQL and NoSQL database management',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Web Applications',
      description: 'Creating responsive and scalable web solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { icon: <Award className="w-8 h-8" />, number: '1', label: 'Year of Internship Experience' },
    { icon: <Users className="w-8 h-8" />, number: '5+', label: 'Projects Completed' },
    { icon: <Lightbulb className="w-8 h-8" />, number: '10+', label: 'Technologies' },
    { icon: <Target className="w-8 h-8" />, number: '100%', label: 'Client Satisfaction' }
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

  return (
    <section id="about" className="py-20 bg-gray-800/50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              About Me
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              {[
                "I'm a passionate Full stack developer with a strong foundation in computer science and a love for creating innovative digital solutions. My journey in technology has led me to develop expertise across the full development stack.",
                "With experience in modern frameworks and technologies, I focus on writing clean, efficient code and building applications that provide exceptional user experiences. I'm always eager to learn new technologies and tackle challenging problems.",
                "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community."
              ].map((text, index) => (
                <p 
                  key={index}
                  className={`text-lg text-gray-300 leading-relaxed transform transition-all duration-1000 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  {text}
                </p>
              ))}

              <div className={`flex flex-wrap gap-4 pt-4 transform transition-all duration-1000 delay-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}>
                {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map((trait, index) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 cursor-default"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  <div className={`text-transparent bg-gradient-to-r ${item.color} bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;