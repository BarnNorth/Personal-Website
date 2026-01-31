import { photographerInfo } from '@/data/photographer';
import linkedinLogo from '@/assets/linkedin-logo.jpeg';
import xLogo from '@/assets/x-logo.jpeg';
import githubLogo from '@/assets/github-logo.jpeg';

/**
 * Minimal footer component with social links and copyright
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-white/70 font-light tracking-wide">
            © {currentYear} {photographerInfo.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {photographerInfo.socialLinks.linkedin && (
              <a
                href={photographerInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <img src={linkedinLogo} alt="LinkedIn" className="size-5 rounded-sm" />
              </a>
            )}
            {photographerInfo.socialLinks.twitter && (
              <a
                href={photographerInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="X/Twitter"
              >
                <img src={xLogo} alt="X" className="size-5 rounded-sm" />
              </a>
            )}
            {photographerInfo.socialLinks.github && (
              <a
                href={photographerInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <img src={githubLogo} alt="GitHub" className="size-5 rounded-full" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
