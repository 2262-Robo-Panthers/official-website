import React, { ReactNode } from 'react';

interface TextProps {
  title: string;
  padup?: boolean;
  paddown?: boolean;
  children?: ReactNode;
}

export function Red({children}:{children?:ReactNode}){
  return (
    <em className="text-[var(--red)] font-bold not-italic drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)]">
      {children}
    </em>
  )
}

// by default it pads down not up
export default function TextSection({ title, padup=false, paddown=true, children }: TextProps) {
  const arrowbase = "w-16 sm:w-20 md:w-24 min-w-[60px] flex items-center";
  const headerbase = "text-3xl \
  sm:text-4xl md:text-5xl font-bold tracking-wide italic font-['Roadrunners'] bg-gradient-to-r from-[var(--red-fade)] to-[var(--red)] bg-clip-text \
  text-transparent drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)] pb-2 pr-4 inline-block";
  const textbase = "text-[var(--light-gray)] text-base sm:text-lg md:text-xl leading-loose text-left font-['Raleway'] w-full";

  const arrowstyle = padup ? arrowbase+" pt-16" : arrowbase; // oppan arrow style!
  const headerstyle = padup ? headerbase+" pt-16" : headerbase;
  const textstyle = paddown ? textbase+" pb-16" : textbase;
  return (
    <>
      <div className="flex items-center justify-start gap-4 sm:gap-6 w-full">
        <div className={arrowstyle}>
          <img 
            src="/elements/arrows.svg" 
            className="w-full h-auto drop-shadow-[0_0_0.2vw_rgba(102,102,102,0.5)]" 
            alt="arrows" 
          />
        </div>

        <div className="relative flex-1">
          <h2 className={headerstyle}>
            {title}
          </h2>
          <div className="w-full h-[3px] bg-[var(--medium-gray)]" />
        </div>
      </div>

      {children && (
        <p className={textstyle}>
          {children}
        </p>
      )}
    </>
  );
};