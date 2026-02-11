import { useEffect, useRef, useState } from 'react';
import { motion, animate, useReducedMotion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { profile } from '@/data/profile';
import { getTimeSince } from '@/utils/dateUtils';
import { TextEffect } from '@/components/ui/text-effect';

function formatDuration(years: number, months: number): string {
  const y = Math.floor(years);
  const m = Math.floor(months);
  if (y > 0) {
    const yPart = `${y} year${y !== 1 ? 's' : ''}`;
    if (m > 0) return `${yPart} and ${m} month${m !== 1 ? 's' : ''}`;
    return yPart;
  }
  if (m > 0) return `${m} month${m !== 1 ? 's' : ''}`;
  return 'less than a month';
}

/**
 * Home page
 * Hero fills viewport height (minus header), content top left
 * Experience timer counts up on load and updates every minute
 */
export default function HomeV2() {
  const prefersReducedMotion = useReducedMotion();
  const [displayYears, setDisplayYears] = useState(0);
  const [displayMonths, setDisplayMonths] = useState(0);
  const hasCountedUp = useRef(false);

  const techExperience = getTimeSince(profile.careerStartDate);
  const heroTextBefore = "I'm Tommy Mulder, an IT professional, real estate investor, and aspiring builder. I've spent ";
  const heroTextAfter = " in big tech working on many things including IT Ops, Eng, and People Tech projects. In my free time I build things.";

  // Count-up once on mount; live-update every minute is in the next effect
  useEffect(() => {
    const { years, months } = techExperience;
    if (prefersReducedMotion) {
      setDisplayYears(years);
      setDisplayMonths(months);
      return;
    }
    if (hasCountedUp.current) return;
    hasCountedUp.current = true;
    const controls = [
      animate(0, years, { duration: 1.4, ease: [0.22, 0.61, 0.36, 1], onUpdate: (v) => setDisplayYears(v) }),
      animate(0, months, { duration: 1.4, ease: [0.22, 0.61, 0.36, 1], delay: 0.3, onUpdate: (v) => setDisplayMonths(v) }),
    ];
    const t = setTimeout(() => {
      setDisplayYears(years);
      setDisplayMonths(months);
    }, 1800);
    return () => {
      controls.forEach((c) => c.stop());
      clearTimeout(t);
    };
  }, [techExperience.years, techExperience.months, prefersReducedMotion]);

  useEffect(() => {
    const id = setInterval(() => {
      const next = getTimeSince(profile.careerStartDate);
      setDisplayYears(next.years);
      setDisplayMonths(next.months);
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  const durationFormatted = formatDuration(displayYears, displayMonths);

  return (
    <>
      <SEOHead title="Home" description={`${heroTextBefore}${techExperience.formatted}${heroTextAfter}`} />

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
            {heroTextBefore}
            <motion.span
              className="inline-flex items-center gap-1.5 align-middle"
              initial={prefersReducedMotion ? false : { scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
              aria-label={durationFormatted}
            >
              <span
                className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-emerald-400/50 bg-gradient-to-r from-emerald-400/25 to-green-400/20 text-white font-semibold tabular-nums"
                style={{
                  boxShadow: '0 0 20px rgba(52,211,153,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.6)',
                }}
              >
                {prefersReducedMotion ? null : (
                  <span className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-emerald-300 font-medium">
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                      animate={{ opacity: [1, 0.4, 1], scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    Live
                  </span>
                )}
                <span className={prefersReducedMotion ? '' : 'pr-1'}>{durationFormatted}</span>
              </span>
            </motion.span>
            {heroTextAfter}
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}