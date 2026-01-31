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
 * Homepage removes top padding to allow header overlay on hero
 */
export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const isHomeV2 = location.pathname === '/home-v2';

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background image for non-homepage routes */}
      {!isHomepage && (
        <div className="fixed inset-0 -z-10">
          <img
            src={heroBackground}
            alt=""
            className={`w-full h-full object-cover ${isHomeV2 ? '' : 'blur-sm'}`}
            aria-hidden="true"
          />
          <div className={`absolute inset-0 ${isHomeV2 ? 'bg-black/40' : 'bg-background/85 backdrop-blur-sm'}`} />
        </div>
      )}
      
      <Header />
      <main 
        id="main-content" 
        className={`flex-1 ${isHomepage ? '' : 'pt-16'}`}
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
