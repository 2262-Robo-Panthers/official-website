import Link from 'next/link';
import Countdown from '@/components/Countdown';
import SlideIn from '@/components/SlideIn';
import TextSection, {Red} from '@/components/TextSection'

export default function Home() {
  return (
    <main className="w-full bg-[var(--dark-gray)] text-[var(--light-gray)]">
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 opacity-40 filter saturate-[0.25]"
          style={{ backgroundImage: "url('/backgrounds/grayscale-background.jpg')" }}
        />

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 max-w-6xl w-full mb-12">
          <img 
            src="/icons/logo.svg" 
            className="h-36 sm:h-48 md:h-64 lg:h-72 w-auto object-contain drop-shadow-[0_0_1vw_rgba(0,0,0,0.8)]" 
            alt="Holliston RoboPanthers Logo" 
          />

          <img 
            src="/icons/logo-text.svg" 
            className="h-20 sm:h-28 md:h-36 lg:h-44 w-auto object-contain drop-shadow-[0_0_1vw_rgba(0,0,0,0.8)]" 
            alt="Holliston RoboPanthers" 
          />

          <img 
            src="/icons/logo-number.svg" 
            className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto object-contain drop-shadow-[0_0_1vw_rgba(0,0,0,0.8)]" 
            alt="2262" 
          />
        </div>

        <p className="relative z-10 text-[var(--light-gray)] text-lg sm:text-xl md:text-2xl font-normal leading-relaxed tracking-wide drop-shadow-[0_0_1vw_rgba(0,0,0,1)]">
          Welcome to the <em className="text-[var(--red)] font-bold not-italic drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)]">official team page</em> of Holliston Robotics.<br />
          Est. 2007
        </p>
      </section>

      <section className="w-full min-h-screen pt-16 pb-0 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="w-full">
          <SlideIn direction="up" className="flex flex-col gap-8 w-full">
            <TextSection title='Who We Are' paddown={false}>The <Red>Holliston RoboPanthers 2262</Red> is a student-run, student-funded robotics team that is organized by 
              students with the supervision of an adult mentor and advisor in <Red>Holliston, MA</Red>. We  
              participate in the <Red><i>FIRST</i>® Robotics Competition, FRC</Red> as well as interact with our community by going to school events and by hosting 
              free services such as car washes. Our goal is to get members of our community to develop a passion for <Red>STEM</Red>.</TextSection>
          </SlideIn>
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-6 w-full">
            <SlideIn direction="up" delay={0.1} className="w-full">
              <Link
                href="/about-frc"
                title="About FRC"
                className="group relative flex h-16 sm:h-20 md:h-24 w-full items-center justify-start rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center saturate-[0.25] transition-all duration-300 group-hover:saturate-100 group-hover:scale-105"
                  style={{ backgroundImage: "url('/images/frc.jpg')" }}
                />
                <div className="relative z-10 h-full flex items-center bg-black/50 backdrop-blur-md px-6 sm:px-10">
                  <p className="font-['Raleway'] text-lg sm:text-xl md:text-2xl font-medium text-[var(--light-gray)] group-hover:text-[var(--red)] transition-colors duration-300 flex items-center gap-2">
                    <span className="text-xs sm:text-sm md:text-base">▶</span> What is FRC?
                  </p>
                </div>
              </Link>
            </SlideIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <SlideIn direction="up" delay={0.2} className="w-full">
                <Link
                  href="/about-us"
                  title="About Us"
                  className="group relative flex h-64 sm:h-80 md:h-[400px] w-full items-center justify-center rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center saturate-[0.25] transition-all duration-300 group-hover:saturate-100 group-hover:scale-105"
                    style={{ backgroundImage: "url('/images/about.jpg')" }}
                  />
                  <div className="relative z-10 w-full bg-black/50 backdrop-blur-md px-6 py-4 text-center">
                    <p className="font-['Raleway'] text-xl sm:text-2xl md:text-3xl font-medium text-[var(--light-gray)] group-hover:text-[var(--red)] transition-colors duration-300 inline-flex items-center gap-2">
                      <span className="text-sm sm:text-base md:text-lg">▶</span> About Us
                    </p>
                  </div>
                </Link>
              </SlideIn>

              <SlideIn direction="up" delay={0.3} className="w-full">
                <Link
                  href="/sponsors"
                  title="Sponsors"
                  className="group relative flex h-64 sm:h-80 md:h-[400px] w-full items-center justify-center rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center saturate-[0.25] transition-all duration-300 group-hover:saturate-100 group-hover:scale-105"
                    style={{ backgroundImage: "url('/images/sponsors.jpg')" }}
                  />
                  <div className="relative z-10 w-full bg-black/50 backdrop-blur-md px-6 py-4 text-center">
                    <p className="font-['Raleway'] text-xl sm:text-2xl md:text-3xl font-medium text-[var(--light-gray)] group-hover:text-[var(--red)] transition-colors duration-300 inline-flex items-center gap-2">
                      <span className="text-sm sm:text-base md:text-lg">▶</span> Sponsors
                    </p>
                  </div>
                </Link>
              </SlideIn>

              <SlideIn direction="up" delay={0.4} className="w-full relative">
                <Link
                  href="/get-involved"
                  title="Resources"
                  className="group relative flex h-64 sm:h-80 md:h-[400px] w-full items-center justify-center rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center saturate-[0.25] transition-all duration-300 group-hover:saturate-100 group-hover:scale-105"
                    style={{ backgroundImage: "url('/images/resources.jpg')" }}
                  />
                  <div className="relative z-10 w-full bg-black/50 backdrop-blur-md px-6 py-4 text-center">
                    <p className="font-['Raleway'] text-xl sm:text-2xl md:text-3xl font-medium text-[var(--light-gray)] group-hover:text-[var(--red)] transition-colors duration-300 inline-flex items-center gap-2">
                      <span className="text-sm sm:text-base md:text-lg">▶</span> Resources
                    </p>
                  </div>
                </Link>
              </SlideIn>
            </div>
          </div>
        </div>
        
        <div className="w-full">
          <SlideIn direction="up">
            <Countdown />
          </SlideIn>
        </div>
      </section>
    </main>
  );
}
