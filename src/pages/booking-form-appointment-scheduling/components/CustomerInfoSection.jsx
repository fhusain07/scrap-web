import React from 'react';
import Input from '../../../components/ui/Input';

const CustomerInfoSection = ({ formData, errors, onChange }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-subtle">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <span className="text-primary font-semibold text-sm">1</span>
        </div>
        <h2 className="text-lg font-semibold text-foreground">Customer Information</h2>
      </div>
      <div className="space-y-4">
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={formData?.fullName}
          onChange={(e) => onChange('fullName', e?.target?.value)}
          error={errors?.fullName}
          required
          className="w-full"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData?.phone}
            onChange={(e) => onChange('phone', e?.target?.value)}
            error={errors?.phone}
            required
            description="We'll use this to coordinate pickup"
          />
          
          <Input
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData?.email}
            onChange={(e) => onChange('email', e?.target?.value)}
            error={errors?.email}
            required
            description="For booking confirmation"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoSection;