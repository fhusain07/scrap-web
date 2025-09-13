import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const handleCallSupport = () => {
    window.location.href = 'tel:+1-555-SCRAP-01';
  };

  const handleEmailSupport = () => {
    window.location.href = 'mailto:support@scrappickuppro.com?subject=Booking Support Request';
  };

  const handleWhatsAppSupport = () => {
    const message = "Hi! I need help with my scrap pickup booking.";
    const whatsappUrl = `https://wa.me/15555727201?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-form">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
        <Icon name="Headphones" size={20} className="mr-2 text-primary" />
        Need Help or Changes?
      </h3>
      
      <p className="text-muted-foreground mb-4">
        Our support team is here to help with any questions or modifications to your booking.
      </p>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-3">
            <Icon name="Phone" size={18} className="text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Phone Support</p>
              <p className="text-xs text-muted-foreground">+1 (555) SCRAP-01</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={handleCallSupport}>
            Call
          </Button>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-3">
            <Icon name="Mail" size={18} className="text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Email Support</p>
              <p className="text-xs text-muted-foreground">support@scrappickuppro.com</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={handleEmailSupport}>
            Email
          </Button>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-3">
            <Icon name="MessageCircle" size={18} className="text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">WhatsApp Support</p>
              <p className="text-xs text-muted-foreground">Quick response guaranteed</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={handleWhatsAppSupport}>
            Chat
          </Button>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-success/5 border border-success/20 rounded-lg">
        <div className="flex items-start space-x-2">
          <Icon name="Clock" size={16} className="text-success mt-0.5" />
          <div>
            <p className="text-sm font-medium text-success">Business Hours</p>
            <p className="text-xs text-success/80">Monday - Saturday: 8:00 AM - 6:00 PM</p>
            <p className="text-xs text-success/80">Sunday: 9:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;