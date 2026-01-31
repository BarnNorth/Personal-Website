import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { photographerInfo } from "@/data/photographer";
import { getTimeSince } from "@/utils/dateUtils";

/**
 * Home page
 * Hero fills viewport height (minus header), content centered
 * Footer appears below the fold on scroll
 */
export default function HomeV2() {
  const techExperience = getTimeSince(photographerInfo.careerStartDate);

  const heroText = `I'm Tommy Mulder, an IT professional turned vibecoder. I've spent ${techExperience.formatted} in big tech working on many things including Eng, Ops, and People projects. In my free time I build things.`;

  return (
    <>
      <SEOHead
        title="Home"
        description="Browse my projects built with AI and vibecoding - web apps, mobile apps, and creative experiments."
      />

      {/* Hero section - fills remaining viewport height after sticky header */}
      <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6">
        <motion.div
          className="text-center space-y-6 max-w-4xl bg-black/20 backdrop-blur-sm rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 4px 40px rgba(0,0,0,0.4)" }}
          >
            BarnNorth Studios
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-white/95 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7), 0 2px 16px rgba(0,0,0,0.5)" }}
          >
            {heroText}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link to="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="text-base font-medium tracking-wide px-8 bg-black/30 border-white/50 text-white hover:bg-black/50 hover:border-white backdrop-blur-sm"
              >
                View Portfolio
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="text-base font-medium tracking-wide px-8 bg-black/30 border-white/50 text-white hover:bg-black/50 hover:border-white backdrop-blur-sm"
              >
                About Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
