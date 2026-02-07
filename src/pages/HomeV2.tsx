import { motion, useReducedMotion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import { getTimeSince } from '@/utils/dateUtils';
import { TextEffect } from '@/components/ui/text-effect';

/**
 * Home page
 * Hero fills viewport height (minus header), content centered
 * Footer appears below the fold on scroll
 */
export default function HomeV2() {
  const prefersReducedMotion = useReducedMotion();
  const techExperience = getTimeSince(profile.careerStartDate);
  const heroText = `I'm Tommy Mulder, an IT professional, real estate investor, and aspiring builder. I've spent ${techExperience.formatted} in big tech working on many things including IT Ops, Eng, and People Tech projects. In my free time I build things.`;
  return <>
      <SEOHead title="Home" description={heroText} />
      
      {/* Hero section - fills remaining viewport height after sticky header */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 lg:px-8 relative">
        {/* Decorative line on desktop for structure */}
        <div className="hidden lg:block absolute right-[12%] top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/40 to-transparent" aria-hidden="true" />
        <motion.div
          className="text-center space-y-6 max-w-4xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-medium tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6), 0 4px 40px rgba(0,0,0,0.4)' }}>
            {prefersReducedMotion ? (
              'BarnNorth Studios'
            ) : (
              <TextEffect as="span" per="word" preset="fade" delay={0.2} className="inline">
                BarnNorth Studios
              </TextEffect>
            )}
          </h1>
          
          <motion.p
            className="font-sans text-base sm:text-lg md:text-xl leading-snug text-white/95 max-w-3xl mx-auto font-medium lg:text-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1, delay: 0.4 }}
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 4px 24px rgba(0,0,0,0.6)' }}
          >
            {heroText}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1, delay: 0.6 }}
          >
            <Link to="/portfolio" className="inline-block">
              {prefersReducedMotion ? (
                <Button variant="outline" size="lg" className="text-base font-medium tracking-wide px-8 bg-black/30 border-white/50 text-white hover:bg-black/50 hover:border-white backdrop-blur-sm">
                  View Portfolio
                </Button>
              ) : (
                <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="block">
                  <Button variant="outline" size="lg" className="text-base font-medium tracking-wide px-8 bg-black/30 border-white/50 text-white hover:bg-black/50 hover:border-white backdrop-blur-sm transition-transform">
                    View Portfolio
                  </Button>
                </motion.span>
              )}
            </Link>
            <Link to="/about" className="inline-block">
              {prefersReducedMotion ? (
                <Button variant="outline" size="lg" className="text-base font-medium tracking-wide px-8 bg-black/30 border-white/50 text-white hover:bg-black/50 hover:border-white backdrop-blur-sm">
                  About Me
                </Button>
              ) : (
                <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="block">
                  <Button variant="outline" size="lg" className="text-base font-medium tracking-wide px-8 bg-black/30 border-white/50 text-white hover:bg-black/50 hover:border-white backdrop-blur-sm transition-transform">
                    About Me
                  </Button>
                </motion.span>
              )}
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>;
}