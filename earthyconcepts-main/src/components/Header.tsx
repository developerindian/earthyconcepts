import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Find Your Concept', href: '/learn' },
  { name: 'About Us', href: '/about' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-36 items-center justify-between px-4 md:px-6">
        {/* Logo - Bigger */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Earthy Concepts" 
            className="h-28 md:h-32 w-auto object-contain drop-shadow-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* WhatsApp CTA - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            asChild 
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
          >
            <a 
              href="https://wa.me/971XXXXXXXXX?text=Hello%20Earthy%20Concepts%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Leaf className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 mt-8">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img 
                  src={logo} 
                  alt="Earthy Concepts" 
                  className="h-24 w-auto object-contain"
                />
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive(link.href) 
                        ? 'text-primary' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 mt-4"
              >
                <a 
                  href="https://wa.me/971XXXXXXXXX?text=Hello%20Earthy%20Concepts%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Leaf className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
