import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, User, ShoppingBag, Heart, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  onMenuOpen: () => void;
  onSearchOpen: () => void;
  onCartOpen: () => void;
  variant?: 'default' | 'transparent';
}

const Header = ({ onMenuOpen, onSearchOpen, onCartOpen, variant = 'default' }: HeaderProps) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        variant === 'transparent' && isHome
          ? 'bg-transparent text-primary-foreground'
          : 'bg-background/95 backdrop-blur-sm text-foreground border-b border-border'
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Menu */}
          <button
            onClick={onMenuOpen}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Center - Logo */}
          <Link to="/" className="font-display text-2xl tracking-widest font-semibold">
            ShopEase
          </Link>

          {/* Right - Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={onSearchOpen}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/login"
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>
            <button
              onClick={onCartOpen}
              className="p-2 hover:opacity-70 transition-opacity relative"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
