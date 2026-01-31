import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import linkedinLogo from '@/assets/linkedin-logo.jpeg';
import xLogo from '@/assets/x-logo.jpeg';
import githubLogo from '@/assets/github-logo.jpeg';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * Contact page with contact information
 */
export default function Contact() {
  return <>
      <SEOHead title="Contact" description={`Get in touch with ${photographerInfo.name} for collaborations, projects, and inquiries. ${photographerInfo.availability}`} />
      
      <div>
        {/* Main Content */}
        <section className="py-16 px-6 lg:px-8 md:py-[40px]">
          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <motion.div className="space-y-8 text-center text-white bg-emerald-950/80 backdrop-blur-sm rounded-sm p-8 md:p-12" initial={{
            opacity: 0.8,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4
          }}>
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white">
                  Contact Information
                </h2>
                <p className="text-white/100 font-light">
                  Want to chat? Here's how you can contact me.
                </p>
              </div>

              <Separator />

              {/* Contact Details */}
              <div className="space-y-6 flex flex-col items-start mx-auto w-fit">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-sm bg-white/10">
                    <Mail className="size-5 text-white" />
                  </div>
                  <div className="space-y-1 text-left">
                    <p className="text-sm font-light tracking-wide text-white/70">
                      Email
                    </p>
                    <a href={`mailto:${photographerInfo.email}`} className="text-base md:text-lg font-light text-white hover:text-white/80 transition-colors">
                      {photographerInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-sm bg-white/10">
                    <MapPin className="size-5 text-white" />
                  </div>
                  <div className="space-y-1 text-left">
                    <p className="text-sm font-light tracking-wide text-white/70">
                      Location
                    </p>
                    <p className="text-base md:text-lg font-light text-white">
                      {photographerInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-sm font-light tracking-wide text-white/70">
                  Connect with me
                </p>
                <div className="flex items-center justify-center gap-6">
                  {photographerInfo.socialLinks.linkedin && <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                      <img src={linkedinLogo} alt="LinkedIn" className="size-8 rounded-sm" />
                    </a>}
                  {photographerInfo.socialLinks.twitter && <a href={photographerInfo.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="X/Twitter">
                      <img src={xLogo} alt="X" className="size-8 rounded-sm" />
                    </a>}
                  {photographerInfo.socialLinks.github && <a href={photographerInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="GitHub">
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