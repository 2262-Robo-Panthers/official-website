import SlideIn from '@/components/SlideIn';
import OpeningBanner from '@/components/SectionOpener'
import SponsorsPanel from '@/components/SponsorsPanel';

const goldSponsors: Sponsor[] = [
  
];

export default function Home() {
  return (
    <main className="w-full bg-[var(--dark-gray)] text-[var(--light-gray)]">
      <OpeningBanner title="Sponsors" backgroundImageSrc="/backgrounds/grayscale-background.jpg"></OpeningBanner>

      <section className="w-full py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="w-full">
          {/* stuff goes here */}
        </div>
        <SlideIn>
          <SponsorsPanel
        heading="Gold Sponsors"
        sponsors={goldSponsors}
        relativeWidth={10}
      />
        </SlideIn>
        
      </section>
    </main>
  );
}
