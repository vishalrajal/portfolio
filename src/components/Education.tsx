import  { useState, useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen, Trophy, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('education');
  const sectionRef = useRef<HTMLDivElement>(null);

  const education = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Perunthalaivar Kamarajar Institute of Engineering and Trchnology',
      location: 'Karaikal, India',
      period: '2022 - 2026',
      gpa: '7.2',
      description: 'Focused on software engineering, algorithms, and data structures. Graduated Magna Cum Laude.',
      courses: ['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Web Development', 'Computer Networks'],
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const certifications = [
    {
      title: '6 months Data Analyst course completion',
      issuer: 'Growai',
      date: '2024',
      credentialId: '9952130713VL',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Live JavaScript Bootcamp: Learn, Code, Build Together (Batch 1)',
      issuer: 'Learnz Development Hub',
      date: 'Nov 12 2024',
      credentialId: 'CERT-2025-52b47e24-7b29-43ef-9ecf-72fa618722f1',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'React Developer Certification in 12 days Live classes',
      issuer: 'Learnz Development Hub',
      date: 'Feb 6 2025',
      credentialId: 'CERT-2025-60e96308-3e86-4b57-affe-1144cbe1ddac',
      color: 'from-blue-500 to-purple-500'
    },
    
    {
      title: 'Java Funsamentals Course Completion',
      issuer: 'Uniq Technologies',
      date: 'June 2025',
      credentialId: 'UQ25-0023',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: '3 Months Frontend Development Course (HTML + CSS + JavaScript + ReactJS + AI Tools)',
      issuer: 'Learnz Development Hub',
      date: '2025',
      credentialId: '------',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      title: 'The Complete Full Stack Web Development Bootcamp by Dr. Angela YU',
      issuer: 'Udemy',
      date: '2022',
      credentialId: '',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'upcoming',
      issuer: 'upcoming',
      date: '----',
      credentialId: '------',
      color: 'from-sky-400 to-indigo-600'
    },



    
  ];

  const achievements = [
    {
      title: 'Project Expo 2nd prize in inter college level',
      description: 'Made an automated IOT Project useful for the farmers to Utilize natural resources effectively and yield high profit with Effective Time management',
      year: '2024',
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: 'Upcoming',
      description: 'Upcoming',
      year: '----',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Upcoming',
      description: 'Upcoming',
      year: '----',
      icon: <Trophy className="w-6 h-6" />
    }
    
  ];
    const workshops = [
    {
      title: 'Live JavaScript Bootcamp: Learn, Code, Build Together (Batch 1)',
      description: 'Gained hands-on experience with core JavaScript concepts including DOM manipulation, ES6 syntax, and event handling. Built interactive mini-projects collaboratively, enhancing real-time coding and problem-solving skills.',
      year: '2024',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-teal-400 to-cyan-500'
    },
    {
      title: 'Java Spring Boot Workshop by Kenstack Technologies',
      description: 'Learned to build RESTful web services using Java Spring Boot, covering core concepts like dependency injection and JPA. Developed backend APIs with practical exposure to Spring MVC, database integration, and CRUD operations.',
      year: '2025',
      icon: <Award className="w-6 h-6" />,
      color: 'from-lime-300 to-green-500'
    },
    {
      title: 'First Step into Frontend Development with AI (One Day Workshop)',
      description: 'UpcomingExplored the basics of frontend development using HTML, CSS, and JavaScript, combined with AI-assisted coding tools. Gained hands-on experience building simple UI components while leveraging AI for faster development and debugging.',
      year: '2025',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-sky-400 to-indigo-600'
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

  const tabs = [
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'certifications', label: 'Certifications', icon: <Award className="w-5 h-5" /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy className="w-5 h-5" /> },
    { id: 'Workshops', label: 'Workshops', icon: <Trophy className="w-5 h-5" /> }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800/50 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-48 h-48 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              Education & Certifications
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}></div>
          </div>

          {/* Tab Navigation */}
          <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 border border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2 font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className={`transform transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-400 font-semibold mb-2 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        {edu.institution}
                      </p>
                      <p className="text-gray-400 flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-gray-400 md:text-right">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <p className="font-semibold text-green-400">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{edu.description}</p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-blue-400 mb-3">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 bg-gradient-to-r ${edu.color} bg-opacity-20 text-blue-300 rounded-full text-sm border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className={`grid md:grid-cols-2 gap-6 transform transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} bg-opacity-20 mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-blue-400 font-semibold mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-400 text-sm mb-2">
                        Issued: {cert.date}
                      </p>
                      <p className="text-gray-500 text-xs">
                        Credential ID: {cert.credentialId}
                      </p>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className={`space-y-6 transform transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-400/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 bg-opacity-20 mr-4 text-yellow-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {achievement.description}
                      </p>
                    </div>
                    <div className="text-yellow-400 font-semibold">
                      {achievement.year}
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          )}
          {/* Workshops Tab */}
{activeTab === 'Workshops' && (
  <div className={`space-y-6 transform transition-all duration-500 ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
  }`}>
    {workshops.map((workshop, index) => (
      <div
        key={index}
        className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-opacity-20 mr-4 text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
            {workshop.icon}
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
              {workshop.title}
            </h4>
            <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
              {workshop.description}
            </p>
          </div>
          <div className="text-cyan-400 font-semibold">
            {workshop.year}
          </div>
        </div>
      </div>
    ))}
  </div>
)}

        </div>
      </div>
    </section>
  );
};

export default Education;