import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Download, Mail, Github, Linkedin, Code, Briefcase, GraduationCap, Cpu, Rocket, BrainCircuit, Bot, Database, Cogs, Gamepad, ArrowRight, Cog, Book, Library, CircuitBoard, Terminal, Calendar } from 'lucide-react';
import WorkSamples from './WorkSamples';

const PortfolioHomepage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentSection, setCurrentSection] = useState('hero');
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));

          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { name: 'Java', level: 95 },
    { name: 'Python', level: 90 },
    { name: 'C/C++', level: 85 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'React', level: 85 },
    { name: 'PostgreSQL', level: 90 },
    { name: 'Node.js', level: 80 },
    { name: 'Embedded Systems', level: 70 }
  ];

  const experiences = [
    {
      role: "Full-Stack Dev Intern",
      company: "Nobl Kids",
      period: "May 2025 – Dec 2025",
      description: "Contributing to the Nobl platform through the BEST Program at York University.",
      achievements: [
        "Engineered location-aware search features using PostGIS and Mapbox, implementing map radius filters and proximity-based recommendations",
        "Architected a protected, multi-step onboarding flow using Next.js and Redux for state management",
        "Redesigned backend request flow using TRPC and PostgreSQL transactions, cutting page load times by 40%",
        "Designed and analyzed analytics pipelines via Meta Pixel, GTM, and PostHog, improving campaign ROI by 30%",
        "Established Playwright E2E testing covering edge cases and regression scenarios, reducing defects by 40%"
      ],
      tech: ["Next.js", "Redux", "TypeScript", "TRPC", "PostgreSQL", "PostGIS", "Mapbox", "Playwright", "Meta Pixel"]
    },
    {
      role: "Judge & Technical Mentor",
      company: "UNHACK 2025 — York University",
      period: "Nov 2025",
      description: "Served as a judge and technical mentor at UNHACK 2025.",
      achievements: [
        "Evaluated 60+ projects from ~1,000 participants, assessing technical feasibility, system design, and scalability",
        "Mentored teams through debugging and complex architecture decisions"
      ],
      tech: ["System Design", "Mentorship", "Debugging", "Software Architecture"]
    },
    {
      role: "Software Developer Intern",
      company: "Air Point",
      period: "May 2024 – Aug 2024",
      description: "Built and optimized the web presence for an HVAC service company.",
      achievements: [
        "Built a component-driven React architecture with responsive layouts, code splitting, and SEO-friendly routing",
        "Instrumented user behavior tracking with Google Analytics and Hotjar",
        "Analyzed funnels and heatmaps to guide SEO optimizations that increased local visibility by 16%"
      ],
      tech: ["React", "SEO", "Google Analytics", "Hotjar"]
    },
    {
      role: "Full-Stack Dev Intern",
      company: "Shiny Clean Detailing",
      period: "2021 - 2022",
      description: "Developed web solutions for auto detailing business",
      achievements: [
        "Built mobile-responsive React site, boosted mobile usage by 40%",
        "Developed backend with Node, Express, MailGun",
        "Improved quote processing speed by 30% via backend optimizations",
        "Automated deployments using GitHub Actions (80% faster releases)"
      ],
      tech: ["React", "Node.js", "Express", "PostgreSQL"]
    }
  ];

  const projects = [
    {
      name: "Verve Tutor",
      description: "Production tutoring platform to automate student onboarding, lesson management, and reminders.",
      achievements: [
        "Designed layered backend architecture with JWT auth, RBAC, and row-level security (RLS) for 700+ users",
        "Modeled relational schemas and indexes in PostgreSQL, optimizing query plans to support 5,000+ users with 30% faster retrieval",
        "Implemented state-driven React workflows for scheduling and notes, improving student engagement by 25%"
      ],
      tech: ["Java Spring Boot", "PostgreSQL", "React", "Docker", "GCP", "JWT"],
      icon: <Library className="w-6 h-6" />
    },
    {
      name: "Autonomous Codebase Onboarding Agent",
      description: "AI-powered developer onboarding platform that analyzes GitHub repositories and generates interactive labs.",
      achievements: [
        "Engineered autonomous agent using OODA feedback loop to plan tasks, execute commands, and self-correct errors",
        "Developed secure execution layer with sandboxed command runners and structured state management",
        "Implemented LLM-driven curriculum generation transforming repos into LeetCode-style coding exercises",
        "Integrated Google Gemini API with strict JSON schema validation for reliable agent reasoning"
      ],
      tech: ["Python", "FastAPI", "React", "LLM Agents"],
      icon: <Bot className="w-6 h-6" />
    },
    {
      name: "Deep Learning & NLP Experiments",
      description: "Hands-on implementation of core ML architectures from first principles.",
      achievements: [
        "Engineered character-level GPT in PyTorch for QA system, optimizing to 4 layers achieving 100% factual recall",
        "Debugged silent matrix computation errors in Causal Self-Attention module to restore correct temporal learning",
        "Developed MLP from scratch via JAX autograd to extract 32-dim bottleneck features from MNIST (96% reduction)",
        "Integrated features into RBF-kernel SVM, reducing training time to 0.25s while hitting 99.58% accuracy"
      ],
      tech: ["Python", "PyTorch", "JAX", "scikit-learn", "NumPy"],
      icon: <BrainCircuit className="w-6 h-6" />
    },
    {
      name: "Cyber Risk Assessment Lab",
      description: "Security vulnerability assessment and exploitation platform environment.",
      achievements: [
        "Documented vulnerabilities and root causes to evaluate business impact of system compromise",
        "Exploited vulnerable Windows VMs and MySQL databases using Metasploit payloads",
        "Performed network reconnaissance using Nmap and mapped the attack surface of virtualized environments",
        "Investigated covert data exfiltration methods via steganography (JPHS)"
      ],
      tech: ["Metasploit", "Nmap", "Kali Linux", "Virtualization"],
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "xv6 Operating System Enhancements",
      description: "Kernel-level modifications for xv6 including an aging priority scheduler and custom memory allocator.",
      achievements: [
        "Engineered a priority-based CPU scheduler with aging mechanism to prevent process starvation",
        "Implemented complete system call interface with proper locking mechanisms for priority management",
        "Developed custom memory allocator implementing first-fit/best-fit/worst-fit strategies",
        "Built extensive test suite achieving zero memory leaks across 10,000+ allocation cycles"
      ],
      tech: ["C", "Assembly", "RISC-V", "System Programming", "QEMU"],
      icon: <Terminal className="w-6 h-6" />
    },
    {
      name: "YUEvents",
      description: "Platform aggregating York University social events by consolidating data from multiple sources.",
      achievements: [
        "Defined product vision, translating stakeholder needs into clear user stories and sprint goals",
        "Maintained Agile documentation improving sprint completion rate by 30%",
        "Created system architecture diagrams and scraper workflow visuals to reduce onboarding time",
        "Led planning for a scraper-based data ingestion pipeline ensuring consistency across platforms"
      ],
      tech: ["Product Management", "Agile", "Web Scraping", "System Design"],
      icon: <Calendar className="w-6 h-6" />
    },
    {
      name: "ESP32 Wireless Robot",
      description: "Real-time wireless robot with ultra-low latency control",
      achievements: [
        "Achieved 20ms latency & 99.9% stable link",
        "Custom HAL & optimized power control (95% precision)",
        "Interrupt-driven comms and PS4 controller integration"
      ],
      tech: ["C++", "ESP32", "Embedded Systems"],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      name: "Custom CPU Simulator",
      description: "5-stage pipelined CPU simulating MIPS instructions",
      achievements: [
        "Built ALU, memory & control modules from scratch",
        "Simulated full instruction cycle with efficient control signal routing"
      ],
      tech: ["Verilog", "Assembly", "Computer Architecture"],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      name: "False Alarm Game",
      description: "Physics-based traffic racing game with 1K+ downloads",
      achievements: [
        "Procedural road generation and adaptive AI",
        "Gamepad support and modular vehicle systems",
        "Realistic physics simulation"
      ],
      tech: ["C#", "MonoGame", "React"],
      icon: <Gamepad className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0E23] text-[#F0F4FF] overflow-x-hidden">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* Floating Particles Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] opacity-10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E23]/90 backdrop-blur-md border-b border-[#1E243D]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent cursor-pointer hover:opacity-90 transition-opacity"
            >
              Nathan Benayguev
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'vision', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative group text-[#C3C8D3] hover:text-white transition-colors capitalize ${currentSection === section ? 'text-white' : ''}`}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] transition-all duration-300 ${currentSection === section ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="relative overflow-hidden group bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#6C63FF]/30 transition-all"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#4DE3C1] to-[#6C63FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-8 px-4 py-2 bg-[#1E243D] rounded-full border border-[#6C63FF]/30">
              <span className="text-sm font-medium bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
                Computer Science Student · Full-Stack Developer · ML Engineer
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#F5F7FA] via-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
                Building Solutions
              </span><br />
              <span className="bg-gradient-to-r from-[#4DE3C1] to-[#6C63FF] bg-clip-text text-transparent">
                That Matter
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#C3C8D3] mb-8 max-w-3xl mx-auto leading-relaxed">
              I create technology that solves real problems and makes people's lives better through thoughtful engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative overflow-hidden bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[#6C63FF]/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="relative z-10">View My Projects</span>
                <Code className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#4DE3C1] to-[#6C63FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('Detailed Project Views')}
                className="group relative overflow-hidden bg-[#1E243D] border border-[#6C63FF]/30 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[#6C63FF]/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="relative z-10">View Work Samples</span>
                <Book className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#6C63FF]/10 to-[#4DE3C1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button
                onClick={() => navigate('/learning')}
                className="group relative overflow-hidden bg-[#1E243D] border border-[#6C63FF]/30 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-[#6C63FF]/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span className="relative z-10">View journal</span>
                <Book className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-[#6C63FF]/10 to-[#4DE3C1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="flex items-center space-x-2 text-[#C3C8D3] hover:text-[#4DE3C1] transition-colors group"
              >
                <div className="relative">
                  <CircuitBoard className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span>My Experience</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#6C63FF] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-[#6C63FF] to-[#4DE3C1] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <p className="text-lg text-[#A0A8C0] max-w-2xl mx-auto">
                My journey from curious kid to passionate developer
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors group">
                  <h3 className="text-2xl font-semibold mb-4 text-[#4DE3C1]">Hi, I'm Nathan Benayguev</h3>
                  <p className="text-[#C3C8D3] leading-relaxed mb-6">
                    I'm pursuing an Honors BSc in Computer Science at York University with an 8.35/9.0 GPA.
                    Growing up in Toronto, ON, gave me the space to focus
                    deeply on my interests and develop my passion for technology.
                  </p>
                  <p className="text-[#C3C8D3] leading-relaxed mb-6">
                    From a young age, I was always curious about how things work, whether taking apart toys,
                    exploring new tech, or solving puzzles. This natural curiosity led me to programming and
                    building technology projects that solve real problems.
                  </p>
                  <p className="text-[#C3C8D3] leading-relaxed">
                    I chose York University for its Lassonde School of Engineering and the BEST program, where
                    I'm currently interning at Nobl, gaining hands-on experience in a fast-growing tech company.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1E243D] rounded-xl p-4 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#6C63FF]/10 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-[#6C63FF]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#A0A8C0]">Education</p>
                        <p className="text-[#F0F4FF]">York University</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1E243D] rounded-xl p-4 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#4DE3C1]/10 rounded-full flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-[#4DE3C1]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#A0A8C0]">Focus Areas</p>
                        <p className="text-[#F0F4FF]">AI/ML, Full-Stack & Embedded</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1E243D] rounded-xl p-4 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#6C63FF]/10 rounded-full flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-[#6C63FF]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#A0A8C0]">Internship</p>
                        <p className="text-[#F0F4FF]">Nobl Kids (completed)</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#1E243D] rounded-xl p-4 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#4DE3C1]/10 rounded-full flex items-center justify-center">
                        <Gamepad className="w-5 h-5 text-[#4DE3C1]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#A0A8C0]">First Project</p>
                        <p className="text-[#F0F4FF]">Goose Hunt Game</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors">
                  <h3 className="text-xl font-semibold mb-6 text-[#4DE3C1]">My Strengths</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-[#6C63FF]/10 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#6C63FF] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#F0F4FF]">Curiosity & Creativity</p>
                        <p className="text-[#A0A8C0] text-sm">Always exploring new ways to solve problems</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-[#4DE3C1]/10 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#4DE3C1] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#F0F4FF]">Strong Logical Mindset</p>
                        <p className="text-[#A0A8C0] text-sm">Excellent at breaking down complex problems</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-[#6C63FF]/10 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#6C63FF] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#F0F4FF]">Visual Learning</p>
                        <p className="text-[#A0A8C0] text-sm">Understand concepts through diagrams and visual tools</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-[#4DE3C1]/10 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#4DE3C1] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#F0F4FF]">Dependable Work Ethic</p>
                        <p className="text-[#A0A8C0] text-sm">Committed to delivering quality work on time</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors">
                  <h3 className="text-xl font-semibold mb-6 text-[#4DE3C1]">Core Values</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#2A3150] rounded-lg p-3 text-center">
                      <p className="text-[#6C63FF] font-medium">Curiosity</p>
                      <p className="text-[#A0A8C0] text-sm">Always questioning and learning</p>
                    </div>
                    <div className="bg-[#2A3150] rounded-lg p-3 text-center">
                      <p className="text-[#4DE3C1] font-medium">Integrity</p>
                      <p className="text-[#A0A8C0] text-sm">Building trust through honesty</p>
                    </div>
                    <div className="bg-[#2A3150] rounded-lg p-3 text-center">
                      <p className="text-[#6C63FF] font-medium">Improvement</p>
                      <p className="text-[#A0A8C0] text-sm">Learning from every experience</p>
                    </div>
                    <div className="bg-[#2A3150] rounded-lg p-3 text-center">
                      <p className="text-[#4DE3C1] font-medium">Innovation</p>
                      <p className="text-[#A0A8C0] text-sm">Challenging the status quo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Video Section */}
      <section id="about-video" className="relative py-20 px-6 bg-gradient-to-b from-[#0A0F1F] to-[#1E243D]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8 px-4 py-2 bg-[#1E243D] rounded-full border border-[#6C63FF]/30">
            <span className="text-sm font-medium bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
              My Story
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#F5F7FA] via-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
              Why
            </span>{' '}
            <span className="bg-gradient-to-r from-[#4DE3C1] to-[#6C63FF] bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          {/* Video Container - Replace src with your actual video */}
          <div className="relative rounded-xl overflow-hidden border border-[#6C63FF]/30 shadow-lg shadow-[#6C63FF]/10 animate-fade-in-up">
            <iframe
              src="https://www.youtube.com/embed/UXFxW97Oe2k" // Dummy link - replace with your video
              className="w-full aspect-video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#6C63FF]/50 rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#4DE3C1]/50 rounded-br-xl"></div>
          </div>
        </div>

        {/* Decorative gradient blobs */}
        <div className="absolute -bottom-20 left-0 w-64 h-64 bg-[#6C63FF]/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -top-20 right-0 w-64 h-64 bg-[#4DE3C1]/20 rounded-full filter blur-3xl opacity-30"></div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 px-6 bg-[#12172B] relative">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
                  My Vision
                </span>
              </h2>
              <p className="text-lg text-[#A0A8C0] max-w-2xl mx-auto">
                How I see engineering and my role in shaping technology's future
              </p>
            </div>

            <div className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors mb-12">
              <p className="text-lg text-[#C3C8D3] leading-relaxed mb-6">
                My vision as an engineer is to create meaningful, wide-reaching impact by leveraging technology to free people from tedious, repetitive tasks that drain time and energy. I believe engineering should serve everyone globally, starting with small steps that build toward a future where innovation improves lives at every scale.
              </p>
              <p className="text-lg text-[#C3C8D3] leading-relaxed mb-6">
                I am passionate about applying my skills especially to social causes, where the potential to uplift communities and foster connection is greatest. I aim to be an engineer who embraces a diverse range of challenges and technologies, known for a fearless curiosity that drives me to explore new areas and expand my expertise continuously.
              </p>
              <p className="text-lg text-[#C3C8D3] leading-relaxed">
                I want people to see me as adaptable and resourceful, someone unafraid to dive into unfamiliar territory, which strengthens my ability to approach problems from multiple angles and find innovative solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#4DE3C1]">Engineering Culture</h3>
                <p className="text-[#C3C8D3] leading-relaxed">
                  I envision a culture that embraces curiosity and continuous learning, where asking questions and building on past experiences is celebrated. Mistakes aren't failures but stepping stones that guide us toward better solutions.
                </p>
              </div>

              <div className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#4DE3C1]">Purposeful Innovation</h3>
                <p className="text-[#C3C8D3] leading-relaxed">
                  I want to be part of building a profession that's not only about technical mastery but about uplifting people through thoughtful, purposeful innovation that amplifies human potential and social good.
                </p>
              </div>

              <div className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#4DE3C1]">Versatile Problem-Solving</h3>
                <p className="text-[#C3C8D3] leading-relaxed">
                  My unique dream is to be a versatile engineer who navigates complex challenges with creativity and humility, inspiring others to join in creating solutions that make life better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <p className="text-lg text-[#A0A8C0] max-w-2xl mx-auto">
                My professional journey and hands-on learning
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6C63FF] to-[#4DE3C1] hidden md:block"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-0 md:pl-16 group">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center hidden md:flex">
                      <div className="w-4 h-4 bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] rounded-full z-10"></div>
                      <div className="absolute w-8 h-8 bg-[#6C63FF]/20 rounded-full animate-ping"></div>
                    </div>

                    <div className="bg-[#1E243D] rounded-xl p-6 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors group-hover:shadow-lg group-hover:shadow-[#6C63FF]/10">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-4">
                        <div>
                          <h4 className="text-xl font-semibold text-[#F0F4FF]">{exp.role}</h4>
                          <p className="text-[#6C63FF] font-medium">{exp.company}</p>
                        </div>
                        <span className="text-[#A0A8C0] text-sm bg-[#2A3150] px-3 py-1 rounded-full self-start md:self-auto">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-[#C3C8D3] mb-4">{exp.description}</p>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 mt-1 mr-2">
                              <div className="w-2 h-2 bg-[#4DE3C1] rounded-full"></div>
                            </div>
                            <span className="text-[#C3C8D3] text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tech.map((tech, i) => (
                          <span key={i} className="text-xs bg-[#2A3150] text-[#A0A8C0] px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#12172B] relative">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-lg text-[#A0A8C0] max-w-2xl mx-auto">
                A showcase of my technical skills and creativity
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors group">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#F0F4FF]">{project.name}</h3>
                  <p className="text-[#A0A8C0] mb-4">{project.description}</p>
                  <ul className="space-y-2 mb-6">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-2">
                          <div className="w-2 h-2 bg-[#6C63FF] rounded-full"></div>
                        </div>
                        <span className="text-[#C3C8D3] text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-[#2A3150] text-[#A0A8C0] px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Inline Work Samples */}
            <div id="Detailed Project Views" className="mt-20 w-full animate-fade-in">
              <WorkSamples />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
                  Skills & Education
                </span>
              </h2>
              <p className="text-lg text-[#A0A8C0] max-w-2xl mx-auto">
                My technical toolkit and academic foundation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors">
                  <h3 className="text-2xl font-semibold mb-6 text-[#4DE3C1]">Technical Skills</h3>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[#F0F4FF] font-medium">{skill.name}</span>
                          <span className="text-[#A0A8C0] text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-[#2A3150] rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] h-2 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors">
                  <h3 className="text-xl font-semibold mb-6 text-[#4DE3C1]">Additional Skills</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['OOP', 'Data Structures', 'Algorithms', 'ML/AI', 'Docker', 'Git', 'CI/CD', 'Linux/Unix'].map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#6C63FF] rounded-full"></div>
                        <span className="text-[#F0F4FF] text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#4DE3C1]">Education</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-[#2A3150] rounded-xl p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-xl font-semibold text-[#F0F4FF]">Honors BSc in Computer Science (3rd Year)</h4>
                          <p className="text-[#6C63FF] font-medium">York University</p>
                        </div>
                        <span className="text-[#A0A8C0] text-sm bg-[#1E243D] px-3 py-1 rounded-full">
                          2023 - Expected April 2027
                        </span>
                      </div>
                      <p className="text-[#4DE3C1] font-medium mb-4">GPA: 8.35/9.0, Lassonde Dean's Scholar</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <div className="w-2 h-2 bg-[#6C63FF] rounded-full"></div>
                          </div>
                          <span className="text-[#C3C8D3] text-sm">Schulich School of Business: B.E.S.T. Certificate</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <div className="w-2 h-2 bg-[#6C63FF] rounded-full"></div>
                          </div>
                          <span className="text-[#C3C8D3] text-sm">Scholarships: Lassonde Entrance, Automatic Entrance, BEST Award</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <div className="w-2 h-2 bg-[#6C63FF] rounded-full"></div>
                          </div>
                          <span className="text-[#C3C8D3] text-sm">Relevant Coursework: Advanced Algorithms, Software Design, Operating Systems, Database Systems</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <div className="w-2 h-2 bg-[#6C63FF] rounded-full"></div>
                          </div>
                          <span className="text-[#C3C8D3] text-sm">President of Developer Student Club</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors">
                  <h3 className="text-xl font-semibold mb-6 text-[#4DE3C1]">Learning Philosophy</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-[#6C63FF]/10 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#6C63FF] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#F0F4FF]">Project-Based Learning</p>
                        <p className="text-[#A0A8C0] text-sm">Learn by building real applications that solve problems</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-[#4DE3C1]/10 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#4DE3C1] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#F0F4FF]">Visual Understanding</p>
                        <p className="text-[#A0A8C0] text-sm">Diagrams, flowcharts, and step-by-step breakdowns</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 bg-[#6C63FF]/10 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#6C63FF] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[#F0F4FF]">Continuous Improvement</p>
                        <p className="text-[#A0A8C0] text-sm">Always refining my approach based on feedback</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#12172B] relative">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </h2>
              <p className="text-lg text-[#A0A8C0] max-w-2xl mx-auto">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-12">
              <div className="bg-[#1E243D] rounded-2xl p-8 border border-[#2A3150] hover:border-[#6C63FF]/40 transition-colors">
                <h3 className="text-2xl font-semibold mb-6 text-[#4DE3C1]">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#6C63FF]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#6C63FF]" />
                    </div>
                    <div>
                      <p className="text-[#F0F4FF] font-medium">Email & Phone</p>
                      <p className="text-[#A0A8C0]">nateben0@my.yorku.ca<br />(647) 835-3201</p>
                      <a href="mailto:nateben0@my.yorku.ca" className="text-[#6C63FF] text-sm hover:underline">Send a message</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4DE3C1]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Github className="w-5 h-5 text-[#4DE3C1]" />
                    </div>
                    <div>
                      <p className="text-[#F0F4FF] font-medium">GitHub</p>
                      <p className="text-[#A0A8C0]">@NathanBen-CS</p>
                      <a href="https://github.com/NathanBen-CS" target="_blank" rel="noopener noreferrer" className="text-[#4DE3C1] text-sm hover:underline">View profile</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#6C63FF]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-[#6C63FF]" />
                    </div>
                    <div>
                      <p className="text-[#F0F4FF] font-medium">LinkedIn</p>
                      <p className="text-[#A0A8C0]">@nathan-benayguev</p>
                      <a href="https://www.linkedin.com/in/nathan-benayguev/" target="_blank" rel="noopener noreferrer" className="text-[#6C63FF] text-sm hover:underline">Connect with me</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1E243D]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent mb-4 md:mb-0 cursor-pointer hover:opacity-90 transition-opacity"
            >
              Nathan Benayguev
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/NathanBen-CS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0A8C0] hover:text-[#4DE3C1] transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/nathan-benayguev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A0A8C0] hover:text-[#6C63FF] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:nateben0@my.yorku.ca"
                className="text-[#A0A8C0] hover:text-[#4DE3C1] transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#1E243D] text-center text-[#A0A8C0] text-sm">
            <p>&copy; {new Date().getFullYear()} Nathan Benayguev. All rights reserved.</p>
            <p className="mt-2">Built with <span className="text-[#6C63FF]">♥</span> and React</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button
        onClick={() => scrollToSection('hero')}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-[#6C63FF]/30 transition-all duration-300 z-50"
      >
        <ArrowRight className="w-5 h-5 text-white transform rotate-90" />
      </button>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioHomepage;