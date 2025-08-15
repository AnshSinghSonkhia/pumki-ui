import * as React from "react";

// Simple utility function to merge classes (replaces cn)
const mergeClasses = (...classes: (string | undefined | null | boolean)[]): string => {
  return classes.filter(Boolean).join(" ");
};

// SimpleButton variant styles
const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
  
  variants: {
    default: "bg-blue-600 text-white shadow hover:bg-blue-700",
    destructive: "bg-red-600 text-white shadow-sm hover:bg-red-700",
    outline: "border border-gray-300 bg-white shadow-sm hover:bg-gray-50 text-gray-700 hover:text-gray-900",
    secondary: "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200",
    ghost: "hover:bg-gray-100 hover:text-gray-900",
    link: "text-blue-600 underline-offset-4 hover:underline",
    success: "bg-green-600 text-white hover:bg-green-700",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600",
    info: "bg-blue-500 text-white hover:bg-blue-600",
    dark: "bg-gray-800 text-white hover:bg-gray-700",
    light: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    gradient: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90",
    glass: "bg-white bg-opacity-10 backdrop-blur-md text-black border border-white border-opacity-20 hover:bg-opacity-20",
  },
  
  sizes: {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  }
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonStyles.variants;
  size?: keyof typeof buttonStyles.sizes;
  asChild?: boolean;
  children?: React.ReactNode;
}

const SimpleButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "default", 
    size = "default", 
    asChild = false, 
    children,
    type = "button",
    ...props 
  }, ref) => {
    
    const buttonClasses = mergeClasses(
      buttonStyles.base,
      buttonStyles.variants[variant],
      buttonStyles.sizes[size],
      className
    );

    // If asChild is true, we'll render the children directly with the classes
    // This is a simplified version of what Radix Slot does
    if (asChild && React.isValidElement(children)) {
      const childElement = children as React.ReactElement<any>;
      return React.cloneElement(childElement, {
        ...(childElement.props as object),
        ...(props as object),
        className: mergeClasses(buttonClasses, childElement.props.className),
        ref,
      });
    }

    return (
      <button
        className={buttonClasses}
        ref={ref}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);

SimpleButton.displayName = "SimpleButton";

export { SimpleButton };