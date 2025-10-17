export default function SectionAnalyze() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-jua animate-fade-in">
            Analyze your skin!
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Duck with magnifying glass */}
          <div className="relative flex justify-center animate-fade-in-left">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-pink/8 rounded-full blur-3xl transform -translate-x-8 scale-125" />

              {/* Duck illustration placeholder */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center">
                <div className="text-[12rem] md:text-[14rem] lg:text-[16rem]">🦆</div>
                <div className="absolute top-1/4 right-1/4 text-7xl md:text-8xl animate-bounce-slow">
                  🔍
                </div>
              </div>

              {/* Wavy decorative lines */}
              <div className="absolute -bottom-8 left-0 right-0">
                <svg viewBox="0 0 400 60" className="w-full text-pink/20">
                  <path
                    d="M0,30 Q100,10 200,30 T400,30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Phone mockup with real screenshot */}
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-56 h-[28rem] md:w-64 md:h-[32rem] lg:w-72 lg:h-[36rem] bg-gray-900 rounded-[2.5rem] shadow-2xl border-4 border-gray-800 relative overflow-hidden">
                {/* Phone screen - placeholder for real screenshot */}
                <div className="absolute inset-2 bg-white rounded-[2rem] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-pink/20 to-softPink/30 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-5xl mb-4">📸</div>
                      <p className="text-sm text-mutedGray font-jua">Real App Screenshot</p>
                      <p className="text-xs text-mutedGray/70 mt-2">Analyzing Skin...</p>
                    </div>
                  </div>
                </div>
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

