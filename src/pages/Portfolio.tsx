import { projects } from '@/data/projects';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
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
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <motion.div
                  className="group relative bg-emerald-950/80 backdrop-blur-md border border-emerald-800/50 rounded-lg overflow-hidden hover:border-emerald-600/50 transition-all duration-300 h-full cursor-pointer"
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

                    {/* Built With Tools */}
                    {project.builtWith && (
                      <div className="flex items-center gap-2 pt-2">
                        <span className="text-xs text-muted-foreground/70 uppercase tracking-wider">Built with</span>
                        <div className="flex items-center gap-3">
                          {project.builtWith.map((tool) => (
                            <a
                              key={tool.name}
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="opacity-70 hover:opacity-100 transition-opacity"
                              title={tool.name}
                            >
                              <img
                                src={tool.logo}
                                alt={tool.name}
                                className="w-5 h-5 rounded-sm"
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </a>
              </ScrollReveal>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
