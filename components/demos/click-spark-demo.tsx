'use client';
import * as React from 'react';
import ClickSpark from '@/components/landing/ui/ClickSpark'

export const ClickSparkDemo = () => {
  const [active, setActive] = React.useState(false);
 
return (
    <div className="relative w-full h-[400px] bg-black flex items-center justify-center text-white">
    <ClickSpark sparkColor="#ff3366" sparkSize={12} sparkRadius={20} sparkCount={10} duration={500}>
        <div className='flex items-center justify-center h-full'>
            <button className="px-6 py-3 bg-pink-600 rounded-lg hover:bg-pink-500 transition">
                Click Me
            </button>
        </div>
    </ClickSpark>
  </div>
);
};