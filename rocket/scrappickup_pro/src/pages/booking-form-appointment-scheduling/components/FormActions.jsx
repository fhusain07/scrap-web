import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FormActions = ({ onSubmit, onBack, isLoading, isFormValid }) => {
  return (
    <div className="sticky bottom-0 bg-background border-t border-border p-4 md:p-6 shadow-modal">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
          <Button
            variant="outline"
            onClick={onBack}
            iconName="ArrowLeft"
            iconPosition="left"
            className="order-2 sm:order-1"
            disabled={isLoading}
          >
            Back to Homepage
          </Button>
          
          <div className="flex flex-col sm:flex-row gap-3 order-1 sm:order-2">
            <Button
              variant="secondary"
              iconName="Save"
              iconPosition="left"
              className="hidden sm:flex"
              disabled={isLoading}
            >
              Save Draft
            </Button>
            
            <Button
              variant="default"
              onClick={onSubmit}
              iconName="Calendar"
              iconPosition="left"
              loading={isLoading}
              disabled={!isFormValid || isLoading}
              className="min-w-[200px]"
            >
              {isLoading ? 'Scheduling...' : 'Schedule Pickup'}
            </Button>
          </div>
        </div>
        
        {!isFormValid && (
          <div className="mt-3 flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="AlertCircle" size={16} />
            <span>Please fill in all required fields to continue</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormActions;