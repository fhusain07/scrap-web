import React from 'react';
import Icon from '../../../components/AppIcon';

const ConfirmationHeader = () => {
  return (
    <div className="text-center mb-8">
      {/* Success Icon */}
      <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
        <Icon name="CheckCircle" size={48} color="white" strokeWidth={2} />
      </div>
      
      {/* Success Message */}
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        Booking Confirmed!
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-md mx-auto">
        Your scrap pickup request has been successfully submitted and received.
      </p>
    </div>
  );
};

export default ConfirmationHeader;