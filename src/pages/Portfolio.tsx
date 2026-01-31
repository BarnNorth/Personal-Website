import { projects } from '@/data/projects';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/**
 * Portfolio page with project cards
 * Features smooth animations and responsive layout
 */
export default function Portfolio() {
  return (
    <>
      <SEOHead 
        title="Portfolio"
        description="Browse my projects built with AI and vibecoding - web apps, mobile apps, and creative experiments."
      />
      
      <div className="h-[calc(100dvh-100px)] overflow-hidden">
        {/* Projects Grid */}
        <section className="h-full py-6 md:py-8 flex items-center">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 h-full"
                  whileHover={{ y: -4 }}
                >
                  {/* Project Image */}
                  <div className="aspect-video max-h-[15vh] md:max-h-[20vh] relative overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Project Content */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-lg md:text-xl font-light tracking-wide">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground font-light leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* CTA Button */}
                    {project.externalLink && (
                      <a
                        href={project.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Button size="sm" className="font-light tracking-wide">
                          {project.id === '1' ? 'Try Health Freak' : 'Check Your Commute'}
                          <ExternalLink className="size-3 ml-1" />
                        </Button>
                      </a>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
