import React from 'react'
import BlurText from '@/components/BlurText'

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React", level: 90, color: "from-cyan-400 to-blue-500" },
        { name: "Next.js", level: 85, color: "from-white to-gray-300" },
        { name: "TypeScript", level: 50, color: "from-blue-400 to-blue-600" },
        { name: "Tailwind CSS", level: 70, color: "from-cyan-400 to-teal-500" },
        { name: "JavaScript", level: 65, color: "from-yellow-400 to-yellow-600" }
      ]
    },
    {
      name: "Backend Development",
      icon: "⚡",
      skills: [
        { name: "Node.js", level: 50, color: "from-green-400 to-green-600" },
        { name: "Python", level: 50, color: "from-blue-500 to-indigo-600" },
        { name: "Express", level: 50, color: "from-gray-400 to-gray-600" },
        { name: "MongoDB", level: 70, color: "from-green-500 to-green-700" },
        { name: "PostgreSQL", level: 75, color: "from-blue-400 to-blue-700" }
      ]
    },
    {
      name: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90, color: "from-orange-400 to-red-500" },
        { name: "Docker", level: 50, color: "from-blue-400 to-cyan-500" },
        { name: "AWS", level: 60, color: "from-orange-400 to-yellow-500" },
        { name: "Figma", level: 50, color: "from-purple-400 to-pink-500" },
        { name: "Vercel", level: 80, color: "from-white to-gray-400" }
      ]
    }
  ];

  const featuredSkills = [
    { name: "React", percentage: 90, description: "Advanced hooks, context, performance optimization" },
    { name: "Next.js", percentage: 85, description: "App router, SSR, API routes, optimization" },
    { name: "TypeScript", percentage: 50, description: "Type safety, interfaces, generics" },
    { name: "Tailwind CSS", percentage: 70, description: "Utility-first, responsive design, plugins" }
  ];

  return (
    <div className="bg-black text-white min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-20">
        <BlurText
          text="SKILLS & EXPERTISE"
          delay={1000}
          animateBy="words"
          direction="top"
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-6"
        />
        
        <div className="max-w-3xl mx-auto">
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

      {/* Skills Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className="group bg-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out transform origin-left`}
                        style={{ 
                          width: `${skill.level}%`,
                          transitionDelay: `${(categoryIndex * 100) + (skillIndex * 150)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
    </div>
  )
}