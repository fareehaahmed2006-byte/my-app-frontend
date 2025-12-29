import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Minus, Plus, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import MegaMenu from '@/components/MegaMenu';
import SearchOverlay from '@/components/SearchOverlay';
import CartDrawer from '@/components/CartDrawer';
import product1 from '@/assets/product-1.jpg';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const ProductDetail = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Women', path: '/' },
    { label: 'Ready to Wear', path: '/' },
    { label: 'Shirts', path: '/' },
    { label: 'Embroidered Light Khaddar shirt', path: '/product' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header
        onMenuOpen={() => setIsMenuOpen(true)}
        onSearchOpen={() => setIsSearchOpen(true)}
        onCartOpen={() => setIsCartOpen(true)}
      />

      <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <main className="pt-24 pb-16">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-6 mb-8">
          <nav className="flex items-center flex-wrap gap-1 font-body text-xs text-muted-foreground">
            {breadcrumbs.map((item, index) => (
              <span key={item.label} className="flex items-center">
                {index > 0 && <ChevronRight className="w-3 h-3 mx-1" />}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-foreground">{item.label}</span>
                ) : (
                  <Link to={item.path} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="animate-fade-in">
              <div className="aspect-[3/4] overflow-hidden bg-secondary">
                <img
                  src={product1}
                  alt="Embroidered Light Khaddar Shirt"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-slide-up">
              <div className="flex items-start justify-between mb-4">
                <h1 className="font-display text-2xl md:text-3xl text-foreground">
                  EMBROIDERED LIGHT KHADDAR SHIRT
                </h1>
                <button className="p-2 hover:text-primary transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              <p className="font-display text-2xl text-primary mb-4">Rs. 4,999</p>

              <p className="font-body text-xs text-muted-foreground mb-8 tracking-wide">
                SKU: 2DST67MNUS*7,999
              </p>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-body text-sm tracking-widest text-foreground">
                    SELECT YOUR SIZE
                  </span>
                  <button className="font-body text-xs text-primary underline">
                    Size Chart
                  </button>
                </div>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border-2 font-body text-sm tracking-wide transition-colors ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-8">
                <span className="font-body text-sm tracking-widest text-foreground">QTY</span>
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-body">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                variant="default"
                size="lg"
                className="w-full mb-8"
                onClick={() => setIsCartOpen(true)}
              >
                ADD TO CART
              </Button>

              {/* Tabs */}
              <div className="border-t border-border pt-8">
                <div className="flex gap-8 mb-6">
                  {['DETAILS', 'DESCRIPTION', 'SIZE GUIDE'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                      className={`font-body text-xs tracking-widest pb-2 border-b-2 transition-colors ${
                        activeTab === tab.toLowerCase().replace(' ', '-')
                          ? 'border-primary text-foreground'
                          : 'border-transparent text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="font-body text-sm text-muted-foreground leading-relaxed">
                  <p className="mb-2">Model Height: 5 feet, 5 inches</p>
                  <p>Model Wears Size: S</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
