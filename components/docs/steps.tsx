import React from 'react';
import { cn } from '@/lib/utils';

interface StepsProps {
  children: React.ReactNode;
  className?: string;
}

interface StepProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Steps: React.FC<StepsProps> = ({ children, className }) => {
  const steps = React.Children.toArray(children);
  
  return (
    <div className={cn("relative", className)}>
      {steps.map((step, index) => (
        <div key={index} className="relative flex gap-4 pb-8 last:pb-0">
          {/* Step Number Circle */}
          <div className="flex-shrink-0 relative">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-semibold text-sm shadow-lg">
              {index + 1}
            </div>
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="absolute top-8 left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent transform -translate-x-1/2" />
            )}
          </div>
          
          {/* Step Content */}
          <div className="flex-1 min-w-0 pt-1">
            {step}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step: React.FC<StepProps> = ({ title, children, className }) => {
  return (
    <div className={cn("space-y-2", className)}>
      <h3 className="font-semibold text-lg text-foreground mb-2">
        {title}
      </h3>
      <div className="text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export { Steps, Step };
