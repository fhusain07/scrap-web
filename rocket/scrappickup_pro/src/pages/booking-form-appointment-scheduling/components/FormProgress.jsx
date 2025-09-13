import React from 'react';
import Icon from '../../../components/AppIcon';

const FormProgress = ({ currentStep = 2, totalSteps = 3 }) => {
  const steps = [
    { number: 1, title: 'Service Overview', completed: true },
    { number: 2, title: 'Booking Details', completed: false, active: true },
    { number: 3, title: 'Confirmation', completed: false }
  ];

  return (
    <div className="bg-card border-b border-border p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">Book Your Pickup</h1>
          <div className="text-sm text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          {steps?.map((step, index) => (
            <React.Fragment key={step?.number}>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-smooth ${
                    step?.completed
                      ? 'bg-success text-success-foreground'
                      : step?.active
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step?.completed ? (
                    <Icon name="Check" size={16} />
                  ) : (
                    step?.number
                  )}
                </div>
                <span
                  className={`hidden sm:block text-sm font-medium transition-smooth ${
                    step?.active
                      ? 'text-foreground'
                      : step?.completed
                      ? 'text-success' :'text-muted-foreground'
                  }`}
                >
                  {step?.title}
                </span>
              </div>
              
              {index < steps?.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-2 transition-smooth ${
                    step?.completed ? 'bg-success' : 'bg-muted'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormProgress;