import { X, Heart, Search, User, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import promoWinter from '@/assets/promo-winter.jpg';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuCategories = [
  'NEW IN',
  "WINTER '26 COLLECTION",
  'UNSTITCHED',
  'PRET',
  'WESTERN WEAR',
  'BOTTOMS',
  'FORMALS',
  'FRAGRANCE',
  'ACCESSORIES',
  'SALE',
];

const unstitchedSubcategories = [
  '1-Piece',
  '2-Piece',
  '3-Piece',
  'Luxury Lawn',
  'Khaddar',
  'Linen',
  'Cambric',
];

const pretSubcategories = [
  'Pret',
  'Casual',
  'Semi-Formal',
  'Luxury Pret',
  'Embroidered',
  'Printed',
  'Co-ords',
  'Kurti Collection',
];

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-primary animate-fade-in">
      {/* Header */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="p-2 text-primary-foreground hover:opacity-70 transition-opacity"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="font-display text-2xl tracking-widest font-semibold text-primary-foreground">
              SHOPEASE
            </span>

            <div className="flex items-center gap-4 text-primary-foreground">
              <button className="p-2 hover:opacity-70 transition-opacity">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 hover:opacity-70 transition-opacity">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:opacity-70 transition-opacity">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:opacity-70 transition-opacity">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-6 py-8 overflow-y-auto max-h-[calc(100vh-80px)]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Menu Links */}
          <div className="md:col-span-1">
            <nav className="space-y-4">
              {menuCategories.map((item, index) => (
                <Link
                  key={item}
                  to="/"
                  onClick={onClose}
                  className="block font-body text-sm tracking-widest text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Subcategories */}
          <div className="md:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-lg text-primary-foreground mb-4 tracking-wide">
                  UNSTITCHED
                </h3>
                <ul className="space-y-2">
                  {unstitchedSubcategories.map((item) => (
                    <li key={item}>
                      <Link
                        to="/"
                        onClick={onClose}
                        className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg text-primary-foreground mb-4 tracking-wide">
                  PRET
                </h3>
                <ul className="space-y-2">
                  {pretSubcategories.map((item) => (
                    <li key={item}>
                      <Link
                        to="/"
                        onClick={onClose}
                        className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Promotional Boxes */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden group">
              <img
                src={promoWinter}
                alt="Winter '26 Drop"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-display text-lg text-primary-foreground">
                  WINTER '26 DROP
                </h4>
                <p className="font-body text-xs text-primary-foreground/70 tracking-wide">
                  New Arrivals Now Live
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group">
              <img
                src={promoWinter}
                alt="Pret Edit"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-display text-lg text-primary-foreground">
                  PRET EDIT
                </h4>
                <p className="font-body text-xs text-primary-foreground/70 tracking-wide">
                  Everyday elegance – crafted for...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="font-elegant text-lg text-primary-foreground/60 text-center tracking-wide">
            Crafted for Women. Designed with Elegance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
