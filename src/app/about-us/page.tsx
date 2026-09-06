import Link from 'next/link';
import SlideIn from '@/components/SlideIn';
import OpeningBanner from '@/components/SectionOpener'
import TeamGrid from '@/components/TeamBoard'
import TextSection, {Red} from '@/components/TextSection'

export default function Home() {
  return (
    <main className="w-full bg-[var(--dark-gray)] text-[var(--light-gray)]">
      <OpeningBanner title="About Us" backgroundImageSrc="/backgrounds/grayscale-background.jpg"></OpeningBanner>

      <section className="w-full py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="w-full">
          <SlideIn direction="up" className="flex flex-col gap-8 w-full">
            <TextSection title='Who We Are'>The <Red>Holliston RoboPanthers 2262</Red> is a student-run, student-funded robotics team that is organized by 
              students with the supervision of an adult mentor and advisor in <Red>Holliston, MA</Red>. We are about twenty-five members strong, and we 
              participate in the <Red><i>FIRST</i>® Robotics Competition, FRC</Red> as well as interact with our community by going to school events and by hosting
               free services such as car washes. Our goal is to get members of our community to develop a passion for <Red>STEM</Red>.</TextSection>
          </SlideIn>

          <SlideIn direction="up" className="flex flex-col gap-8 w-full">
            <TextSection title='Our Mission'>
                
            We believe in the importance of inspiring our students and teaching them essential skills that they can use throughout their lives. 
            We promote exceptional qualities and mannerisms, such as the ability to have a <Red>competitive spirit</Red> while demonstrating
             <Red>good sportsmanship</Red> and the importance of <Red>equality and acceptance</Red>, especially in scientific fields of work. 
               In addition, we teach our members about <Red>design, engineering, fabrication, and programming</Red> as well as life skills such as 
             <Red>leadership, teamwork, and time management</Red> through this long-term project.
            </TextSection>
          </SlideIn>

          <SlideIn direction="up" className="flex flex-col gap-8 w-full">
            <TextSection title='Meet Our Team'/>
            <TeamGrid
  members={[
    { name: 'Beth S', imageSrc: '/elements/blankface.svg', role: 'Advisor'},
    { name: 'Zimeng Z', imageSrc: '/elements/blankface.svg', year: "'27" },
    { name: 'Isabella Y', imageSrc: '/elements/blankface.svg', year: "'27"},
    { name: 'Matthew C', imageSrc: '/elements/blankface.svg', year: "'27"},
    { name: 'Ksenia J', imageSrc: '/elements/blankface.svg', year: "'27"},
    { name: 'Ashwin G', imageSrc: '/elements/blankface.svg', year: "'27"},
    { name: 'Anthony M', imageSrc: '/elements/blankface.svg', year: "'28"},
    { name: 'Arjun P', imageSrc: '/elements/blankface.svg', year: "'28"},
    { name: 'Paul K', imageSrc: '/elements/blankface.svg', year: "'29"},
  ]}
/>
          </SlideIn>
        </div>
        
        
      </section>
    </main>
  );
}
