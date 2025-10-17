export default function SectionLevelUp() {
  return (
    <section className="py-32 md:py-40 bg-white overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold font-jua animate-fade-in leading-tight">
            Level up!
          </h2>
        </div>

        <div className="relative flex justify-center items-center min-h-[70vh]">
          {/* Floating badge decorations */}
          <div className="absolute top-12 left-1/4 animate-float">
            <div className="bg-pink text-white px-8 py-4 rounded-pill text-lg md:text-xl lg:text-2xl font-bold shadow-lg font-jua">
              10 Day Streak! 🔥
            </div>
          </div>

          <div className="absolute top-20 right-1/4 animate-float-delayed">
            <div className="bg-softPink text-pink px-8 py-4 rounded-pill text-lg md:text-xl lg:text-2xl font-bold shadow-lg font-jua">
              First Routine ✨
            </div>
          </div>

          <div className="absolute bottom-20 left-1/3 animate-float">
            <div className="bg-pink/80 text-white px-8 py-4 rounded-pill text-lg md:text-xl lg:text-2xl font-bold shadow-lg font-jua">
              Skin Expert 🏆
            </div>
          </div>

          <div className="absolute bottom-12 right-1/3 animate-float-delayed">
            <div className="bg-softPink text-pink px-8 py-4 rounded-pill text-lg md:text-xl lg:text-2xl font-bold shadow-lg font-jua">
              Glowing! 💫
            </div>
          </div>

          {/* Central duck celebration */}
          <div className="relative z-10 animate-bounce-slow">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-pink/15 rounded-full blur-3xl scale-150" />

              {/* Duck */}
              <div className="relative text-[18rem] md:text-[20rem] lg:text-[22rem] xl:text-[24rem] leading-none">
                🦆
              </div>

              {/* Sparkles */}
              <div className="absolute -top-16 -left-16 text-6xl md:text-7xl lg:text-8xl animate-pulse">✨</div>
              <div className="absolute -top-16 -right-16 text-6xl md:text-7xl lg:text-8xl animate-pulse delay-75">✨</div>
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-6xl md:text-7xl lg:text-8xl animate-pulse delay-150">
                ✨
              </div>
            </div>
          </div>

          {/* Background confetti-like shapes */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-pink/12 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

