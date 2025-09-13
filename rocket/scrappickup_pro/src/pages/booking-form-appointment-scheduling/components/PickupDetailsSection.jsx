import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const PickupDetailsSection = ({ formData, errors, onChange, onScrapTypeChange, onWeightUnitChange }) => {
  const scrapTypeOptions = [
    { value: 'metal', label: 'Metal Scrap', description: 'Iron, steel, aluminum, copper' },
    { value: 'plastic', label: 'Plastic Materials', description: 'Bottles, containers, packaging' },
    { value: 'ewaste', label: 'Electronic Waste', description: 'Computers, phones, appliances' },
    { value: 'paper', label: 'Paper & Cardboard', description: 'Newspapers, boxes, documents' },
    { value: 'glass', label: 'Glass Items', description: 'Bottles, jars, windows' }
  ];

  const weightUnits = [
    { value: 'kg', label: 'Kilograms (kg)' },
    { value: 'lbs', label: 'Pounds (lbs)' }
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-subtle">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
          <span className="text-primary font-semibold text-sm">2</span>
        </div>
        <h2 className="text-lg font-semibold text-foreground">Pickup Details</h2>
      </div>
      <div className="space-y-6">
        <Input
          label="Pickup Address"
          type="textarea"
          placeholder="Enter your complete pickup address including street, city, state, and zip code"
          value={formData?.address}
          onChange={(e) => onChange('address', e?.target?.value)}
          error={errors?.address}
          required
          rows={3}
          description="Please provide detailed address for accurate pickup"
        />
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Scrap Types <span className="text-error">*</span>
          </label>
          <p className="text-sm text-muted-foreground mb-4">Select all types of scrap materials you want to dispose of</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {scrapTypeOptions?.map((option) => (
              <div key={option?.value} className="flex items-start space-x-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-smooth">
                <Checkbox
                  checked={formData?.scrapTypes?.includes(option?.value)}
                  onChange={(e) => onScrapTypeChange(option?.value, e?.target?.checked)}
                  className="mt-0.5"
                />
                <div className="flex-1 min-w-0">
                  <label className="text-sm font-medium text-foreground cursor-pointer">
                    {option?.label}
                  </label>
                  <p className="text-xs text-muted-foreground mt-1">{option?.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {errors?.scrapTypes && (
            <p className="text-sm text-error mt-2">{errors?.scrapTypes}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Estimated Weight"
            type="number"
            placeholder="0"
            value={formData?.estimatedWeight}
            onChange={(e) => onChange('estimatedWeight', e?.target?.value)}
            error={errors?.estimatedWeight}
            required
            min="1"
            step="0.1"
            description="Approximate total weight"
          />
          
          <Select
            label="Weight Unit"
            options={weightUnits}
            value={formData?.weightUnit}
            onChange={onWeightUnitChange}
            placeholder="Select unit"
            required
          />
        </div>
        
        <Input
          label="Special Instructions"
          type="textarea"
          placeholder="Any special instructions for pickup (e.g., location details, access instructions, specific handling requirements)"
          value={formData?.specialInstructions}
          onChange={(e) => onChange('specialInstructions', e?.target?.value)}
          rows={3}
          description="Optional - Help us serve you better"
        />
      </div>
    </div>
  );
};

export default PickupDetailsSection;