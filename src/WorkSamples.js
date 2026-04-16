import { useState, useEffect, useRef } from 'react';
import { Code, Monitor, Smartphone, Mail, Search, Gamepad, Cpu, Rocket, Link, BrainCircuit, Bot, Terminal, Calendar } from 'lucide-react';

const WorkSamples = () => {
  const projects = [
    {
      id: 7,
      title: "Deep Learning & NLP Experiments",
      category: "Machine Learning",
      icon: <BrainCircuit className="w-5 h-5" />,
      color: "from-blue-600 to-indigo-600",
      highlights: [
        "PyTorch GPT architecture",
        "JAX MLP implementation",
        "SVM classification pipeline"
      ],
      media: [
        { type: "image", url: "/DeepLearning1.PNG", alt: "Deep Learning overview" },
        { type: "image", url: "/DeepLearning2.png", alt: "Deep Learning visualization" },
        { type: "image", url: "/DeepLearning3.png", alt: "Models comparison" },
        { type: "image", url: "/DeepLearning4.png", alt: "Deep Learning metrics" }
      ]
    },
    {
      id: 8,
      title: "Codebase Onboarding Agent",
      category: "AI Tool Development",
      icon: <Bot className="w-5 h-5" />,
      color: "from-emerald-500 to-teal-600",
      highlights: [
        "Autonomous OODA loop agent",
        "LLM-driven curriculum generation",
        "Sandboxed execution layer"
      ],
      media: [
        { type: "image", url: "/placeholder-agent.jpg", alt: "AI Agent placeholder" }
      ]
    },
    {
      id: 9,
      title: "Cyber Risk Assessment Lab",
      category: "Security",
      icon: <Code className="w-5 h-5" />,
      color: "from-red-600 to-rose-600",
      highlights: [
        "Metasploit vulnerability exploitation",
        "Nmap network reconnaissance",
        "Steganography forensics"
      ],
      media: [
        { type: "image", url: "/CyberLab.png", alt: "Cyber Lab overview" },
        { type: "image", url: "/CyberLab2.png", alt: "Cyber Lab attack surface" },
        { type: "image", url: "/CyberLab3.png", alt: "Vulnerability exploitation" },
        { type: "image", url: "/CyberLab4.png", alt: "Steganography investigation" }
      ]
    },
    {
      id: 10,
      title: "xv6 OS Enhancements",
      category: "System Programming",
      icon: <Terminal className="w-5 h-5" />,
      color: "from-gray-700 to-gray-900",
      highlights: [
        "Priority CPU scheduler",
        "System call interface",
        "Custom memory allocator"
      ],
      media: [
        { type: "youtube", url: "https://www.youtube.com/embed/j4jnFnVKuZw", alt: "xv6 OS demo1" },
        { type: "youtube", url: "https://www.youtube.com/embed/bzVwgMerdUw", alt: "xv6 OS demo2" },
        { type: "youtube", url: "https://www.youtube.com/embed/q1MPsKbkxB4", alt: "xv6 OS demo3" }
      ]
    },
    {
      id: 11,
      title: "YUEvents",
      category: "Product Management",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-yellow-500 to-red-500",
      highlights: [
        "Aggregated campus events platform",
        "Agile documentation mgmt",
        "Scraper-based data pipeline"
      ],
      media: [
        { type: "youtube", url: "https://www.youtube.com/embed/Es_iVFYjaDQ", alt: "YUEvents demo1" },
        { type: "image", url: "/yuprojburn.PNG", alt: "YUEvents placeholder" },
        { type: "image", url: "/yuprojsched.PNG", alt: "YUEvents placeholder1" },
        { type: "image", url: "/yuprojsched2.PNG", alt: "YUEvents placeholder2" },
      ]
    },
    {
      id: 1,
      title: "Nobl",
      category: "Website Optimization",
      icon: <Monitor className="w-5 h-5" />,
      color: "from-amber-500 to-pink-500",
      highlights: [
        "Redesigned Service/Provider Pages",
        "Facebook Pixel integration",
        "Playwright test automation"
      ],
      media: [
        { type: "youtube", url: "https://www.youtube.com/embed/7hdDj-9ITKQ", alt: "Nobl script" },
        { type: "youtube", url: "https://www.youtube.com/embed/tXkJw9K3YIA", alt: "provider dashboard" }
      ]
    },
    {
      id: 2,
      title: "Verve Tutor",
      category: "AI Tool Development",
      icon: <Cpu className="w-5 h-5" />,
      color: "from-violet-500 to-blue-500",
      highlights: [
        "AI content generation",
        "Student management system",
        "Automated reminder emails"
      ],
      media: [
        { type: "youtube", url: "https://www.youtube.com/embed/2WHTpyGqxPM", alt: "AI interface" },
        { type: "youtube", url: "https://www.youtube.com/embed/GIRH9CJf5oM", alt: "Student dashboard" }
      ]
    },
    {
      id: 3,
      title: "Shiny Clean Detailing",
      category: "Business Website",
      icon: <Smartphone className="w-5 h-5" />,
      color: "from-blue-500 to-teal-400",
      highlights: [
        "Automated quote system",
        "Service comparison tables",
        "Lead generation forms"
      ],
      media: [
        { type: "youtube", url: "https://www.youtube.com/embed/lkaMuJt9V6k", alt: "Service comparison" },
        { type: "image", url: "/packages.jpg", alt: "Quote system" },
        { type: "image", url: "/shiny.PNG", alt: "Shiny Clean Detailing homepage" }
      ]
    },
    {
      id: 4,
      title: "Air Point",
      category: "Content Management",
      icon: <Search className="w-5 h-5" />,
      color: "from-emerald-500 to-cyan-400",
      highlights: [
        "SEO-optimized blogs",
        "Content engagement systems",
        "Editorial workflow"
      ],
      media: [
        { type: "image", url: "/air.png", alt: "Blog content" }
      ]
    },
    {
      id: 5,
      title: "False Alarm",
      category: "Game Development",
      icon: <Gamepad className="w-5 h-5" />,
      color: "from-red-500 to-orange-500",
      highlights: [
        "Physics-based gameplay",
        "Complete game systems",
        "Video demo available"
      ],
      media: [
        { type: "video", url: "/false.mp4", alt: "False Alarm gameplay" },
        { type: "image", url: "/False.PNG", alt: "False Alarm screenshot" }
      ]
    },
    {
      id: 6,
      title: "Goose Hunt",
      category: "Game Development",
      icon: <Gamepad className="w-5 h-5" />,
      color: "from-purple-500 to-indigo-500",
      highlights: [
        "Core gameplay mechanics",
        "Character AI systems",
        "Video documentation"
      ],
      media: [
        { type: "video", url: "/goose.mp4", alt: "Goose Hunt gameplay" }
      ]
    },
  ];

  const [activeProject, setActiveProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Create a flat structure for video refs with unique keys
  const videoRefs = useRef({});

  // Generate unique key for each video
  const getVideoKey = (projectIndex, mediaIndex) => `${projectIndex}-${mediaIndex}`;

  // Get video ref safely
  const getVideoRef = (projectIndex, mediaIndex) => {
    const key = getVideoKey(projectIndex, mediaIndex);
    if (!videoRefs.current[key]) {
      videoRefs.current[key] = { current: null };
    }
    return videoRefs.current[key];
  };

  // Handle video playback when media changes
  useEffect(() => {
    const currentProject = projects[activeProject];
    const currentMedia = currentProject.media[activeMediaIndex];

    // Pause all videos first
    Object.values(videoRefs.current).forEach(ref => {
      if (ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    });

    setIsPlaying(false);

    // Play current video if it's a video type
    if (currentMedia?.type === 'video') {
      setTimeout(() => {
        const videoRef = getVideoRef(activeProject, activeMediaIndex);
        if (videoRef.current) {
          const playPromise = videoRef.current.play();

          if (playPromise !== undefined) {
            playPromise
              .then(() => setIsPlaying(true))
              .catch(error => {
                console.log("Autoplay prevented:", error);
                setIsPlaying(false);
              });
          }
        }
      }, 100); // Small delay to ensure video element is ready
    }
  }, [activeProject, activeMediaIndex]);

  // Auto-rotate media for projects with multiple assets
  useEffect(() => {
    const project = projects[activeProject];
    if (project.media.length > 1) {
      const interval = setInterval(() => {
        setActiveMediaIndex((prev) => (prev + 1) % project.media.length);
      }, 16000);
      return () => clearInterval(interval);
    }
  }, [activeProject]);

  const handlePlay = (projectIndex, mediaIndex) => {
    const videoRef = getVideoRef(projectIndex, mediaIndex);
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(error => {
          console.log("Play failed:", error);
          setIsPlaying(false);
        });
    }
  };

  const navigateProject = (direction) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveProject((prev) =>
        (prev + direction + projects.length) % projects.length
      );
      setActiveMediaIndex(0);
      setIsTransitioning(false);
    }, 300);
  };

  const navigateMedia = (index) => {
    setActiveMediaIndex(index);
  };

  const setActiveProjectAndReset = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveProject(index);
      setActiveMediaIndex(0);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="text-[#F0F4FF] pt-12 pb-24 relative z-10 w-full">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
              Detailed Project Views
            </span>
          </h3>
          <p className="text-lg text-[#C3C8D3] max-w-3xl mx-auto">
            Deep dive into my selected structural developments and application interfaces
          </p>
        </header>

        {/* Low-key Goals Section */}
        <div className="mb-20 p-6 bg-[#1E243D]/50 backdrop-blur-sm rounded-xl border border-[#2A3150] max-w-3xl mx-auto">
          <h2 className="text-lg font-medium text-[#A0A8C0] mb-3">Current Focus & Goals</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 text-[#6C63FF]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-[#C3C8D3]">
                Applying machine learning to solve real-world engineering challenges, particularly in education and productivity tools
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 text-[#6C63FF]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <p className="text-[#C3C8D3]">
                Building intelligent systems that combine software engineering with AI/ML to create seamless user experiences
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 text-[#6C63FF]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-[#C3C8D3]">
                Developing robust, scalable systems with a focus on clean architecture and maintainable code
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Project navigation arrows */}
          <button
            onClick={() => navigateProject(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-[#2A3150] p-3 rounded-full hover:bg-[#3A4150] transition-all z-20 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigateProject(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-[#2A3150] p-3 rounded-full hover:bg-[#3A4150] transition-all z-20 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main project card */}
          <div className={`relative bg-[#1E243D] rounded-3xl overflow-hidden border border-[#2A3150] shadow-2xl transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {/* Background gradient */}
            <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${projects[activeProject].color}`} />

            <div className="grid md:grid-cols-2 gap-8">
              {/* Media section */}
              <div className="relative h-80 md:h-full min-h-[400px] bg-[#0F1322] overflow-hidden">
                {projects[activeProject].media.map((media, index) => {
                  const isActive = index === activeMediaIndex;
                  const isYouTube = media.type === 'youtube';
                  const isVideo = media.type === 'video';

                  return (
                    <div
                      key={`${activeProject}-${index}`}
                      className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      {isYouTube ? (
                        <div className="relative w-full h-full">
                          <iframe
                            src={media.url}
                            title={media.alt}
                            className="w-full h-full object-contain"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : isVideo ? (
                        <div className="relative w-full h-full">
                          <video
                            ref={el => {
                              const videoRef = getVideoRef(activeProject, index);
                              videoRef.current = el;
                            }}
                            className="w-full h-full object-contain"
                            controls={isPlaying && isActive}
                            muted
                            loop
                            playsInline
                            preload="auto"
                            onClick={() => handlePlay(activeProject, index)}
                          >
                            <source src={media.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          {!isPlaying && isActive && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <button
                                onClick={() => handlePlay(activeProject, index)}
                                className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-all"
                              >
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l3-2z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <img
                          src={media.url}
                          alt={media.alt}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      )}
                    </div>
                  );
                })}

                {/* Media indicators */}
                {projects[activeProject].media.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-xl">
                    {projects[activeProject].media.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => navigateMedia(index)}
                        className={`h-2.5 rounded-full transition-all ${index === activeMediaIndex ? 'bg-[#4DE3C1] w-6' : 'bg-white/60 hover:bg-white w-2.5'}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${projects[activeProject].color}`}>
                    {projects[activeProject].icon}
                  </div>
                  <span className="text-sm font-medium text-[#A0A8C0]">
                    {projects[activeProject].category}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {projects[activeProject].title}
                </h2>

                <ul className="space-y-3 mb-6">
                  {projects[activeProject].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#6C63FF] mr-2">•</span>
                      <span className="text-[#C3C8D3]">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].highlights.slice(0, 3).map((highlight, index) => (
                    <span
                      key={index}
                      className="text-xs bg-[#2A3150] text-[#A0A8C0] px-3 py-1 rounded-full"
                    >
                      {highlight.split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProjectAndReset(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === activeProject ? 'bg-[#6C63FF] w-6' : 'bg-[#2A3150] hover:bg-[#3A4150]'}`}
            />
          ))}
        </div>

        {/* All projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveProjectAndReset(index)}
              className={`bg-[#1E243D] rounded-2xl p-6 border cursor-pointer transition-all hover:scale-[1.02] ${activeProject === index ? 'border-[#6C63FF]' : 'border-[#2A3150] hover:border-[#6C63FF]/40'}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r ${project.color}`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-[#C3C8D3] text-sm mb-4">{project.category}</p>
              <ul className="space-y-2 text-sm text-[#A0A8C0]">
                {project.highlights.slice(0, 2).map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#6C63FF] mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
                {project.highlights.length > 2 && (
                  <li className="text-[#6C63FF]/70">+{project.highlights.length - 2} more</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, 10px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
);

const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
  </svg>
);

export default WorkSamples;