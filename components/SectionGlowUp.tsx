export default function SectionGlowUp() {
  return (
    <section className="py-32 md:py-40 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-jua animate-fade-in leading-tight">
            As you glow...
          </h2>
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-pink font-bold font-jua animate-fade-in mt-6">
            ...I glow up!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 items-center max-w-7xl mx-auto">
          {/* Week 1 phone */}
          <div className="flex flex-col items-center animate-fade-in-left">
            <div className="mb-8">
              <span className="bg-mutedGray text-white px-8 py-3 rounded-pill text-lg md:text-xl lg:text-2xl font-bold font-jua">
                Week 1
              </span>
            </div>
            <div className="w-64 h-[32rem] md:w-72 md:h-[36rem] lg:w-80 lg:h-[40rem] bg-white rounded-3xl shadow-2xl border-4 border-black/10 p-8">
              <div className="bg-gradient-to-b from-softPink/30 to-pink/15 h-full rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl lg:text-9xl mb-6">😊</div>
                  <p className="text-base md:text-lg lg:text-xl text-mutedGray font-jua">Starting Journey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Duck evolution */}
          <div className="flex flex-col items-center justify-center animate-fade-in">
            <div className="relative">
              {/* Arrow showing progression */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-pink">
                <svg className="w-40 h-40 md:w-44 md:h-44 lg:w-48 lg:h-48" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M20,50 L80,50 M80,50 L65,35 M80,50 L65,65" stroke="currentColor" strokeWidth="5" fill="none" />
                </svg>
              </div>

              {/* Small duck to big duck */}
              <div className="flex items-end gap-8">
                <div className="text-8xl md:text-9xl lg:text-[10rem] animate-bounce-slow">🐣</div>
                <div className="text-5xl md:text-6xl lg:text-7xl">→</div>
                <div className="text-[12rem] md:text-[14rem] lg:text-[16rem] animate-bounce-slow delay-75">🦆</div>
              </div>

              <p className="text-center mt-8 text-lg md:text-xl lg:text-2xl text-mutedGray font-bold font-jua">
                Duck Evolution
              </p>
            </div>
          </div>

          {/* Week 6 phone */}
          <div className="flex flex-col items-center animate-fade-in-right">
            <div className="mb-8">
              <span className="bg-pink text-white px-8 py-3 rounded-pill text-lg md:text-xl lg:text-2xl font-bold font-jua">
                Week 6
              </span>
            </div>
            <div className="w-64 h-[32rem] md:w-72 md:h-[36rem] lg:w-80 lg:h-[40rem] bg-white rounded-3xl shadow-2xl border-4 border-black/10 p-8 ring-4 ring-pink/30">
              <div className="bg-gradient-to-b from-pink/25 to-softPink h-full rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/15 to-pink/15 animate-pulse" />
                <div className="text-center relative z-10">
                  <div className="text-7xl md:text-8xl lg:text-9xl mb-6">✨😊✨</div>
                  <p className="text-base md:text-lg lg:text-xl font-bold text-pink font-jua">Glowing!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

