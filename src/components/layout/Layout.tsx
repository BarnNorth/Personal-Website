import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import heroBackground from '@/assets/hero-background.jpg';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main layout wrapper component
 * Provides consistent header and footer across all pages
 */
export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      {/* Background image for all routes */}
      <div className="fixed inset-0 -z-10">
        <img
          src={heroBackground}
          alt=""
          className={`w-full h-full object-cover ${isHomepage ? '' : 'blur-sm'}`}
          aria-hidden="true"
        />
      </div>
      
      <Header />
      <main 
        id="main-content" 
        className={`flex-1 flex flex-col overflow-auto ${isHomepage ? '' : 'pt-16'}`}
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
