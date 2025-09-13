import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const SchedulingSection = ({ formData, errors, onChange, onTimeSlotChange }) => {
  const timeSlots = [
    { value: '08:00-10:00', label: '8:00 AM - 10:00 AM', description: 'Morning slot' },
    { value: '10:00-12:00', label: '10:00 AM - 12:00 PM', description: 'Late morning' },
    { value: '12:00-14:00', label: '12:00 PM - 2:00 PM', description: 'Afternoon slot' },
    { value: '14:00-16:00', label: '2:00 PM - 4:00 PM', description: 'Late afternoon' },
    { value: '16:00-18:00', label: '4:00 PM - 6:00 PM', description: 'Evening slot' }
  ];

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date()?.toISOString()?.split('T')?.[0];

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-subtle">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <span className="text-primary font-semibold text-sm">3</span>
        </div>
        <h2 className="text-lg font-semibold text-foreground">Schedule Pickup</h2>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Preferred Pickup Date"
            type="date"
            value={formData?.pickupDate}
            onChange={(e) => onChange('pickupDate', e?.target?.value)}
            error={errors?.pickupDate}
            required
            min={today}
            description="Select your preferred date"
          />
          
          <Select
            label="Preferred Time Slot"
            options={timeSlots}
            value={formData?.timeSlot}
            onChange={onTimeSlotChange}
            placeholder="Select time slot"
            error={errors?.timeSlot}
            required
            description="Choose convenient time"
          />
        </div>
        
        <div className="bg-muted/30 rounded-lg p-4 border border-border">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-warning/20 rounded-full flex items-center justify-center mt-0.5">
              <span className="text-warning text-xs">!</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-foreground mb-1">Pickup Schedule Note</h4>
              <p className="text-sm text-muted-foreground">
                We operate Monday to Saturday, 8:00 AM to 6:00 PM. Same-day pickup may not be available. 
                We'll confirm your appointment via phone or email within 2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulingSection;