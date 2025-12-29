import { X, Search as SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestions = [
  'Flat 50% OFF',
  'Under Rs.3000',
  'Under Rs.5000',
  'Online Exclusive',
];

const inspirationProducts = [
  {
    id: 1,
    name: '3 PIECE - EMBROIDERED CROSSHATCH SUIT',
    originalPrice: 'Rs.8,990',
    salePrice: 'Rs.4,472',
    image: product4,
  },
  {
    id: 2,
    name: '3 PIECE - PRINTED KHADDAR SUIT',
    originalPrice: 'Rs.5,990',
    salePrice: 'Rs.3,192',
    image: product2,
  },
  {
    id: 3,
    name: '3 PIECE - EMBROIDERED RAW SILK SUIT',
    originalPrice: 'Rs.8,990',
    salePrice: 'Rs.7,192',
    image: product3,
  },
  {
    id: 4,
    name: 'EMBROIDERED LIGHT KHADDAR SHIRT',
    originalPrice: 'Rs.5,590',
    salePrice: 'Rs.3,913',
    image: product1,
  },
];

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background animate-fade-in overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-foreground hover:opacity-70 transition-opacity"
        aria-label="Close search"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        {/* Search Input */}
        <div className="relative mb-12 animate-slide-down">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Find Your Products"
            className="w-full h-14 pl-12 pr-4 border-2 border-primary bg-transparent font-body text-sm tracking-widest placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            autoFocus
          />
        </div>

        {/* Suggestions */}
        <div className="mb-12 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <h3 className="font-display text-lg mb-4 text-foreground">
            Suggested For You:
          </h3>
          <div className="flex flex-wrap gap-3">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                className="px-4 py-2 border border-primary text-primary font-body text-xs tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Inspiration Grid */}
        <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
          <h3 className="font-display text-lg mb-6 text-foreground">
            Need Some Inspiration?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {inspirationProducts.map((product) => (
              <Link
                key={product.id}
                to="/product"
                onClick={onClose}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="font-body text-xs tracking-wide text-foreground mb-1 line-clamp-2">
                  {product.name}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="font-body text-xs text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                  <span className="font-body text-sm font-medium text-primary">
                    {product.salePrice}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
