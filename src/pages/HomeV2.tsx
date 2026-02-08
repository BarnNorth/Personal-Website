import { motion, useReducedMotion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
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
      
      {/* Hero section - content top left */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-start justify-start pt-12 md:pt-16 px-6 lg:px-8 relative">
          <motion.div
            className="text-left space-y-4 max-w-4xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.56)] whitespace-nowrap" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.58), 0 2px 12px rgba(0,0,0,0.5), 0 4px 24px rgba(0,0,0,0.44), 0 8px 48px rgba(0,0,0,0.37)' }}>
            {prefersReducedMotion ? (
              'BarnNorth Studios'
            ) : (
              <TextEffect as="span" per="word" preset="fade" delay={0.2} className="inline whitespace-nowrap">
                BarnNorth Studios
              </TextEffect>
            )}
          </h1>
          
          <motion.p
            className="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-white/95 max-w-3xl font-medium lg:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.56)]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 1, delay: 0.4 }}
            style={{ textShadow: '0 1px 2px rgba(0,0,0,0.58), 0 2px 8px rgba(0,0,0,0.53), 0 4px 20px rgba(0,0,0,0.46), 0 6px 32px rgba(0,0,0,0.41)' }}
          >
            {heroText}
          </motion.p>
        </motion.div>
      </section>
    </>;
}