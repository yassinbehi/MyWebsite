import React from 'react'
import BlurText from '@/components/BlurText'
import TiltedCard from '@/components/TiltedCard'

export default function Work() {
  return (
    <div className="bg-black text-white min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center mb-16">
        <BlurText
          text="MY WORK"
          delay={1000}
          animateBy="words"
          direction="top"
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6"
        />
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
            Crafting <span className="text-emerald-400 font-semibold">digital experiences</span> that blend 
            <span className="text-cyan-400 font-semibold"> innovation</span> with 
            <span className="text-purple-400 font-semibold"> elegance</span>. Each project tells a unique story.
          </h2>
          
          {/* Stats Bar */}
          <div className="flex justify-center items-center gap-8 md:gap-16 py-6 border-y border-gray-800/50">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-emerald-400">12+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-700/50"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400">3</div>
              <div className="text-sm text-gray-400">Years</div>
            </div>
            <div className="w-px h-8 bg-gray-700/50"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400">100%</div>
              <div className="text-sm text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Project 1 */}
          <TiltedCard
            imageSrc=""
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="Music Platform"
            containerHeight="320px"
            containerWidth="100%"
            imageHeight="240px"
            imageWidth="100%"
            rotateAmplitude={15}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            containerClassName="w-full group cursor-pointer"
            href="https://example.com"
            overlayContent={
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-white mb-2">GNX Music</h3>
                <p className="text-gray-300 text-sm mb-4">Interactive music experience</p>
                <div className="flex justify-center gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs border border-emerald-500/30">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                    Next.js
                  </span>
                </div>
              </div>
            }
          />

          {/* Project 2 */}
          <TiltedCard
            imageSrc=""
            altText="Gaming Platform"
            captionText="Gaming Hub"
            containerHeight="320px"
            containerWidth="100%"
            imageHeight="240px"
            imageWidth="100%"
            rotateAmplitude={15}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            containerClassName="w-full group cursor-pointer"
            href="https://example.com"
            overlayContent={
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-white mb-2">GameHub Pro</h3>
                <p className="text-gray-300 text-sm mb-4">Next-gen gaming platform</p>
                <div className="flex justify-center gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
                    
                  </span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-500/30">
                    
                  </span>
                </div>
              </div>
            }
          />

          {/* Project 3 */}
          <TiltedCard
            imageSrc=""
            altText="Analytics Dashboard"
            captionText="Dashboard UI"
            containerHeight="320px"
            containerWidth="100%"
            imageHeight="240px"
            imageWidth="100%"
            rotateAmplitude={15}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            containerClassName="w-full group cursor-pointer"
            href="https://vercel.com"
            overlayContent={
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-white mb-2">Analytics Pro</h3>
                <p className="text-gray-300 text-sm mb-4">Real-time data visualization</p>
                <div className="flex justify-center gap-2">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs border border-cyan-500/30">
                    
                  </span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs border border-orange-500/30">
                    
                  </span>
                </div>
              </div>
            }
          />

          {/* Project 4 */}
          <TiltedCard
            imageSrc=""
            altText="E-commerce Platform"
            captionText="Shop Interface"
            containerHeight="320px"
            containerWidth="100%"
            imageHeight="240px"
            imageWidth="100%"
            rotateAmplitude={15}
            scaleOnHover={1.08}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            containerClassName="w-full group cursor-pointer"
            href="https://github.com"
            overlayContent={
              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-white mb-2">ShopSphere</h3>
                <p className="text-gray-300 text-sm mb-4">Modern e-commerce solution</p>
                <div className="flex justify-center gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs border border-green-500/30">
                    
                  </span>
                </div>
              </div>
            }
          />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800/50">
          <p className="text-gray-400 text-lg mb-6">
            Interested in working together?
          </p>
        </div>
      </div>
    </div>
  )
}