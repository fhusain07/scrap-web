import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const ActionButtons = () => {
  const navigate = useNavigate();

  const handleScheduleAnother = () => {
    navigate('/booking-form-appointment-scheduling');
  };

  const handleBackToHome = () => {
    navigate('/homepage-service-overview');
  };

  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="default"
          onClick={handleScheduleAnother}
          iconName="Plus"
          iconPosition="left"
          fullWidth
          className="sm:flex-1"
        >
          Schedule Another Pickup
        </Button>
        
        <Button
          variant="outline"
          onClick={handleBackToHome}
          iconName="Home"
          iconPosition="left"
          fullWidth
          className="sm:flex-1"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;