import React from 'react';
import TextSection from '@/components/TextSection';


export interface Sponsor {
  title: string;
  link: string;
  imageUrl: string;
}

export interface SponsorsPanelProps {
  sponsors: Sponsor[];
  heading: string;
  /**
   * Relative size indicator for sponsor tiers (e.g., 1 to 10).
   * Maps to grid item target widths while maintaining responsiveness.
   */
  relativeWidth?: number;
}

/**
 * Returns grid column min-widths and container height classes based on relativeWidth.
 */
const getTierSizing = (tier: number) => {
  if (tier <= 2) {
    return {
      grid: 'grid-cols-[repeat(auto-fit,minmax(100px,1fr))]',
      height: 'h-20 md:h-24',
    };
  }
  if (tier <= 4) {
    return {
      grid: 'grid-cols-[repeat(auto-fit,minmax(140px,1fr))]',
      height: 'h-28 md:h-32',
    };
  }
  if (tier <= 6) {
    return {
      grid: 'grid-cols-[repeat(auto-fit,minmax(180px,1fr))]',
      height: 'h-36 md:h-44',
    };
  }
  if (tier <= 8) {
    return {
      grid: 'grid-cols-[repeat(auto-fit,minmax(230px,1fr))]',
      height: 'h-48 md:h-56',
    };
  }
  return {
    grid: 'grid-cols-[repeat(auto-fit,minmax(280px,1fr))]',
    height: 'h-60 md:h-72',
  };
};

const SponsorsPanel: React.FC<SponsorsPanelProps> = ({
  sponsors,
  heading,
  relativeWidth = 5,
}) => {
  const { grid, height } = getTierSizing(relativeWidth);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <TextSection title={heading} paddown={false} />

      <div
        className={`grid ${grid} gap-6 md:gap-8 items-center justify-items-center mt-6`}
      >
        {sponsors.map((sponsor, index) => (
          <a
            key={`${sponsor.link}-${index}`}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            title={sponsor.title}
            className={`group flex items-center justify-center w-full ${height} p-4 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            <img
              src={sponsor.imageUrl}
              alt={sponsor.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default React.memo(SponsorsPanel);