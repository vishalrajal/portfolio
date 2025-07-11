import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase, TrendingUp } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'Python Data analyst Intern',
      company: 'Growai',
      location: 'Remote',
      period: '2024 - 2025',
      description: [
        'Developed and optimized Python scripts for data extraction, transformation, and analysis across large datasets',
        'Automated data pipelines and cleaning workflows, improving processing efficiency by 40%',
        'Built dashboards and visual reports using tools like Pandas, Matplotlib, and Seaborn to support business insights',
        'Collaborated with data science and engineering teams to validate models and ensure data integrity',
        'Contributed to anomaly detection systems that enhanced data quality monitoring and reduced errors by 30%'
      ],
      technologies: ['Python', 'Numpy', 'Pandas', 'Google Colab', 'Juypiter Notebook'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cyber-Security Intern',
      company: 'Marcello Tech',
      location: 'Trichy, In',
      period: '2025',
      description: [
        'Conducted vulnerability assessments and penetration testing on web applications and internal systems',
        'Analyzed network traffic and logs to identify potential threats and anomalies',
        'Assisted in implementing security policies and access controls to enhance system protection',
        'Performed security audits and reported findings to improve infrastructure resilience',
        'Collaborated with the security team on real-world incident response and threat mitigation strategies'
      ],
      technologies: ['SQL', 'SQL Injection', 'Selenium', 'Burp Suit', 'Git'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Upcoming',
      company: '----',
      location: '----',
      period: '20-- - 20--',
      description: [
        '---',
        '---',
        '---',
        '---'
      ],
      technologies: ['---', '---', '---', '---', '---'],
      color: 'from-purple-500 to-pink-500'
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

  return (
    <section id="experience" className="py-20 bg-gray-800/50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-4 right-4 w-24 h-24 md:top-10 md:right-10 md:w-48 md:h-48 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-4 left-4 w-32 h-32 md:bottom-10 md:left-10 md:w-64 md:h-64 bg-purple-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              Professional Experience
            </h2>
            <div className={`w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative group transform transition-all duration-1000 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Timeline dot */}
                  <div className={`hidden sm:block absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} border-4 border-gray-900 group-hover:scale-150 transition-transform duration-300`}></div>
                  {/* Experience card */}
                  <div className="ml-0 sm:ml-20 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-400 font-semibold mb-2 group-hover:scale-105 transition-transform duration-300">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-gray-400">
                        <div className="flex items-center mb-1 group-hover:text-gray-300 transition-colors duration-300">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center group-hover:text-gray-300 transition-colors duration-300">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li 
                            key={i} 
                            className={`text-gray-300 flex items-start group-hover:text-gray-200 transition-all duration-300 transform ${
                              activeCard === index ? 'translate-x-2' : ''
                            }`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            <TrendingUp className="text-blue-400 mr-3 mt-1 w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 bg-gradient-to-r ${exp.color} bg-opacity-20 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 cursor-default`}
                          style={{ animationDelay: `${i * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;