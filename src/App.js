import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Portfolio = () => {
  const workExperience = [
    {
      title: "Website Developer",
      company: "Air Point",
      period: "May 2024 – August 2024",
      location: "Ontario, Canada",
      description: [
        "Reworked comprehensive business website using React JS",
        "Developed company blog feature, boosting organic growth by 25%",
        "Optimized SEO using KPIs, Google Analytics, and Hotjar",
        "Managed website maintenance and security with Elementor Panel"
      ],
      link: "www.airpoint.ca",
      image: "/air.png"
    },
    {
      title: "Website Developer",
      company: "Shiny Clean Detailing",
      period: "March 2023 – June 2023",
      location: "Ontario, Canada",
      description: [
        "Created a dynamic website using React JS framework for front-end design",
        "Implemented back-end functionalities using MailGun, Papa Parse and Car Models API",
        "Used GitHub for version control and security management"
      ],
      link: "www.shinycleandetailing.com",
      image: "/shiny.png"
    },
    {
      title: "Cashier/SCO Host",
      company: "Walmart",
      period: "April 2023 - Current",
      location: "Ontario, Canada",
      description: [
        "Oversaw Self-Checkout operations, resolving technical issues and assisting customers promptly",
        "Managed exceptions and overrides, ensuring compliance and customer satisfaction",
        "Trained onboarding associates on frontend application 'Upfront' and backend database 'Store Inventory Manager'"
      ],
      image: "/walmart.jpg"
    }
  ];

  const projects = [
    {
      title: "False Alarm - Racing Game",
      description: "A bird's-eye view traffic racing game focusing on behavioral physics and object-oriented design",
      technologies: ["C#", "Monogame/XNA", "React", "Physics Simulation"],
      highlights: [
        "1000+ downloads with 4.5-star rating",
        "Custom physics engine with drag, friction, and Ackermann steering",
        "Dynamic road generation using custom linked list and queue",
        "AI car behavior using linear algebra"
      ],
      link: "https://download-falsealarm.vercel.app",
      video: "/false.mp4"
    },
    {
      title: "Goose Hunt - 2D Shooting Game",
      description: "A 2D shooting game where players aim and shoot at geese flying across the screen, focusing on timing and precision.",
      technologies: ["C#", "Monogame/XNA"],
      highlights: [
        "Simple and engaging gameplay with increasing difficulty",
        "Smooth and responsive shooting mechanics",
        "Randomized flight paths for geese to increase replayability",
        "Minimalist graphics and animation for an enjoyable retro aesthetic"
      ],
      link: "https://download-goosehunt.vercel.app",
      video: "/goose.mp4"
    }
  ];

  // Add scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-4 animate-gradient bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent bg-300%">
          Nathan Benayguev
        </h1>
        <p className="text-xl text-gray-300 mb-6 opacity-0 animate-slide-up">
          Computer Science Student at York University
        </p>
        <div className="flex justify-center space-x-4 opacity-0 animate-slide-up-delayed">
          <a href="https://github.com/NathanBen-CS" 
             className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/nathan-benayguev" 
             className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:Nateben0@my.yorku.ca" 
             className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
          <a href="tel:6478353201" 
             className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 relative">
          About Me
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-blue-400 transform origin-left transition-transform duration-300 hover:scale-x-150"></span>
        </h2>
        <div className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/20">
          <p className="text-gray-300">
            Computer Science student at York University with a strong foundation in software development
            and a passion for creating engaging applications. Currently maintaining a GPA of 3.82/4.0
            while working on various projects that demonstrate practical application of theoretical concepts.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Assembly", "C#", "Python", "Java", "HTML", "CSS", "JavaScript", "TypeScript"].map((skill) => (
                <span key={skill} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Frameworks & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["React JS", "Node JS", "JUnit", "GitHub", "MonoGame"].map((skill) => (
                <span key={skill} className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 relative">
          Work Experience
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-blue-400 transform origin-left transition-transform duration-300 hover:scale-x-150"></span>
        </h2>
        <div className="space-y-8">
          {workExperience.map((work) => (
            <div key={`${work.company}-${work.title}`} 
                 className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/20">
              <div className="md:flex gap-6">
                <div className="md:w-1/3 mb-4 md:mb-0 overflow-hidden rounded-lg">
                  <img 
                    src={work.image} 
                    alt={`${work.company} work`} 
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold">{work.title}</h3>
                  <p className="text-blue-400">{work.company}</p>
                  <p className="text-gray-300">{work.period}</p>
                  <p className="text-gray-300 mb-4">{work.location}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {work.description.map((item, index) => (
                      <li key={index} className="hover:text-blue-400 transition-colors duration-300">{item}</li>
                    ))}
                  </ul>
                  {work.link && (
                    <a 
                      href={work.link}
                      className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors transform hover:translate-x-2 duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Website →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 relative">
          Featured Projects
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-blue-400 transform origin-left transition-transform duration-300 hover:scale-x-150"></span>
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.title} 
                 className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/20">
              <div className="md:flex gap-6">
                <div className="md:w-1/2 mb-4 md:mb-0 space-y-4">
                  <div className="overflow-hidden rounded-lg">
                  <video
                    src={project.video} // Replace with your video file path
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: 'auto' }} // Optional styling
                  >
                  Your browser does not support the video tag.
      </video>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} 
                              className="bg-blue-600 px-2 py-1 rounded-full text-xs transform transition-all duration-300 hover:scale-110 hover:bg-blue-500">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 text-sm mb-4">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="hover:text-blue-400 transition-colors duration-300">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={project.link} 
                    className="text-blue-400 hover:text-blue-300 transition-colors transform hover:translate-x-2 duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;