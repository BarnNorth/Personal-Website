import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * Contact page with contact information
 */
export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact"
        description={`Get in touch with ${photographerInfo.name} for collaborations, projects, and inquiries. ${photographerInfo.availability}`}
      />
      
      <div>
        {/* Main Content */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <motion.div
              className="space-y-8 text-center text-white"
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white">
                  Contact Information
                </h2>
                <p className="text-white/80 font-light">
                  Prefer to reach out directly? Here's how you can contact me.
                </p>
              </div>

              <Separator />

              {/* Contact Details */}
              <div className="space-y-6 flex flex-col items-center">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-sm bg-white/10">
                    <Mail className="size-5 text-white" />
                  </div>
                  <div className="space-y-1 text-left">
                    <p className="text-sm font-light tracking-wide text-white/70">
                      Email
                    </p>
                    <a
                      href={`mailto:${photographerInfo.email}`}
                      className="text-base md:text-lg font-light text-white hover:text-white/80 transition-colors"
                    >
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
                <div className="flex items-center justify-center gap-4">
                  {photographerInfo.socialLinks.linkedin && (
                    <a
                      href={photographerInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-white/30 rounded-sm hover:bg-white/10 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5 text-white" />
                    </a>
                  )}
                  {photographerInfo.socialLinks.github && (
                    <a
                      href={photographerInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-white/30 rounded-sm hover:bg-white/10 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="size-5 text-white" />
                    </a>
                  )}
                  {photographerInfo.socialLinks.twitter && (
                    <a
                      href={photographerInfo.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-white/30 rounded-sm hover:bg-white/10 transition-colors"
                      aria-label="X/Twitter"
                    >
                      <svg
                        className="size-5 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
