'use client'

import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Cpu, Globe, Users, ChevronRight, Mail, Phone, MapPin,
  Target, Award, Shield, Rocket, Server, Cloud, Zap,
  Building, Calendar, CheckCircle, BarChart, Monitor, Lock,
  ArrowRight, Star
} from 'lucide-react';

const CodeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const charArray = chars.split('');
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 8, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, '#0B3B8F');
      gradient.addColorStop(0.5, '#0051FF');
      gradient.addColorStop(1, '#00D4FF');
      ctx.fillStyle = gradient;
      ctx.font = fontSize + 'px monospace';

      drops.forEach((y, i) => {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        ctx.fillText(char, x, y * fontSize);
        
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    }

    let animationFrame;
    function animate() {
      draw();
      animationFrame = requestAnimationFrame(animate);
    }
    
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-20"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default function ModernCompanyProfile() {
  const [activeTab, setActiveTab] = useState('vision');
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = -scrollY * 0.3;

  const technologies = [
    { name: 'AI & Machine Learning', icon: <Cpu size={24} />, percentage: 95 },
    { name: 'Cloud Computing', icon: <Cloud size={24} />, percentage: 90 },
    { name: 'Cybersecurity', icon: <Lock size={24} />, percentage: 88 },
    { name: 'Data Analytics', icon: <BarChart size={24} />, percentage: 92 },
    { name: 'IoT Solutions', icon: <Server size={24} />, percentage: 85 },
    { name: 'Digital Transformation', icon: <Zap size={24} />, percentage: 94 }
  ];

  const achievements = [
    { number: '100+', label: 'Enterprise Clients', icon: <Building size={24} /> },
    { number: '10+', label: 'Years Experience', icon: <Calendar size={24} /> },
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle size={24} /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Star size={24} /> }
  ];

  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs',
      icon: <Cpu size={32} />
    },
    {
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure management',
      icon: <Cloud size={32} />
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      icon: <Shield size={32} />
    },
    {
      title: 'Digital Innovation',
      description: 'Transform your business with innovative digital solutions',
      icon: <Rocket size={32} />
    }
  ];


   return (
    <div className="min-h-screen bg-[#020817]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#020817]/80 backdrop-blur-sm border-b border-blue-900/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg className="w-12 h-12 mr-4" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hexagonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0B3B8F"/>
                    <stop offset="50%" stopColor="#0051FF"/>
                    <stop offset="100%" stopColor="#00D4FF"/>
                  </linearGradient>
                  <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D4FF"/>
                    <stop offset="100%" stopColor="#4DA8FF"/>
                  </linearGradient>
                </defs
                >
                <path 
                  d="M200 50 L300 100 L300 200 L200 250 L100 200 L100 100 Z" 
                  fill="url(#hexagonGradient)" 
                  stroke="#00D4FF"
                  strokeWidth="2"
                  opacity="0.9"
                />
                <path 
                  d="M200 50 L300 100 L300 200 L200 250 L100 200 L100 100 Z" 
                  fill="none" 
                  stroke="#00F7FF"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <path 
                  d="M150 125 L180 125 L200 145 L220 125 L250 125" 
                  stroke="url(#circuitGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  opacity="0.8"
                />
                <path 
                  d="M160 150 L190 150 L200 170 L210 150 L240 150" 
                  stroke="url(#circuitGradient)" 
                  strokeWidth="3" 
                  fill="none"
                  opacity="0.8"
                />
                <path 
                  d="M175 175 L165 185 L175 195" 
                  stroke="#00F7FF" 
                  strokeWidth="4" 
                  fill="none"
                />
                <path 
                  d="M225 175 L235 185 L225 195" 
                  stroke="#00F7FF" 
                  strokeWidth="4" 
                  fill="none"
                />
              </svg>
              <span className="text-xl font-bold text-white">ELYSAPUTRA VENTURES</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#expertise" className="text-gray-300 hover:text-white transition-colors">Expertise</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

       {/* Hero Section with Code Background */}
      <section className="relative h-screen overflow-hidden pt-20">
        <CodeBackground />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <div className="text-7xl font-bold text-white mb-6">
              Innovate
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {' '}Tomorrow
              </span>
            </div>
            <div className="text-xl text-gray-300 mb-8 max-w-2xl">
              Pioneering the future through cutting-edge technology solutions.
              We transform ideas into digital reality.
            </div>
            <div className="flex gap-4">
              <button className="group px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all flex items-center gap-2">
                Explore Solutions
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#020817]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {' '}Services
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group p-6 bg-gradient-to-b from-blue-900/20 to-blue-900/10 rounded-xl border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="absolute inset-0 bg-blue-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-[#020817] to-blue-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {' '}Expertise
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                </div>
                <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-1000"
                    style={{ 
                      width: isHovered === index ? `${tech.percentage}%` : '0%',
                      transition: 'width 1s ease-out'
                    }}
                  />
                </div>
                <div className="mt-2 text-right text-sm text-blue-300">
                  {tech.percentage}% Expertise
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#020817]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group text-center p-6 bg-gradient-to-b from-blue-900/20 to-blue-900/10 rounded-xl border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="inline-block p-3 bg-blue-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{achievement.number}</h3>
                <p className="text-blue-300">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-[#020817] to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Get in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {' '}Touch
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="group flex items-center space-x-4 p-4 rounded-xl bg-blue-900/20 border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300">
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <Mail className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-blue-300">eddyyucca@gmail.com</p>
                    </div>
                  </div>
                  <div className="group flex items-center space-x-4 p-4 rounded-xl bg-blue-900/20 border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300">
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <Phone className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-blue-300">081250653005</p>
                    </div>
                  </div>
                  <div className="group flex items-center space-x-4 p-4 rounded-xl bg-blue-900/20 border border-blue-800/50 hover:border-blue-400/50 transition-all duration-300">
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                      <MapPin className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-blue-300">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 rounded-lg bg-blue-900/20 border border-blue-800/50 focus:border-blue-400/50 outline-none text-white placeholder-blue-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 rounded-lg bg-blue-900/20 border border-blue-800/50 focus:border-blue-400/50 outline-none text-white placeholder-blue-300"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 rounded-lg bg-blue-900/20 border border-blue-800/50 focus:border-blue-400/50 outline-none text-white placeholder-blue-300"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 rounded-lg bg-blue-900/20 border border-blue-800/50 focus:border-blue-400/50 outline-none text-white placeholder-blue-300 resize-none"
                ></textarea>
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:opacity-90 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    <footer className="py-8 bg-[#020817] text-white border-t border-blue-900/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-300">© 2025 ELYSAPUTRA VENTURES. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}