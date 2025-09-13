import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Icon from '../AppIcon';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentStep = getCurrentStep(location?.pathname);

  function getCurrentStep(pathname) {
    switch (pathname) {
      case '/homepage-service-overview':
        return 1;
      case '/booking-form-appointment-scheduling':
        return 2;
      case '/booking-confirmation-success':
        return 3;
      default:
        return 1;
    }
  }

  const handleLogoClick = () => {
    navigate('/homepage-service-overview');
    setIsMobileMenuOpen(false);
  };

  const handleBookingClick = () => {
    navigate('/booking-form-appointment-scheduling');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="flex items-center space-x-2 transition-smooth hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg p-1"
              aria-label="Nagpur Scrap - Go to homepage"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Recycle" size={20} color="white" strokeWidth={2.5} />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-foreground">Nagpur Scrap</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Progress Indicator */}
            {currentStep > 1 && (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3]?.map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full transition-smooth ${
                          step <= currentStep
                            ? 'bg-primary' :'bg-muted'
                        }`}
                      />
                      {step < 3 && (
                        <div
                          className={`w-8 h-0.5 mx-1 transition-smooth ${
                            step < currentStep
                              ? 'bg-primary' :'bg-muted'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">
                  Step {currentStep} of 3
                </span>
              </div>
            )}

            {/* Book Pickup CTA */}
            {location?.pathname !== '/booking-form-appointment-scheduling' && (
              <Button
                variant="default"
                onClick={handleBookingClick}
                iconName="Calendar"
                iconPosition="left"
                className="transition-smooth"
              >
                Book Pickup
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Progress Indicator */}
              {currentStep > 1 && (
                <div className="px-3 py-2">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[1, 2, 3]?.map((step) => (
                      <div key={step} className="flex items-center">
                        <div
                          className={`w-3 h-3 rounded-full transition-smooth ${
                            step <= currentStep
                              ? 'bg-primary' :'bg-muted'
                          }`}
                        />
                        {step < 3 && (
                          <div
                            className={`w-6 h-0.5 mx-1 transition-smooth ${
                              step < currentStep
                                ? 'bg-primary' :'bg-muted'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    Step {currentStep} of 3
                  </p>
                </div>
              )}

              {/* Mobile Book Pickup Button */}
              {location?.pathname !== '/booking-form-appointment-scheduling' && (
                <div className="px-3 py-2">
                  <Button
                    variant="default"
                    onClick={handleBookingClick}
                    iconName="Calendar"
                    iconPosition="left"
                    fullWidth
                    className="transition-smooth"
                  >
                    Book Pickup
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;