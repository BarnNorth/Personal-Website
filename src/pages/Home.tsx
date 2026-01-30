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
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroBackground}
              alt="Forest and mountains landscape"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
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
                className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {photographerInfo.name}
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white/90 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {photographerInfo.heroIntroduction}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <Link to="/portfolio">
                  <Button 
                    size="lg" 
                    className="text-base font-light tracking-wide px-8"
                  >
                    View Portfolio
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-base font-light tracking-wide px-8 bg-transparent border-white text-white hover:bg-white hover:text-black"
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
