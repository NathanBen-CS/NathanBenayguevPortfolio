import { useState } from 'react';
import { BookOpen, Code, MessageSquare, Zap, ChevronRight, ChevronLeft, ArrowLeft, Settings, BarChart, Layout, TestTube2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LearningJournal = () => {
  const entries = [
    {
      id: 1,
      date: "May 13, 2025",
      title: "Onboarding & First Contributions",
      icon: <Code className="w-5 h-5" />,
      color: "from-amber-500 to-pink-500",
      summary: "Set up dev environment and reviewed project structure while learning Tailwind CSS v4",
      learnings: [
        "Became familiar with TRPC, Kysely, PostgreSQL stack",
        "Learned how backend types integrate with frontend UI"
      ],
      personal: "I'm comfortable onboarding quickly and learn fastest through hands-on work"
    },
    {
      id: 2,
      date: "May 20, 2025",
      title: "Component Development",
      icon: <Code className="w-5 h-5" />,
      color: "from-violet-500 to-blue-500",
      summary: "Built reusable components like Alert system and Time Slot Scheduler",
      learnings: [
        "Improved componentization skills",
        "Production-level React + TypeScript patterns"
      ],
      personal: "I enjoy building reusable systems and designing clean UI components"
    },
    {
      id: 3,
      date: "May 27, 2025",
      title: "Filters & Sorts Infrastructure",
      icon: <Code className="w-5 h-5" />,
      color: "from-blue-500 to-teal-400",
      summary: "Implemented backend queries and UI for price, age, date filtering",
      learnings: [
        "Advanced TRPC patterns",
        "Backend filtering with Kysely/PostgreSQL"
      ],
      personal: "I'm capable at designing data flows and enjoy end-to-end building"
    },
    {
      id: 4,
      date: "June 3, 2025",
      title: "Feature Development & Debugging",
      icon: <Zap className="w-5 h-5" />,
      color: "from-emerald-500 to-cyan-400",
      summary: "Launched Duplicate Service feature and fixed image upload bugs",
      learnings: [
        "User validation techniques",
        "Security best practices for file handling"
      ],
      personal: "Debugging gives me clarity and I'm good at isolating problems logically"
    },
    {
      id: 5,
      date: "June 10, 2025",
      title: "Testing & Documentation",
      icon: <BookOpen className="w-5 h-5" />,
      color: "from-red-500 to-orange-500",
      summary: "Designed test plan and Requirements Traceability Matrix",
      learnings: [
        "Test planning skills",
        "Importance of documentation in development"
      ],
      personal: "I enjoy combining visual design with structured backend logic"
    },
    {
      id: 6,
      date: "June 17, 2025",
      title: "Bug Sprint",
      icon: <Zap className="w-5 h-5" />,
      color: "from-purple-500 to-indigo-500",
      summary: "Fixed 40+ issues including UI alignment and mobile usability",
      learnings: [
        "Issue triaging",
        "Cross-device testing"
      ],
      personal: "I can handle high-pressure release prep while staying organized"
    },
    {
      id: 7,
      date: "June 25, 2025",
      title: "System Planning",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "from-pink-500 to-rose-500",
      summary: "Collaborated on feature/bug pipelines and fixed useContext issues",
      learnings: [
        "Architectural thinking",
        "Async rendering solutions"
      ],
      personal: "I enjoy process design and collaboration as much as coding"
    },
    {
      id: 8,
      date: "July 1, 2025",
      title: "Service Page Redesign",
      icon: <Code className="w-5 h-5" />,
      color: "from-cyan-500 to-blue-500",
      summary: "Redesigned Service Detail Page with dynamic queries and responsive UI",
      learnings: [
        "TRPC query optimization",
        "Linking backend structure with UI goals"
      ],
      personal: "I'm capable of solving both logic-heavy and visual design problems"
    },{
      id: 9,
      date: "July 11, 2025",
      title: "Playwright Test Setup & QA Onboarding",
      icon: <TestTube2 className="w-5 h-5" />,
      color: "from-indigo-500 to-purple-500",
      summary: "Implemented Playwright for end-to-end testing and designed QA onboarding workflow",
      learnings: [
        "Automated test case creation with screenshot comparisons",
        "File upload validation testing",
        "QA process documentation best practices"
      ],
      personal: "I discovered a knack for creating clear onboarding materials and enjoy building testing infrastructure"
    },
    {
      id: 10,
      date: "July 15, 2025",
      title: "Provider Page Redesign + Schema Update",
      icon: <Layout className="w-5 h-5" />,
      color: "from-rose-500 to-pink-500",
      summary: "Redesigned provider profile page and implemented backend schema changes",
      learnings: [
        "Database migrations with Liquibase",
        "Tailwind v4 responsive design patterns",
        "Backward-compatible schema updates"
      ],
      personal: "I'm becoming more confident handling both frontend redesigns and backend schema changes"
    },
    {
      id: 11,
      date: "July 17, 2025",
      title: "Meta Pixel Integration",
      icon: <BarChart className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      summary: "Implemented Meta Pixel analytics with Next.js",
      learnings: [
        "Dynamic script injection in Next.js",
        "Conversion event tracking",
        "Production environment checks"
      ],
      personal: "I enjoy bridging technical implementations with business analytics needs"
    },
    {
      id: 12,
      date: "July 29, 2025",
      title: "Production Push & Analytics",
      icon: <Settings className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      summary: "Deployed Pixel integration and provider page redesign to production",
      learnings: [
        "Production deployment verification",
        "Analytics event mapping",
        "Design system implementation at scale"
      ],
      personal: "Seeing features through from development to production is deeply satisfying"
    },
    {
      id: 13,
      date: "August 5, 2025",
      title: "Onboarding Revamp & Conversion Flow",
      icon: <Settings className="w-5 h-5" />,
      color: "from-yellow-500 to-amber-500",
      summary: "Redesigned guided onboarding flow for conversion tracking",
      learnings: [
        "Step-based route architecture",
        "Mobile-first form design",
        "Conversion optimization techniques"
      ],
      personal: "I'm developing a strong interest in the intersection of UX and conversion metrics"
    },
    {
      id: 14,
      date: "August 8, 2025",
      title: "Google Tag Manager Deployment",
      icon: <BarChart className="w-5 h-5" />,
      color: "from-red-500 to-orange-500",
      summary: "Implemented GTM integration and conversion tracking",
      learnings: [
        "GTM container configuration",
        "Cross-platform event tracking",
        "Ads conversion attribution"
      ],
      personal: "I've grown to appreciate how technical implementations drive business insights"
    }
  ];

  const [activeEntry, setActiveEntry] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateEntry = (direction) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveEntry((prev) => 
        (prev + direction + entries.length) % entries.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  const setActiveEntryAndReset = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveEntry(index);
      setIsTransitioning(false);
    }, 300);
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E23] to-[#1A1F3A] text-[#F0F4FF] py-12 px-4 relative overflow-hidden">
      {/* Back button */}
      <button 
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 flex items-center space-x-2 bg-[#1E243D] hover:bg-[#2A3150] border border-[#2A3150] hover:border-[#6C63FF]/40 text-[#C3C8D3] hover:text-white px-4 py-2 rounded-full transition-all duration-300 shadow-lg"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Main</span>
      </button>

      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full opacity-5 bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1]"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(60px)',
              animation: `float ${Math.random() * 20 + 10}s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 pt-12">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
              Learning Journal
            </span>
          </h1>
          <p className="text-xl text-[#C3C8D3] max-w-3xl mx-auto">
            My growth journey during the Nobl Kids internship - skills gained, challenges overcome, and personal discoveries
          </p>
        </header>

        {/* Key Takeaways Section */}
        <div className="mb-20 p-6 bg-[#1E243D]/50 backdrop-blur-sm rounded-xl border border-[#2A3150] max-w-3xl mx-auto">
          <h2 className="text-lg font-medium text-[#A0A8C0] mb-3">Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 text-[#6C63FF]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <p className="text-[#C3C8D3]">
                <span className="font-medium text-white">Communication:</span> Led feature walkthroughs, wrote documentation, and improved at explaining technical concepts to non-developers
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 text-[#6C63FF]">
                <Zap className="w-5 h-5" />
              </div>
              <p className="text-[#C3C8D3]">
                <span className="font-medium text-white">Adaptability:</span> Quickly learned new libraries (Kysely, TRPC) and adapted to shifting priorities in a fast-paced startup
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-3 text-[#6C63FF]">
                <Code className="w-5 h-5" />
              </div>
              <p className="text-[#C3C8D3]">
                <span className="font-medium text-white">Problem Solving:</span> Debugged complex issues, optimized components, and gained confidence proposing independent solutions
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Entry navigation arrows */}
          <button 
            onClick={() => navigateEntry(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-[#2A3150] p-3 rounded-full hover:bg-[#3A4150] transition-all z-20 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => navigateEntry(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-[#2A3150] p-3 rounded-full hover:bg-[#3A4150] transition-all z-20 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main entry card */}
          <div className={`relative bg-[#1E243D] rounded-3xl overflow-hidden border border-[#2A3150] shadow-2xl transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {/* Background gradient */}
            <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${entries[activeEntry].color}`} />

            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${entries[activeEntry].color}`}>
                  {entries[activeEntry].icon}
                </div>
                <div>
                  <span className="text-sm font-medium text-[#A0A8C0]">
                    {entries[activeEntry].date}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {entries[activeEntry].title}
                  </h2>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#C3C8D3] mb-2">Summary</h3>
                <p className="text-[#C3C8D3]">{entries[activeEntry].summary}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-[#C3C8D3] mb-2 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-[#6C63FF]" />
                    Technical Learnings
                  </h3>
                  <ul className="space-y-3">
                    {entries[activeEntry].learnings.map((learning, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#6C63FF] mr-2">•</span>
                        <span className="text-[#C3C8D3]">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#C3C8D3] mb-2 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-[#4DE3C1]" />
                    Personal Insights
                  </h3>
                  <p className="text-[#C3C8D3]">{entries[activeEntry].personal}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Entry indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {entries.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveEntryAndReset(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === activeEntry ? 'bg-[#6C63FF] w-6' : 'bg-[#2A3150] hover:bg-[#3A4150]'}`}
            />
          ))}
        </div>

        {/* All entries grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {entries.map((entry, index) => (
            <div 
              key={entry.id}
              onClick={() => setActiveEntryAndReset(index)}
              className={`bg-[#1E243D] rounded-2xl p-6 border cursor-pointer transition-all hover:scale-[1.02] ${activeEntry === index ? 'border-[#6C63FF]' : 'border-[#2A3150] hover:border-[#6C63FF]/40'}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r ${entry.color}`}>
                  {entry.icon}
                </div>
                <div>
                  <span className="text-xs text-[#A0A8C0]">{entry.date}</span>
                  <h3 className="text-lg font-semibold">{entry.title}</h3>
                </div>
              </div>
              <p className="text-[#C3C8D3] text-sm mb-4">{entry.summary}</p>
              <ul className="space-y-2 text-sm text-[#A0A8C0]">
                {entry.learnings.slice(0, 2).map((learning, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#6C63FF] mr-2">•</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Final Reflection */}
        <div className="mt-20 p-8 bg-[#1E243D]/50 backdrop-blur-sm rounded-xl border border-[#6C63FF]/30">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#6C63FF] to-[#4DE3C1] bg-clip-text text-transparent">
            Final Reflection
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#C3C8D3] mb-2">Growth Achieved</h3>
              <p className="text-[#C3C8D3]">
                This internship strengthened my core skills in communication, adaptability, and problem-solving through real-world challenges. I learned to navigate ambiguity, collaborate across teams, and take ownership of features from backend logic to polished UI.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#C3C8D3] mb-2">Looking Ahead</h3>
              <p className="text-[#C3C8D3]">
                My next goal is to apply these learnings in a leadership context by starting a small-scale project with a dedicated team. I want to develop my ability to set vision, define goals, and build from the ground up - moving toward becoming not just a developer, but a product leader.
              </p>
            </div>
          </div>
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

export default LearningJournal;