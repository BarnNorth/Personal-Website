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
      
      <div>
        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 h-full"
                  whileHover={{ y: -4 }}
                >
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden bg-black">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
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
        </section>

      </div>
    </>
  );
}
