import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CallToAction = () => {
  const navigate = useNavigate();

  const handleSchedulePickup = () => {
    navigate('/booking-form-appointment-scheduling');
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Clear Your Space?
            </h2>
            <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Hazaaron logon ka bharosa – ab aapka number. Scrap pickup full imaandari se, free estimate ke saath.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleSchedulePickup}
              iconName="Calendar"
              iconPosition="left"
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule Pickup
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              Call Now: (883) 038-6225
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">5000+</div>
              <div className="text-sm text-green-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">24hr</div>
              <div className="text-sm text-green-100">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-green-100">Eco-Friendly</div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-green-600">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-green-100">
              <div className="flex items-center">
                <Icon name="CheckCircle" size={16} className="mr-2" />
                <span className="text-sm">Free Estimates</span>
              </div>
              <div className="flex items-center">
                <Icon name="CheckCircle" size={16} className="mr-2" />
                <span className="text-sm">Same Day Service</span>
              </div>
              <div className="flex items-center">
                <Icon name="CheckCircle" size={16} className="mr-2" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;