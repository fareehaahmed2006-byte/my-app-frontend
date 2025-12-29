import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import MegaMenu from '@/components/MegaMenu';
import SearchOverlay from '@/components/SearchOverlay';
import CartDrawer from '@/components/CartDrawer';
import heroImage from '@/assets/hero-model.jpg';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header
        onMenuOpen={() => setIsMenuOpen(true)}
        onSearchOpen={() => setIsSearchOpen(true)}
        onCartOpen={() => setIsCartOpen(true)}
        variant="transparent"
      />

      <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="New Collection 2026"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 py-32">
          <div className="max-w-xl animate-slide-up">
            <span className="font-body text-xs tracking-[0.3em] text-primary-foreground/80 mb-4 block">
              NEW COLLECTION 2026
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-primary-foreground leading-tight mb-6">
              Defined by simplicity.
              <br />
              <span className="font-elegant italic">Designed for you.</span>
            </h1>
            <p className="font-body text-sm md:text-base text-primary-foreground/80 leading-relaxed mb-8 max-w-md">
              A fresh wave of style crafted for everyday elegance. Discover looks crafted to feel effortlessly you.
            </p>
            <Link
              to="/product"
              className="inline-block px-8 py-4 bg-primary-foreground text-primary font-body text-sm tracking-widest hover:bg-transparent hover:text-primary-foreground border-2 border-primary-foreground transition-all duration-300"
            >
              SHOP NOW
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="font-body text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-primary-foreground/40" />
        </div>
      </section>
    </div>
  );
};

export default Index;
