import { SEOHead } from '@/components/seo/SEOHead';

/**
 * Home V2 page
 * Features smooth animations and responsive layout
 */
export default function HomeV2() {
  return (
    <>
      <SEOHead 
        title="Home V2"
        description="Browse my projects built with AI and vibecoding - web apps, mobile apps, and creative experiments."
      />
      
      <div>
        {/* Content section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            {/* Add content here */}
          </div>
        </section>
      </div>
    </>
  );
}
