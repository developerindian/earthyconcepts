import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import logo from '@/assets/logo.jpeg';
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Earthy Concepts" 
              className="h-16 w-auto object-contain brightness-0 invert"
            />
            <p className="text-sm text-background/70 leading-relaxed">
              Natural & Conscious Wellness. Rooted in tradition, crafted for modern living.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-background/70 hover:text-background transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-background/70 hover:text-background transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                About Us
              </Link>
              <Link to="/products" className="text-sm text-background/70 hover:text-background transition-colors">
                Products
              </Link>
              <Link to="/learn" className="text-sm text-background/70 hover:text-background transition-colors">
                Find Your Concept
              </Link>
              <Link to="/contact" className="text-sm text-background/70 hover:text-background transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/subscription" className="text-sm text-background/70 hover:text-background transition-colors">
                Monthly Rituals
              </Link>
              <Link to="/corporate-wellness" className="text-sm text-background/70 hover:text-background transition-colors">
                Corporate Wellness
              </Link>
              <Link to="/gifting" className="text-sm text-background/70 hover:text-background transition-colors">
                Gifting
              </Link>
              <Link to="/global-presence" className="text-sm text-background/70 hover:text-background transition-colors">
                Global Presence
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categories</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/products?category=formulations" className="text-sm text-background/70 hover:text-background transition-colors">
                Formulations
              </Link>
              <Link to="/products?category=single-herbs" className="text-sm text-background/70 hover:text-background transition-colors">
                Single Herb Capsules
              </Link>
              <Link to="/products?category=herbal-teas" className="text-sm text-background/70 hover:text-background transition-colors">
                Herbal Teas
              </Link>
              <Link to="/products?category=body-oils" className="text-sm text-background/70 hover:text-background transition-colors">
                Body Oils
              </Link>
              <Link to="/products?category=hair-oils" className="text-sm text-background/70 hover:text-background transition-colors">
                Hair Oils
              </Link>
              <Link to="/products?category=ubtans" className="text-sm text-background/70 hover:text-background transition-colors">
                Ubtans
              </Link>
              <Link to="/products?category=face-mists" className="text-sm text-background/70 hover:text-background transition-colors">
                Face Mists
              </Link>
              <Link to="/products?category=body-cleanse" className="text-sm text-background/70 hover:text-background transition-colors">
                Body Cleanse
              </Link>
            </nav>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Earthy Concepts. All rights reserved.
            </p>
            <p className="text-xs text-background/40">
              GMP, ISO, HACCP-Certified • FDA-Compliant Manufacturing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
