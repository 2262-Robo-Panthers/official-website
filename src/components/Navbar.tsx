import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        <nav className="relative w-full flex items-center justify-between px-6 py-3 rounded-2xl bg-white/[0.07] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none" />

          <Link href="/" className="relative z-10 flex items-center gap-3">
            <img 
              src="/icons/logo.svg" 
              className="h-9 sm:h-10 w-auto object-contain" 
              alt="Holliston Robotics" 
            />
          </Link>

          <div className="relative z-10 flex items-center gap-6 sm:gap-10">
            <Link 
              href="/about-us" 
              className="text-sm sm:text-base font-medium text-[var(--light-gray)] hover:text-[var(--red)] transition-colors duration-200"
            >
              About Us
            </Link>
            <Link 
              href="/about-frc" 
              className="text-sm sm:text-base font-medium text-[var(--light-gray)] hover:text-[var(--red)] transition-colors duration-200"
            >
              About FRC®
            </Link>
            <Link 
              href="/sponsors" 
              className="text-sm sm:text-base font-medium text-[var(--light-gray)] hover:text-[var(--red)] transition-colors duration-200"
            >
              Sponsors
            </Link>
            <Link 
              href="/get-involved" 
              className="text-sm sm:text-base font-medium text-[var(--light-gray)] hover:text-[var(--red)] transition-colors duration-200"
            >
              Get Involved
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
