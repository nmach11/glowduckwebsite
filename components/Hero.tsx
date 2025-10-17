import AppBadges from "./AppBadges";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-white overflow-hidden min-h-screen flex items-center"
    >
      {/* Decorative shapes */}
      <div className="absolute top-1/4 right-16 w-96 h-96 bg-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-16 w-[32rem] h-[32rem] bg-softPink/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-jua font-bold text-black leading-tight">
              GlowDuck
            </h1>
            <p className="text-3xl md:text-4xl lg:text-5xl font-jua text-black/90">
              Glow up with a friend!
            </p>
            <div className="pt-8">
              <AppBadges />
            </div>
          </div>

          {/* Right content - Phone mockups with real app screenshots */}
          <div className="relative flex justify-center items-center gap-8 animate-fade-in-up">
            {/* Duck illustration */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 md:w-64 md:h-64 z-10">
              <div className="w-full h-full bg-yellow-300 rounded-full flex items-center justify-center text-8xl md:text-9xl animate-bounce-slow">
                🦆
              </div>
            </div>

            {/* Phone mockups with actual app screenshots */}
            <div className="relative z-20">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-48 h-96 md:w-56 md:h-[28rem] lg:w-64 lg:h-[32rem] bg-gray-900 rounded-[2.5rem] shadow-2xl border-4 border-gray-800 relative overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform">
                  {/* Phone screen (placeholder for real screenshot) */}
                  <div className="absolute inset-2 bg-white rounded-[2rem] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-pink/20 to-softPink/30 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="text-4xl mb-4">📱</div>
                        <p className="text-sm text-mutedGray">Real App Screenshot</p>
                      </div>
                    </div>
                  </div>
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl"></div>
                </div>
              </div>
            </div>

            <div className="relative z-30">
              <div className="relative">
                {/* Phone frame */}
                <div className="w-48 h-96 md:w-56 md:h-[28rem] lg:w-64 lg:h-[32rem] bg-gray-900 rounded-[2.5rem] shadow-2xl border-4 border-gray-800 relative overflow-hidden transform rotate-6 hover:rotate-0 transition-transform">
                  {/* Phone screen (placeholder for real screenshot) */}
                  <div className="absolute inset-2 bg-white rounded-[2rem] overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-softPink/30 to-pink/20 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="text-4xl mb-4">📱</div>
                        <p className="text-sm text-mutedGray">Real App Screenshot</p>
                      </div>
                    </div>
                  </div>
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

