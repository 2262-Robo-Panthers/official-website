import Link from 'next/link';
import SlideIn from '@/components/SlideIn';
import OpeningBanner from '@/components/SectionOpener'
import TextSection, {Red} from '@/components/TextSection'
import Countdown from '@/components/Countdown'

export default function Home() {
  return (
    <main className="w-full bg-[var(--dark-gray)] text-[var(--light-gray)]">
      <OpeningBanner title="About FRC" backgroundImageSrc="/backgrounds/grayscale-background.jpg"></OpeningBanner>

      <section className="w-full py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="w-full">
          <SlideIn>
            <Countdown/>
          </SlideIn>
          <SlideIn direction="up" className="flex flex-col gap-8 w-full">
            <TextSection title='FIRST® Robotics Competition' padup={true}>
                
            The annual <Red>FRC, <i>FIRST</i> Robotics Competition</Red>, is an exciting and innovative competition that allows prospective <Red>engineers, programmers, 
            mechanics, and even artists</Red> to collaborate on a project together. Many within <Red><i>FIRST</i></Red> consider robotics to be the <Red>extreme sport of the 
            mind</Red>, while also requiring great amounts of <Red>cooperation and teamwork</Red>, both with fellow team members and with other teams as most games 
            are in a 4v4 or 3v3 format. <br/><br/> Each year, there is a unique competition objective that requires us to <Red>problem-solve</Red> and build the 
            best robot from scratch to accomplish the tasks. Teams learn to <Red>work together and create alliances</Red> all while competing against each 
            other. The competition is an incredible learning experience for all team members as it encourages them to <Red>bond, build friendships, and 
            learn how to succeed as a team.</Red>
            </TextSection>
          </SlideIn>
          <SlideIn direction="up" delay={0.1} className="w-full">
            <Link
              href="https://www.firstinspires.org/"
              target="_blank"
              rel="noopener noreferrer"
              title="About FRC"
              className="group relative flex h-16 sm:h-20 md:h-24 w-full items-center justify-start rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center saturate-[0.25] transition-all duration-300 group-hover:saturate-100 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/frc.jpg')" }}
              />
              <div className="relative z-10 h-full flex items-center bg-black/50 backdrop-blur-md px-6 sm:px-10">
                <p className="font-['Raleway'] text-lg sm:text-xl md:text-2xl font-medium text-[var(--light-gray)] group-hover:text-[var(--red)] transition-colors duration-300 flex items-center gap-2">
                  <span className="text-xs sm:text-sm md:text-base">▶</span> <i>FIRST</i> website
                </p>
              </div>
            </Link>
          </SlideIn>
          
        </div>
        
        
      </section>
    </main>
  );
}
