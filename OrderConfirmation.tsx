import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="font-display text-2xl tracking-widest">
            ShopEase
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-lg mx-auto text-center">
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-sm">
                ✓
              </div>
              <span className="font-body text-xs text-muted-foreground">Contact</span>
            </div>
            <div className="w-8 h-px bg-primary" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-sm">
                ✓
              </div>
              <span className="font-body text-xs text-muted-foreground">Shipping</span>
            </div>
            <div className="w-8 h-px bg-primary" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-sm">
                3
              </div>
              <span className="font-body text-xs text-foreground font-medium">Payment</span>
            </div>
          </div>

          {/* Success Icon */}
          <div className="mb-8 animate-scale-in">
            <div className="w-24 h-24 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Confirmation Message */}
          <h1 className="font-display text-3xl text-foreground mb-2 animate-slide-up">
            Order Placed Successfully!
          </h1>
          <p className="font-body text-sm text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '50ms' }}>
            Order#982347
          </p>

          {/* Customer Details */}
          <div className="bg-secondary/50 p-6 text-left mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="font-display text-lg mb-4">Customer Details :</h3>
            <div className="space-y-2 font-body text-sm">
              <p className="text-foreground">Hadia Rehman</p>
              <p className="text-muted-foreground">0300-12345678</p>
              <p className="text-muted-foreground">HadiaRean@gmail.com</p>
              <p className="text-muted-foreground">Medical Scheme</p>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="font-body text-sm text-muted-foreground mb-1">Expected Delivery</p>
              <p className="font-display text-lg text-primary">December 5, 2025</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '150ms' }}>
            <Button asChild variant="default" size="lg" className="flex-1">
              <Link to="/">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link to="/">View Order Detail</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderConfirmation;
