import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import product1 from '@/assets/product-1.jpg';

const Checkout = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [timeLeft, setTimeLeft] = useState(299); // 4:59 in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="font-display text-2xl tracking-widest">
              ShopEase
            </Link>
            <Link
              to="/product"
              className="flex items-center gap-1 font-body text-sm text-primary hover:underline"
            >
              <ChevronLeft className="w-4 h-4" />
              Edit Cart
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left - Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Timer Alert */}
            <div className="flex items-start gap-3 p-4 bg-accent/20 border border-accent animate-fade-in">
              <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-body text-xs tracking-wide text-foreground">
                  ITEMS IN YOUR CART ARE RESERVED FOR 5 MINUTES. CHECKOUT NOW TO SECURE YOUR PURCHASE!
                </p>
                <span className="font-display text-lg text-primary">{formatTime(timeLeft)}</span>
              </div>
            </div>

            {/* Step 1 - Contact Information */}
            <div className="animate-slide-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-sm">
                  1
                </div>
                <h2 className="font-display text-xl tracking-wide">Contact Information</h2>
              </div>

              <div className="space-y-4 ml-12">
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 border border-border bg-transparent font-body text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <Button variant="default" className="w-full">
                  PROCEED TO SHIPPING
                </Button>

                <p className="font-body text-sm text-center text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/login" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-background px-4 font-body text-xs text-muted-foreground tracking-widest">
                      OR SIGN IN WITH
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <button className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </button>
                  <button className="w-12 h-12 border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Step 2 - Shipping */}
            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 rounded-full border-2 border-border text-muted-foreground flex items-center justify-center font-display text-sm">
                  2
                </div>
                <h2 className="font-display text-xl tracking-wide text-muted-foreground">Shipping</h2>
              </div>

              <div className="grid grid-cols-2 gap-4 ml-12">
                <input
                  type="text"
                  placeholder="First Name *"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-12 px-4 border border-border bg-transparent font-body text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="h-12 px-4 border border-border bg-transparent font-body text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-secondary/50 p-6 sticky top-24 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-lg">Order Summary (1)</h3>
                <span className="font-body text-sm text-muted-foreground">Rs 4,999</span>
              </div>

              {/* Item */}
              <div className="flex gap-4 pb-6 border-b border-border">
                <div className="w-20 h-24 bg-muted overflow-hidden flex-shrink-0">
                  <img
                    src={product1}
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-body text-sm text-foreground mb-1">
                    Embroidered Light Khaddar Shirt
                  </h4>
                  <p className="font-body text-sm text-primary">Rs 4,999</p>
                  <p className="font-body text-xs text-muted-foreground mt-2">
                    Size: XS | Qty: 1
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className="py-6 space-y-3 border-b border-border">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Subtotal (Inclusive of Tax)</span>
                  <span>Rs 4,999</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Rs 249</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-muted-foreground">FBR POS</span>
                  <span>Rs 1</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between py-6 font-display text-lg">
                <span>Total (PKR)</span>
                <span className="text-primary">Rs 5,249</span>
              </div>

              {/* Policy */}
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                You may receive multiple packages for one order. Discounted items are non-exchangeable & non-returnable. Nationwide orders will be delivered within 10 - 15 days.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
