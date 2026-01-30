import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { projects } from '@/data/projects';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

/**
 * Homepage with hero section, about, and projects
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
                <a href="#portfolio">
                  <Button 
                    size="lg" 
                    className="text-base font-light tracking-wide px-8"
                  >
                    View Portfolio
                  </Button>
                </a>
                <a href="#about">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-base font-light tracking-wide px-8 bg-transparent border-white text-white hover:bg-white hover:text-black"
                  >
                    About Me
                  </Button>
                </a>
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

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                  About Me
                </h2>
                <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground">
                  {photographerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 md:py-32 border-t border-border">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Projects
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                Things I've built with AI and vibecoding
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-light tracking-wide">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    {project.features && (
                      <p className="text-sm text-primary font-light">
                        {project.features}
                      </p>
                    )}

                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-light tracking-wide bg-accent text-accent-foreground rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* CTA Button */}
                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4"
                      >
                        <Button className="font-light tracking-wide">
                          {project.id === '1' ? 'Try Health Freak' : 'Check Your Commute'}
                          <ExternalLink className="size-4 ml-2" />
                        </Button>
                      </a>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* View All Link */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 px-6 lg:px-8 border-t border-border bg-accent/30">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                  Interested in working together or want to chat about AI, vibecoding, or building products? Reach out.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <a
                  href={`mailto:${photographerInfo.email}`}
                  className="text-2xl md:text-3xl font-light tracking-wide hover:text-muted-foreground transition-colors"
                >
                  {photographerInfo.email}
                </a>

                {/* Social Links */}
                <div className="flex justify-center gap-6 pt-4">
                  {photographerInfo.socialLinks.linkedin && (
                    <a
                      href={photographerInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                  {photographerInfo.socialLinks.twitter && (
                    <a
                      href={photographerInfo.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      X/Twitter
                    </a>
                  )}
                  {photographerInfo.socialLinks.github && (
                    <a
                      href={photographerInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>

                <div className="pt-8">
                  <Link to="/contact">
                    <Button size="lg" className="font-light tracking-wide px-8">
                      Send a Message
                      <ArrowRight className="size-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
