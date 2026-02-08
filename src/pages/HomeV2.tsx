import { motion, useReducedMotion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { profile } from '@/data/profile';
import { getTimeSince } from '@/utils/dateUtils';
import { TextEffect } from '@/components/ui/text-effect';
import { GitHubActivityFeed } from '@/components/GitHubActivityFeed';

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
      
      {/* Hero section - compact so hero + feed fit above the fold */}
      <section className="min-h-0 py-10 md:py-14 flex flex-col items-center justify-center px-6 lg:px-8 relative">
        {/* Decorative line on desktop for structure */}
        <div className="hidden lg:block absolute right-[12%] top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-white/40 to-transparent" aria-hidden="true" />
        <motion.div
          className="text-center space-y-6 max-w-4xl"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-medium tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] whitespace-nowrap" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6), 0 4px 40px rgba(0,0,0,0.4)' }}>
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
        </motion.div>
      </section>

      {/* Check out what I'm up to - GitHub feed */}
      <section className="py-6 md:py-8 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <GitHubActivityFeed />
          </div>
        </div>
      </section>
    </>;
}