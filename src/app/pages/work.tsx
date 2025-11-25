
import TiltedCard from '@/components/TiltedCard'

export default function Work() {
  return (<>
  <div className="h-px w-100% bg-white p-0  m-0"></div>
    <div className="min-h-screen bg-black text-white py-20 px-4 relative overflow-hidden">
      

      {/* Header Section */}
      <div className='flex justify-center text-size-8'>
      <h2 className="text-4xl font-bold text-emerald-400">Work</h2>
      </div>
      <div className="h-px w-40 bg-white mx-auto m-6"></div>
      <div className="relative z-10 text-center mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
            A selection of thoughtfully crafted projects, each built with purpose.
          </h2>
        
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Project 1 */}
          <TiltedCard
            imageSrc="e-commerce.png"
            altText="e-commerce platform"
            captionText="e-commerce platform"
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
                <h3 className="text-xl font-bold text-white mb-2">e-commerce platform</h3>
                <p className="text-gray-300 text-sm mb-4">pants e-commerce platform</p>
                <div className="flex justify-center gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs border border-emerald-500/30 bold">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30 bold">
                    Next.js
                  </span>
                </div>
              </div>
            }
          />

        
        </div>
      </div>
    </div>
    </>
  )
}