
import { DivideCircle } from "lucide-react";

export default function Skills() {

  const featuredSkills = [
    { name: "React", percentage: 90, description: "Advanced hooks, context, performance optimization" },
    { name: "Next.js", percentage: 85, description: "App router, SSR, API routes, optimization" },
    { name: "TypeScript", percentage: 50, description: "Type safety, interfaces, generics" },
    { name: "Tailwind CSS", percentage: 70, description: "Utility-first, responsive design, plugins" }
  ];

  return (<>
  <div className="h-px w-100% bg-white p-0  m-0"></div>
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-20">
        
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold text-emerald-400">TechSkills</h2>
          </div>
        <div className="h-px w-40 bg-white mx-auto m-6"></div>
        <div className="max-w-3xl mx-auto m-10">
          <h2 className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Mastering the <span className="text-cyan-400 font-semibold">tools</span> and{' '}
            <span className="text-purple-400 font-semibold">technologies</span> that bring{' '}
            <span className="text-emerald-400 font-semibold">ideas to life</span>
          </h2>
        </div>
      </div>

      {/* Featured Skills Progress */}
      <div className="relative z-10 max-w-6xl mx-auto mb-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Core Competencies</h3>
          <p className="text-gray-400 text-lg">Technologies I work with daily</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 hover:scale-105"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold text-white">{skill.name}</span>
                <span className="text-cyan-400 font-bold">{skill.percentage}%</span>
              </div>
              
              <div className="w-full bg-gray-800 rounded-full h-3 mb-3 overflow-hidden">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${skill.percentage}%`,
                    transitionDelay: `${index * 200}ms`
                  }}
                ></div>
              </div>
              
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

                    
      
        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold text-white mb-8">Also Experienced With</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "WebSockets",
              "SASS", "Styled Components", "Framer ",".net", "Three.js"
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full border border-gray-700 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}