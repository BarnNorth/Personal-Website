import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { Header } from './Header';
import { Footer } from './Footer';
import heroBackground from '@/assets/hero-background-barn-lake.png';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main layout wrapper component
 * Provides consistent header and footer across all pages
 * Uses sticky header with normal document flow
 */
export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  const backgroundScale = useTransform(scrollY, [0, 400], [1, prefersReducedMotion ? 1 : 1.06]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, prefersReducedMotion ? 1 : 0.92]);

  return (
    <div className="min-h-screen flex flex-col relative noise-overlay">
      {/* Background image for all routes - fills viewport, no side bars */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0f1729]">
        <motion.img
          src={heroBackground}
          alt=""
          className={`w-full h-full object-cover object-center max-[767px]:object-[50%_20%] transition-[filter] duration-500 ${isHomepage ? '' : 'blur-[6px]'}`}
          aria-hidden="true"
          style={{ scale: isMobile ? 1 : backgroundScale, opacity: isMobile ? 1 : backgroundOpacity }}
        />
      </div>
      
      <Header />
      <main 
        id="main-content" 
        className="flex-1 flex flex-col min-h-[calc(100vh-4rem)]"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
