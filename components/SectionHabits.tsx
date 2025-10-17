export default function SectionHabits() {
  return (
    <section className="py-32 md:py-40 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-jua animate-fade-in leading-tight">
            Build life-changing
            <br />
            habits!
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Duck illustration */}
          <div className="relative flex justify-center animate-fade-in-left">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink/8 to-softPink/15 rounded-full blur-3xl" />

              {/* Duck with thumbs up */}
              <div className="relative w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] flex items-center justify-center">
                <div className="text-[14rem] md:text-[16rem] lg:text-[18rem]">🦆</div>
                <div className="absolute bottom-1/3 right-1/3 text-7xl md:text-8xl lg:text-9xl animate-bounce-slow">
                  👍
                </div>
              </div>

              {/* Decorative wavy lines */}
              <div className="absolute -bottom-12 left-0 right-0">
                <svg viewBox="0 0 500 80" className="w-full text-pink/12">
                  <path
                    d="M0,40 Q100,15 200,40 T400,40 T500,40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="flex justify-center animate-fade-in-right">
            <div className="w-72 h-[32rem] md:w-80 md:h-[36rem] lg:w-96 lg:h-[42rem] bg-white rounded-3xl shadow-2xl border-4 border-black/10 p-8">
              <div className="bg-gradient-to-b from-softPink/20 to-pink/10 h-full rounded-2xl flex flex-col items-center justify-center p-10">
                <div className="text-8xl md:text-9xl lg:text-[10rem] mb-8">🎯</div>
                <div className="space-y-5 w-full">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-borderGray flex items-center gap-4">
                    <div className="w-7 h-7 rounded-full bg-pink flex items-center justify-center text-white text-base font-bold">
                      ✓
                    </div>
                    <p className="text-base md:text-lg lg:text-xl font-semibold font-jua">Drink Water</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-borderGray flex items-center gap-4">
                    <div className="w-7 h-7 rounded-full bg-pink flex items-center justify-center text-white text-base font-bold">
                      ✓
                    </div>
                    <p className="text-base md:text-lg lg:text-xl font-semibold font-jua">Apply Sunscreen</p>
                  </div>
                  <div className="bg-white/90 p-5 rounded-lg shadow-sm border border-borderGray/70 flex items-center gap-4">
                    <div className="w-7 h-7 rounded-full border-2 border-mutedGray" />
                    <p className="text-base md:text-lg lg:text-xl text-mutedGray font-jua">Evening Routine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

