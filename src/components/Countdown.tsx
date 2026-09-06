'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SingleDigit({ digit }: { digit: string }) {
  return (
    <div className="relative h-8 sm:h-12 w-[1.25em] flex items-center justify-center overflow-hidden px-1">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center text-2xl sm:text-4xl font-extrabold text-[var(--red)] font-['Raleway'] drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)] leading-none"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  const digits = String(value).padStart(2, '0').split('');

  return (
    <div className="flex flex-col items-center justify-center bg-black/40 rounded-xl py-4 px-6 sm:px-8 backdrop-blur-md overflow-hidden min-w-[110px] sm:min-w-[145px]">
      <div className="flex items-center justify-center gap-1.5 w-full">
        {digits.map((digit, idx) => (
          <SingleDigit key={idx} digit={digit} />
        ))}
      </div>
      <span className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-wider mt-1.5 font-['Raleway']">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2027-01-09T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-none min-h-[50vh] flex items-center justify-center overflow-hidden py-12">
      <div 
        className="absolute inset-0 w-full h-full z-0"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 ">
        <div className="relative w-full rounded-2xl bg-[#043a49] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-black/30 pointer-events-none" />

          <a
            href="https://www.firstinspires.org/programs/frc/game-and-season"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex-shrink-0 flex justify-center group transition-all duration-300 transform hover:scale-105"
          >
            <img 
              src="/countdown/event.png" 
              alt="FIRST Robotics Competition Event" 
              className="w-48 sm:w-56 md:w-64 h-auto object-contain rounded-xl transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            />
          </a>

          <div className="relative z-10 flex-1 flex flex-col items-center text-center w-full">
            <h3 className="text-lg sm:text-xl md:text-2xl font-normal text-slate-200 tracking-wide font-['Raleway']">
              <i>FIRST</i>® Robotics Competition <span className="text-[var(--red)] font-semibold drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)]">2027 Game</span>
            </h3>
            <p className="text-base sm:text-lg text-slate-300 mt-1 mb-6 font-['Raleway']">
              Kickoff Countdown
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl justify-items-center">
              <CountdownBox value={timeLeft.days} label="Days" />
              <CountdownBox value={timeLeft.hours} label="Hours" />
              <CountdownBox value={timeLeft.minutes} label="Minutes" />
              <CountdownBox value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
