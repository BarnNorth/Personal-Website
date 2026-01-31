import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import linkedinLogo from '@/assets/linkedin-logo.jpeg';
import xLogo from '@/assets/x-logo.jpeg';
import githubLogo from '@/assets/github-logo.jpeg';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * About page with biography and professional information
 * Features split layout with portrait and comprehensive biography
 */
export default function About() {
  return <>
      <SEOHead title="About" description={`Learn about ${photographerInfo.name}, ${photographerInfo.tagline}. ${photographerInfo.biography.split('\n\n')[0]}`} image={photographerInfo.portraitImage} />
      
      <div>
        {/* Portrait and Biography - Split Layout */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Portrait Image */}
              <motion.div className="space-y-6" initial={{
              opacity: 0.8,
              x: -10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4
            }}>
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted">
                  <img src={photographerInfo.portraitImage} alt={photographerInfo.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                
                {/* Social Links */}
                
              </motion.div>

              {/* Biography and Info */}
              <motion.div className="space-y-8 bg-emerald-950/80 backdrop-blur-md border border-emerald-800/50 rounded-lg p-8 text-white" initial={{
              opacity: 0.8,
              x: 10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.1
            }}>
                {/* Name and Tagline */}
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                    {photographerInfo.name}
                  </h2>
                  <p className="text-xl text-muted-foreground font-light tracking-wide">
                    {photographerInfo.tagline}
                  </p>
                </div>

                <Separator />

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {photographerInfo.socialLinks.linkedin && (
                    <a
                      href={photographerInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                      aria-label="LinkedIn"
                    >
                      <img src={linkedinLogo} alt="LinkedIn" className="size-6 rounded-sm" />
                    </a>
                  )}
                  {photographerInfo.socialLinks.twitter && (
                    <a
                      href={photographerInfo.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                      aria-label="X/Twitter"
                    >
                      <img src={xLogo} alt="X" className="size-6 rounded-sm" />
                    </a>
                  )}
                  {photographerInfo.socialLinks.github && (
                    <a
                      href={photographerInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                      aria-label="GitHub"
                    >
                      <img src={githubLogo} alt="GitHub" className="size-6 rounded-full" />
                    </a>
                  )}
                </div>

                {/* Biography */}
                <div className="space-y-4">
                  {photographerInfo.biography.split('\n\n').map((paragraph, index) => <p key={index} className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>)}
                </div>

                {/* Contact Info */}
                
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>;
}