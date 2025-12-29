import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-maroon to-maroon-dark" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-center">
          {/* Logo */}
          <div className="w-24 h-24 bg-primary-foreground rounded-lg flex items-center justify-center mb-8 shadow-glow animate-scale-in">
            <span className="font-display text-4xl text-primary">S</span>
          </div>

          <h1 className="font-display text-3xl text-primary-foreground mb-4 tracking-wide animate-slide-up">
            WELCOME TO SHOPEASE
          </h1>

          <p className="font-elegant text-xl text-primary-foreground/70 italic max-w-sm animate-slide-up" style={{ animationDelay: '100ms' }}>
            A PLACE TO BRING YOUR PINTEREST BOARDS TO LIFE
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md animate-fade-in">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <Link to="/" className="font-display text-3xl text-primary tracking-widest">
              ShopEase
            </Link>
          </div>

          <h2 className="font-display text-2xl text-foreground mb-8 text-center tracking-wide">
            SIGN IN TO GET STARTED
          </h2>

          <form className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <User className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 pl-10 pr-4 border-b-2 border-border bg-transparent font-body text-sm tracking-widest placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Lock className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="ENTER PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 pl-10 pr-12 border-b-2 border-border bg-transparent font-body text-sm tracking-widest placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="border-primary data-[state=checked]:bg-primary"
                />
                <label
                  htmlFor="remember"
                  className="font-body text-xs text-muted-foreground cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="font-body text-xs text-primary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="default" size="lg" className="w-full">
              SIGN IN
            </Button>
          </form>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
