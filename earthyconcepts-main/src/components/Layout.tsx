import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AnnouncementBanner } from './AnnouncementBanner';
import { NewsletterBanner } from './NewsletterBanner';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Subtle background - no leaf pattern (homepage has its own) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-background to-accent/3" />
        
        {/* Subtle organic glowing orbs */}
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[45%] right-[5%] w-96 h-96 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-[15%] w-64 h-64 bg-gradient-to-tr from-emerald-200/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <AnnouncementBanner />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <NewsletterBanner />
        <Footer />
      </div>
    </div>
  );
};
