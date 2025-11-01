'use client'
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'Work', path: '#work' },
    { name: 'Skills', path: '#skills' }
  ];

  // Check screen size and handle responsiveness
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.path.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const targetId = path.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      setActiveSection(targetId);
      if (isMobile) {
        setIsOpen(false);
      }
    }
  };

  // Mobile toggle button
  const ToggleButton = () => (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="fixed top-6 left-6 z-60 p-3 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-emerald-900/30 text-emerald-400 hover:bg-gray-700/90 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 hover:scale-105 md:hidden"
      aria-label="Toggle navigation"
    >
      <div className="w-5 h-5 flex flex-col justify-center">
        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
        <span className={`w-full h-0.5 bg-current transition-all duration-300 mt-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`w-full h-0.5 bg-current transition-all duration-300 mt-1 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </div>
    </button>
  );

  // Sidebar content
  const SidebarContent = () => (
    <nav className={`
      bg-gray-900/95 backdrop-blur-md p-4 rounded-xl border border-emerald-900/30 
      shadow-2xl shadow-emerald-900/20 transition-all duration-300 z-50
      ${isMobile 
        ? `fixed left-6 top-20 transform transition-all duration-300 ${
            isOpen ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-4 opacity-0 scale-95 pointer-events-none'
          }` 
        : 'fixed left-6 top-1/2 -translate-y-1/2'
      }
    `}>
      <ul className="space-y-3">
        {navItems.map((item) => {
          const sectionId = item.path.replace('#', '');
          const isActive = activeSection === sectionId;
          
          return (
            <li key={item.path}>
              <a
                href={item.path}
                onClick={(e) => handleClick(e, item.path)}
                className={`
                  group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 
                  transform hover:scale-105 border border-transparent relative
                  ${isActive
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 shadow-lg shadow-emerald-500/10'
                    : 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/20'
                  }
                `}
              >
                {/* Icon placeholder using first letter */}
                <div className={`
                  w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold transition-all duration-300
                  ${isActive 
                    ? 'bg-emerald-400/20 text-emerald-400 scale-110' 
                    : 'bg-gray-600/50 text-gray-400 group-hover:bg-emerald-400/20 group-hover:text-emerald-400 group-hover:scale-110'
                  }
                `}>
                  {item.name.charAt(0)}
                </div>
                
                <span className="font-medium whitespace-nowrap">{item.name}</span>
                
                {/* Active indicator dot */}
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  // Mobile overlay
  const MobileOverlay = () => (
    isMobile && isOpen && (
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden"
        onClick={() => setIsOpen(false)}
      />
    )
  );

  return (
    <>
      <ToggleButton />
      <MobileOverlay />
      <SidebarContent />
    </>
  );
};

export default Sidebar;