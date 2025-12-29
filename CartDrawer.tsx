import { X, ShoppingCart, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-foreground/50 animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md z-50 bg-background shadow-elegant-lg animate-slide-down">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="font-display text-lg text-primary-foreground">S</span>
            </div>
            <h2 className="font-display text-xl tracking-wide">SHOPPING CART</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center h-[calc(100%-80px)] p-6 text-center">
          <h3 className="font-display text-xl mb-8 text-foreground">
            Your Cart is Currently Empty !
          </h3>

          <div className="relative mb-8">
            <ShoppingCart className="w-32 h-32 text-muted-foreground/30" strokeWidth={1} />
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-accent-foreground" />
            </div>
          </div>

          <p className="font-body text-sm text-muted-foreground mb-8 tracking-wide">
            Select Some Items to Add to Your cart.
          </p>

          <Button asChild variant="default" size="lg">
            <Link to="/" onClick={onClose}>
              GO TO SHOP
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
