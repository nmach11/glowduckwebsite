export default function SectionRoutine() {
  return (
    <section className="py-32 md:py-40 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-jua animate-fade-in leading-tight">
            Get your personalized
            <br />
            skincare routine!
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Phone mockup */}
          <div className="flex justify-center animate-fade-in-left order-2 lg:order-1">
            <div className="w-72 h-[32rem] md:w-80 md:h-[36rem] lg:w-96 lg:h-[42rem] bg-white rounded-3xl shadow-2xl border-4 border-black/10 p-8">
              <div className="bg-gradient-to-b from-softPink/20 to-pink/10 h-full rounded-2xl flex flex-col items-center justify-center p-10">
                <div className="text-8xl md:text-9xl lg:text-[10rem] mb-8">✨</div>
                <div className="space-y-4 w-full">
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-borderGray">
                    <p className="text-base md:text-lg lg:text-xl font-semibold font-jua">Morning Routine</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-borderGray">
                    <p className="text-base md:text-lg lg:text-xl font-semibold font-jua">Evening Routine</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-borderGray">
                    <p className="text-base md:text-lg lg:text-xl font-semibold font-jua">Weekly Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Duck illustration */}
          <div className="relative flex justify-center animate-fade-in-right order-1 lg:order-2">
            <div className="relative">
              {/* Decorative wavy background */}
              <div className="absolute -top-16 -right-16 w-96 h-96">
                <svg viewBox="0 0 400 400" className="w-full h-full text-pink/8">
                  <path
                    d="M0,200 Q100,100 200,200 T400,200 L400,400 L0,400 Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Duck with medical/care theme */}
              <div className="relative w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] flex items-center justify-center">
                <div className="text-[14rem] md:text-[16rem] lg:text-[18rem]">🦆</div>
                <div className="absolute bottom-1/4 right-1/4 text-6xl md:text-7xl lg:text-8xl">💊</div>
                <div className="absolute top-1/4 left-1/4 text-5xl md:text-6xl lg:text-7xl">✨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

