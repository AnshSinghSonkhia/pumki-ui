'use client';

import * as React from 'react';
import { useState } from 'react';
import CardSwap, { Card } from '@/components/pumki-ui/CardSwap';

export const CardSwapDemo = () => {
  const [cardDistance] = useState(60);
  const [verticalDistance] = useState(70);
  const [delay] = useState(5000);
  const [skewAmount] = useState(6);
  const [easing] = useState<'elastic' | 'linear'>('elastic');
  const [pauseOnHover] = useState(false);

  return (
    <div className="relative w-full h-[500px] bg-black flex items-center justify-center text-white">
      <div className="flex flex-col lg:flex-row w-full h-[500px] overflow-hidden relative demo-container">
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 pt-8 pb-4 px-4">
          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight pl-0 lg:pl-12">
            Card stacks have never{' '}
            <span className="block lg:inline">looked so good</span>
          </div>
          <div className="text-lg lg:text-xl mb-4 font-normal leading-tight text-gray-400 pl-0 lg:pl-12">
            Just look at it go!
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[400px] relative">
          <CardSwap
            cardDistance={cardDistance}
            verticalDistance={verticalDistance}
            delay={delay}
            skewAmount={skewAmount}
            easing={easing}
            pauseOnHover={pauseOnHover}
          >
            <Card customClass="one">
              <div className="border-b border-white bg-gradient-to-t from-[#271E37] to-[#060606]">
                <span className="flex items-center m-2">
                  <span className="w-3 h-3 rounded-full bg-white inline-block mr-2" />
                  Smooth
                </span>
              </div>
              <div className="relative p-2">
                <video autoPlay loop muted playsInline className="rounded-[15px]">
                  <source src="https://cdn.dribbble.com/userupload/7053861/file/original-7956be57144058795db6bb24875bdab9.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Card>
            <Card customClass="two">
              <div className="border-b border-white bg-gradient-to-t from-[#271E37] to-[#060606]">
                <span className="flex items-center m-2">
                  <span className="w-3 h-3 bg-white inline-block mr-2" style={{ borderRadius: '3px' }} />
                  Reliable
                </span>
              </div>
              <div className="relative p-2">
                <video autoPlay loop muted playsInline className="rounded-[15px]">
                  <source src="https://cdn.dribbble.com/userupload/7078020/file/original-b071e9063d9e3ba86a85a61b9d5a7c42.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Card>
            <Card customClass="three">
              <div className="border-b border-white bg-gradient-to-t from-[#271E37] to-[#060606]">
                <span className="flex items-center m-2">
                  <span className="w-3 h-3 bg-white inline-block mr-2" style={{ borderRadius: '50% 0 50% 0' }} />
                  Customizable
                </span>
              </div>
              <div className="relative p-2">
                <video autoPlay loop muted playsInline className="rounded-[15px]">
                  <source src="https://cdn.dribbble.com/userupload/7098541/file/original-0b063b12ca835421580e6034368ad95a.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
};