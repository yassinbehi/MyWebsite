import DecryptedText from "@/components/DecryptedText"
export default function About() {
  return (
    <div className=" flex flex-col">
      <div className="h-px w-full bg-white/10"></div>
      <div className="flex-1 bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <div className="min-h-[70vh] flex flex-col md:flex-row items-center gap-10">
            {/* Profile Image */}
            <div className="flex-shrink-0 mb-8 md:mb-0">
              <img
                src="/profile.jpg"
                alt="Yassin Behi profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-emerald-400 shadow-lg object-cover"
              />
            </div>
            {/* About Content */}
            <div className="space-y-6 flex-1">
              <h2 className="text-4xl font-bold text-emerald-400">About Me</h2>
              <div className="h-px w-50 bg-white"></div>
              <p className="text-xl md:text-2xl text-gray-300">
                <DecryptedText
                  text="I’m Yassin Behi, a software engineering student who’s genuinely passionate about web development and building things that make life a little easier. I started coding with C and went on to earn certifications in database design, which helped me understand how systems really work behind the scenes . Over time, I’ve worked on several freelance projects, creating solutions for clients and sometimes just for myself when I wanted to fix a problem or try a new idea. I love learning, experimenting, and turning ideas into real working products."
                  animateOn="view"
                  speed={100}
                  revealDirection="start"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
