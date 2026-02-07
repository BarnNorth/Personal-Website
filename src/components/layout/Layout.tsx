import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Header } from './Header';
import { Footer } from './Footer';
import heroBackground from '@/assets/hero-background.jpg';

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
  const { scrollY } = useScroll();
  const backgroundScale = useTransform(scrollY, [0, 400], [1, prefersReducedMotion ? 1 : 1.06]);
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, prefersReducedMotion ? 1 : 0.92]);

  return (
    <div className="min-h-screen flex flex-col relative noise-overlay">
      {/* Background image for all routes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.img
          src={heroBackground}
          alt=""
          className={`w-full h-full object-cover transition-[filter] duration-500 ${isHomepage ? '' : 'blur-[6px]'}`}
          aria-hidden="true"
          style={{ scale: backgroundScale, opacity: backgroundOpacity }}
        />
      </div>
      
      <Header />
      <main 
        id="main-content" 
        className="flex-1 flex flex-col"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
