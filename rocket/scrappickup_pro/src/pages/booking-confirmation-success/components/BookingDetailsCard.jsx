import React from 'react';
import Icon from '../../../components/AppIcon';

const BookingDetailsCard = ({ bookingDetails }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString?.split(':');
    const date = new Date();
    date?.setHours(parseInt(hours), parseInt(minutes));
    return date?.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-form mb-6">
      <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
        <Icon name="FileText" size={20} className="mr-2 text-primary" />
        Booking Details
      </h2>
      <div className="space-y-4">
        {/* Customer Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-muted-foreground">Customer Name</label>
            <p className="text-foreground font-medium">{bookingDetails?.customerName}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-muted-foreground">Contact Number</label>
            <p className="text-foreground font-medium">{bookingDetails?.contactNumber}</p>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium text-muted-foreground">Email Address</label>
          <p className="text-foreground font-medium">{bookingDetails?.email}</p>
        </div>
        
        {/* Pickup Information */}
        <div className="border-t border-border pt-4">
          <div className="mb-4">
            <label className="text-sm font-medium text-muted-foreground">Pickup Address</label>
            <p className="text-foreground">{bookingDetails?.pickupAddress}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Pickup Date</label>
              <p className="text-foreground font-medium">{formatDate(bookingDetails?.pickupDate)}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Pickup Time</label>
              <p className="text-foreground font-medium">{formatTime(bookingDetails?.pickupTime)}</p>
            </div>
          </div>
        </div>
        
        {/* Scrap Information */}
        <div className="border-t border-border pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Scrap Types</label>
              <div className="flex flex-wrap gap-2 mt-1">
                {bookingDetails?.scrapTypes?.map((type, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-medium">
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Estimated Weight</label>
              <p className="text-foreground font-medium">{bookingDetails?.estimatedWeight} {bookingDetails?.weightUnit}</p>
            </div>
          </div>
        </div>
        
        {/* Special Instructions */}
        {bookingDetails?.specialInstructions && (
          <div className="border-t border-border pt-4">
            <label className="text-sm font-medium text-muted-foreground">Special Instructions</label>
            <p className="text-foreground">{bookingDetails?.specialInstructions}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingDetailsCard;