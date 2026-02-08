import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';

import linkedinLogo from '@/assets/linkedin-logo.jpeg';
import xLogo from '@/assets/x-logo.jpeg';
import instagramLogo from '@/assets/instagram-logo.png';
import githubLogo from '@/assets/github-logo.jpeg';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * Contact page with contact information
 */
export default function Contact() {
  return <>
      <SEOHead title="Contact" description={`Get in touch with ${profile.name} for collaborations, projects, and inquiries. ${profile.availability}`} />
      
      <div>
        {/* Main Content */}
        <section className="py-16 md:py-20 px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <motion.div className="space-y-8 text-center text-white bg-surface-portfolio backdrop-blur-md border border-accent-border rounded-lg p-8 md:p-12 shadow-elevated" initial={{
            opacity: 0.8,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4
          }}>
              <div className="space-y-3">
                <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-white">
                  Contact Information
                </h2>
                <p className="text-white/100 font-light">
                  Want to chat? Here's how you can contact me.
                </p>
              </div>


              {/* Contact Details */}
              <div className="space-y-6 flex flex-col items-start mx-auto w-fit">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-sm border border-white/30 bg-white/5">
                    <Mail className="size-5 text-white" />
                  </div>
                  <div className="space-y-1 text-left">
                    <p className="text-sm font-light tracking-wide text-white/70">
                      Email
                    </p>
                    <a href={`mailto:${profile.email}`} className="text-base md:text-lg font-light text-white hover:text-white/80 transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-sm border border-white/30 bg-white/5">
                    <MapPin className="size-5 text-white" />
                  </div>
                  <div className="space-y-1 text-left">
                    <p className="text-sm font-light tracking-wide text-white/70">
                      Location
                    </p>
                    <p className="text-base md:text-lg font-light text-white">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>

              

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-sm font-light tracking-wide text-white/70">
                  Connect with me
                </p>
                <div className="flex items-center justify-center gap-6">
                  {profile.socialLinks.linkedin && <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                      <img src={linkedinLogo} alt="LinkedIn" className="size-8 rounded-sm" />
                    </a>}
                  {profile.socialLinks.twitter && <a href={profile.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="X/Twitter">
                      <img src={xLogo} alt="X" className="size-8 rounded-sm" />
                    </a>}
                  {profile.socialLinks.instagram && <a href={profile.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                      <img src={instagramLogo} alt="Instagram" className="size-8 rounded-sm" />
                    </a>}
                  {profile.socialLinks.github && <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="GitHub">
                      <img src={githubLogo} alt="GitHub" className="size-8 rounded-full" />
                    </a>}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>;
}