import React from 'react';
import Icon from '../../../components/AppIcon';

const NextStepsCard = ({ whatsappStatus, emailStatus }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-form mb-6">
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
        <Icon name="Clock" size={20} className="mr-2 text-primary" />
        What Happens Next?
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-sm font-bold">1</span>
          </div>
          <div>
            <p className="text-foreground font-medium">Notification Sent</p>
            <p className="text-sm text-muted-foreground">
              Your booking details have been sent to our team for processing.
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-sm font-bold">2</span>
          </div>
          <div>
            <p className="text-foreground font-medium">Confirmation Call</p>
            <p className="text-sm text-muted-foreground">
              We'll contact you within 2 hours to confirm your pickup details and timing.
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-sm font-bold">3</span>
          </div>
          <div>
            <p className="text-foreground font-medium">Pickup Service</p>
            <p className="text-sm text-muted-foreground">
              Our team will arrive at your scheduled time to collect your scrap materials.
            </p>
          </div>
        </div>
      </div>
      
      {/* Delivery Status */}
      <div className="border-t border-border pt-4 mt-6">
        <h4 className="text-sm font-medium text-foreground mb-3">Notification Status</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="MessageCircle" size={16} className="text-success" />
              <span className="text-sm text-foreground">WhatsApp Message</span>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              whatsappStatus === 'sent' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
            }`}>
              {whatsappStatus === 'sent' ? 'Sent' : 'Pending'}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={16} className="text-success" />
              <span className="text-sm text-foreground">Email Notification</span>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              emailStatus === 'sent' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
            }`}>
              {emailStatus === 'sent' ? 'Sent' : 'Backup'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStepsCard;