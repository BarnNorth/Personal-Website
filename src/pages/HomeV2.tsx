import { motion } from 'framer-motion';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

/**
 * Home page
 * Features smooth animations and responsive layout
 */
export default function HomeV2() {
  return (
    <>
      <SEOHead 
        title="Home"
        description="Browse my projects built with AI and vibecoding - web apps, mobile apps, and creative experiments."
      />
      
      <div>
        {/* Hero Content */}
        <section className="relative h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center px-6">
          <motion.div
            className="text-center space-y-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              BarnNorth Studios
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-foreground/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              I'm Tommy Mulder, an IT professional turned vibecoder. I spent 8 years building AI systems and automation tools at Pinterest and Snap. Now I build things for myself.
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
                  variant="outline" 
                  size="lg" 
                  className="text-base font-medium tracking-wide px-8"
                >
                  View Portfolio
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base font-medium tracking-wide px-8"
                >
                  About Me
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
