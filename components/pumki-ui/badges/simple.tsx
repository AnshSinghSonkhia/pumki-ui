import * as React from "react";

// Simple utility function to merge classes
const mergeClasses = (...classes: (string | undefined | null | boolean)[]): string => {
  return classes.filter(Boolean).join(" ");
};

// SimpleBadge variant styles
const badgeStyles = {
  base: "inline-flex items-center justify-center rounded-md border px-2 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
  
  variants: {
    default: "border-transparent bg-blue-600 text-white hover:bg-blue-500",
    secondary: "border-transparent bg-gray-50 text-gray-800 hover:bg-gray-100",
    destructive: "border-transparent bg-red-600 text-white hover:bg-red-500",
    outline: "text-white border-gray-300 bg-transparent hover:bg-gray-50",
  },
  
  shiny: "relative overflow-hidden"
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeStyles.variants;
  shiny?: boolean;
  shinySpeed?: number;
  children?: React.ReactNode;
}

function SimpleBadge({
  className,
  variant = "default",
  shiny = false,
  shinySpeed = 5,
  children,
  ...props
}: BadgeProps) {
  const badgeClasses = mergeClasses(
    badgeStyles.base,
    badgeStyles.variants[variant],
    shiny ? badgeStyles.shiny : "",
    className
  );

  const animationDuration = `${shinySpeed}s`;

  // CSS keyframes for shine animation
  const shineKeyframes = `
    @keyframes shine {
      0% { background-position: 100%; }
      100% { background-position: -100%; }
    }
  `;

  return (
    <>
      {/* Inject keyframes if shiny is enabled */}
      {shiny && (
        <style>
          {shineKeyframes}
        </style>
      )}
      
      <div
        className={badgeClasses}
        {...props}
      >
        <span className={shiny ? "relative z-10" : ""}>
          {children}
        </span>

        {/* Shine effect for light mode */}
        {shiny && (
          <span
            className="absolute inset-0 pointer-events-none dark:hidden"
            style={{
              background: "linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)",
              backgroundSize: "200% 100%",
              animation: `shine ${animationDuration} linear infinite`,
              mixBlendMode: "screen",
            }}
          />
        )}

        {/* Shine effect for dark mode */}
        {shiny && (
          <span
            className="absolute inset-0 pointer-events-none hidden dark:block"
            style={{
              background: "linear-gradient(120deg, transparent 40%, rgba(0,0,150,0.25) 50%, transparent 60%)",
              backgroundSize: "200% 100%",
              animation: `shine ${animationDuration} linear infinite`,
              mixBlendMode: "multiply",
            }}
          />
        )}
      </div>
    </>
  );
}

export { SimpleBadge };