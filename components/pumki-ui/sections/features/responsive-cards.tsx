"use client";

import React, { useState } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const HoverCard: React.FC<CardProps> = ({ children, className }) => {
  const [transform, setTransform] = useState("translate3d(0,0,0) scale3d(1,1,1)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse x within card
    const y = e.clientY - rect.top; // mouse y within card

    // Map mouse pos → small translate range
    const moveX = ((x - rect.width / 2) / rect.width) * 20; // max 20px left/right
    const moveY = ((y - rect.height / 2) / rect.height) * 20; // max 20px up/down

    setTransform(`translate3d(${moveX}px, ${moveY}px, 0) scale3d(1.02,1.02,1)`);
  };

  const resetTransform = () => {
    setTransform("translate3d(0,0,0) scale3d(1,1,1)");
  };

  return (
    <div
      className={`${className} transition-transform duration-100 ease-out`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      {children}
    </div>
  );
};

const FeatureCardsSection: React.FC = () => {
  return (
    <div className="mt-6">
      {/* Header */}
      <div className="px-8 py-4">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Elevate Your App Experience
        </h4>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Unlock stunning UI components for React Tailind and accelerate your
          development process.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-10">
        {/* Section 1 */}
        <HoverCard className="mx-auto w-full relative rounded-2xl overflow-hidden col-span-1 lg:col-span-2 h-full bg-gray-800 min-h-[500px] lg:min-h-[300px]">
          <div className="relative h-full sm:mx-0 sm:rounded-2xl overflow-hidden shadow-[0px_10px_32px_rgba(34,42,53,0.12),0px_1px_1px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(34,42,53,0.05),0px_4px_6px_rgba(34,42,53,0.08),0px_24px_108px_rgba(47,48,55,0.1)]">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/977e54231462227.6889baeca0bfd.png"
              alt="Feature section image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </HoverCard>

        {/* Section 2 */}
        <HoverCard className="mx-auto w-full bg-indigo-800 relative rounded-2xl overflow-hidden col-span-1 min-h-[300px]">
          <div className="relative h-full sm:mx-0 sm:rounded-2xl overflow-hidden shadow-[0px_10px_32px_rgba(34,42,53,0.12),0px_1px_1px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(34,42,53,0.05),0px_4px_6px_rgba(34,42,53,0.08),0px_24px_108px_rgba(47,48,55,0.1)]">
            <div className="h-full px-4 py-20 sm:px-10">
              <div
                className="absolute inset-0 w-full h-full scale-[1.2] opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
                style={{
                  backgroundImage:
                    "url('https://github.com/AnshSinghSonkhia/AnshSinghSonkhia/blob/main/pumki-assets/noise.webp?raw=true')",
                  backgroundSize: "30%",
                }}
              />
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Modern Design. Maximum Impact.
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Seamlessly add beautiful, high-performance components to your
                app. Save development time and deliver stunning experiences on
                every device.
              </p>
            </div>
          </div>
        </HoverCard>

        {/* Section 3 */}
        <HoverCard className="mx-auto w-full relative rounded-2xl overflow-hidden col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="relative h-full sm:mx-0 sm:rounded-2xl overflow-hidden shadow-[0px_10px_32px_rgba(34,42,53,0.12),0px_1px_1px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(34,42,53,0.05),0px_4px_6px_rgba(34,42,53,0.08),0px_24px_108px_rgba(47,48,55,0.1)]">
            <div className="h-full px-4 py-20 sm:px-10">
              <div
                className="absolute inset-0 w-full h-full scale-[1.2] opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
                style={{
                  backgroundImage:
                    "url('https://github.com/AnshSinghSonkhia/AnshSinghSonkhia/blob/main/pumki-assets/noise.webp?raw=true')",
                  backgroundSize: "30%",
                }}
              />
              <img
                src="https://github.com/AnshSinghSonkhia/AnshSinghSonkhia/blob/main/pumki-assets/Screenshot%202025-08-16%20124649.png?raw=true"
                alt="Feature section image"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </HoverCard>
      </div>
    </div>
  );
};

export default FeatureCardsSection;
