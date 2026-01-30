import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';

/**
 * Homepage with hero section
 * Personal website for Tommy Mulder / BarnNorth Studios
 */
export default function Home() {
  return (
    <>
      <SEOHead />
      
      <div>
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-100px)] w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroBackground}
              alt="Forest and mountains landscape"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
          </div>

          {/* Hero Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                style={{ textShadow: '0 2px 16px rgba(0,0,0,0.6), 0 4px 32px rgba(0,0,0,0.4)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {photographerInfo.name}
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-white max-w-3xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {photographerInfo.heroIntroduction}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Link to="/portfolio">
                  <Button 
                    size="lg" 
                    className="text-base font-medium tracking-wide px-8 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 transition-shadow"
                  >
                    View Portfolio
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-base font-medium tracking-wide px-8 bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-black shadow-lg shadow-black/30 transition-all"
                  >
                    About Me
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
