export default function SectionProgress() {
  return (
    <section id="progress" className="py-32 md:py-40 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-jua animate-fade-in leading-tight">
            Track your progress!
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Phone mockup with progress */}
          <div className="flex justify-center animate-fade-in-left">
            <div className="relative">
              <div className="w-72 h-[32rem] md:w-80 md:h-[36rem] lg:w-96 lg:h-[42rem] bg-white rounded-3xl shadow-2xl border-4 border-black/10 p-8">
                <div className="bg-gradient-to-b from-softPink/20 to-white h-full rounded-2xl flex flex-col p-10">
                  <div className="text-center mb-8">
                    <div className="text-7xl md:text-8xl lg:text-9xl mb-4">📊</div>
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold font-jua">Your Skin Journey</p>
                  </div>

                  {/* Progress stats */}
                  <div className="space-y-5 flex-1">
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-borderGray">
                      <p className="text-base md:text-lg lg:text-xl text-mutedGray mb-3 font-jua">Streak</p>
                      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink font-jua">15 Days 🔥</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-borderGray">
                      <p className="text-base md:text-lg lg:text-xl text-mutedGray mb-3 font-jua">Habits Completed</p>
                      <p className="text-2xl md:text-3xl lg:text-4xl font-bold font-jua">89%</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-borderGray">
                      <p className="text-base md:text-lg lg:text-xl text-mutedGray mb-3 font-jua">Skin Score</p>
                      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink font-jua">8.5/10</p>
                    </div>
                  </div>

                  {/* Quote bubble */}
                  <div className="mt-8 bg-softPink p-5 rounded-2xl text-base md:text-lg lg:text-xl italic font-jua">
                    &ldquo;I can see the difference already! My skin feels so much better.&rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Duck with chart */}
          <div className="relative flex justify-center animate-fade-in-right">
            <div className="relative">
              {/* Upward arrow decoration */}
              <div className="absolute -top-16 right-0 text-pink">
                <svg
                  className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <path d="M50,20 L70,40 L60,40 L60,80 L40,80 L40,40 L30,40 Z" />
                </svg>
              </div>

              {/* Duck illustration */}
              <div className="relative w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] flex items-center justify-center">
                <div className="text-[14rem] md:text-[16rem] lg:text-[18rem]">🦆</div>
                <div className="absolute bottom-1/4 left-1/4 text-6xl md:text-7xl lg:text-8xl">📈</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

