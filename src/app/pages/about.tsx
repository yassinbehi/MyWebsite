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
              <div className="h-px w-50 bg-white" />
              <p className="text-xl md:text-2xl text-gray-300">
                <DecryptedText
                  text="I’m Yassin Behi, a software engineering student who’s genuinely passionate about web development and building things that make life a little easier. I started coding with C and went on to earn certifications in database design, which helped me understand how systems really work behind the scenes. Over time, I’ve worked on several freelance projects, creating solutions for clients and sometimes just for myself when I wanted to fix a problem or try a new idea. I love learning, experimenting, and turning ideas into real working products."
                  animateOn="view"
                  speed={100}
                  revealDirection="start"
                />
              </p>

              {/* Contact block */}
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-emerald-300 mb-4">Contact</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* GitHub */}
                  <a href="https://github.com/yassinbehi" target="_blank" rel="noopener noreferrer" aria-label="GitHub - opens in new tab" className="group block p-4 bg-gray-800/60 border border-emerald-900/30 rounded-lg shadow-sm hover:shadow-lg transform transition-transform hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="flex-none p-2 bg-emerald-900/10 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-400 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.12 7.64 10.6.56.1.76-.24.76-.53 0-.26-.01-.96-.01-1.88-3.1.67-3.75-1.49-3.75-1.49-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.54 1.18 3.16.9.1-.7.38-1.18.69-1.45-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.4.11-2.92 0 0 .94-.3 3.08 1.15.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.14-1.45 3.08-1.15 3.08-1.15.61 1.52.23 2.64.11 2.92.72.78 1.15 1.78 1.15 3 0 4.28-2.62 5.24-5.11 5.52.39.34.74 1.02.74 2.06 0 1.49-.01 2.69-.01 3.05 0 .29.2.64.77.53 4.45-1.49 7.63-5.67 7.63-10.6C23.25 5.48 18.27.5 12 .5z"/></svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm text-gray-300 font-medium">GitHub</div>
                        <div className="text-gray-200 truncate">github.com/yassinbehi</div>
                      </div>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/behi-yassin-59993536b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn - opens in new tab" className="group block p-4 bg-gray-800/60 border border-emerald-900/30 rounded-lg shadow-sm hover:shadow-lg transform transition-transform hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="flex-none p-2 bg-emerald-900/10 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-400 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.96 0-1.5-.64-1.5-1.44 0-.82.56-1.44 1.53-1.44s1.5.62 1.5 1.44c0 .8-.54 1.44-1.53 1.44zm13.5 11.3h-3v-5.6c0-1.34-.48-2.26-1.69-2.26-.92 0-1.47.62-1.71 1.22-.09.22-.11.53-.11.84v5.8h-3s.04-9.4 0-10.4h3v1.48c.4-.62 1.12-1.5 2.72-1.5 1.98 0 3.46 1.29 3.46 4.07v6.35z"/></svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm text-gray-300 font-medium">LinkedIn</div>
                        <div className="text-gray-200 truncate">linkedin.com/in/yassinbehi</div>
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:behiyassin98@gmail.com" aria-label="Send email to behiyassin@gmail.com" className="group block p-4 bg-gray-800/60 border border-emerald-900/30 rounded-lg shadow-sm hover:shadow-lg transform transition-transform hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="flex-none p-2 bg-emerald-900/10 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-400 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M21 8V7l-3 2-2-2 3-2V3H6v5l3 2-2 2-3-2v5h15v-5z"/></svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm text-gray-300 font-medium">Email</div>
                        <div className="text-gray-200 truncate">behiyassin98@gmail.com</div>
                      </div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+216 98321075" aria-label="Call +216 98 321 075" className="group block p-4 bg-gray-800/60 border border-emerald-900/30 rounded-lg shadow-sm hover:shadow-lg transform transition-transform hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="flex-none p-2 bg-emerald-900/10 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-400 group-hover:scale-105 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 3.5a1 1 0 011-1H7a1 1 0 011 1c0 1.24.2 2.45.57 3.57.14.37.04.8-.24 1.01l-2.71 2.71z"/></svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm text-gray-300 font-medium">Phone</div>
                        <div className="text-gray-200 truncate">+216 98321075</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
