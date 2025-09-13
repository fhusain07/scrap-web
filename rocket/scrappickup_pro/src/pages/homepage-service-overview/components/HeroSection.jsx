import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleSchedulePickup = () => {
    navigate('/booking-form-appointment-scheduling');
  };

  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Scrap Pickup, Easy aur Tension-Free
              <span className="text-primary block mt-2">Simple aur Fast</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Bas ek phone lagao — loha, plastic, TV, fridge sab uthake le jayenge. 
              Doorstep se direct recycle, tension zero, paisa vasool!
            </p>
          </div>

          {/* Primary CTA */}
          <div className="mb-12">
            <Button
              variant="default"
              size="lg"
              onClick={handleSchedulePickup}
              iconName="Calendar"
              iconPosition="left"
              className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Pickup Now
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
  <div className="flex flex-col items-center text-center p-4">
    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
      <Icon name="Clock" size={24} color="white" />
    </div>
    <h3 className="font-semibold text-foreground mb-2">Fatafat Booking</h3>
    <p className="text-sm text-muted-foreground">2 minute me kaam khatam</p>
  </div>
  <div className="flex flex-col items-center text-center p-4">
    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
      <Icon name="Truck" size={24} color="white" />
    </div>
    <h3 className="font-semibold text-foreground mb-2">Seedha Ghar Pe</h3>
    <p className="text-sm text-muted-foreground">Ghar se pickup</p>
  </div>
  <div className="flex flex-col items-center text-center p-4">
    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
      <Icon name="Leaf" size={24} color="white" />
    </div>
    <h3 className="font-semibold text-foreground mb-2">Nature Dost</h3>
    <p className="text-sm text-muted-foreground">Recycle full eco-friendly</p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;