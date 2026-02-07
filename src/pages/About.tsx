import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { getTimeSince } from '@/utils/dateUtils';
import linkedinLogo from '@/assets/linkedin-logo.jpeg';
import xLogo from '@/assets/x-logo.jpeg';
import instagramLogo from '@/assets/instagram-logo.png';
import githubLogo from '@/assets/github-logo.jpeg';
import aboutPhoto from '@/assets/about-photo.jpg';

import { SEOHead } from '@/components/seo/SEOHead';

/**
 * About page with biography and professional information
 * Features split layout with portrait and comprehensive biography
 */
export default function About() {
  const techExperience = getTimeSince(profile.careerStartDate);
  const biography = profile.biography.replace('{{techExperience}}', techExperience.formatted);
  return <>
      <SEOHead title="About" description={`Learn about ${profile.name}, ${profile.tagline}. ${biography.split('\n\n')[0]}`} image={profile.portraitImage} />
      
      <div>
        {/* Portrait and Biography - Split Layout */}
        <section className="py-16 md:py-20 px-6 lg:px-8">
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
                  <img src={aboutPhoto} alt={profile.name} className="absolute inset-0 w-full h-full object-cover" />
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
                    {profile.name}
                  </h2>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-white font-light tracking-wide text-sm">
                      {profile.tagline}
                    </p>
                    <div className="flex items-center gap-3">
                      {profile.socialLinks.linkedin && <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
                          <img src={linkedinLogo} alt="LinkedIn" className="size-5 rounded-sm" />
                        </a>}
                      {profile.socialLinks.twitter && <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="X/Twitter">
                          <img src={xLogo} alt="X" className="size-5 rounded-sm" />
                        </a>}
                      {profile.socialLinks.instagram && <a href={profile.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="Instagram">
                          <img src={instagramLogo} alt="Instagram" className="size-5 rounded-sm" />
                        </a>}
                      {profile.socialLinks.github && <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="GitHub">
                          <img src={githubLogo} alt="GitHub" className="size-5 rounded-full" />
                        </a>}
                    </div>
                  </div>
                </div>

                

                {/* Social Links */}
                

                {/* Biography */}
                <div className="space-y-2">
                  {biography.split('\n\n').map((paragraph, index) => <p key={index} className="text-base md:text-lg font-light leading-relaxed text-white/90">
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